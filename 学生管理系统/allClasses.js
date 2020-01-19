
//新建一个学生数组
var stuArr = new Array();
//自定义学生类
var Student = function(stuId, stuName, stuSex, stuBirthday){
    this.stuId = stuId;
    this.stuName = stuName;
    this.stuSex = stuSex;
    this.stuBirthday = stuBirthday;
};



//新建学科数组
var subArr = new Array();
//自定义学科类
var Subject = function(subId, subName){
    this.subId = subId;
    this.subName = subName;
};



//新建成绩数组
var scoreArr = new Array();
//自定义成绩类
var Score = function(grade, scoreId, testDate, stuId, subId){
    this.grade = grade;
    this.scoreId = scoreId;
    this.testDate = testDate;
    this.subId = subId;
    this.stuId = stuId;
};