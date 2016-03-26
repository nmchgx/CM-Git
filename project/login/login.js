/**
 * Created by nmchgx on 16/3/26.
 */
function login () {
    var account = $('input[name=account]').val();
    var password = $('input[name=password]').val();
    var type = $('input[name=type]:checked').val();

    $.ajax(
        {
            type: "POST",
            url: "../php-common/login.php",
            data: {
                account: account,
                password: password,
                type: type
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
};