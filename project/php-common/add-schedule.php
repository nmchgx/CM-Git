<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:56
 */
/**
 * Write by SlarQ
 * Date:16/3/23
 * Time: 13:09
 */
session_start();
require "sqlHelper.php";
require "jsonHelper.php";
$year=$_POST['year'];
$month=$_POST['month'];
$start=$_POST['start'];
$end=$_POST['end'];

$sql_time = "SELECT * FROM schedule WHERE schedule.year = '$year'AND schedule.month = '$month' ";
$sqlResult_time = $mysql -> query($sql_time);

$data = null;

if(!empty($sqlResult_time)){
    foreach($sqlResult_time as $row=>$rowVal){
        $data[$row] = $rowVal;
    }

    if (!count($data)){
        //INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
        $sql="INSERT INTO schedule (year,month,start,end) VALUES ('$year','$month','$start','$end')";
        $sqlResult=$mysql->query($sql);
        //echo $sql;
        if(!empty($sqlResult)) {
            echo "{\"msg\": \"success\"}";
        }else{
            echo "{\"msg\": \"error2\"}";
        }
    }
    else{
        echo "{\"msg\": \"error3\"}";
    }

}
else{
    echo "{\"msg\": \"error\"}";
}
