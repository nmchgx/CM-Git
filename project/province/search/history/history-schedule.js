/**
 * Created by nmchgx on 16/4/6.
 */
$(document).ready(function(){
    getHistory();
});

function getHistory(){
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-all-schedule.php",
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    fillHistory(json.data);
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

function fillHistory (data) {
    var uncheckedHolder = "<tr>\
                            <td class='schedule_id'></td>\
                            <td class='time'></td>\
                            <td class='start'></td>\
                            <td class='end'></td>\
                            <td class='is_report'></td>\
                        </tr>";
    var container = $('#schedule-tbody');
    container.empty();

    for(var i = 0; i< data.length; i++){
        var holder = $(uncheckedHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.schedule_id').html(data[i].schedule_id);
        holder.children('.time').html(data[i].year + "年" + data[i].month + "月");
        holder.children('.start').html(data[i].start);
        holder.children('.end').html(data[i].end);
        var is_report = null;
        if (data[i].is_report == '0') {
            is_report = "否";
        }
        else {
            is_report = "是";
        }

        holder.children('.is_report').html(is_report);
        holder.fadeIn(600);

    }
}