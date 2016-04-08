/**
 * Created by nmchgx on 16/4/8.
 */

// 基于准备好的dom，初始化echarts图表
var myChart = echarts.init(document.getElementById('comparative analysis'));
var history_data = new Array();
var x_data = ['1月','2月','3月','4月','5月','6月','7月'];
var y_data = [120, 132, 101, 134, 90, 230, 210];

$(document).ready(function(){
    getData();

    $("#time").bind("change",function(){
        console.log($("#time").val());
        showData($("#time").val());
    });

});


function getData(){
    $.ajax({
        type: "POST",
        url: "../../php-common/get-sum-employment.php",
        data:{
        },
        success: function (data) {
            console.log(data.trim());
            if (data.trim() != "") {
                var json = JSON.parse(data.trim());
                if (json.msg == "success") {
                    fillData(json.data);

                    showData($("#time").val());
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
    history_data = new Array();

    var listHolder = "<option></option>";

    var container = $('#time');
    container.empty();

    var addShowListener = function (key) {
        return function () {
            showData (key);
        }
    }

    for(var i = 0; i< data.length; i++){
        if (history_data[data[i].year] == undefined){
            history_data[data[i].year] = [];

            // 添加option
            var holder = $(listHolder);
            container.append(holder);

            // holder.click(addShowListener(data[i].year));
            holder.val(data[i].year);
            holder.html(data[i].year+"年");
            if (i != 0) {
                // holder.attr('selected', true);
            }
            else {
                $("#time").get(0).selectedIndex=1;
            }
        }
        history_data[data[i].year].push(data[i]);
        // console.log(history_data[data[i].year]);
    }
}

function showData(key) {
    x_data = [];
    y_data = [];

    for (var i = 0; i < history_data[key].length; i++) {
        x_data.push(history_data[key][i].month);
        y_data.push(history_data[key][i].sum);
    }

    console.log(x_data);
    console.log(y_data);

    option = {
        title: {
            text: '岗位变化数量分析'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['总就业人数']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,

//               ----------变化月份-----------
                data : x_data
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'总就业人数',
                type:'line',
                stack: '变化量',
                areaStyle: {normal: {}},

//                ----------变化数量-----------
                data: y_data
            }

        ]
    };

    myChart.setOption(option);
}