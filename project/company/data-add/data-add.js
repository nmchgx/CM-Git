/**
 * Created by nmchgx on 16/3/25.
 */
$(document).ready(function(){
    getNowSchedule();
});

function addData(){
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
    var schedule_id = $('input[name=schedule_id]').val();
    var status = $('input[name=status]').val();

    //console.log(employment_last+"\n");
    //console.log(employment_now+"\n");
    //console.log(reason+"\n");
    //console.log(type+"\n");
    //console.log(first_reason+"\n");
    //console.log(first_explain+"\n");
    //console.log(second_reason+"\n");
    //console.log(second_explain+"\n");
    //console.log(third_reason+"\n");
    //console.log(third_explain+"\n");
    //console.log(schedule_id+"\n");
    //console.log(status+"\n");

    $.ajax({
        type: "POST",
        url: "../../php-common/add-data.php",
        data:{
            employment_last: employment_last,
            employment_now: employment_now,
            reason: reason,
            type: type,
            first_reason: first_reason,
            first_explain: first_explain,
            second_reason: second_reason,
            second_explain: second_explain,
            third_reason: third_reason,
            third_explain: third_explain,
            schedule_id: schedule_id,
            status: status
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    location.href = "../data-add"
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

function getNowSchedule() {
    $.ajax({
        type: "POST",
        url: "../../php-common/get-now-schedule.php",
        data:{
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillNowSchedule(json.data);
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

function fillNowSchedule (data) {
    if (data[0].status == "" || data[0].status == null || data[0].status == "未通过") {
        var scheduleShow = $('#now-schedule');
        var scheduleID = $('input[name=schedule_id]');
        var statusShow = $('#now-status');
        var status = $('input[name=status]');
        scheduleShow.empty();
        statusShow.empty();

        scheduleShow.html("当前申报期: " + data[0].year + "年" + data[0].month + "月");
        scheduleID.val(data[0].schedule_id);

        if (data[0].status == "未通过") {
            statusShow.html("申报状态: 未通过");
            status.val("重申报");
        }
        else {
            statusShow.html("申报状态: 未上报");
            status.val("已上报");
        }
    }
    else {
        var scheduleShow = $('#now-schedule');
        var statusShow = $('#now-status');
        var content = $('#content');
        scheduleShow.empty();
        statusShow.empty();

        scheduleShow.html("当前申报期: " + data[0].year + "年" + data[0].month + "月");
        statusShow.html("申报状态: " + data[0].status);
        content.attr('hidden', 'hidden');
    }
}