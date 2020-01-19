/**
 *  显示、关闭添加学生的div：showAddStudentsDiv()
 *      @param:
 *          studentDiv:页面中学生div
 *  添加学生：addStudent()
 *      @param:
 *          tableObj:页面中学生div中的表格
 */

//显示、关闭添加学生的div
var showAddStudentsDiv = function(studentDiv){
    //如果 studentDiv 是jQuery对象，先转化为Dom对象
    if(studentDiv instanceof $) studentDiv = studentDiv[0];

    //点击添加学生按钮时，显示div接受信息
    if(studentDiv.style.display === 'none') {
        studentDiv.style.display = 'block';
        //为表格中的学号框赋值，该值是根据已有学生人数自动添加
        studentDiv.children[0].children[0].children[0].children[1].children[0].value =
            1000 + stuArr.length * 10;
    }
    else studentDiv.style.display = 'none';
};

//添加学生
var addStudent = function(tableObj){
    //点击form的提交按钮时，将信息回传，利用这些信息创建一个新学生
    var stuId = '';//自动生成
    var stuName = '';
    var stuSex = '';
    var stuBirthday = '';
    //要判断传回的信息是否符合实际：学号为数字，姓名不能时数字，性别栏必选，生日为数字
    // 新学生的学号就是学号框中的学号，自动赋值
    stuId = tableObj.children[0].children[1].firstChild.value;
    //判断姓名
    if(!isNaN(tableObj.children[1].children[1].children[0].value) ||
        (tableObj.children[1].children[1].children[0].value) === null ||
        (tableObj.children[1].children[1].children[0].value) === ''){

        alert("姓名不能为空，且不能是数字");
        return;
    } else{
         stuName = tableObj.children[1].children[1].children[0].value;
    }

    //判断性别
    if(tableObj.children[2].children[1].children[0].checked)
        stuSex = "男";
    else if(tableObj.children[2].children[1].children[1].checked)
        stuSex = "女";
    else{
        alert("请选择您的性别");
        return;
    }
    //判断生日
    if(isNaN(tableObj.children[3].children[1].children[0].value) ||
        tableObj.children[3].children[1].children[0].value.length != 8){
        alert("请用8位数字形式表示出生年月日");
        return;
    } else{
        stuBirthday = tableObj.children[3].children[1].children[0].value;
    }

    //新建学生对象
    var student = new Student(stuId, stuName, stuSex, stuBirthday);
    stuArr.push(student);
console.log(stuArr);

    //提交之后之前的信息改变
    //学生id自动增加
    tableObj.children[0].children[1].firstChild.value = 1000 + stuArr.length * 10;
    //先前的性别清空
    if(tableObj.children[2].children[1].children[0].checked)
        tableObj.children[2].children[1].children[0].checked = false;
    else if(tableObj.children[2].children[1].children[1].checked)
        tableObj.children[2].children[1].children[1].checked = false;
    //先前的名字清空
    tableObj.children[1].children[1].children[0].value = '';
    //先前的生日清空
    tableObj.children[3].children[1].children[0].value = '';

};