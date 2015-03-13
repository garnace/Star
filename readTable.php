<?php
//include("classes/user.php");
include("classes/tables.php");
include("./database.php");
header('Content-type: application/json');
//header('Access-Control-Allow-Origin: *');


$sam="STRING";
//database


//$user="mysql";
$user="root";

$password="Spasskydb8";
$database="mysql";
//mysql_connect(localhost,$user,$password);
//@mysql_select_db($database) or die( "Unable to select database");
//$query="INSERT INTO contacts VALUES ('','$first' ,'$last' ,'$phone' ,'$mobile' ,'$fax' ,'$email' ,'$web')";
$query="SELECT * FROM contacts ORDER BY last DESC" ;
$queryT="SELECT * FROM tables ORDER BY tableN DESC" ;
//$queryR="SELECT * ,COUNT (*) FROM tables t JOIN reserves r ON r.tableN = t.tableN WHERE COUNT(SELECT * FROM tables WHERE seatAvail = 'Y') ";



//----------------# replace with id query to count and check filled seating-----
//$queryR="SELECT t.tableN, COUNT(*) AS countAvail FROM tables t LEFT JOIN reserve r ON r.tableN = t.tableN WHERE seatAvail = 'Y' GROUP BY t.tableN";
//---------------------------------------------------------
//$queryR="SELECT t.id,t.tableN, COUNT(*) AS countAvail FROM tables t LEFT JOIN reserve r ON r.tableN = t.tableN WHERE t.seatAvail = 'Y' GROUP BY t.tableN";
//$queryR="SELECT t.id,t.tableN, COUNT(*) AS countAvail,t.seatAvail FROM tables t LEFT JOIN reserve r ON r.tableN = t.tableN WHERE t.seatAvail = 'Y' GROUP BY t.tableN";

//--Simple count of seating left per table
//$queryR="SELECT t.tableN, COUNT(*) AS countAvail FROM tables t LEFT JOIN reserve r ON r.tableN = t.tableN AND r.seatN=t.seatN WHERE t.seatAvail = 'Y' GROUP BY t.tableN";
//--possible join for zero countAvail results--/
//--first left join tables reserves for tables avail including null set
//--then join result with tables on tablenumber
$queryR="SELECT tt.tableN, IFNULL(countAvail,0) 
              FROM (
                    SELECT t.tableN, COUNT(*) AS countAvail 
                         FROM tables t 
                    LEFT JOIN reserve r 
                         ON r.tableN = t.tableN AND 
                            r.seatN=t.seatN 
                         WHERE t.seatAvail = 'Y' 
                         GROUP BY t.tableN
                   ) AS tc 
          RIGHT JOIN tables tt 
             ON tc.tableN=tt.tableN 
          GROUP BY tt.tableN";



try
{


$pdo=Database::getDB();

/******replace with getDB
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
*/


$result=$pdo->query($queryR);
//$result=$pdo->query($queryR);
$num=$result->rowCount();

$iA= array();
$row;
$i=0;



//$row=mysql_fetch_assoc($result);      
//--(table rewult)$result->setFetchMode(PDO::FETCH_CLASS,'Table');
//$result->setFetchMode(PDO::FETCH_CLASS,'Table');
$result->setFetchMode(PDO::FETCH_NUM);
//$result->setFetchMode(PDO::FETCH_BOTH);
$roww= array();
while ( $i<$num)
{
     // $row=mysql_fetch_assoc($result);      
      $row=$result->fetch();
      //    $roww=array('id'=>$row->getId(),'tableN'=>$row->getTableN(),'seatN'=>$row->getSeatN(),'seatAvail'=>$row->getSeatAvail());
/*
      if ($i==0)
          {

              unset($roww['tableN']);

          }
*/
	  array_push($iA,$row );
//      $iA[]=array_values($roww);
      $i++;
}

//$iB=array();
$iB['tables']=$iA;
unset($pdo);
//mysql_close();
}
catch (PDOException $e)
{
	echo "<html>";
	echo "<body>";
	echo "<p>ERROR DB".$e->getMessage()."</p>";
	print_r(PDO::getAvailableDrivers());
	
	echo "</body>";
	echo "</html>";
	exit();
}
//$jsonData=json_encode($iA);

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

//$jsonData=json_encode('('.$callback.$iB.');');
$jsonData=$callback.'('.json_encode($iB).');';
//$jsonData=json_encode($row);
echo $jsonData;


//database
?>

