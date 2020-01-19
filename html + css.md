# html
## head
    - meta
    - title
## body
### 基本标签
    - (!--注释--)
    - (h1 ~ h6) (/h1 ~ /h6)
    - (p) (/p)：段落
    - (img src=''/)：图片
        - 与该html同路径的直接写,如<img src='imgs/java之父.jpg' />
        - 在该html路径的上一级，用‘..’返回到上一目录，如<img src='../imgs/java之父.jpg' />
    - (a href=' ') (/a)：超连接
        - 锚的使用：
            - 链接到锚记：(a href='# ') (/a)
            - 锚记：(a name=' ')(/a)
    - (ol) (ul):列表标签 -> (li) (/li)
        - ol：有序列表
            - type=A，a，I，i
        - ul：无序列表
            - type=disc，circle，square
### 文本格式化标签
    - (b) (/b):加粗
    - (big) (/big):大号字体
    - (em) (/em):突出字体
    - (small) (/small):小号字体
    - (i) (/i):斜体
    - (sub) (/sub):下标
    - (sup) (/sup):上标
    - (ins) (/ins):插入字
    - (u) (/u):下划线
    - (del) (/del):删除线
### 其他样式
    - %nbsp:
    - (br):换行
    - (hr/):水平尺
    - &gt; -> 大于号
    - &lt; -> 小于号
    - &reg; -> 注册标识
    - &copy; -> 版权标识
###

## table & form
### 样式

            <form>
                <table>
                    <caption>定义标题</caption>
                    <tr>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <td>
                    </tr>
                </table>
            </form>

### form标签&属性
   - 属性：action：指定url
   - 标签：公共的标签属性有：id，name，value，checked
        1. 文本框：(input type="text", 属性：maxlength)
        2. 单选按钮：(input type="radio" name=" " )按钮名
        3. 复选框：(input type="checkbox" name=" ")选项名
        4. 密码框：(<input type="password")
        5. 按钮：(input type="button")(input type="submit")(input type="reset")
        5. 多行文本：(texearea cols=" " rows=" ")
        6. 下拉列表：(select name=" ")(option value=" ")选项名(/option)(/select)
        8. 表单隐藏域：(input type="hidden")
        9. 表单文件域：(input type="file") 用于上传文件

## frame框架
### 样式:
    - frame与body不能同时使用

            <frameset rows/cols=" , " frameborder="", framespacing="", bordercolor="">
                <frame src=" ", name, scrolling, noresize>
                <frameset rows/cols=" , ">
                    <frame src=" ">
                    <frame src=" ">
                </frameset>
            </frameste>

## 样式
### 内嵌样式：
    - 之前使用的在标签中的style属性
### 内部样式
    - 在html文档中，在<head></head>标签下添加<style></style>标签，从而使整个页面中的标签共享此样式
    - 样式选择器：

            <head>
                <style type="text/css">
                    html样式选择器，设置后自动加载，如：
                    body{
                        样式设置
                    }
                    p{
                        样式设置：
                    }
                    class样式选择器，设置后手动加载，如：
                    .tr_1{
                        样式设置：
                    }
                    id样式选择器，使用较少，如：
                    #id_2{
                        样式设置：
                    }
                </styel>
            </head>
            <body>
                <tr class='tr_1'>
            </body>
### 外部样式