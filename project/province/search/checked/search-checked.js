/**
 * Created by Dilyar on 16/4/5.
 */
$(document).ready(function(){
    getChecked();
});

function getChecked(){
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-company.php",
        data:{
            check: "true"
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillChecked(json.data);
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

function fillChecked (data) {
    var chekedHolder = "<tr>\
                            <td class='company_id'></td>\
                            <td class='name'></td>\
                            <td class='account'></td>\
                            <td class='city'></td>\
                            <td class='area'></td>\
                            <td class='code'></td>\
                            <td class='type'></td>\
                            <td class='industry'></td>\
                            <td class='business'></td>\
                            <td class='contact'></td>\
                            <td class='address'></td>\
                            <td class='post'></td>\
                            <td class='tel'></td>\
                            <td class='fax'></td>\
                            <td class='email'></td>\
                        </tr>";
    var container = $('#check-tbody');
    container.empty();

    for(var i = 0; i< data.length; i++){
        var holder = $(chekedHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.company_id').html(data[i].company_id);
        holder.children('.name').html(data[i].name);
        holder.children('.account').html(data[i].account);
        holder.children('.city').html(data[i].city);
        holder.children('.area').html(data[i].area);
        holder.children('.code').html(data[i].code);
        holder.children('.type').html(data[i].type);
        holder.children('.industry').html(data[i].industry);
        holder.children('.business').html(data[i].business);
        holder.children('.contact').html(data[i].contact);
        holder.children('.address').html(data[i].address);
        holder.children('.post').html(data[i].post);
        holder.children('.tel').html(data[i].tel);
        holder.children('.fax').html(data[i].fax);
        holder.children('.email').html(data[i].email);
        holder.fadeIn(600);

    }
}

//function deleteUser (company_id) {
//    $.ajax({
//        type: "POST",
//        url: "../../../php-common/delete-company.php",
//        data:{
//            company_id: company_id
//        },
//        success: function (data) {
//            console.log(data.trim());
//            if (data.trim() != "") {
//                var json = JSON.parse(data.trim());
//                if (json.msg == "success") {
//                    console.log(json.data);
//                    getUser();
//                }
//                else {
//                    console.log("error: "+data);
//                }
//            }
//        },
//        error: function (data) {
//            console.log("error: "+data);
//        }
//    });
//}
//
//function addUser(){
//    var account = $('input[name=account]').val();
//    var password = $('input[name=password]').val();
//    var city = $('select[name=city]').val();
//
//    $.ajax(
//        {
//            type: "POST",
//            url: "../../../php-common/add-company.php",
//            data: {
//                account: account,
//                password: password,
//                city: city
//            },
//            success: function (data) {
//                console.log(data.trim());
//                if (data.trim() != "") {
//                    var json = JSON.parse(data.trim());
//                    if (json.msg == "success") {
//                        location.href = "../user/"
//                    }
//                    else {
//                        console.log("error: "+data);
//                    }
//                }
//            },
//            error: function (data) {
//                console.log("error: "+data);
//            }
//        }
//    );
//}