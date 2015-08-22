<?php
session_start();
include("classes/user.php");
include("./database.php");



//$pass=isset($_GET["pass"]) ? check_input($_GET["pass"],"write email") : (isset($_POST["yourlps"]) ? check_input($_POST["yourlps"],"write password") : "");

//$query ="SELECT u.email,u.accounthandle FROM uaccount u WHERE (u.accountpass = :pass)";


function authUser($email,$pass){


$query ="SELECT * FROM uaccount u WHERE (u.accountpass = :pass AND u.email=:email)";

try{
    $pdo= Database::getDB();


//$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
    //  echo 'li';
    $stmt = $pdo->prepare($query);
//    echo 'li';
//    $rp = $stmt->execute(array(':pass'=>$pass));
//    $success = $stmt->execute(array(':pass'=>$pass));
    $success = $stmt->execute(array(':pass'=>$pass , ':email'=>$email));



    $num = $stmt->rowCount();
    //  echo 'li';
    $iA= array();
    $iB;
    $i= 0;
    $stmt->setFetchMode(PDO::FETCH_NUM);
        while($i<$num)
            {
//                $row=$rp->fetch();
                $row=$stmt->fetch();
                array_push($iA,$row);
                $i++;
            }

        if ($num == 0)
            {
                $iB['admins']=array(array("message"=>"Error User credential"));
            }else
            {
                $iB['admins']=$iA;
            }

//        $iB['admins']=$iA;



    unset($pdo);
}
catch(PDOException $e){

//      $err="Couldn't load DB".$e->getMessage();
    //  $iB['admins']=(array(array('message'=>$err)));

  echo "<html>";
    echo "<body><p>DB ERROR</p>";
    echo "<p>DB ERROR".$e->getMessage()."</p>";
    print_r(PDO::getAvailableDrivers());
    echo "</body>";
    echo "</html>";
    exit();

}

$callback= (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];
$jsonData=$callback.'('.json_encode($iB).');';

//$_SESSION["user"]=$iB["admins"][0][1];
if (!isset ($_SESSION["user"])) 
    {
        $_SESSION["user"]=array();
    }
$_SESSION["user"]["email"]=$iB["admins"][0][0];
$_SESSION["user"]["name"]=$iB["admins"][0][1];
//$_SESSION["user"]["type"]="admin";
$_SESSION["user"]["type"]=$iB["admins"][0][4];

//return ($iB["admins"][0][4]);
return ($iB);
//return (array('1','2','3'));
//session_write_close();
}






//header("Expires: Sat, 26 July 1997, 05:00:00 GMT");
//header("Pragma: no-cache");
//header("Cache-Control: no-cache,must-revalidate");

//header("Location:index.php?action=showres#chkRes");

//exit();

function check_input($data,$problem="")
{
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
        {
            die($data.$problem);
        }
    return $data;
}

?>