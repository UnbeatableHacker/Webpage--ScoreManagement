/**
 * 显示、关闭添加成绩div: showAddGradeDiv()
 *      @param:
 *          gradeDiv: 页面中的成绩div
 * 显示所选id对应的名称: showStuName()
 *      @param:
 *          objId:
 *          gradeDiv:
 * 添加成绩: addGrade()
 *      @param:
 *          gradeObj:
 */

//显示、关闭添加成绩div
var showAddGradeDiv = function(gradeDiv){
    //如果 gradeDiv 是jQuery对象，先转化为Dom对象
    if(gradeDiv instanceof $)
        gradeDiv = gradeDiv[0];

    //点击添加成绩按钮时，显示div接受信息
    if(gradeDiv.style.display === 'none') {
        gradeDiv.style.display = 'block';
        //为表格中的操作序号框赋值，该值是根据已有学生人数自动添加
        gradeDiv.children[0].children[0].children[0].children[1].children[0].value =
            10000000 + scoreArr.length * 10;
        //添加学生学号下拉列表
        var stuIdSelect = gradeDiv.children[0].children[0].children[1].children[1].children[0];
        for(var i in stuArr){
            $("<option>"+stuArr[i].stuId+"</option>").appendTo(stuIdSelect);
        }

        //添加课程号下拉列表
        var subIdSelect = gradeDiv.children[0].children[0].children[3].children[1].children[0];
        for(var i in subArr){
            $("<option>"+subArr[i].subId+"</option>").appendTo(subIdSelect);
        }
    }
    else gradeDiv.style.display = 'none';
};

//显示所选学生id对应的名称
var showStuName = function(objId, gradeDiv){
    if(objId instanceof $)
        objId = objId[0];

    if(gradeDiv instanceof $)
        gradeDiv = gradeDiv[0];

    for(var i in stuArr){
        if(stuArr[i].stuId === objId)
            gradeDiv.children[0].children[0].children[2].children[1].children[0].value =
                stuArr[i].stuName;
    }
};

//显示所选课程id对应的名称
var showSubName = function(objId, gradeDiv){
    if(objId instanceof $)
        objId = objId[0];

    if(gradeDiv instanceof $)
        gradeDiv = gradeDiv[0];

    for(var i in subArr){
        if(subArr[i].subId === objId)
            gradeDiv.children[0].children[0].children[4].children[1].children[0].value =
                subArr[i].subName;
    }
};

//添加成绩
var addGrade = function(gradeObj){
    var grade= '';
    var scoreId = '';
    var testDate = '';
    var subId = '';
    var stuId = '';

    //判断是否确定了学生和课程
    if(gradeObj.children[2].children[1].children[0].value.length ===0 ||
    gradeObj.children[4].children[1].children[0].value.length === 0){
        alert("请先选择学生和课程");
        return;
    }
    //判断成绩格式
    if(isNaN(gradeObj.children[5].children[1].children[0].value) ||
    gradeObj.children[5].children[1].children[0].value.length === 0 ||
    gradeObj.children[5].children[1].children[0].value > 100 ||
    gradeObj.children[5].children[1].children[0].value < 0){
        alert("成绩为不大于100，并不小于0的数字");
        return;
    } else{
        grade = gradeObj.children[5].children[1].children[0].value;
    }

    //判断日期格式
    if(isNaN(gradeObj.children[6].children[1].children[0].value) ||
        gradeObj.children[6].children[1].children[0].value.length != 8){
        alert("请用8位数字形式表示考试时间");
        return;
    } else{
        testDate = gradeObj.children[6].children[1].children[0].value;
    }

    scoreId = gradeObj.children[0].children[1].children[0].value;
    stuId = gradeObj.children[1].children[1].children[0].value;
    subId = gradeObj.children[3].children[1].children[0].value;
    var score = new Score(grade, scoreId, testDate, stuId, subId);
    scoreArr.push(score);
console.log(scoreArr);

    //提交之后数据清空
    //操作序号自动更改
    gradeObj.children[0].children[1].children[0].value =
            10000000 + scoreArr.length * 10;
    //学生学号恢复默认
    gradeObj.children[1].children[1].children[0].options[0].selected = true;
    gradeObj.children[2].children[1].children[0].value = '';
    //课程号恢复默认
    gradeObj.children[3].children[1].children[0].options[0].selected = true;
    gradeObj.children[4].children[1].children[0].value = '';
    //成绩和考试时间清空
    gradeObj.children[5].children[1].children[0].value = '';
    gradeObj.children[6].children[1].children[0].value = '';

};