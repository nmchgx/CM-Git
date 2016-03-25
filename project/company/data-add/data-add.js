/**
 * Created by nmchgx on 16/3/25.
 */
$(document).ready(function(){
    addInform();
});

function addInform(){
    $.ajax({
        type: "POST",
        url: "../../php-common/add-data.php",
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