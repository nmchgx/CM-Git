<?php
session_start();
/* search-company
 * created by Dilyar
 * 查询企业
 * 功能:省按照各种需求搜索查询已注册的企业
 * 请求方式:POST
 * Date:2016.3.24
 */

require "sqlHelper.php";
require "jsonHelper.php";

$search_type = $_POST['search_type'];

//判断search_type
if($search_type == "city"){
    //若是city类型则根据所在城市进行数据返回
    $search_value = $_POST['search_value'];
    $sql = "SELECT company_id, account, city, company.check, area, code, company.name,
               company.type, industry, business, contact, address, post, tel, fax,
               email FROM company WHERE city = 'search_value'";

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
}
//若是name类型则根据企业名称进行数据返回
else if($search_type == "name"){
    $search_value = $_POST['search_value'];
    $sql = "SELECT company_id, account, city, company.check, area, code, company.name,
               company.type, industry, business, contact, address, post, tel, fax,
               email FROM company WHERE company_id = 'search_value'";

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
}
//若二者都不是则返回错误
else{
    echo "{\"msg\": \"error\"}";
}