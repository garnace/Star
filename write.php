<?php

header('Content-type: application/json');
//header('Access-Control-Allow-Origin: *');
$queryp="SELECT contacts.* FROM contacts JOIN uaccount USING (email)  WHERE contacts.email=:email AND uaccount.accountpass=:pass ";
$queryl="LOAD DATA INFILE './con.cvs' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n'";
$querylU="LOAD DATA INFILE './con.cvs' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n'";
//$queryi="SELECT * FROM contacts INTO OUTFILE '/var/www/htdocs/StarAdvisor/con.cvs' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";
$queryi="SELECT * FROM contacts INTO OUTFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/co.txt' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";
$queryiU="SELECT * FROM uaccount INTO OUTFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/ac.txt' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";


$delElement= (empty($_GET["emaild"])) ? '' : $_GET["emaild"];

$sam="STRING";
//database


/*
$user="root";

$password="Spasskydb8080";
$database="mysql";
mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");

$query="SELECT * FROM contacts" ;




*/


//$delquery="DELETE FROM uaccount WHERE (email='$delElement')";




//$result=mysql_query($delquery);
try {

    $pdo=new  PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $stmt=$pdo->prepare($queryi);
    $rp=$stmt->execute();
    $stmt=$pdo->prepare($queryiU);
    $rp=$stmt->execute();
   
$iB=array();
$iB['users']=array(array("message"=>"database saved"));
unset($pdo);
//mysql_close();
}catch (PDOException $e){
    $err="Couldnt save database to file.".$e->getMessage();
    $iB['users']=array(array("message"=>$err));
/*	echo "<html>";
	echo "<body>";
	echo "<p>ERROR DB".$e->getMessage()."</p>";
	print_r(PDO::getAvailableDrivers());
	
	echo "</body>";
	echo "</html>";
	exit();
*/

//    print_r("".$err);
}


$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];


$jsonData=$callback.'('.json_encode($iB).');';

echo $jsonData;


//database
?>

