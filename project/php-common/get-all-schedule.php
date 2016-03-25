<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:41
 */
/*
 * Write by SlarQ
 * Date: 16/3/23
 * Time: 18:48
 */
require "sqlHelper.php";
require "jsonHelper.php";

$sql = "select * from schedule";
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