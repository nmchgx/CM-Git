<?php
session_start();

require "sqlHelper.php";
require "jsonHelper.php";

if(isset($_SESSION['company_id'])){
    $check = $_SESSION['check'];
//    $sql = "SELECT check FROM company WHERE check = 'true' AND company_id = '$company_id'";
//    $sqlResult = $mysql->query($sql);
//    echo $sql;
//    if(!empty($sqlResult)){
//        foreach($sqlResult as $row=>$rowVal){
//            echo $rowVal;
//            if($rowVal == 'false') {
//                echo "{\"msg\": \"success\"}";
//            }
//            else {
//                echo "{\"msg\": \"error\"}";
//            }
//        }
////        echo "{\"msg\": \"success\"}";
//    }
    if($check == "true") {
        echo "{\"msg\": \"true\"}";
    }
    else if($check == "false") {
        echo "{\"msg\": \"false\"}";
    }
    else {
        echo "{\"msg\": \"error\"}";
    }
}
else{
    echo "{\"msg\": \"error\"}";
}
