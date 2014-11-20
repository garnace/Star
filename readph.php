<?php # Script to read csv files from database

/*
 *
 *
 *
 *
 */


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
                        
                    }
            }

    }

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