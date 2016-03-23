<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/23
 * Time: 下午7:11
 */
session_start();

require "jsonHelper.php";

if(isset($_SESSION['name'])) {
    $result['msg'] = 'success';
    $data['name'] = $_SESSION['name'];
    $result['data'] = $data;

    $json = JSON($result);
    echo $json;

}
else {
    echo "{\"msg\": \"error\"}";
}