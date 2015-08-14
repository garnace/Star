<?php   #axtok.php -- retrieve access token and write to file
header("Content-type:application/json");

//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]

//$sname="http://astro.cornell.edu/journals-and-newsletters.html";

$sname= isset ($_POST["tkName"]) ? $_POST["tkName"]: (isset($_GET["tkName"]) ? $_GET["tkName"] : "");

$fname="x.txt";
try{
    $ft="axtok.txt";
if (!$fp = @fopen($ft,'w')){
    throw new Exception("Copencould not write");
}
if (!@fwrite($fp,$tokName.'\n')){
    throw new Exception("cWriould not write");
}


fclose($fp);
$fp=NULL;
unset($fp);


}catch(Exception $ee){
    $res=$ee->getMessage();
}


$iB = array();
$iB['users']= array("hi");
$iB['users']= $SERVER['DOCUMENT_ROOT'];
$iB['users']= array("bye");

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

$jsonData= $callback.'('.json_encode($iB).');';
echo $jsonData;
?>