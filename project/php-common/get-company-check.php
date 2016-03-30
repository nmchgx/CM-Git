<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/30
 * Time: 下午4:23
 */

session_start();

require "jsonHelper.php";

if(isset($_SESSION['name'])) {
    $result['msg'] = 'success';

    $data['company_id'] = $_SESSION['company_id'];
    $data['area'] = $_SESSION['area'];
    $data['code'] = $_SESSION['code'];
    $data['name'] = $_SESSION['name'];
    $data['type'] = $_SESSION['type'];
    $data['industry'] = $_SESSION['industry'];
    $data['business'] = $_SESSION['business'];
    $data['contact'] = $_SESSION['contact'];
    $data['address'] = $_SESSION['address'];
    $data['post'] = $_SESSION['post'];
    $data['tel'] = $_SESSION['tel'];
    $data['fax'] = $_SESSION['fax'];
    $data['email'] = $_SESSION['email'];

    $result['data'] = $data;

    $json = JSON($result);
    echo $json;

}
else {
    echo "{\"msg\": \"error\"}";
}