<?php
/**
 * Created by PhpStorm.
 * User: xt
 * Date: 2016/3/16
 * Time: 19:16
 */
$sql = "SELECT inform_id, time, title, content FROM inform";
$sqlResult = $mysql->query($sql);
if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
        $result[$row] = $rowVal;
    }
    $json = JSON($result);
    echo $json;
}
else{
    echo "error";
}