/**
 * Created by nmchgx on 16/3/29.
 */
$(document).ready(function(){
    checkCompany();
});

function checkCompany(){
    $.ajax({
        type: "POST",
        url: "../../php-common/check-company.php",
        data:{
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "true") {
                    $('#content').attr("hidden", "hidden");
                    $('#tips').removeAttr("hidden");
                }
                else if (json.msg == "false") {
                    $('#content').removeAttr("hidden");
                    $('#tips').attr("hidden", "hidden");
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

function addCheck(){
    var area = $('select[name=area]').val();
    var code = $('input[name=code]').val();
    var name = $('input[name=name]').val();
    var type = $('select[name=type]').val();
    var industry = $('select[name=industry]').val();
    var business = $('input[name=business]').val();
    var contact = $('input[name=contact]').val();
    var address = $('input[name=address]').val();
    var post = $('input[name=post]').val();
    var tel = $('input[name=tel]').val();
    var fax = $('input[name=fax]').val();
    var email = $('input[name=email]').val();

    $.ajax(
        {
            type: "POST",
            url: "../../php-common/add-check.php",
            data: {
                area: area,
                code: code,
                name: name,
                type: type,
                industry: industry,
                business: business,
                contact: contact,
                address: address,
                post: post,
                tel: tel,
                fax: fax,
                email: email
            },
            success: function (data) {
                console.log(data.trim());
                if (data.trim() != "") {
                    var json = JSON.parse(data.trim());
                    if (json.msg == "success") {
                        location.href = "../check"
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

