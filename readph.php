<?php # Script to read csv files from database

/*
 *@param fName name of file

 *
 *
 *@returns file contents
 */

header('Content-type: application/json');
$fileName = (isset ($_SERVER["fName"]) && !empty($_SERVER["fName"])) ? $_SERVER["fName"] : null;
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
                        $lineRay = explode(",",$line);
                        $fileRay[] = $lineRay;
                    }
            }

    }
$callback= (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];
$jsonData = $callback.'('.json_encode($fileRay).');';
//echo $fileRay;
echo $jsonData

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