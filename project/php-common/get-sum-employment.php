<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/4/8
 * Time: 上午10:43
 */

require "sqlHelper.php";
require "jsonHelper.php";

$sql = "SELECT data.schedule_id, SUM(data.employment_now) AS sum, schedule.year, schedule.month FROM data JOIN schedule ON schedule.schedule_id = data.schedule_id WHERE data.company_id+data.time IN (SELECT company_id+max(time) FROM data GROUP BY company_id) AND data.status = '通过' OR  data.status = '修改通过' GROUP BY data.schedule_id ORDER BY schedule.end ASC";
$sqlResult = $mysql->query($sql);
$result=null;
$data=null;

if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
        $data[$row]=$rowVal;
    }
    $result['msg']='success';
    $result['data']=$data;

    $json=JSON($result);
    echo $json;
}else{
    echo "{\"msg\": \"error\"}";
}