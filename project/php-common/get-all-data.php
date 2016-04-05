<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/4/5
 * Time: 下午3:32
 */
session_start();
require "sqlHelper.php";
require "jsonHelper.php";

$sql = "SELECT company.name, data.schedule_id,schedule.year,schedule.month,data.data_id, data.status,data.employment_last,data.employment_now,data.reason,data.type,data.first_reason,data.first_explain,data.second_reason,data.second_explain,data.third_reason,data.third_explain
FROM data,schedule,company WHERE data.schedule_id = schedule.schedule_id AND company.company_id = data.company_id ORDER BY data.time DESC ";
$sqlResult = $mysql->query($sql);
$result = null;
$data = null;

if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
        $data[$row] = $rowVal;
    }

    $result['msg'] = 'success';
    $result['data'] = $data;

    $json = JSON($result);
    echo $json;
}
else{
    echo "{\"msg\": \"error\"}";
}