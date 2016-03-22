<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/15
 * Time: 下午9:10
 */
$inform_id = $_POST['inform_id'];

$sql = "DELETE FROM inform WHERE inform_id = '$inform_id'";

$sql_check_reason = "SELECT * From inform WHERE inform_id = '$inform_id'";
$result = $mysql->query($sql_check_reason);
if(empty($result)){
    echo "success";
}
else{
    echo "error";
}