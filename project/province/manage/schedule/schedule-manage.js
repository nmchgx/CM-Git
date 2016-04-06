/**
 * Created by Dilyar on 16/3/31.
 */
$(document).ready(function(){
});
//调用add-schedule.php通过点击事件将新数据添加入数据库中
function addSchedule(){
    var year = $('input[name=year]').val();
    var month = $('input[name=month]').val();
    var start = $('input[name=start]').val();
    var end = $('input[name=end]').val();

    $.ajax(
        {
            type: "POST",
            url: "../../../php-common/add-schedule.php",
            data: {
                year: year,
                month: month,
                start: start,
                end: end
            },
            success: function (data) {
                console.log(data.trim());
                if (data.trim() != "") {
                    var json = JSON.parse(data.trim());
                    if (json.msg == "success") {
                        location.href = "../schedule/"
                    }
                    else {
                        console.log("error: "+data);
                    }
                }
            },
            error: function (data) {
                console.log("error: "+data);
            }
        }
    );
}