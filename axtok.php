<?php   #axtok.php -- retrieve access token and write to file
header("Content-type:application/json");
$iB = array();
//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]

//$sname="http://astro.cornell.edu/journals-and-newsletters.html";

$tokName= isset ($_POST["tkName"]) ? $_POST["tkName"]: (isset($_GET["tkName"]) ? $_GET["tkName"] : "");
$res="success";

try{




$ft="axtok.txt";
if (!$fp = @fopen($ft,'w')){
    throw new Exception("opencould not write");
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



//$iB['users']= array("hi");
//$iB['users']=array(array("message"=>"Error write tok:".$res));
$iB['users']=array(array("message" => "Error write tok:"));

//$iB['users']= $SERVER['DOCUMENT_ROOT'];
//$iB['users']= array("bye");

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

$jsonData= $callback.'('.json_encode($iB).');';
echo $jsonData;
?>