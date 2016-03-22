<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
require "sqlHelper.php";
require "jsonHelper.php";

$area = $_POST['area'];
$code = $_POST['code'];
$name = $_POST['name'];
$type = $_POST['type'];
$industry = $_POST['industry'];
$business = $_POST['business'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$post = $_POST['post'];
$tel = $_POST['tel'];
$fax = $_POST['fax'];
$email = $_POST['email'];

$sql = "INSERT INTO company(area,code,name,type,industry,business,contact,address,post,tel,fax,email)
VALUES ('$area','$code','$name','$type','$industry','$business','$contact','$address','$post','$tel','$fax','$email')";

$sql_check_area = "SELECT area From company";
$result = $mysql->query($sql_check_area);
if($result != NULL){
    $sql_check = "UPDATE company SET company.check = 'true'";
    $sql_check_check = "SELECT company.check From company";
    $result_check = $mysql->query($sql_check_check);
    if($result_check){
        echo "success";
    }
    else{
        echo "error";
    }
}
else{
    echo "error";
}
