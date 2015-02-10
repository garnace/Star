<?php
namespace cart
{
//    global $reserves;
//    global $user;
   function add_item ($key,$s,$t)
    {
        if (isset($_SESSION['cartR'][$key]))
       {
                update_item($key,$s,$t);
                return;
                 //                $_SESSION['cartR'][$key]['seatN']=$s;
                //              $_SESSION['cartR'][$key]['tableN']=$t;
       }
        $item = array(
            'email' => $e, 
//            'email' => $user['email'], 

            'tableN' => $t, 
            'seatN' => $s, 
            'meal' => 'entree',
            'resTime' =>  '2015-02-22 17:30:00'
        );

        $_SESSION['cartR'][$key] = $item;
    }



    function update_item ($key,$s,$t)
    {
        if (isset($_SESSION['cartR']))
            {
                $_SESSION['cartR'][$key]['seatN']=$s;
                $_SESSION['cartR'][$key]['tableN']=$t;
            }
    }

}
?>