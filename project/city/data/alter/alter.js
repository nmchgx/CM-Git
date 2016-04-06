/**
 * Created by nmchgx on 16/4/5.
 */
var company_id;
var schedule_id;

$(document).ready(function () {
    company_id = GetQueryString("company_id");
    schedule_id = GetQueryString("schedule_id");
    console.log(company_id);
    console.log(schedule_id);

    $("#name").html(GetQueryString("name"));
});


//从url读取参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return decodeURI(r[2]); return null;
}

function examineData(action) {
    var employment_last = $('input[name=employment_last]').val();
    var employment_now = $('input[name=employment_now]').val();
    var reason = $('input[name=reason]').val();
    var type = $('select[name=type]').val();
    var first_reason = $('select[name=first_reason]').val();
    var first_explain = $('input[name=first_explain]').val();
    var second_reason = $('select[name=second_reason]').val();
    var second_explain = $('input[name=second_explain]').val();
    var third_reason = $('select[name=third_reason]').val();
    var third_explain = $('input[name=third_explain]').val();
    
    $.ajax({
        type: "POST",
        url: "../../../php-common/examine-data.php",
        data:{
            action: action,
            company_id: company_id,
            schedule_id: schedule_id,
            employment_last: employment_last,
            employment_now: employment_now,
            reason: reason,
            type: type,
            first_reason: first_reason,
            first_explain: first_explain,
            second_reason: second_reason,
            second_explain: second_explain,
            third_reason: third_reason,
            third_explain: third_explain
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    location.href = "../";
                }
                else {
                    console.log("error: "+data);
                }
            }
        },
        error: function (data) {
            console.log("error: "+data);
        }
    });
}
