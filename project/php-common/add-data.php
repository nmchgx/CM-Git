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

$company_id = $_SESSION['company_id'];

$employment_last = $_POST['employment_last'];
$employment_now = $_POST['employment_now'];
$reason = $_POST['reason'];
$type = $_POST['type'];
$first_reason = $_POST['first_reason'];
$first_explain = $_POST['first_explain'];
$second_reason = $_POST['second_reason'];
$second_explain = $_POST['second_explain'];
$third_reason = $_POST['third_reason'];
$third_explain = $_POST['third_explain'];
$schedule_id = $_POST['schedule_id'];
$status = $_POST['status'];

$sql = "INSERT INTO data (company_id,employment_last,employment_now,reason,type,first_reason,first_explain,second_reason,second_explain,third_reason,third_explain,schedule_id,status)
VALUES ('$company_id','$employment_last','$employment_now','$reason','$type','$first_reason','$first_explain','$second_reason','$second_explain','$third_reason','$third_explain','$schedule_id','$status')";
//echo $sql;
$result = $mysql->query($sql);

if(!empty($result)){
    echo "{\"msg\": \"success\"}";
}
else{
    echo "{\"msg\": \"error\"}";
}