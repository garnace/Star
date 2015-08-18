<?php   #axtok.php -- retrieve access token and write to file
include('Mail.php');

$options = array();
//$options['host']='mail.example.com'
$options['host']='ssl://mail.google.com'
    $options['port']=465;
    $options['auth']= true;
$options['username']='farnacee@gmail.com'; 
$options['password']= 'draGon99';

$mailer= Mail::factory('smtp',$options);

$headers['From']='farnacee@gmail.com';
$headers['To']='farnace@rogers.com';
$headers['Subject'] ='Using PEAR use case';
//$headers['Content-type']='text/html';

$rec='farnace@rogers.com'
    $body="My first php use case is attached.";

$rez=$mailer->send($rec,$headers,$body);

if (PEAR::isError($rez)){
    $error = 'Error sending mail:'.$rez->getMessage();
    echo htmlspecialchars($error);
}

//header("Content-type:application/json");

//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]

//$sname="http://astro.cornell.edu/journals-and-newsletters.html";

//$tokName= isset ($_POST["tkName"]) ? $_POST["tkName"]: (isset($_GET["tkName"]) ? $_GET["tkName"] : "");


$iB = array();
$iB['users']= array("hi");
$iB['users']= $SERVER['DOCUMENT_ROOT'];
$iB['users']= array("bye");

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

$jsonData= $callback.'('.json_encode($iB).');';
echo $jsonData;
?>