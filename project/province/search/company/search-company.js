/**
 * Created by Dilyar on 16/4/5.
 */
$(document).ready(function(){
});
//点击搜索按钮调用search-company.php查询企业
function getCompany(){
    var search_type = $('select[name=search_type]').val();
    var search_value = $('input[name=search_value]').val();

    $.ajax({
        type: "POST",
        url: "../../../php-common/search-company.php",
        data:{
            search_type:search_type,
            search_value:search_value,
        },
        success: function (data) {
            console.log(search_type);
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    //location.href = "../company/"
                    console.log(json.data);
                    fillCompany(json.data);
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
function fillCompany (data) {
    var companyHolder = "<tr>\
                            <td class='company_id'></td>\
                            <td class='name'></td>\
                            <td class='account'></td>\
                            <td class='city'></td>\
                            <td class='check'></td>\
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
    var container = $('#company-tbody');
    container.empty();

    for(var i = 0; i< data.length; i++){
        var holder = $(companyHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.company_id').html(data[i].company_id);
        holder.children('.name').html(data[i].name);
        holder.children('.account').html(data[i].account);
        holder.children('.city').html(data[i].city);
        holder.children('.check').html(data[i].check);
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