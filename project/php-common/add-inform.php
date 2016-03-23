<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/18
 * Time: 10:29
 */
require "sqlHelper.php";
require "jsonHelper.php";

$title = $_POST['title'];
$content = $_POST['content'];

$sql = "INSERT INTO inform(title, content) VALUES('$title', '$content')";
$result = $mysql->query($sql);

if(!empty($result)){
    echo "{\"msg\": \"success\"}";
}
else{
    echo "{\"msg\": \"error\"}";
}