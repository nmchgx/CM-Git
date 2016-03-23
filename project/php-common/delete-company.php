<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:57
 */
/**
 * Write by SlarQ
 * Data: 16/3/23
 * Time:12:32
 */
session_start();

require "sqlHelper.php";
require "jsonHelper.php";

$company_id=$_SESSION['company_id'];
    //DELETE FROM Person WHERE LastName = 'Wilson'
$sql="DELETE FROM company WHERE company_id="+company_id;
$sqlResult=$mysql->query($sql);
if($sqlResult){
    echo 'success';
}else {
    echo 'error';
}