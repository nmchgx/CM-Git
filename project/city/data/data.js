/**
 * Created by nmchgx on 16/4/5.
 */
$(document).ready(function(){
    getData();
});

var history_data = null;

function getData(){
    $.ajax({
        type: "POST",
        url: "../../php-common/get-nopass-data.php",
        data:{
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillDataList(json.data);
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

function fillDataList (data) {
    history_data = data;

    var listHolder = "<li>\
                        <a href='javascript:void(0);'>\
                        </a>\
                      </li>";

    var container = $('#list-data');
    container.empty();

    var addShowListener = function (i) {
        return function () {
            fillData (i);
        }
    }

    for(var i = 0; i< data.length; i++){
        var holder = $(listHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('a').click(addShowListener(i));
        if (i == 0) {
            holder.children('a').click();
        }
        holder.children('a').html(history_data[i].company_id);
        holder.fadeIn(600);
    }


}

function fillData (i) {
    $("#name").html(history_data[i].name+" - "+history_data[i].status);
    $("#company_id").html(history_data[i].company_id);

    $("#employment_last").html(history_data[i].employment_last);
    $("#employment_now").html(history_data[i].employment_now);
    $("#reason").html(history_data[i].reason);
    $("#type").html(history_data[i].type);
    $("#first_reason").html(history_data[i].first_reason);
    $("#first_explain").html(history_data[i].first_explain);
    $("#second_reason").html(history_data[i].second_reason);
    $("#second_explain").html(history_data[i].second_explain);
    $("#third_reason").html(history_data[i].third_reason);
    $("#third_explain").html(history_data[i].third_explain);
    $("#schedule_id").html(history_data[i].schedule_id);
    $("#status").html(history_data[i].status);
}