<?php
session_start();
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 2015/8/5
 * Time: 21:45
 * 如果用户没有关联任何项目，返回false
 */
require "sqlHelper.php";
require "jsonHelper.php";
if(isset($_SESSION['username'])){
    $userID = $_SESSION['userID'];
    $sql = "SELECT project.projectID,project.projectName,project.projectBanner,project.founderID,user_project.userID FROM user_project,project WHERE user_project.userID='$userID' AND user_project.projectID=project.projectID";
    $sqlResult = $mysql->query($sql);
    $result;
    if(!empty($sqlResult)){
        foreach($sqlResult as $row=>$rowVal){
            $result[$row] = $rowVal;
        }
        $json = JSON($result);
        echo $json;
    }else{
        echo "no-project";
    }
}else{
    echo 'session-out-of-time';
}

