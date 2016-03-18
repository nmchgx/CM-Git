<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
require "sqlHelper.php";
require "jsonHelper.php";

$company_id = $_POST['company_id'];

$sql = "SELECT data.schedule_id,schedule.year,schedule.month,data.employment_last,data.employment_now,data.reason,data.type,data.first_reason,data.first_explain,data.second_reason,data.second_explain,data.third_reason,data.third_explain
FROM data,schedule WHERE data.company_id = '$company_id'AND data.schedule_id = schedule.schedule_id";
$sqlResult = $mysql->query($sql);
if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
        $result[$row] = $rowVal;
    }
    $json = JSON($result);
    echo $json;
}
else{
    echo "error";
}