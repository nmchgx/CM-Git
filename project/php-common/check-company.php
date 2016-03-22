<?php
session_start();

require "sqlHelper.php";
require "jsonHelper.php";

$company_id = $_SESSION['company_id'];

if($company_id){
    $sql = "SELECT company.check FROM company WHERE company_id = '$company_id'";
    $result = $mysql->query($sql);
    $rows = mysql_num_rows( $result );
    if(rows){
        echo "{\"msg\": \"success\"}";
    }
    else{
        echo "{\"msg\": \"error\"}";
    }
}
else{
    echo "{\"msg\": \"error\"}";
}
