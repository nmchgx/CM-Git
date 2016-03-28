<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
require "sqlHelper.php";
require "jsonHelper.php";

$sql = "SELECT inform_id, inform.time, title, content FROM inform ORDER BY inform.time DESC";
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