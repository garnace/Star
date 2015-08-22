<?php   #axtok.php -- retrieve access token and write to file
include('Mail.php');
include('authU.php');
//echo "hi";
$options = array();
//$options['host']='mail.example.com'
//$options['host']='ssl://mail.google.com';
$options['host']='ssl://smtp.gmail.com';
//$options['host']='https://mail.google.com';
    $options['port']=465;
    $options['auth']= true;
$options['username']='farnacee@gmail.com'; 
$options['password']= 'draGon99';

$mailer= Mail::factory('smtp',$options);

$headers['From']='farnacee@gmail.com';
$headers['To']='farnace@rogers.com';
$headers['Subject'] ='Using PEAR use case';
//$headers['Content-type']='text/html';

$rec='farnace@rogers.com';
    $body="My first php use case is attached.";

/*$rez=$mailer->send($rec,$headers,$body);

if (PEAR::isError($rez))
{
    $error = 'Error sending mail:'.$rez->getMessage();
    echo htmlspecialchars($error);
}
*/
//header("Content-type:application/json");

//isset ($_GET["sName"])? $sname = "" : $sname= $_GET["sName"]
$sname = 1;
isset ($_GET["emaild"])? $sname = "" : $sname= $_GET["emaild"];

//$sname="http://astro.cornell.edu/journals-and-newsletters.html";

//$tokName= isset ($_POST["tkName"]) ? $_POST["tkName"]: (isset($_GET["tkName"]) ? $_GET["tkName"] : "");


//$iB = array();
//$iB['users']= array("sent");
//$iB['users']= $SERVER['DOCUMENT_ROOT'];
//$iB['users']= array("bye".$email.$ares.$password.";;");

//if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_SERVER['HTTP_X_REQUEST_WITH']))
//echo $_SERVER['HTTP_HOST'];
//if ( isset($_SERVER['HTTP_X_REQUESTED_WITH']))

//test json 

if ( $sname == 0)
    {
        header('Content-type: application/json');
        $email = "johnsmith@gowansnet.com";
        $password = "smith1234";
        $adm=1;
        $ares='';
        if(($ares=authUser($email,$password)) != "admin")
        {
            $adm=0;


        }

        $callback = (empty($_GET["callback"])) ? 'callback' : $_GET["callback"];


        $jsonData= $callback.'('.json_encode($ares).');';
        echo $jsonData;

    }
    else
    {
//        header('WWW-Authenticate: Basic realm="Admin"');
$email = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

        $adm=1;
        $ares='';
        if(($ares=authUser($email,$password)) != "admin")
        {
            $adm=0;
//        header('WWW-Authenticate: Basic realm="Admin"');
//        header('HTTP/1.0 401 Unauthorized');

        header('WWW-Authenticate: Basic realm="jsoolffe"');
        header('HTTP/1.0 401 Unauthorized');

	echo "<html>";
	echo "<body>";
	echo "<p>ERROR user: ".$email."pass:".$password."type:".print_r($ares)."</p>";
//	echo "<p>ERROR user: ".$email."pass:".$password."typ:</p>";
	print_r(PDO::getAvailableDrivers());
	
	echo "</body>";
	echo "</html>";
	exit();




        }


    }

?>