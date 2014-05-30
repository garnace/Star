<?php
include("classes/user.php");
$yourname=check_input($_POST["yournamef"],"Write name");
$first=check_input($_POST["yournamef"],"name");
$last=check_input($_POST["yournamel"],"name");
$phone=check_input($_POST["yourp"],"write phone");
$mobile=check_input($_POST["yourmp"],"mobile");
$fax=check_input($_POST["yourx"],"fdiiidax");
//$web=check_input($_POST["yourws"],"website");
$web="website";
$email=check_input($_POST["youre"],"write emaail address");
//$likeit=check_input($_POST["likeit"]);
//$comments=check_input($_POST["yourcom"],"write a comment");
$unsecure=$_POST["yournamef"];
$sam="STRING";
//database
$handle=$email;
//$pass=$last;
$pass=check_input($_POST["yourpw"]);

//$user="mysql";
$user="root";
$password="Spasskydb8080";
$database="mysql";
//mysql_connect(localhost,$user,$password);
//@mysql_select_db($database) or die( "Unable to select database");

//$query="INSERT INTO contacts VALUES ('','$first' ,'$last' ,'$phone' ,'$mobile' ,'$fax' ,'$email' ,'$web')";

//$querypas="INSERT INTO uaccount VALUES('','$handle','$email',password('$pass'))";


$query="INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES (:indx,:first ,:last ,:phone ,:mobile ,:fax ,:email ,:web)";

$querypas="INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES(:cindx,:handle,:email,:pass)";


try {
//$uzer= new User(1,$first,$last,$phone,$mobile,$fax,$email,$web);
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');

$stmtp=$pdo->prepare($querypas);
$rp= $stmtp->execute(array(':cindx'=>NULL,':handle'=>$handle,':email'=>$email,':pass'=>$pass));
/*{
	echo "<p>Errorstmt</p>";
}else
{
	echo "<p>stmt</p>";
}

*/





$stmt=$pdo->prepare($query);


$r= $stmt->execute(array(':indx'=>NULL,':first'=>$first,':last'=>$last,':phone'=>$phone,':mobile'=>$mobile,':fax'=>$fax,':email'=>$email,':web'=>$web));
/*{
	echo "<p>Errorstmt</p>";
}else
{
	echo "<p>stmt</p>";
}
*/


//mysql_query($querypas);
//mysql_query($query);

//mysql_close();

unset($pdo);

header("Location:http://localhost:8280/StarAdvisor/index.html#user_check");

//header("Location: http://".$_SERVER[HTTP_HOST]."/StarAdvisor/index.html#user_check");
exit();

}
catch(PDOException $e){

	echo "<html>";
	echo "<body><p>DB ERROR</p>";
	echo "<p>ERROR DB".$e->getMessage()."</p>";
		echo "<p>ERROR Obj".$uzer->getPhone()."</p>";
	print_r(PDO::getAvailableDrivers());
	
	echo "</body>";
	echo "</html>";
	exit();
}

//database
?>

<html>
<body>

host: <?php echo "host:".$_SERVER["HTTP_HOST"].";"; ?><br/>
Your name is: <?php echo $yourname; ?><br />
Your name is: <?php echo $unsecure; ?> <br />
Your name is: <?php echo $sam; ?> <br />
Your e-mail: <?php echo $email; ?><br />
<br />

Do you like this website? <br />
<br />

Comments:<br />
<?php echo $comments; ?>

</body>
</html>

<?php
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        die($problem);
    }
    return $data;
}
?>
