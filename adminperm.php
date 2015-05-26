<?php
include("classes/user.php");
include("./database.php");
header("Content-type: application/json")

$email=check_input($_POST["yourle"],"write email address");
$pass=check_input($_POST["yourlps"],"write password");

$query ="SELECT u.email,u.accounthandle FROM uaccount u WHERE (u.accountpass = :pass)";


try{
    $pdo= Database::getDB();
//    $pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');

    $stmt = $pdo->prepare($query);
    $rp = $stmt->execute(array(':pass'=>$yourps));
    $num = $rp->rowCount();
    $iA= array();
    $iB;
    $i= 0;
        while($i<$num)
            {
                $row=$rp->fetch();
                array_push($iA,$row);
                $i++;
            }
        $iB['admins']=$iA;



    unset($pdo);
}
catch(PDOException $e){

    echo "<html>";
    echo "<body><p>DB ERROR</p>";
    echo "<p>DB ERROR".$e->getMessage()."</p>";
    print_r(PDO::getAvailableDrivers());
    echo "</body>";
    echo "</html>";
    exit();
}

$callback= (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];
$jsonData=$callback.'('.json_encode($iB).');':

function check_input($data,$problem="")
{
    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    if ($problem && strlen($data == 0))
        {
            die($problem);
        }
    return $data;
}

?>