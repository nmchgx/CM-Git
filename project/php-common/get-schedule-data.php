<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:46
 */
/**
 * Write by SlarQ
 * Date: 16/3/23
 * Time: 13:15
 */
session_start();
require "sqlHelper.php";
require "jsonHelper.php";
$schedule_id=$_SESSION['schedule_id'];
$sql="SELECT * from schedule where schedule_id="+$schedule_id;
$sqlResult=$mysql->query($sql);
$result=null;
$data=null;
if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
       $data[$row] = $rowVal;
    }
    $result['msg']='success';
    $result['data']=$data;
    $json=JSON($result);
    echo $json;
}
else{
    echo "{\"msg\": \"error\"}";
}