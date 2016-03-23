<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:10
 */
require "sqlHelper.php";
require "jsonHelper.php";
$inform_id = $_POST['inform_id'];

$sql = "DELETE FROM inform WHERE inform_id = '$inform_id'";
$sqlResult = $mysql->query($sql);

if(!empty($sqlResult)){
    echo "{\"msg\": \"success\"}";
}
else{
    echo "{\"msg\": \"error\"}";
}