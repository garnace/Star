<?php
//include("classes/user.php");
include("classes/tables.php");
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
$queryR="SELECT t.tableN, COUNT(*) AS countAvail FROM tables t LEFT JOIN reserve r ON r.tableN = t.tableN WHERE seatAvail = 'Y' GROUP BY tableN";
try
{
//mysql_query($query);

//$result=mysql_query($query);
//$num=mysql_numrows($result);
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
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

