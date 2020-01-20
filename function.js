var total; //员工总人数
var bar = 5;   //本页显示的信息数
var pages; //共几页
var page = 1; //当前页码

//员工数组
var employees = new Array();
//定义员工类
var employee = function(id, name, age, sex, address){
    this.id = id;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.address = address;
};
//初始化对象、页面
$(function() {
    //初始化员工数组
    employees.push(new employee('LZ001', '孙悟空', '40', 'm', '包子山'));
    employees.push(new employee('LZ002', '贝吉塔', '53', 'm', '贝吉塔星球'));
    employees.push(new employee('LZ003', '孙悟饭', '18', 'm', '包子山'));
    employees.push(new employee('LZ004', '比迪丽', '18', 'f', '撒旦市'));
    employees.push(new employee('LZ005', '比克', '150', 'm', '四海为家'));
    employees.push(new employee('LZ006', '克林', '42', 'm', '亀仙屋'));
    employees.push(new employee('LZ007', '18号', '41', 'm', '亀仙屋'));
    employees.push(new employee('LZ008', '沙鲁', '5', 'm', '地狱'));
    employees.push(new employee('LZ009', '弗利沙', '540', 'm', '地狱'));
    employees.push(new employee('LZ010', '魔人普乌', '600', 'm', '撒旦市'));
    employees.push(new employee('WQWZ001', '越前龙马', '13', 'm', '青春学园'));
    employees.push(new employee('WQWZ002', '手冢国光', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ003', '大石秀一郎', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ004', '乾贞之', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ005', '菊丸', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ006', '河村隆', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ007', '不二周助', '15', 'm', '青春学园'));
    employees.push(new employee('WQWZ008', '海棠熏', '14', 'm', '青春学园'));
    employees.push(new employee('WQWZ009', '桃城武', '14', 'm', '青春学园'));
    employees.push(new employee('WQSN001', '江流儿', '13', 'm', '寺庙'));
    employees.push(new employee('WQSN002', '黑木', '15', 'm', '东京'));
    employees.push(new employee('WQSN003', '方百花', '12', 'f', '江苏'));
    employees.push(new employee('WQSN004', '林新城', '55', 'm', '破庙'));
    //显示意义页内容
    addInfo(page);
    //计算出一共有几页
    computePages(employees);
    //显示页面信息
    creatSlect();
});


//添加一行数据
var count = 1;
var addTrInfo = function(index){
    //var newTr = $("<tr></tr>").appendTo("employeeInfoTable");
    //$("<td></td>").appendTo(newTr).text(count);
    //$("<td></td>").appendTo(newTr).text(employees[index].id);
    //$("<td></td>").appendTo(newTr).text(employees[index].name);
    //$("<td></td>").appendTo(newTr).text(employees[index].age);
    //$("<td></td>").appendTo(newTr).text(employees[index].sex);
    //$("<td></td>").appendTo(newTr).text(employees[index].address);

    //链条式语句，可以省略代码
    $("#employeeInfoTable").append(
        $("<tr></tr>").append($("<td></td>").text(count)).
            append($("<td></td>").text(employees[index].id)).
            append($("<td></td>").text(employees[index].name)).
            append($("<td></td>").text(employees[index].age)).
            append($("<td></td>").text(function(){
                if(employees[index].sex === 'm')
                    return '男';
                    return '女';
                })).
            append($("<td></td>").text(employees[index].address))
    );

    //$("#employeeInfoTable").append(
    //    $("<tr></tr>").append($("<td></td>").text(count),
    //        $("<td></td>").text(employees[index].id),
    //        $("<td></td>").text(employees[index].name),
    //        $("<td></td>").text(employees[index].age),
    //        $("<td></td>").text(function(){
    //            if(employees[index].sex === 'm')
    //                return '男';
    //                return '女';
    //                }),
    //        $("<td></td>").text(employees[index].address))
    //);

    count++;
};
//添加一组数据
var addInfo = function(numberPage){
    //如果之前有数据，先删除原数据
    var tableObj = $("#employeeInfoTable")[0];
    for(var i = 1; i < tableObj.rows.length;){
        if(tableObj.rows.length === 1)
            break;
        tableObj.deleteRow(i);
    }
    //添加本次数据
    for(var i = 0; i < bar; i++){
        if(numberPage === pages && employees.length % bar != 0) {
            if(i === employees.length % bar != 0)
                break
        }
        addTrInfo(i+5*(numberPage-1));
    }
    count = 1;
};
//上一页
var backPage = function(){
    //调用函数，显示一页
    if(page === 1 ){
        alert("当前为第一页");
        return ;
    }
    addInfo(--page);
    $("#goPage").val(page);
};
//下一页
var nextPage = function(){
    //调用函数，显示一页
    if(page === pages ){
        alert("当前为最后一页");
        return ;
    }
    addInfo(++page);
    $("#goPage").val(page);
};
//计算有几页
var computePages = function(goalArray){
    if(goalArray.length % bar === 0){
        pages = goalArray.length / bar;
        return pages;
    }
    else{
        pages = parseInt(goalArray.length / bar) + 1;
        return pages;
    }
};
//创建下拉列表框
var creatSlect = function(){
    for(var i = 1; i <= pages; i++){
        $("select").append($("<option></option>").text(i));
    }
};
//改变下拉列表的值，实现页面跳转
var goPage = function(goalPage){
    addInfo(parseInt(goalPage));
    page = parseInt(goalPage);
};
