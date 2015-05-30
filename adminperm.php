<?php
include("classes/user.php");
include("./database.php");
header('Content-type: application/json');



    $email=isset($_GET["emaild"]) ? check_input($_GET["emaild"],"write email adress".$_GET["emaild"]): (isset($_POST["yourle"]) ? check_input($_POST["yourle"],"write ema address") : "");
$pass=isset($_GET["pass"]) ? check_input($_GET["pass"],"write email") : (isset($_POST["yourlps"]) ? check_input($_POST["yourlps"],"write password") : "");

$query ="SELECT u.email,u.accounthandle FROM uaccount u WHERE (u.accountpass = :pass)";


try{
//    $pdo= Database::getDB();
//    $pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
    echo 'hi'.$pass.$email;
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
    echo 'li';
    $stmt = $pdo->prepare($query);
    echo 'li';
//    $rp = $stmt->execute(array(':pass'=>$pass));
    $success = $stmt->execute(array(':pass'=>$pass));
    echo 'li';
//    $num = $rp->rowCount();

    $num = $stmt->rowCount();
    echo 'li';
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
                $iB['admins']=array(array("message"=>"Error User cred"));
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
//return $jsonData;
echo $jsonData;


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