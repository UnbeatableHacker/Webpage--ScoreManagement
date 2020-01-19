/**
 * 显示、关闭显示所有成绩的div: showAllGradeDiv()
 *      @param:
 *          divObj: 页面中的成绩div
 * 得到所有成绩:  getAllGrade()
 *      @param:
 *          tableObj: 页面中的成绩div中的表格
 * 删除某条信息: deleteScore()
 *      @param:
 *          rowObj: 删除的行对象
 */

//显示、关闭显示所有成绩的div
var showAllGradeDiv = function(divObj){
    //如果 divObj 是jQuery对象，先转化为Dom对象
    if(divObj instanceof $) divObj = divObj[0];

    //点击添加学生按钮时，显示div接受信息
    if(divObj.style.display === 'none') {
        divObj.style.display = 'block';
        //div出现的同时，将所有成绩信息加载
        getAllGrade(divObj.children[0]);
    }
    else divObj.style.display = 'none';
};

//得到所有成绩
var getAllGrade = function(tableObj){
    for(var i = 0; i < scoreArr.length; i++){
        //提取学生姓名方法：scoreArr中由学生的id，stuId是由stuArr的索引计算得来，反运算就可得到stuArr的索引
        $('<tr><td>'+(i+1)+'</td><td>'+scoreArr[i].scoreId+'</td><td>'+scoreArr[i].stuId+'</td><td>'+
            stuArr[(scoreArr[i].stuId-1000)/10].stuName+'</td><td>'+scoreArr[i].subId+'</td><td>'+
            subArr[(scoreArr[i].subId-100000)/10].subName+'</td><td>'+ scoreArr[i].grade+
            '</td><td><input type="button" onclick="showUpdateScore(this.parentNode.parentNode)" value="更改">' +
            '<input type="button" onclick="deleteScore(this.parentNode.parentNode)" value="删除"></td></tr>').appendTo(tableObj);
    }

};

//定义全局变量，之后用于指向目标td
var oldCell;
//该函数的主要目的是将值更改
var showUpdateScore = function(rowObj){
    oldCell = rowObj.children[6];
    //显示新成绩输入框
    $("<div style='border: 1px solid;width: 200px' id='updataScoreDiv'>" +
        "学生编号："+rowObj.children[2].innerText+"<br>"+
        "学生姓名："+rowObj.children[3].innerText+"<br>"+
        "课程编号："+rowObj.children[4].innerText+"<br>"+
        "课程编号："+rowObj.children[5].innerText+"<br>"+
        "更改成绩：<input type='text' id='newScore'><br>"+
        "<input type='button' value='确定' onclick='updateScore()'><br>"+
        "<input type='button' value='取消' onclick='deleteDiv()'></div>").appendTo("body");
};


//进行数据更新
var updateScore = function(){
    var newScore = $("#newScore").val();
    if(isPass(newScore)) {
        //显示的成绩框更新
        oldCell.innerText = newScore;
        //成绩数组更新
        //scoreArr[].grade = newScore;
        //更新之后删除div
        deleteDiv()
    }
};

//判断新值是否符合形式正确
var isPass = function(newScore){
    if(isNaN(newScore) || newScore.length === 0 ||
    newScore > 100 || newScore < 0){
        alert("成绩为不大于100，并不小于0的数字");
        return false;
    }
        return true;
};

var deleteDiv = function(){
    $("#updataScoreDiv").remove()
};

//删除某条信息
var deleteScore = function(rowObj){
    var tableObj = rowObj.parentNode;
    tableObj.deleteRow(rowObj.rowIndex);
    scoreArr.splice(rowObj.rowIndex, 1);
    for(var i = 1; i < tableObj.rows.length; i++){
        tableObj.rows[i].cells[0].innerText = i;
    }
};