<?php # Script to read csv files from database

/*
 *@param fName name of file

 *
 *
 *@returns file contents
 */

header('Content-type: application/json');


//$fileNames[] = (isset ($_GET["fName[]"]) && !empty($_GET["fName[]"])) ? $_GET["fName[]"] : null;
//$fileNames = (isset ($_GET["fName"]) && !empty($_GET["fName"])) ? $_GET["fName"] : null;
$fileNames = array('file0'=> 'co.txt','file1' => 'ac.txt'):

$fc=0;

foreach ($fileNames as $fileName){

$fileName = check_infile($fileName,"named file does not exist");
$data= null;
$fileRay=array();
$lineRay=array();
$lCount= 0;

if (file_exists($fileName) && is_file($fileName))
    {
        if($data= file($fileName))
            {
                foreach($data as $line)
                    {
                        //                      $line =stripslashes($line);
//                        $line=preg_replace("/oo/","xx",$line);
  //                      $line=preg_replace("/\"/","",$line);
                        $lineRay = explode(",",$line);
                        $lineRay=array_map('addH',$lineRay);
//                        $fileRay[] = $line;
                        $fileRay[] = $lineRay;
                    }
            }

    }


$jsOut["file".$fc]=$fileRay;
$fc++;
}


$callback= (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];
$jsonData = $callback.'('.json_encode( array("file" => $jsOut["file0"]) ).');';
//echo $fileRay;
echo $jsonData;
//function addH ($value){return "hi".$value;}
function addH ($value){return preg_replace("/\"/","",$value);}


function check_infile($fn,$problem)
{
    $fn = trim($fn);
    $fn = stripslashes($fn);
    $fn = htmlspecialchars($fn);

    if ($problem && strlen($fn) == 0)
        {
            die($problem);
        }
    return $fn;
}

?>