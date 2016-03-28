/**
 * Created by nmchgx on 16/3/28.
 */

function addInform(){
    var title = $('input[name=title]').val();
    var content = $('textarea[name=content]').val();

    $.ajax(
        {
            type: "POST",
            url: "../../../php-common/add-inform.php",
            data: {
                title: title,
                content: content
            },
            success: function (data) {
                console.log(data.trim());
                if (data.trim() != "") {
                    var json = JSON.parse(data.trim());
                    if (json.msg == "success") {
                        location.href = "../"
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