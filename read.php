<?php

header('Content-type: application/json');

//--------------------------windows read

//$queryl="LOAD DATA INFILE 'C:/StarGit/Star/co.txt' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";
//$querylU="LOAD DATA INFILE 'C:/StarGit/Star/ac.txt' INTO TABLE uaccount FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";

//--------------------------linux read
//$queryl="LOAD DATA INFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/co.txt' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";
//$querylU="LOAD DATA INFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/ac.txt' INTO TABLE uaccount FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";

//--------------------------does windows and linux read
$linQueryl="LOAD DATA INFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/co.txt' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";
$linQuerylU="LOAD DATA INFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/ac.txt' INTO TABLE uaccount FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";
$winQueryl="LOAD DATA INFILE 'C:/StarGit/Star/co.txt' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";
$winQuerylU="LOAD DATA INFILE 'C:/StarGit/Star/ac.txt' INTO TABLE uaccount FIELDS TERMINATED BY ',' ENCLOSED BY '\"' ESCAPED BY '\"'  LINES TERMINATED BY '\r\n'";



$querydP="DROP TABLE IF EXISTS uaccount";

$queryP=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(15) NOT NULL,last varchar(15) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id, email),UNIQUE id (id),KEY id_2 (id))";


$queryPassP=" CREATE TABLE uaccount (id int(6) NOT NULL auto_increment ,accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (email),UNIQUE id_e (accounthandle),KEY id_2 (id))";


$queryshowP= "SELECT * FROM uaccount";

//--------end uaccount start contacts---

$queryd="DROP TABLE IF EXISTS contacts";

$query=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(30) NOT NULL,last varchar(30) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id),FOREIGN KEY (email) REFERENCES uaccount(email) ON DELETE CASCADE)";


$delElement= (empty($_GET["emaild"])) ? '' : $_GET["emaild"];

$sam="STRING";
//database


//$user="mysql";
/*$user="root";

$password="Spasskydb8080";
$database="mysql";
mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");

$query="SELECT * FROM contacts" ;



$result=mysql_query($delquery);
*/
try{
    $pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $pdo->query($queryd);
    $pdo->query($querydP);


    $pdo->query($queryPassP);
    $pdo->query($query);

    //check if on windows
    if (strtoupper(substr(PHP_OS,0,3)) === 'WIN')
        {
            $stmtP=$pdo->prepare($winQuerylU);
            $rpP=$stmtP->execute();
            $stmt=$pdo->prepare($winQqueryl);
            $rp=$stmt->execute();
        }
        else{
            $stmtP=$pdo->prepare($linQuerylU);
            $rpP=$stmtP->execute();
            $stmt=$pdo->prepare($linQueryl);
            $rp=$stmt->execute();
        }

$iB=array();
$iB['users']=array(array("message"=>"DataBase loaded"));
//$iB['users']=$iA;


unset ($pdo);
//mysql_close();


}catch(PDOException $e)
{
    $err="Couldn't load DB".$e->getMessage();
    $iB['users']=(array(array('message'=>$err)));


}
//$jsonData=json_encode($iA);

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

//$jsonData=json_encode('('.$callback.$iB.');');
$jsonData=$callback.'('.json_encode($iB).');';
//$jsonData=json_encode($row);
echo $jsonData;


//database
?>

