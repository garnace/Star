<?php

include("classes/user.php");
$uzer=null;

//$likeit=check_input($_POST["likeit"]);
//$comments=check_input($_POST["yourcom"],"write a comment");
//$queryp="SELECT * FROM contacts";
//$queryp="SELECT (id,first,last,phone,mobile,fax,email,web) FROM contacts WHERE email=:email";
//$queryp="SELECT contacts.* FROM contacts WHERE email=:email";
//$queryp="SELECT contacts.* FROM contacts,uaccount WHERE contacts.email=:email AND uaccount.accountpass=:pass AND contacts.email=uaccount.email";
//$queryp="SELECT contacts.* FROM contacts JOIN uaccount ON (contacts.email = uaccount.email)  WHERE contacts.email=:email AND uaccount.accountpass=:pass ";
$queryp="SELECT contacts.* FROM contacts JOIN uaccount USING (email)  WHERE contacts.email=:email AND uaccount.accountpass=:pass ";
$queryl="LOAD DATA INFILE './con.cvs' INTO TABLE contacts FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n'";
//$queryi="SELECT * FROM contacts INTO OUTFILE '/var/www/htdocs/StarAdvisor/con.cvs' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";
$queryi="SELECT * FROM contacts INTO OUTFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/con.cvs' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";
$queryiU="SELECT * FROM uaccount INTO OUTFILE '".$_SERVER['DOCUMENT_ROOT']."/StarAdvisor/ac.cvs' FIELDS ENCLOSED BY '\"' TERMINATED BY ',' ESCAPED BY '\"' LINES TERMINATED BY '\r\n'";

//$queryp="SELECT contacts.* FROM contacts WHERE contacts.email=:email AND uaccount.accountpass=:pass";
//$handle=$email;
//$pass=$last;

//+++++++++++++++++++++++++++++++++++
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
if (!isset($_POST["youre"]))
{
	$email=null;
}else
{
$email=check_input($_POST["youre"],"write emaail address");
}	
if (!isset($_POST["yourpw"]))
{
	$pass=null;
}else
{

$pass=check_input($_POST["yourpw"]);
}	
	
try {

$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


//$stmtp=$pdo->prepare($queryp);
$stmtp=$pdo->prepare($queryi);
//$rp= $stmtp->execute(array(':email'=>$email,':pass'=>$pass));
$rp= $stmtp->execute();

$stmtp=$pdo->prepare($queryiU);
//$rp= $stmtp->execute(array(':email'=>$email,':pass'=>$pass));
$rp= $stmtp->execute();


$numc = 3;
$vP=0;

/*if ($rp)
{
$stmtp->setFetchMode(PDO::FETCH_CLASS,'User');

	$rowP = $stmtp->fetch();
	$uzer= new User();
	$uzer=$rowP;

}
*/

include("test.html");
unset($pdo);





}
catch(PDOException $e){

	echo "<html>";
	echo "<body><p>DB ERROR".$e->getMessage()."</p>";
    print_r(PDO::getAvailableDrivers());
	echo "</body>";
	echo "</html>";
	exit();
}
}//request method 
else
{
include("test.html");	
}

//+++++++++++++++++++++++++++++++++++
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        die($problem);
    }
    return $data;
}

?>