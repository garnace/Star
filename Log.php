<?php

include("classes/user.php");
$uzer=null;

//$likeit=check_input($_POST["likeit"]);
//$comments=check_input($_POST["yourcom"],"write a comment");
//$queryp="SELECT * FROM contacts";
//$queryp="SELECT (id,first,last,phone,mobile,fax,email,web) FROM contacts WHERE email=:email";
//$queryp="SELECT contacts.* FROM contacts WHERE email=:email";
//$queryp="SELECT contacts.* FROM contacts,uaccount WHERE contacts.email=:email AND uaccount.accountpass=:pass AND contacts.email=uaccount.email";
//$queryp="SELECT contacts.* FROM contacts JOIN uaccount ON (contacts.email = uaccount.email)  WHERE contacts.email=:email AND uaccount.accountpass=:pass ";
$queryp="SELECT contacts.* FROM contacts JOIN uaccount USING (email)  WHERE contacts.email=:email AND uaccount.accountpass=:pass ";
//$queryp="SELECT contacts.* FROM contacts WHERE contacts.email=:email AND uaccount.accountpass=:pass";
//$handle=$email;
//$pass=$last;

//+++++++++++++++++++++++++++++++++++
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
if (!isset($_POST["youre"]))
{
	$email=null;
}else
{
$email=check_input($_POST["youre"],"write emaail address");
}	
if (!isset($_POST["yourpw"]))
{
	$pass=null;
}else
{

$pass=check_input($_POST["yourpw"]);
}	
	
try {

$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


$stmtp=$pdo->prepare($queryp);
$rp= $stmtp->execute(array(':email'=>$email,':pass'=>$pass));
//$rp= $stmtp->execute(array(':email'=>$email));
//$rp=$pdo->query($queryp);
//$resultP=$pdo->query($querys);

//$stmtp->setFetchMode(PDO::FETCH_CLASS,'User');
//$numP = $pdo->numrows($resultP);
	//$numP=$rp->rowCount();
$numc = 3;


$vP=0;

//while ($vP < $numP)
if ($rp)
{
$stmtp->setFetchMode(PDO::FETCH_CLASS,'User');
//	$rowP = mysql_fetch_assoc($resultP);
	$rowP = $stmtp->fetch();
	$uzer= new User();
	$uzer=$rowP;
	//$uzer->setFirst($rowP->getFirst());
	//array_push($iAP,$rowP);	
	//$vP++;
}



//prep $stmtp=$pdo->prepare($querypas);
//prep $rp= $stmtp->execute(array(':cindx'=>'',':handle'=>$handle,':email'=>$email,':pass'=>$pass));
/*{
	echo "<p>Errorstmt</p>";
}else
{
	echo "<p>stmt</p>";
}

*/





//prep $stmt=$pdo->prepare($query);


//prep $r= $stmt->execute(array(':indx'=>'',':first'=>$first,':last'=>$last,':phone'=>$phone,':mobile'=>$mobile,':fax'=>$fax,':email'=>$email,':web'=>$web));
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
include("Log.html");
unset($pdo);

//header("Location: http://localhost:8280/StarAdvisor/index.html#user_check");
//header("Location: http://".$_SERVER[HTTP_HOST]."/StarAdvisor/index.html#user_check");
//exit();
//include("Log.html");
}
catch(PDOException $e){

	echo "<html>";
	echo "<body><p>DB ERROR".$e->getMessage()."</p>";
    print_r(PDO::getAvailableDrivers());
	echo "</body>";
	echo "</html>";
	exit();
}
}//request method 
else
{
include("Log.html");	
}

//+++++++++++++++++++++++++++++++++++
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