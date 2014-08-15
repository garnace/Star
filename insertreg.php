<?php
include("classes/user.php");
$yourname=check_input($_POST["reghan"],"Write name");
$interests=check_input_array($_POST["regCxInterest"],"interests");


$sam="STRING";


$user="root";
$password="Spasskydb8080";
$database="mysql";




$query="INSERT INTO contacts (id,first,last,phone,mobile,fax,email,web) VALUES (:indx,:first ,:last ,:phone ,:mobile ,:fax ,:email ,:web)";

$querypas="INSERT INTO uaccount (id,accounthandle,email,accountpass) VALUES(:cindx,:handle,:email,:pass)";



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
