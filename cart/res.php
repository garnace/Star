<?php
namespace reserveCart
{
//    global $reserves;
//    global $user;
//    based on Murach p.369 cart examples

/* function:   add_reserve
 *
 *  method to update reserve variables for email key
 *
 *  param string $key,$s,$t
 */

    function add_reserve ($key,$s,$table,$time,$m)
    {
        if (isset($_SESSION['cartR'][$key]))
       {
            update_item($key,$s,$table,$time);
            return;
                 //                $_SESSION['cartR'][$key]['seatN']=$s;
                //              $_SESSION['cartR'][$key]['tableN']=$t;
       }
        $item = array(
            'email' => $key, 
//            'email' => $user['email'], 

            'tableN' => $table, 
            'seatN' => $s, 
            'meal' => 'entree',
            'resTime' =>  '2015-02-22 17:30:00'
        );

        $_SESSION['cartR'][$key] = $item;
    }


/*Update function:
 *
 *  method to update reserve variables for email key
 *
 *  param string $key,$s,$t
 */
    function update_reserve ($key,$s,$table,$time,$m)
    {
        if (isset($_SESSION['cartR']))
            {
                $_SESSION['cartR'][$key]['seatN']=$s;
                $_SESSION['cartR'][$key]['tableN']=$table;
                $_SESSION['cartR'][$key]['resTime']=$time;

            }
    }

}
?>