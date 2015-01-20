<?php #initfo.php
/**
 *-----------------initfo.php 
 *
 *Script to init form data base by creating uaccount and contacts
 *uaccount having email and passwords
 *contacts having user contact info
 *
 */

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
$queryd="DROP TABLE IF EXISTS contacts";
$querydP="DROP TABLE IF EXISTS uaccount";
$querydR="DROP TABLE IF EXISTS reserve";
$querydT="DROP TABLE IF EXISTS tables";

$queryPassP=" CREATE TABLE uaccount (id int(6) NOT NULL auto_increment ,accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (email),UNIQUE id_e (accounthandle),KEY id_2 (id))";

$query=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(30) NOT NULL,last varchar(30) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id),FOREIGN KEY (email) REFERENCES uaccount(email) ON DELETE CASCADE)";


$queryReserve=" CREATE TABLE reserve (id int(6) NOT NULL auto_increment ,email varchar(30) NOT NULL,tableN varchar(30) NOT NULL,seatN varchar(30) NOT NULL,meal varchar(30) NOT NULL,PRIMARY KEY (id),FOREIGN KEY (email) REFERENCES uaccount (email),KEY id_2 (id))";

$queryTables="CREATE TABLE tables (id int(6) NOT NULL auto_increment ,tableN varchar(30) NOT NULL,seatN varchar(30) NOT NULL,seatAvail varchar(10) NOT NULL,PRIMARY KEY (id),KEY id_2 (id))";
$queryRchk="SELECT * FROM reserve";

//$query="INSERT INTO reserve (id,email,tablnum,seatnum) VALUES (:indx,:tablenum ,:seatnum)";
$queryRI="INSERT INTO reserve (id,email,tableN,seatN,meal) VALUES (NULL,'$email','$tablenum' ,'$seatnum','$interest')";



$queryshowP= "SELECT * FROM uaccount";

//--------end uaccount start contacts---








try {

$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

//delete contacts first
$pdo->query($queryd);

//delete reserve 
$pdo->query($querydR);

//then delete uaccount
$pdo->query($querydP);

//then delete tables
$pdo->query($querydT);



//create uaccount first
$pdo->query($queryPassP);

//then contacts
$pdo->query($query);
$pdo->query($queryTables);
$pdo->query($queryReserve);
$pdo->exec("INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES (NULL,'jsoolffe','johnsmith@gowansnet.com','smith1234')");
$pdo->exec("INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES (NULL,'BooffC','Candy','01233 567890','30112 334455','01234 567891','johnsmith@gowansnet.com','http://www.gowansnet.com')");
$pdo->exec("INSERT INTO tables (id,tableN,seatN,seatAvail) VALUES (NULL,'TA1','SA1','Y')");
$pdo->exec("INSERT INTO tables (id,tableN,seatN,seatAvail) VALUES (NULL,'TA1','SA2','Y')");
$pdo->exec("INSERT INTO tables (id,tableN,seatN,seatAvail) VALUES (NULL,'TA2','SA1','Y')");
$pdo->exec("INSERT INTO tables (id,tableN,seatN,seatAvail) VALUES (NULL,'TA2','SA2','Y')");
$pdo->exec("INSERT INTO reserve (id,email,tableN,seatN,meal) VALUES (NULL,'johnsmith@gowansnet.com','TA1','SA1','Italian')");
$pdo->exec("UPDATE tables SET seatAvail = 'N' WHERE tableN = 'TA1' AND seatN = 'SA1'");


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






//destroy
unset($pdo);

//set header back to index.html
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
