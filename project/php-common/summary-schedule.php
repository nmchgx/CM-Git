<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/4/5
 * Time: 下午3:11
 */

require "sqlHelper.php";
require "jsonHelper.php";
$schedule_id = $_POST['schedule_id'];

$sql = "UPDATE schedule SET is_report = '1' WHERE schedule_id = '$schedule_id'";
$sqlResult = $mysql->query($sql);

if(!empty($sqlResult)){
    echo "{\"msg\": \"success\"}";
}
else{
    echo "{\"msg\": \"error\"}";
}