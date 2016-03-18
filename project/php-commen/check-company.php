<?php
require "sqlHelper.php";
require "jsonHelper.php";

$company_id = $_POST['company_id'];

if($company_id){
    $sql = "SELECT company.check FROM company WHERE company_id = '$company_id'";
    $result = $mysql->query($sql);
    $rows = mysql_num_rows( $result );
    if(rows){
        echo "success";
    }
    else{
        echo "error";
    }
}
else{
    echo "error";
}
