<?php
/* get-nopass-data
 * created by Dilyar
 * 查询本期上报但未通过数据
 * 功能:查询本期上报但未通过数据
 * 请求方式:POST
 * Date:2016.3.24
 */
require "sqlHelper.php";
require "jsonHelper.php";

$sql = "SELECT data_id, data.time, status, company_id, employment_last, employment_now,
               reason, data.type, first_reason, first_explain, second_reason, second_explain,
               third_reason, third_explain, schedule_id FROM data";

$sqlResult = $mysql->query($sql);

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