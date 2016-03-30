<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
session_start();

require "sqlHelper.php";
require "jsonHelper.php";
//$company_id = '10';
$company_id = $_SESSION['company_id'];
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

$sql = "UPDATE company SET area = '$area', code = '$code', name = '$name', type = '$type', industry = '$industry', business ='$business', contact = '$contact', address = '$address', post = '$post', tel = '$tel', fax = '$fax', email = '$email' WHERE company_id = '$company_id'";
$result = $mysql->query($sql);

if(!empty($result)){
    $sql_check = "UPDATE company SET company.check = 'true' WHERE company_id = '$company_id'";
    $result_check = $mysql->query($sql_check);

    if(!empty($result_check)){
        $_SESSION['check'] = 'true';
        $_SESSION['area'] = $area;
        $_SESSION['code'] = $code;
        $_SESSION['name'] = $name;
        $_SESSION['type'] = $type;
        $_SESSION['industry'] = $industry;
        $_SESSION['business'] = $business;
        $_SESSION['contact'] = $contact;
        $_SESSION['address'] = $address;
        $_SESSION['post'] = $post;
        $_SESSION['tel'] = $tel;
        $_SESSION['fax'] = $fax;
        $_SESSION['email'] = $email;
        echo "{\"msg\": \"success\"}";
    }
    else{
        echo "{\"msg\": \"error\"}";
    }
}
else{
    echo "{\"msg\": \"error\"}";
}
