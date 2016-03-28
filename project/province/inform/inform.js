/**
 * Created by nmchgx on 16/3/25.
 */
$(document).ready(function(){
    getInform();
});

function getInform(){
    $.ajax({
        type: "POST",
        url: "../../php-common/get-inform.php",
        data:{
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillInform(json.data);
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

function fillInform (data) {
    var inforHolder = "<div class='infor-cell' style='display: inline'>\
                        <div class='infor_box'>\
                            <h1 class='infor_title'></h1>\
                            <p class='infor_time'></p>\
                            <p class='infor_content'></p>\
                        </div>\
                        <button  class='btn btn-danger' type='button'>删除此通知</button>\
                       </div>";
    var container = $('#content');
    container.empty();

    var addDeleteListener = function (inform_id) {
        return function () {
            deleteInform (inform_id);
        }
    }

    for(var i = 0; i< data.length; i++){
        var holder = $(inforHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.infor_box').children('.infor_title').html(data[i].title);
        holder.children('.infor_box').children('.infor_time').html(data[i].time);
        holder.children('.infor_box').children('.infor_content').html(data[i].content);
        holder.children('button').click(addDeleteListener(data[i].inform_id));
        holder.fadeIn(600);

    }
}

function deleteInform (inform_id) {
    $.ajax({
        type: "POST",
        url: "../../php-common/delete-inform.php",
        data:{
            inform_id: inform_id
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    getInform();
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