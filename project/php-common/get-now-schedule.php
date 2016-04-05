<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/29
 * Time: 上午11:12
 */

require "sqlHelper.php";
require "jsonHelper.php";

$sql = "SELECT schedule_id, date_format(start,'%Y-%m-%d') as start, date_format(start,'%Y-%m-%d') as end, year, month, is_report from schedule ORDER BY start DESC LIMIT 0,1";
$sqlResult = $mysql->query($sql);
$result=null;
$data=null;

if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
        $data[$row]=$rowVal;
    }

    $schedule_id = $data[0]['schedule_id'];
    $result['msg'] = 'success';

    $sql_s = "SELECT status FROM data WHERE schedule_id = '$schedule_id' ORDER BY time DESC LIMIT 0,1";
    $sqlResult_s = $mysql->query($sql_s);

//    echo $sql_s;
    if(!empty($sqlResult_s)) {
        foreach ($sqlResult_s as $row => $rowVal) {
            $data[$row] += $rowVal;
        }
    }
    $result['data']=$data;

    $json=JSON($result);
    echo $json;
}else{
    echo "{\"msg\": \"error\"}";
}