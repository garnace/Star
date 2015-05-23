<?php
    if (isset($_POST['action']))
        {
            $action=$_POST['action'];
//            if ($action)
        }else if (isset($_GET['action']))
        {
            $action=$_GET['action'];
        } else
        {
            $action='shwres';
        }
    //(isset($_POST['action'])) ? $action=$_POST['action']: $action=$_p
/*    if (($_SERVER[REQUEST_METHOD]=="POST") && ($action == "showres"))
        {

            header("Location:index.php#imagesp");
        }
*/
     if ($action=="showres")
         {
//             header("Location:index.php#tabs-2?action=showres");
             header("Cache-Control: no-cache,must-revalidate");
             header("Expires: Sat, 26 July 1997, 05:00:00 GMT");
             header("Location:index.php?action=showres#chkRes");
         }
?>