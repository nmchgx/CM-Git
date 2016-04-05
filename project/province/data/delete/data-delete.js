/**
 * Created by nmchgx on 16/4/5.
 */
$(document).ready(function(){
    getAllData();
});

function getAllData(){
    $.ajax({
        type: "POST",
        url: "../../../php-common/get-all-data.php",
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    fillData(json.data);
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

function fillData (data) {
    var dataHolder = "<tr>\
                                    <td class='data_id'></td>\
                                    <td class='schedule_id'></td>\
                                    <td class='time'></td>\
                                    <td class='name'></td>\
                                    <td class='status'></td>\
                                    <td class='delete-btn'>\
                                        <button class='btn btn-danger' type='button' value=''>删除</button>\
                                    </td>\
                                </tr>";
    var container = $('#data-tbody');
    container.empty();

    var addDeleteListener = function (data_id) {
        return function () {
            deleteData (data_id);
        }
    }

    for(var i = 0; i< data.length; i++){
        var holder = $(dataHolder);
        holder.css('display','none');
        container.append(holder);

        holder.children('.data_id').html(data[i].data_id);
        holder.children('.schedule_id').html(data[i].schedule_id);
        holder.children('.time').html(data[i].year+'年'+data[i].month+'月');
        holder.children('.name').html(data[i].name);
        holder.children('.status').html(data[i].status);
        holder.children('.delete-btn').children('button').click(addDeleteListener(data[i].data_id));
        holder.fadeIn(600);

    }
}

function deleteData (data_id) {
    $.ajax({
        type: "POST",
        url: "../../../php-common/delete-data.php",
        data:{
            data_id: data_id
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    console.log(json.data);
                    getAllData();
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