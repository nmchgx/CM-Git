/**
 * Created by nmchgx on 16/4/5.
 */
$(document).ready(function(){
    getNowSchedule();
});

function getNowSchedule() {
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-now-schedule.php",
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
    $('#schedule_id').html(data[0].schedule_id);
    $('#year').html(data[0].year + "年");
    $('#month').html(data[0].month + "月");
    $('#start').html(data[0].start);
    $('#end').html(data[0].end);
    switch (data[0].is_report) {
        case '0':
            $('#is_report').html('未上报');
            $('#send-btn').removeAttr('style');
            break;
        case '1':
            $('#is_report').html('已上报');
            $('#send-btn').attr('style', 'display:none;');
            break;
    }
}

function summarySchedule() {
    console.log($('#schedule_id').html().trim());
    $.ajax({
        type: "POST",
        url: "../../../php-common/summary-schedule.php",
        data:{
            schedule_id: $('#schedule_id').html().trim()
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    location.href = "../summary/"
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