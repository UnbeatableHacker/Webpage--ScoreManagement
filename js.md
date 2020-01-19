# 1. 基础使用
- console.log(obj):在浏览器控制台查看obj的信息
- parseInt()：转换为整数
- parseFloat()：转换为浮点型
- isNaN()：判断是否为数字，true表示不是数字
- 设置按钮不可用:disable属性
## html中使用js

            <script type="text/javascript">
                js代码
            </script>

- js代码无论在head中还是body中，只要可以直接运行
## 外部js文件引入

            <script src=" ">
            </script>
            script标签内不能有任何代码

# 2. 基础语法
## 函数
### 函数定义
1. 方法一：声明式定义方法，可以定义在后调用在前，浏览器解释时自动将定义部分提到前面进行解释

            function functionName(){
            }

2. 方法二：函数定义式方法定义，必须先定义后调用，function后面直接加()不需要写函数名

            var name = function(){
            }

### 用function模拟创建类对象

            var Student = function(name, id , sex, classNum){
                this.name = name;
                this.id = id;
                this.sex = sex;
                this.classNum = classNum;
            }

            var stu0 = new Student("于睿", 520, "女", "3班")
            stu0.name;
            stu0.id;
            stu0.sex;
            stu0.classNum;

# 3. 对话框和事件处理
## 对话框
- 警告框alert(消息)
    - 警告框为有模式弹出框,用户必需对其进行响应,否则光标焦点无法回到页面,通常不太友好.
- 确认框confirm(提示消息)
    - 框有“确认”和“取消”两个选项，点击后返回的时布尔值

           var r = comfirm("Press a button")
           if(r == ture){
           }else{
           }

- 提示输入框prompt(提示消息，输入框默认值)
    - 返回输入框中的值

            var money = prompt("请出价","10")
            if (money < 10) alert('成交')
            else alert('滚')

## 事件处理
### 鼠标事件
    1. onClick： 单击鼠标时触发事件
    2. onDblClick：双击鼠标时触发事件
    3. onMouseOver：鼠标进入某组件上方时触发事件
    4. onMouseOut： 鼠标移出某组件上方时触发事件
    5. onMouseDown：鼠标按键被按下时触发事件
    6. onMouseUp：  鼠标按键被松开时触发事件
### 焦点事件
    7. onFocus：元素获得焦点时触发事件
    8. onBlur：元素失去焦点时触发事件
### 键盘事件
    9. onKeyDown：键盘某键被按下时触发事件
    10. onKeyUp：键盘某键被松开始时触发事件
    11. onKeyPress：键盘某键被按下或按住时触发事件
### 值改变事件
    12. onChange：用户改变域的内容时触发事件
### onLoad事件
    13. onLoad：页面或图片加载后触发事件
### 退出事件
    14. onUnLoad：用户退出页面时触发事件，不阻止用户退出
    15. onBeforeUnLoad：用户退出页面时触发事件，阻止用户退出
### onSubmit事件
    16. onSubmit事件：提交按钮被点击时触发事件，通常只需验证表单是否为合法的js代码，此事件返回false则阻止表单提交，此事件只能用于form标签上
### onSelect事件
    17. onSelect事件：文本被选定，实现复制文本到剪贴板功能

# 4. DOM编程
## 节点
1. 元素节点（标签）
2. 属性节点（参数）
3. 文本节点
4. 注释节点
### 节点的访问
    1. getElementByID()：一对一匹配对象，若未找到对象返回null
        - 不只是document可以调用getElementById，任何一个对象皆可，
        - 如p.getElementById('p0'),在所有p标签下寻找一个id为p0的p段落
    2. getElementsByTagName()：匹配所有给定元素名，返回一个数组，若为匹配到返回一个长度为0的数组
    3. getElementsByClassName()：匹配所有使用了给定class名的样式选择器的元素，返回一个数组
        - 只有元素节点有class属性，故只有元素节点可以调用该方法
    4. parentNode：此属性用来获取当前节点的父节点
    5. fristChild：获取当前节点的第一个子节点
    6. lastChild：获取当前节点的最后一个子节点
    6. children：获取当前节点的所有子节点列表
    8. nodeName：节点名称
    9. nodevalue：节点值，元素节点不能使
    10. nodeType：节点类型（整形数）
        | 元素节点  | 1
        | 属性节点  | 2
        | 文本节点  | 3
        | 注释节点  | 8
        | 文档节点  | 9

### 创建节点
    1. creatElement():根据指点的元素名称创建节点
    2. creatAttribute():根据指点的名称创建属性节点
    3. setAttributeNode():将给定的属性节点添加到元素上
    4. creatTextNode():创建文本节点

### 添加节点
    1. appendChild(node):将给定的节点添加到所有子节点最后
    2. insertBefore(node, targetNode):在targetNode节点之前插入节点；若不给targetNode参数，则添加到最后
    3. insertData(index, content):在index文本偏移处插入content内容

### 删除节点
    1. removeChild():从子节点中删除指定的node节点
    2.

## DOM主要对象
### Document对象
### Anchor对象
### Body对象
### Event对象
### Form对象
### Select对象
### Option对象
### Table对象
### TableRow对象
### TableCell对象
### Input Checkbox对象
### 浏览器对象
### window对象

# js对象应用
## js对象分类
    1. 本地对象
    2. 内置对象
    3. 宿主对象

## String对象
### 创建String对象
    var newstr = new String();
### String常用方法
    1. charAt(index):返回指定位置的字符
    2. indexOf(str, fromindex):返回某个指定的字符在字符串中首次出现的位置
    3. replace(resourse, replacement):将resource转化为replacement，原字符串不变
    4. split(separator, size):将字符串按照separator分割为size长度的数组，源字符串不变
    5. substr(start, length):从字符串中截取从start下标开始的指定数目的字符
    6. substring(start, stop):从字符串中截取位于start和stop下标之间的字符

## Date对象


## Array对象


## Math对象
    1. round(num):四舍五入
    2. random():随机数
| 1 | 2 | 3 |
| ---| ---| ---|
