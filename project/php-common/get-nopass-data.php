<?php
/* get-nopass-data
 * created by Dilyar
 * 查询本期上报但未通过数据
 * 功能:查询本期上报但未通过数据
 * 请求方式:POST
 * Date:2016.3.24
 */
session_start();

require "sqlHelper.php";
require "jsonHelper.php";

$city = $_SESSION['city'];
//echo $city;
$sql = "SELECT company.name,data.data_id, data.time, data.status, data.company_id, data.employment_last, data.employment_now,
data.reason, data.type, data.first_reason, data.first_explain, data.second_reason, data.second_explain,
               data.third_reason, data.third_explain, data.schedule_id FROM data, company WHERE data.company_id+data.time IN (SELECT company_id+max(time) FROM data,schedule WHERE data.schedule_id = schedule.schedule_id AND start < NOW() AND end > NOW() GROUP BY company_id) AND data.company_id = company.company_id AND company.city = '$city' AND status = '已上报' OR '重申报' ORDER BY data.time DESC";
$sqlResult = $mysql->query($sql);

//echo $sql;
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