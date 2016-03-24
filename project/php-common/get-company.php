<?php
session_start();
/* get-company
 * created by Dilyar
 * 查询备案/未备案企业
 * 功能:省按照各种需求搜索查询已注册的企业
 * 请求方式:POST
 * Date:2016.3.24
 */

require "sqlHelper.php";
require "jsonHelper.php";

$check = $_POST['check'];

$sql = "SELECT company_id, account, city, area, code, company.name,
               company.type, industry, business, contact, address, post, tel, fax,
               email FROM company WHERE company.check = '$check'";

if(!empty($sqlResult)){
    foreach($sqlResult as $row=>$rowVal){
            $data[$row] = $rowVal;
    }

    $result['msg'] = 'success';
    $result['data'] = $data;

    $json = JSON($result);
    echo $json;
}
else{
        echo "{\"msg\": \"error\"}";
}