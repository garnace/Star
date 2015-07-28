<?php   #up.php

$tmp_name=$_FILES['file1']['tmp_name'];
$path=getcwd().DIRECTORY_SEPARATOR.'imag';
$name=$path.DIRECTORY_SEPARATOR.$_FILES['file1']['name'];
try
{
$success=move_uploaded_file($tmp_name,$name);
}catch( Exception $e){
    $umessage='err'.$e->getMessage();
if  ($success)
    {
        $umessage=$name.' uploaded';
    }
 }
echo 'result:'.$umessage.$success.' directory:'.$name.'from:'.$tmp_name;

?>