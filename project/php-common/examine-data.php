<?php
session_start();
/* examine-data
 * created by Dilyar
 * 审批本期数据
 * 功能:审批本期未审批数据
 * 请求方式:POST
 * Date:2016.3.24
 */

require "sqlHelper.php";
require "jsonHelper.php";

$action = $_POST['action'];

$data_id = $_POST['data_id'];
$company_id = $_POST['company_id'];
$schedule_id = $_POST['schedule_id'];
$status = $_POST['status'];
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

$status = null;

switch ($action) {
    case "1":
        $status = "未通过";
        break;
    case "2":
        $status = "重申报";
        break;
    case "3":
        $status = "修改通过";
        break;
    case "4":
        $status = "通过";
        break;
}

if ($status != null) {
    $sql = "INSERT INTO data (company_id,employment_last,employment_now,reason,type,first_reason,first_explain,second_reason,second_explain,third_reason,third_explain,schedule_id,status)
VALUES ('$company_id','$employment_last','$employment_now','$reason','$type','$first_reason','$first_explain','$second_reason','$second_explain','$third_reason','$third_explain','$schedule_id','$status')";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
        echo "{\"msg\": \"success\"}";
    } else {
        echo "{\"msg\": \"error\"}";
    }
}
else{
    echo "{\"msg\": \"error\"}";
}