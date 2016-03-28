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
    var inforHolder = "<div class='infor-cell'>\
                    <h1 class='infor_title'></h1>\
                    <p class='infor_time'></p>\
                    <p class='infor_content'></p>\
                </div>";
    var container = $('#content');
    container.empty();

    for(var i = 0; i< data.length; i++){
        var holder = $(inforHolder);
        holder.css('display','none');
        container.append(holder);

        holder.addClass('infor'+i);
        holder.children('.infor_title').html(data[i].title);
        holder.children('.infor_time').html(data[i].time);
        holder.children('.infor_content').html(data[i].content);
        holder.fadeIn(600);

    }
}