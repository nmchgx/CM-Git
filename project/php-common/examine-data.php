<?php
session_start();
/* examine-data
 * created by Dilyar
 * 审批本期数据
 * 功能:审批本期未审批数据
 * 请求方式:POST
 * Date:2016.3.24
 */

require "sqlHelper.php";
require "jsonHelper.php";

$company_id = $_POST['company_id'];
$action = $_POST['action'];

/*$sql = "SELECT company_id, status FROM data WHERE company_id = '$company_id'";
$result = $mysql->query($sql);

if(!empty($result)) {*/
//若action为1则将status改为"已上报"
if ($action == "1") {
    $sql = "UPDATE data SET status = '已上报' WHERE company_id = '$company_id'";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
            echo "{\"msg\": \"success\"}";
    } else {
            echo "{\"msg\": \"error\"}";
    }
} else if ($action == "2") {
    //若action为2则将status改为"未通过"
    $sql = "UPDATE data SET status = '未通过' WHERE company_id = '$company_id'";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
            echo "{\"msg\": \"success\"}";
    } else {
            echo "{\"msg\": \"error\"}";
    }
} else if ($action == "3") {
    //若action为3则将status改为"重新申报"
    $sql = "UPDATE data SET status = '重申报' WHERE company_id = '$company_id'";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
        echo "{\"msg\": \"success\"}";
    } else {
        echo "{\"msg\": \"error\"}";
    }
} else if($action == "4"){
    //若action为4则将status改为"修改"
    $sql = "UPDATE data SET status = '修改' WHERE company_id = '$company_id'";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
        echo "{\"msg\": \"success\"}";
    } else {
        echo "{\"msg\": \"error\"}";
    }
} else if($action == "5"){
    //若action为5则将status改为"通过"
    $sql = "UPDATE data SET status = '通过' WHERE company_id = '$company_id'";
    $sqlResult = $mysql->query($sql);

    if (!empty($sqlResult)) {
        echo "{\"msg\": \"success\"}";
    } else {
        echo "{\"msg\": \"error\"}";
    }
} else{
    echo "{\"msg\": \"error\"}";
}

/*}
 else{
    echo "{\"msg\": \"error\"}";
}*/