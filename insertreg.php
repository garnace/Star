<?php
include("classes/user.php");
/**
 *-----------------insertreg.php 
 *
 *Script to init form data base by creating table reserve


 *
 */





$yourname=check_input($_POST["reghan"],"Write name");
$interests=check_input_array($_POST["regCxInterest"],"interests");
$seatnum=check_input_array($_POST["regCxInterest"],"interests");
$tablenum=check_input_array($_POST["regCxInterest"],"interests");


$sam="STRING";


$user="root";
$password="Spasskydb8080";
$database="mysql";


$queryPassP=" CREATE TABLE reserve (id int(6) NOT NULL auto_increment ,email varchar(30) NOT NULL,tableN varchar(30) NOT NULL,seatN varchar(30) NOT NULL,PRIMARY KEY (email),KEY id_2 (id))";
$querychk="SELECT * FROM reserve";

//$query="INSERT INTO reserve (id,email,tablnum,seatnum) VALUES (:indx,:tablenum ,:seatnum)";
$query="INSERT INTO reserve (id,email,tableN,seatN,interest) VALUES (NULL,'$email','$tablenum' ,'$seatnum','$interest')";

mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");

$qr=mysql_query($querychk);
$numchk=mysql_numrows($qr);

if($numchk >0)
    {
        $r=mysql_query($query);
    }
else
    {
        $r=mysql_query($queryPassP);
    }
//header("Location:http://localhost:8280/StarAdvisor/index.html#user_check");


//exit();



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
