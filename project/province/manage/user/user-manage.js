/**
 * Created by nmchgx on 16/3/31.
 */
$(document).ready(function(){
    getUser();
});

function getUser(){
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-company.php",
        data:{
            check: "all"
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillUser(json.data);
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

function fillUser (data) {
    var userHolder = "<tr>\
                            <td class='account'></td>\
                            <td class='password'></td>\
                            <td class='city'></td>\
                            <td class='delete-btn'>\
                                <button class='btn btn-danger' type='button'>删除</button>\
                            </td>\
                        </tr>";
    var container = $('#user-tbody');
    container.empty();

    var addDeleteListener = function (company_id) {
        return function () {
            deleteUser (company_id);
        }
    }

    for(var i = 0; i< data.length; i++){
        var holder = $(userHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.account').html(data[i].account);
        holder.children('.password').html(data[i].password);
        holder.children('.city').html(data[i].city);
        holder.children('.delete-btn').children('button').click(addDeleteListener(data[i].company_id));
        holder.fadeIn(600);

    }
}

function deleteUser (company_id) {
    $.ajax({
        type: "POST",
        url: "../../../php-common/delete-company.php",
        data:{
            company_id: company_id
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    getUser();
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

function addUser(){
    var account = $('input[name=account]').val();
    var password = $('input[name=password]').val();
    var city = $('select[name=city]').val();

    $.ajax(
        {
            type: "POST",
            url: "../../../php-common/add-company.php",
            data: {
                account: account,
                password: password,
                city: city
            },
            success: function (data) {
                console.log(data.trim());
                if (data.trim() != "") {
                    var json = JSON.parse(data.trim());
                    if (json.msg == "success") {
                        location.href = "../user/"
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