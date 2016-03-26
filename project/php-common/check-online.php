<?php
/**
 * Created by PhpStorm.
 * User: nmchgx
 * Date: 16/3/26
 * Time: 上午11:42
 */

session_start();

if(isset($_SESSION['account'])){
    if(isset($_SESSION['company_id'])){
        echo "company";
    }
    else if(isset($_SESSION['province_id'])){
        echo "province";
    }
    else {
        echo "none";
    }
}
else{
    echo "none";
}