<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
require "sqlHelper.php";
require "jsonHelper.php";

$account = $_POST['account'];
$password = $_POST['password'];
$type = $_POST['type'];

//echo $account;
//echo $password;
//echo $type;

if($account && $password && $type){
    if($type == 'company'){
        $sql = "SELECT * FROM company WHERE account = '$account' and password = '$password'";
        $result = $mysql->query($sql);

        if($row = $result->fetch_array()) {
            foreach ($row as $key => $value) {
                $_SESSION[$key] = $value;
                $json[$key] = $value;
            }
            echo "success";
        }
        else {
            echo "error";
        }
    }
    else if($type == 'province'){
        $sql = "SELECT * FROM province WHERE account = '$account' and password = '$password'";
        $result = $mysql->query($sql);

        if($row = $result->fetch_array()) {
            foreach ($row as $key => $value) {
                $_SESSION[$key] = $value;
                $json[$key] = $value;
            }
            echo "success";
        }
        else {
            echo "error";
        }

    }
    else{
        echo "error";
    }
}
else{
    echo "error";
}