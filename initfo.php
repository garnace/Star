<?php
//$yourname=check_input($_POST["yournamef"],"Write name");
//$email=check_input($_POST["youre"],"write emaail address");
//$likeit=check_input($_POST["likeit"]);
//$comments=check_input($_POST["yourc"],"write a comment");
$unsecure="string";//$_POST["yournamef"];
$sam="STRING";
$iAP= array();
//database


//$user="mysql";
$user="root";
//$password="Spasskydb8";
$password="Spasskydb8080";
$database="mysql";
//mysql_connect(localhost,$user,$password);
//@mysql_select_db($database) or die( "Unable to select database");
//--------------------initpass account------------

$querydP="DROP TABLE IF EXISTS uaccount";

$queryP=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(15) NOT NULL,last varchar(15) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id, email),UNIQUE id (id),KEY id_2 (id))";


//$queryPass=" CREATE TABLE account (accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (email),,UNIQUE id_e (email),KEY id_2 (email),FOREIGN KEY email REFERNCES contacts)";


//$queryPass=" CREATE TABLE account (accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (accounthandle),UNIQUE id_e (accounthandle),KEY id_2 (accounthandle),FOREIGN KEY (email) REFERENCES contacts)";
//$queryPass=" CREATE TABLE account (accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (accounthandle),UNIQUE id_e (accounthandle),KEY id_2 (accounthandle),FOREIGN KEY email (email) REFERENCES contacts(email))";
//$queryPass=" CREATE TABLE account (id int(6) NOT NULL ,accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (accounthandle),UNIQUE id_e (accounthandle),KEY id_2 (accounthandle),FOREIGN KEY (id,email) REFERENCES contacts (id,email))";


$queryPassP=" CREATE TABLE uaccount (id int(6) NOT NULL auto_increment ,accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (email),UNIQUE id_e (accounthandle),KEY id_2 (id))";


//$querysP = "INSERT INTO uaccount VALUES ('','jsoolffe','johnsmith@gowansnet.com',password('smith1234'))";
//$querysP = "INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES ('','jsoolffe','johnsmith@gowansnet.com',password('smith1234'))";
$querysP = "INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES ('','jsoolffe','johnsmith@gowansnet.com','smith1234')";

$queryshowP= "SELECT * FROM uaccount";

//--------end uaccount start contacts---

$queryd="DROP TABLE IF EXISTS contacts";

$query=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(30) NOT NULL,last varchar(30) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id),FOREIGN KEY (email) REFERENCES uaccount(email) ON DELETE CASCADE)";


//$query=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(30) NOT NULL,last varchar(30) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id))";

$querys = "INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES ('','BooffC','Candy','01233 567890','30112 334455','01234 567891','johnsmith@gowansnet.com','http://www.gowansnet.com')";


//mysql_query($queryd);
//mysql_query($query);
//mysql_query($querys);

$querypas="INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES(:cindx,:handle,:email,:pass)";


try {

$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$pdo->query($queryd);
$pdo->query($querydP);


$pdo->query($queryPassP);
$pdo->query($query);

$pdo->exec("INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES (NULL,'jsoolffe','johnsmith@gowansnet.com','smith1234')");
$pdo->exec("INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES (NULL,'BooffC','Candy','01233 567890','30112 334455','01234 567891','johnsmith@gowansnet.com','http://www.gowansnet.com')");


$resultP=$pdo->query($queryshowP);
$numP=$resultP->rowCount();
//$numP = $pdo->numrows($resultP);
$numc = 3;


$vP=0;
$resultP->setFetchMode(PDO::FETCH_NUM);
while ($vP < $numP)
{
//	$rowP = mysql_fetch_assoc($resultP);
	$rowP = $resultP->fetch();
	array_push($iAP,$rowP);	
	$vP++;
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

unset($pdo);

header("Location: http://localhost:8280/StarAdvisor/index.html#user_check");
//header("Location: http://".$_SERVER[HTTP_HOST]."/StarAdvisor/index.html#user_check");
exit();

}
catch(PDOException $e){

	echo "<html>";
	echo "<body><p>DB ERROR".$e->getMessage()."</p>";
    print_r(PDO::getAvailableDrivers());
	echo "</body>";
	echo "</html>";
	exit();
}

//database



//---------end contacts----------


//change to pdo->query

//mysql_query($queryd);
//mysql_query($querydP);


//mysql_query($queryPassP);
//mysql_query($query);

//mysql_query($querysP);
//mysql_query($querys);


//$resultP=mysql_query($queryshowP);
//$numP = mysql_numrows($resultP);
//$numc = 3;
//dont use this -mysql_num_fields($result);


//header("Location:".$_SERVER[HTTP_HOST]."index.html");
//exit();






//-----------------------------------------------



//mysql_close();

//header("Location:".$_SERVER[HTTP_HOST]."index.html");
//exit();

//database
?>

<html>
<body>

Your name is: <?php echo $yourname; ?><br />
Your name is: <?php echo $unsecure; ?> <br />
Your name is: <?php echo $sam; ?> <br />
Your e-mail: <?php echo $email; ?><br />
<br />


<br />
//----------------------------------------


<h5>email,pass TABLE :</h5><br/>





<table cellspacing="2" cellpadding="4" border="1" style="text-align:right;color:rgb(5,5,5);">

<thead>
<tr>
<th>email</th>
<th>handle</th>
<th>passddd</th>

</tr>
</thead>

<tbody>
 <?php 
$jP=0;
$hP=0;
$eP= 0;

//go through data
while ($jP < $numP)
{ 
	$hP=0;
	echo "<tr>";
//	while ($hP< $iAP[$j].length())


//	while ($h< $numc)

	//get and print tuple

	foreach($iAP[$jP] as $eP =>$value)
	{
	
	echo "<td>".$iAP[$jP][$eP]."</td>";


		
	}	
	echo "</tr>";


/*	echo   "<tr><td>".$iA[$j]['email']."</td>";
	echo "<td>".$iA[$j]['accounthandle']."</td>";
	echo "<td>".$iA[$j][2]."</td></tr>";
*/	$jP++;
}
 ?>

</tbody></table>

<br />



<br />


<br />
<br />


<br />

//-----------------------------------------
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
