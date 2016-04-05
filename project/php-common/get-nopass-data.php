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

$sql = "SELECT company.name,data.data_id, data.time, data.status, data.company_id, data.employment_last, data.employment_now,
data.reason, data.type, data.first_reason, data.first_explain, data.second_reason, data.second_explain,
               data.third_reason, data.third_explain, data.schedule_id FROM data, company WHERE data.company_id+data.time IN (SELECT company_id+max(time) FROM data WHERE status = '已上报' OR '重申报' GROUP BY company_id) AND data.company_id = company.company_id";
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