<?php
$yourname=check_input($_POST["yourname"],"Write name");
$email=check_input($_POST["email"],"write emaail address");
$likeit=check_input($_POST["likeit"]);
$comments=check_input($_POST["comments"],"write a comment");
$unsecure=$_POST["yourname"];
$sam="STRING";
//database


//$user="mysql";
$user="root";
$password="Spasskydb8";
$database="mysql";
mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");
$queryd="DROP TABLE contacts";
$query=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(15) NOT NULL,last varchar(15) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id))";
mysql_query($queryd);
mysql_query($query);
mysql_close();




//database
?>

<html>
<body>

Your name is: <?php echo $yourname; ?><br />
Your name is: <?php echo $unsecure; ?> <br />
Your name is: <?php echo $sam; ?> <br />
Your e-mail: <?php echo $email; ?><br />
<br />

Do you like this website? <?php echo $likeit; ?><br />
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
