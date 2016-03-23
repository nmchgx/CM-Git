<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:56
 */
/**
 * Write by SlarQ
 * Data:16/3/23
 * Time:13:57
 */
session_start();
require "sqlHelper.php";
require "jsonHelper.php";

$account=$_POST['account'];
$password=$_POST['password'];
$city=$_POST['city'];
//INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
$sql="INSERT INTO company (account,paaword,city) VALUES ("+account+","+password+","+city+")";

$sqlResult=$mysql->query($sql);
if(!empty($sqlResult)){
    echo 'success';
}else{
    echo'error';
}