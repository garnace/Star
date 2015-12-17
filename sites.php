<?php   #sites.php -- retrieve forwarded site names and write to file
header("Content-type:application/json");

/********************************************
     This is the sites module for retrieving http conent based on
     a given array of site names

     This file is included in script.js

     This file expects a post array list of site names from 
     --getCachM(), called from 
     --getSites() or getSitesM() javascript functions.
****************************************** */

//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]

//$sname="http://astro.cornell.edu/journals-and-newsletters.html";
$sname= isset ($_POST["sName"]) ? $_POST["sName"]: (isset($_GET["sName"]) ? $_GET["sName"] : "");

$fname="x.txt";

try{
    $ft="test.txt";
    if (!$fp = @fopen($ft,'w')){
        throw new Exception("Copencould not write");
    }
    if (!@fwrite($fp,'w')){
        throw new Exception("cWriould not write");
    }


    fclose($fp);
    $fp=NULL;
    unset($fp);

}catch(Exception $ee){
    $res=$ee->getMessage();
}

//  begin multiple sname items --proceed to replace slashes for testing.

foreach ($sname as $snameI){
//
//$fnames=substr($name,,);
//$fnames=explode('.',$snames[i]);
//$fnames=explode('.',$sname);

    $fnames=explode('.',$snameI);
    $fcount=0;

    foreach ($fnames as $fn)
    {
        $fn=preg_replace("/\//","%",$fn);
        $fnames[$fcount]=$fn;
        $fcount++;
    }
    $fnames=implode('.',$fnames);

    try{
//$curlp = curl_init($sname);
        $curlp = curl_init($snameI);
//$fp = fopen($sName.".txt",'w');
//if (!$fp = @fopen("ss.txt",'w')){
//if (!$fp = @fopen($fname.".txt",'w')){
//if (!$fp = @fopen($sname.".txt",'w')){
//if (!$fp = @fopen($fnames.".txt",'w')){
        if (!$fp = @fopen($fnames,'w'))
        {

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

    $fp=NULL;
    $curlp=NULL;

    unset($fp);
    unset($curlp);

    }catch (Exception $e)
    {
        $result = 'err'.$SERVER['DOCUMENT_ROOT'].' site:'.$snameI.'::'.$e->getMessage().$fnames;

        break;//break foreach loop
    }

//++end multiple
}
//foreach ($sname as $snameI){
//


$iB = array();
$iB['users']= array($result);
$iB['users']= $SERVER['DOCUMENT_ROOT'];
$iB['users']= array($res);

$callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];

$jsonData= $callback.'('.json_encode($iB).');';
echo $jsonData;
?>