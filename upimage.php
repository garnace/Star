<?php

$tmp_name= $_FILES['file1']['tmp_name'];
$path = getcwd(). DIRECTORY_SEPARATOR.'iup';

$name = $path.DIRECTORY_SEPARATOR.$_FILES['file1']['name'];

$success = move_uploaded_file($tmp_name,$name);

if ($success){
    $mess=$name." has been uploaded.";
}

?>