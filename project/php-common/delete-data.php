<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/4/5
 * Time: 下午3:33
 */
require "sqlHelper.php";
require "jsonHelper.php";
$data_id = $_POST['data_id'];

$sql = "DELETE FROM data WHERE data_id = '$data_id'";
$sqlResult = $mysql->query($sql);

if(!empty($sqlResult)){
    echo "{\"msg\": \"success\"}";
}
else{
    echo "{\"msg\": \"error\"}";
}