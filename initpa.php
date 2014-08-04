<?php

$iA=array();
$ii=0;
//database


//$user="mysql";
$user="root";
$password="Spasskydb8";
$database="mysql";
mysql_connect(localhost,$user,$password);
@mysql_select_db($database) or die( "Unable to select database");

$querydP="DROP TABLE uaccount";

$queryP=" CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(15) NOT NULL,last varchar(15) NOT NULL,phone varchar(20) NOT NULL,mobile varchar(20) NOT NULL,fax varchar(20) NOT NULL,email varchar(30) NOT NULL,web varchar(30) NOT NULL,PRIMARY KEY (id, email),UNIQUE id (id),KEY id_2 (id))";




$queryPassP=" CREATE TABLE uaccount (id int(6) NOT NULL auto_increment ,accounthandle varchar(30) NOT NULL,email varchar(30) NOT NULL,accountpass varchar(30) NOT NULL,PRIMARY KEY (email),UNIQUE id_e (accounthandle),KEY id_2 (id))";


$querysP = "INSERT INTO uaccount VALUES ('','jjihsandle','johnsmith@gowansnet.com',password('smith1234'))";

$queryshowP= "SELECT * FROM uaccount";

mysql_query($querydP);
mysql_query($queryPassP);
mysql_query($querysP);
$result=mysql_query($queryshowP);
$num = mysql_numrows($result);
$numc = 3;//mysql_num_fields($result);


//header("Location:".$_SERVER[HTTP_HOST]."index.html");
//exit();

$v=0;
while ($v < $num)
{
	$row = mysql_fetch_assoc($result);
	array_push($iA,$row);	
	$v++;
}


mysql_close();
//database
?>

<html>
<body>

<h5>email,pass TABLE :</h5><br/>





<table cellspacing="2" cellpadding="2" border="1" style="text-align:right;color:rgb(5,5,5);">

<thead>
<tr>
<th>email</th>
<th>handle</th>
<th>passddd</th>

</tr>
</thead>

<tbody>
 <?php 
$j=0;
$h=0;
$e= 0;

//go through data
while ($j < $num)
{ 
	$h=0;
	echo "<tr>";
//	while ($h< $iA[$j].length())


//	while ($h< $numc)

	//get and print tuple

	foreach($iA[$j] as $e =>$value)
	{
	echo "<td>".$iA[$j][$e]."</td>";


		
	}	
	echo "</tr>";


/*	echo   "<tr><td>".$iA[$j]['email']."</td>";
	echo "<td>".$iA[$j]['accounthandle']."</td>";
	echo "<td>".$iA[$j][2]."</td></tr>";
*/	$j++;
}
 ?>

</tbody></table>

<br />



<br />


<br />
<br />


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
?>
