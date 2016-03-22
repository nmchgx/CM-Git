<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/18
 * Time: 10:29
 */
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "INSERT INTO inform(title, content) VALUES('$title', '$content')";

$sql_check_reason = "SELECT title From inform";
$result = $mysql->query($sql_check_reason);
if(!empty($result)){
    echo "success";
}
else{
    echo "error";
}