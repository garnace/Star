<?php
//include("classes/user.php");
include("classes/user.php");
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

try
{
//mysql_query($query);

//$result=mysql_query($query);
//$num=mysql_numrows($result);
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$result=$pdo->query($query);
$num=$result->rowCount();

$iA= array();
$row;
$i=0;



//$row=mysql_fetch_assoc($result);      
$result->setFetchMode(PDO::FETCH_CLASS,'User');
//$result->setFetchMode(PDO::FETCH_BOTH);
$roww= array();
while ( $i<$num)
{
     // $row=mysql_fetch_assoc($result);      
      $row=$result->fetch();
	 $roww=array('id'=>$row->getId(),'first'=>$row->getFirst(),'last'=>$row->getLast(),'phone'=>$row->getPhone(),'mobile'=>$row->getMobile(),'fax'=>$row->getFax(),'email'=>$row->getEmail(),'web'=>$row->getWeb());
	  //array_push($iA,$roww );
		$iA[]=array_values($roww);
      $i++;
}

//$iB=array();
$iB['users']=$iA;
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

