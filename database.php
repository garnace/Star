<?php
class Database{

    private static $dsn = "mysql:host=localhost;dbname=mysql";
    private static $username = "root";
    private static $password = "Spasskydb8080";
    private static $db ;

    private function __construct(){}
//    private function __destruct(){ unset(self::$db);}
    public static function getDB()
    {
        if (!isset(self::$db))
        {
                try{
                    self::$db = new PDO(self::$dsn,self::$username,self::$password);
                    self::$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                }catch (PDOException $e){
                    $error_message = $e->getMessage();
                    //include(./errordb.php);
                    exit();
                }
                
        }
        return self::$db;
    }

}
?>