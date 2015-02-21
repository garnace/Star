<?php   #sites.php -- retrieve forwarded site names and write to file
header("Content-type:application/json");

//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]
//$sname = (isset ($_POST["sName"])) ? $_POST["sName"]) : ((isset $_GET["sName"]) ? $_GET["sName"] : "");
//$sname="http://astro.cornell.edu/journals-and-newsletters.html";
$sname= isset ($_POST["sName"]) ? $_POST["sName"]: (isset($_GET["sName"]) ? $_GET["sName"] : "");
//$sname="http://www.strudel.org.uk/spacebuzz/blogs.html";
$fname="tt.txt";
try{
$curlp = curl_init($sname);
//$fp = fopen($sName.".txt",'w');
//if (!$fp = @fopen("ss.txt",'w')){
//if (!$fp = @fopen($fname.".txt",'w')){
if (!$fp = @fopen($sname.".txt",'w')){
    throw new Exception("could not write");
}

curl_setopt($curlp,CURLOPT_FAILONERROR,1);
curl_setopt($curlp,CURLOPT_FOLLOWLOCATION,1);
curl_setopt($curlp,CURLOPT_RETURNTRANSFER,1);
curl_setopt($curlp,CURLOPT_TIMEOUT,5);
curl_setopt($curlp, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.2 (KHTML, like Gecko) Chrome/5.0.342.3 Safari/533.2');


curl_setopt($curlp,CURLOPT_FILE,$fp);     


$result = curl_exec($curlp);


curl_close($curlp);
fclose($fp);
}catch (Exception $e){
    $result = $e->getMessage();
    }

$iB = array();
$iB['users']= array($result);

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

$jsonData= $callback.'('.json_encode($iB).');';
echo $jsonData;
?>