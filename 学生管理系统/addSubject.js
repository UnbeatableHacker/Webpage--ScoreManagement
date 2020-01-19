/**
 * 显示、关闭添加学科的div: showAddSubjectDiv()
 *      @param:
 *          subjectDiv: 页面中的学科div
 * 添加学科: addSubject()
 *      @param:
 *          subObj:页面中学科div中的表格
 */

//显示、关闭添加学科的div
var showAddSubjectDiv = function (subjectDiv) {
    //如果 gradeDiv 是jQuery对象，先转化为Dom对象
    if(subjectDiv instanceof $)
        subjectDiv = subjectDiv[0];

    //点击添加提交按钮时，显示div接受信息
    if(subjectDiv.style.display === 'none') {
        subjectDiv.style.display = 'block';
        //为课程id框赋值，自动生成
        subjectDiv.children[0].children[0].children[0].children[1].children[0].value =
            100000 + subArr.length * 10;
    }
    else subjectDiv.style.display = 'none';
};

//添加学科
var addSubject = function(subObj){
    var subId = '';
    var subName = '';

    //学科id由系统自动生成
    //alert(subObj.children[0].children[1])
    subId = subObj.children[0].children[1].children[0].value;

    //学科name由人工输入
    subName = subObj.children[1].children[1].children[0].value;

    //新一个学科对象
    var subject = new Subject(subId, subName);
    subArr.push(subject);
console.log(subArr);

    //创建后之前的信息更新
    //id更新
    subObj.children[0].children[1].children[0].value = 100000 + subArr.length * 10;
    //课程name清空
    subObj.children[1].children[1].children[0].value = '';
};