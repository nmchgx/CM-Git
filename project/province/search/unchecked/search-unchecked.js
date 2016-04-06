/**
 * Created by Dilyar on 16/4/5.
 */
$(document).ready(function(){
    getUnchecked();
});
//调用get-company.php查询未备案企业
function getUnchecked(){
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-company.php",
        data:{
            check: "false"
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillUnchecked(json.data);
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
//将查询的数据填入表格
function fillUnchecked (data) {
    var uncheckedHolder = "<tr>\
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
    var container = $('#uncheck-tbody');
    container.empty();

    for(var i = 0; i< data.length; i++){
        var holder = $(uncheckedHolder);
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