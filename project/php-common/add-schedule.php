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
//INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
$sql="INSERT INTO schedule (year,month,start,end) VALUES ("+$year+","+$month+","+$start+","+$end+")";
$sqlResult=$mysql->query($sql);
if(!empty($sqlResult)) {
    echo "{\"msg\": \"success\"}";
}else{
    echo "{\"msg\": \"error\"}";
}
