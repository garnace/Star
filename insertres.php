<?php
include("classes/user.php");
/**
 *-----------------insertreg.php 
 *
 *Script to init form data base by creating table reserve


 *
 */




/*try later
$yourname=check_input($_POST["reghan"],"Write name");
$interests=check_input_array($_POST["regCxInterest"],"interests");
$seatnum=check_input_array($_POST["regCxInterest"],"interests");
$tablenum=check_input_array($_POST["regCxInterest"],"interests");
*/

$sam="STRING";


$user="root";
$password="Spasskydb8080";
$database="mysql";
/**************************************/

/**************************************/

//$queryPassP=" CREATE TABLE reserve (id int(6) NOT NULL auto_increment ,email varchar(30) NOT NULL,tableN varchar(30) NOT NULL,seatN varchar(30) NOT NULL,PRIMARY KEY (email),KEY id_2 (id))";
$queryReserve=" CREATE TABLE reserve (id int(6) NOT NULL auto_increment ,email varchar(30) NOT NULL,tableN varchar(30) NOT NULL,seatN varchar(30) NOT NULL,PRIMARY KEY (email),KEY id_2 (id))";
$queryRchk="SELECT * FROM reserve";

//$query="INSERT INTO reserve (id,email,tablnum,seatnum) VALUES (:indx,:tablenum ,:seatnum)";
$queryRI="INSERT INTO reserve (id,email,tableN,seatN,meal) VALUES (:indx,:email,:tablenum ,:seatnum,:meal)";

$queryRUT="UPDATE tables SET seatAvail = 'N' WHERE tableN = :tablenum AND seatN = :seatnum";
//$query="INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES (:indx,:first ,:last ,:phone ,:mobile ,:fax ,:email ,:web)";

//$querypas="INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES(:cindx,:handle,:email,:pass)";

//$queryIR="INSERT INTO reserve ()";
try {
//$uzer= new User(1,$first,$last,$phone,$mobile,$fax,$email,$web);
$pdo= new PDO('mysql:dbname=mysql;host=localhost','root','Spasskydb8080');

$stmtp=$pdo->prepare($queryRI);
$rp= $stmtp->execute(array(':cindx'=>NULL,':email'=>$email,':tablenum'=>$tablen,':seatnum'=>$seatn,':meal'=>$meal));

$stmtpTable=$pdo->prepare($queryRUT);
$rpTable= $stmtpTable->execute(array(':cindx'=>NULL,':email'=>$email,':tablenum'=>$tablen,':seatnum'=>$seatn,':meal'=>$meal));


/*{
	echo "<p>Errorstmt</p>";
}else
{
	echo "<p>stmt</p>";
}

*/





//$stmt=$pdo->prepare($query);


//$r= $stmt->execute(array(':indx'=>NULL,':first'=>$first,':last'=>$last,':phone'=>$phone,':mobile'=>$mobile,':fax'=>$fax,':email'=>$email,':web'=>$web));
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
//		echo "<p>ERROR Obj".$uzer->getPhone()."</p>";
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
    Your interest is: <?php foreach ($_POST["regCxInterest"] as $key=>$value){echo $value;} ?> <br />
    Your interest is: <?php foreach ($interests as $key=>$value){echo $value;} ?> <br />
Your interest is: <?php echo implode(",",$interests); ?> <br />
Your name is: <?php echo $sam; ?> <br />

<br />

Do you like this website? <br />
<br />

Comments:<br />


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
function check_input_array($ray,$problem="")
{
    $outray= array();
    if (count($ray) > 0)
   {
    foreach($ray as $key=>$value)
    {
        $rayp=$value;
        $rayp=trim($rayp);
        $rayp=stripslashes($rayp);
        $rayp=htmlspecialchars($rayp);
        /*    if ($problem && strlen( $key)==0)
            {
                die($problem);
            }
        */
        array_push($outray,$rayp);
    }//foreach array
   }else
        {
            die($problem."hello".implode(",",$ray));
        }
    return $outray;
}


?>
