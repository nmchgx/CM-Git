<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
session_start();

require "sqlHelper.php";
require "jsonHelper.php";

$account = $_POST['account'];
$password = $_POST['password'];
$type = $_POST['type'];

if($account && $password && $type){
    if($type == 'company'){
        $sql = "SELECT * FROM company WHERE account = '$account' and password = '$password'";
        $result = $mysql->query($sql);

        if($row = $result->fetch_array()) {
            foreach ($row as $key => $value) {
                $_SESSION[$key] = $value;
                $json[$key] = $value;
            }
            echo "{\"msg\": \"success\"}";
        }
        else {
            echo "{\"msg\": \"error\"}";
        }
    }
    else if($type == 'province'){
        $sql = "SELECT * FROM province WHERE account = '$account' AND password = '$password' AND city IS NULL";
        $result = $mysql->query($sql);

        if($row = $result->fetch_array()) {
            foreach ($row as $key => $value) {
                $_SESSION[$key] = $value;
                $json[$key] = $value;
            }
            echo "{\"msg\": \"success\"}";
        }
        else {
            echo "{\"msg\": \"error\"}";
        }

    }
    else if($type == 'city'){
        $sql = "SELECT * FROM province WHERE account = '$account' AND password = '$password' AND city IS NOT NULL";
        $result = $mysql->query($sql);

        if($row = $result->fetch_array()) {
            foreach ($row as $key => $value) {
                $_SESSION[$key] = $value;
                $json[$key] = $value;
            }
            echo "{\"msg\": \"success\"}";
        }
        else {
            echo "{\"msg\": \"error\"}";
        }
    }
    else{
        echo "{\"msg\": \"error\"}";
    }
}
else{
    echo "{\"msg\": \"error\"}";
}