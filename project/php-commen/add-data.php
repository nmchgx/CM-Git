<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
require "sqlHelper.php";
require "jsonHelper.php";

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

$sql = "INSERT INTO data(employment_last,employment_now,reason,type,first_reason,first_explain,second_reason,second_explain,third_reason,third_explain)
VALUES ('$employment_last','$employment_now','$reason','$type','$first_reason','$first_explain','$second_reason','$second_explain','$third_reason','$third_explain')";

$sql_check_reason = "SELECT reason From data";
$result = $mysql->query($sql_check_reason);
if(!empty($result)){
    echo "success";
}
else{
    echo "error";
}