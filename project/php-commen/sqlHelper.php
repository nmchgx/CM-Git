<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 2015/8/5
 * Time: 20:22
 */
$mysql = new mysqli("localhost", "root","root","tm");
if(mysqli_connect_errno()){
    die("Unable to connect!").mysqli_connect_error();
}
$mysql->set_charset("utf8");