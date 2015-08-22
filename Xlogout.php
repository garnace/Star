<?php
session_start();
header("Content-type:application/json");
$iD=array();

if (isset ($_SESSION["user"])) 
    {
        unset($_SESSION["user"]);
        $_SESSION["user"]=array();
        $_SESSION[]=array();

        setcookie(session_name(),false,time()-3600);
        session_destroy();
    }

$iD["sessions"]=array(array("message"=>"User logged out"));
$callback= ( empty($_GET["callback"]) ) ? "callback" : $_GET["callback"] ;
$jsonData = $callback.'('.json_encode($iD).');';
echo $jsonData;


//$_SESSION["user"]["email"]=$iB["admins"][0][0];
//$_SESSION["user"]["name"]=$iB["admins"][0][1];
//$_SESSION["user"]["type"]="admin";
//session_write_close();



?>