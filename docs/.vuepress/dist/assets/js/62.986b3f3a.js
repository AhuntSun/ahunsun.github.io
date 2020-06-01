(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{382:function(t,_,e){"use strict";e.r(_);var v=e(33),i=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"第二讲：git删除、修改、撤销操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二讲：git删除、修改、撤销操作"}},[t._v("#")]),t._v(" 第二讲：Git删除、修改、撤销操作")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在第一讲中我们对"),e("code",[t._v("Git")]),t._v("进行了简单的入门介绍，相信聪明的你已经了解"),e("code",[t._v("Git")]),t._v("的基本使用了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/1.png",alt:"image-20200412134325276"}})]),t._v(" "),e("p",[t._v("这一讲我们来进一步深入学习"),e("code",[t._v("Git")]),t._v("应用，着重介绍"),e("code",[t._v("Git")]),t._v("的一些常见操作，包括：删除文件、比较文件、撤销修改、修改注释与查看帮助文档。")]),t._v(" "),e("h2",{attrs:{id:"一、删除文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、删除文件"}},[t._v("#")]),t._v(" 一、删除文件")]),t._v(" "),e("h3",{attrs:{id:"_1-git-rm-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-rm-file"}},[t._v("#")]),t._v(" 1."),e("code",[t._v("git rm <file>")])]),t._v(" "),e("p",[e("strong",[t._v("该命令用于删除版本库中的文件")]),t._v("；删除工作区和暂存区中的文件都会报错：")]),t._v(" "),e("ul",[e("li",[t._v("若用该指令删除"),e("strong",[t._v("工作区")]),t._v("中的文件，会报找不到文件的错误：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/2.png",alt:"image-20200405195803132"}})]),t._v(" "),e("ul",[e("li",[t._v("若用该指令删除"),e("strong",[t._v("暂存区")]),t._v("中的文件，报如下错误：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/3.png",alt:"image-20200405201638233"}})]),t._v(" "),e("blockquote",[e("p",[t._v("**所谓版本库中的文件指的是：**已经通过"),e("code",[t._v("commit")]),t._v("指令提交的文件，而不是工作区中的文件（"),e("strong",[t._v("红色")]),t._v("），或暂存区中的文件（"),e("strong",[t._v("绿色")]),t._v("）。")])]),t._v(" "),e("p",[e("code",[t._v("git rm")]),t._v("完成了两步操作：")]),t._v(" "),e("ul",[e("li",[t._v("**第一步：**将版本库中的文件删除；")]),t._v(" "),e("li",[t._v("**第二步：**将删除操作纳入暂存区（"),e("code",[t._v("stage")]),t._v("）。如下图所示，相当于执行了"),e("code",[t._v("git add test.txt")]),t._v("，随后可直接提交，完成"),e("code",[t._v("test.txt")]),t._v("的删除；")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/4.png",alt:"image-20200405201927597"}})]),t._v(" "),e("h3",{attrs:{id:"_2-rm-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-rm-file"}},[t._v("#")]),t._v(" 2."),e("code",[t._v("rm <file>")])]),t._v(" "),e("p",[e("strong",[t._v("该命令用于删除工作区和版本库中的文件，不能删除暂存区文件")]),t._v("；")]),t._v(" "),e("blockquote",[e("p",[t._v("**注意：**没有添加到"),e("code",[t._v("git")]),t._v("仓库中的本地文件，都属于工作区文件。")])]),t._v(" "),e("ul",[e("li",[t._v("删除"),e("strong",[t._v("工作区")]),t._v("中的文件时：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/5.png",alt:"image-20200405222915798"}})]),t._v(" "),e("ul",[e("li",[t._v("删除"),e("strong",[t._v("版本库")]),t._v("中的文件时：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/6.png",alt:"image-20200405223040208"}})]),t._v(" "),e("p",[t._v("与"),e("code",[t._v("git rm")]),e("strong",[t._v("不同的是")]),t._v("，该指令不会将删除操作纳入"),e("strong",[t._v("暂存区")]),t._v("。需要先将删除的"),e("code",[t._v("test.txt")]),t._v("纳入"),e("strong",[t._v("暂存区")]),t._v("，再提交到"),e("strong",[t._v("版本库")]),t._v("才能完成"),e("code",[t._v("test.txt")]),t._v("文件的删除；")]),t._v(" "),e("ul",[e("li",[t._v("删除"),e("strong",[t._v("暂存区")]),t._v("中文件时：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/7.png",alt:"image-20200405223452369"}})]),t._v(" "),e("p",[t._v("从图中可知"),e("code",[t._v("rm")]),t._v("命令只能删除工作区中的"),e("code",[t._v("test3.txt")]),t._v("，不能删除暂存区中的"),e("code",[t._v("test3.txt")]),t._v("；：")]),t._v(" "),e("h2",{attrs:{id:"二、重命名文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、重命名文件"}},[t._v("#")]),t._v(" 二、重命名文件")]),t._v(" "),e("h3",{attrs:{id:"_1-git-mv-file1-file2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-mv-file1-file2"}},[t._v("#")]),t._v(" 1."),e("code",[t._v("git mv <file1> <file2>")])]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("git")]),t._v("命令"),e("code",[t._v("git mv")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git mv test.txt test3.txt\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("将`test.txt`重命名为`test3.txt`；`mv`命令可理解为**剪切**的同时进行**更名**；\n")])])]),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/8.png",alt:"image-20200310092256341"}})]),t._v(" "),e("p",[e("code",[t._v("changes to be committed")]),t._v("  表示该修改已经纳入"),e("strong",[t._v("暂存区")]),t._v("，可以进行提交操作；")]),t._v(" "),e("blockquote",[e("p",[t._v("一般"),e("strong",[t._v("绿色")]),t._v("的文件（操作）表示已经提交到"),e("strong",[t._v("暂存区")]),t._v("了，不用再进行"),e("code",[t._v("git add")]),t._v(" ，可以直接进行提交（"),e("code",[t._v("git commit")]),t._v("）。")])]),t._v(" "),e("p",[t._v("从上文可知"),e("code",[t._v("git mv")]),t._v("做了两件事：")]),t._v(" "),e("ul",[e("li",[t._v("**第一步：**将文件"),e("code",[t._v("test.txt")]),t._v("重命名为"),e("code",[t._v("test3.txt")]),t._v("；")]),t._v(" "),e("li",[e("strong",[t._v("第二步："),e("strong",[t._v("将重命名操作"),e("code",[t._v("test.txt -> test3.txt")]),t._v("纳入")]),t._v("暂存区")]),t._v("；")])]),t._v(" "),e("h3",{attrs:{id:"_2-mv-file1-file2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mv-file1-file2"}},[t._v("#")]),t._v(" 2."),e("code",[t._v("mv <file1> <file2>")])]),t._v(" "),e("p",[t._v("使用系统命令"),e("code",[t._v("mv")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mv test2.txt test3.txt\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("执行该语句后查看状态"),e("code",[t._v("git status")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/9.png",alt:"image-20200310095219961"}})]),t._v(" "),e("p",[t._v("发现工作区中多出两步操作：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("删除文件"),e("code",[t._v("test2.txt")]),t._v("；")])]),t._v(" "),e("li",[e("p",[t._v("新建文件"),e("code",[t._v("text3.txt")]),t._v("；")])])]),t._v(" "),e("p",[t._v("再使用"),e("code",[t._v("git add test2.txt test3.txt")]),t._v("  将操作提交到暂存区，通过"),e("code",[t._v("git status")]),t._v("查看状态：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/10.png",alt:"image-20200310095715353"}})]),t._v(" "),e("p",[t._v("此时"),e("code",[t._v("git")]),t._v("立即就能识别出来这是一个文件重命名；")]),t._v(" "),e("p",[e("strong",[t._v("由此说明"),e("code",[t._v("git mv")]),t._v("进行了三步操作：")])]),t._v(" "),e("ul",[e("li",[t._v("**第一步：**删除工作区中重命名前的文件"),e("code",[t._v("test2.txt")]),t._v("；")]),t._v(" "),e("li",[t._v("**第二步：**在工作区中创建重命名后的文件"),e("code",[t._v("test3.txt")]),t._v("；")]),t._v(" "),e("li",[e("strong",[t._v("第三步："),e("strong",[t._v("将上述的两个操作提交到")]),t._v("暂存区")]),t._v("中；")])]),t._v(" "),e("p",[t._v("即"),e("code",[t._v("git mv")]),t._v(" 与 "),e("code",[t._v("mv")]),t._v("的区别相当于"),e("code",[t._v("git rm")]),t._v(" 与 "),e("code",[t._v("rm")]),t._v(" 之间的区别。")]),t._v(" "),e("h2",{attrs:{id:"三、比较文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、比较文件"}},[t._v("#")]),t._v(" 三、比较文件")]),t._v(" "),e("h3",{attrs:{id:"_1-本地文件-本地文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地文件-本地文件"}},[t._v("#")]),t._v(" 1.本地文件 "),e("code",[t._v("<->")]),t._v(" 本地文件")]),t._v(" "),e("h4",{attrs:{id:"diff-file-a-file-b"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-file-a-file-b"}},[t._v("#")]),t._v(" "),e("code",[t._v("diff file_a file_b")])]),t._v(" "),e("p",[t._v("这是系统提供的比较命令，用于比较本地文件或已经提交到版本库的文件。创建文件"),e("code",[t._v("a")]),t._v("和文件"),e("code",[t._v("b")]),t._v("，使用上述指令进行比较：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/11.png",alt:"image-20200406231641027"}})]),t._v(" "),e("p",[e("strong",[t._v("在 "),e("code",[t._v("diff -u a b")]),t._v("的输出信息中：")])]),t._v(" "),e("blockquote",[e("p",[t._v("加上参数"),e("code",[t._v("-u")]),t._v("可以更详细地显示比较信息。")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("**"),e("code",[t._v("--- a")]),t._v("**表示"),e("code",[t._v("a")]),t._v("为原文件；")])]),t._v(" "),e("li",[e("p",[t._v("**"),e("code",[t._v("+++ b")]),t._v("**表示"),e("code",[t._v("b")]),t._v("为目标文件；")])]),t._v(" "),e("li",[e("p",[e("strong",[e("code",[t._v("-1，3")]),e("strong",[t._v("中   "),e("strong",[e("code",[t._v("-")])]),t._v("   表示原文件即"),e("code",[t._v("a")]),t._v("，")]),e("code",[t._v("1")])]),t._v("  表示原文件中的第一行，"),e("strong",[e("code",[t._v("3")])]),t._v("  表示到第"),e("code",[t._v("3")]),t._v("行。合起来的意思为："),e("strong",[t._v("在原文件"),e("code",[t._v("a")]),t._v("中的"),e("code",[t._v("1~3")]),t._v("行")]),t._v("；")])]),t._v(" "),e("li",[e("p",[t._v("同理："),e("strong",[e("code",[t._v("+1，3")])]),t._v("  表示："),e("strong",[t._v("目标文件"),e("code",[t._v("b")]),t._v("中的"),e("code",[t._v("1~3")]),t._v("行")]),t._v("；")])]),t._v(" "),e("li",[e("p",[t._v("数据前面"),e("strong",[t._v("有三种符号")]),t._v("，分别表示不同的信息：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("空格")]),t._v("：表示该行在两个文件中都存在，如上图所示"),e("code",[t._v("AABB")]),t._v("这一行文件"),e("code",[t._v("a")]),t._v("，"),e("code",[t._v("b")]),t._v("都有；")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("-")])]),t._v(" ：表示原文件"),e("code",[t._v("a")]),t._v("去掉该行就能变为目标文件"),e("code",[t._v("b")]),t._v("；")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("+")])]),t._v(" ：表示原文件"),e("code",[t._v("a")]),t._v("加上该行就能变为目标文件"),e("code",[t._v("b")]),t._v("；")])]),t._v(" "),e("p",[t._v("所以整个输出信息的意思为："),e("code",[t._v("AABB")]),t._v("这一行两文件都有，只要原文件"),e("code",[t._v("a")]),t._v("去掉：")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("a1\na2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("并加上：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("b1\nb2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("就能变为目标文件"),e("code",[t._v("b")]),t._v("；")]),t._v(" "),e("h3",{attrs:{id:"_2-工作区-暂存区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作区-暂存区"}},[t._v("#")]),t._v(" 2.工作区 "),e("code",[t._v("<-")]),t._v(" 暂存区")]),t._v(" "),e("p",[t._v("以下为"),e("code",[t._v("git")]),t._v("提供的比较命令，作用为：比较"),e("strong",[t._v("暂存区")]),t._v("和"),e("strong",[t._v("工作区")]),t._v("中的同一文件。并且："),e("strong",[t._v("原始文件")]),t._v("为"),e("strong",[t._v("暂存区")]),t._v("中的文件，"),e("strong",[t._v("目标文件")]),t._v("为"),e("strong",[t._v("工作区")]),t._v("中的文件。示例如下：")]),t._v(" "),e("h4",{attrs:{id:"git-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" "),e("code",[t._v("git diff")])]),t._v(" "),e("p",[t._v("首先，新建文件"),e("code",[t._v("A.txt")]),t._v("和"),e("code",[t._v("B.txt")]),t._v("，修改其内容并提交到"),e("strong",[t._v("暂存区")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/12.png",alt:"image-20200412120920654"}})]),t._v(" "),e("p",[t._v("然后，在"),e("strong",[t._v("工作区")]),t._v("中再次修改文件"),e("code",[t._v("A.txt")]),t._v("与"),e("code",[t._v("B.txt")]),t._v("的内容：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/13.png",alt:"image-20200412121509360"}})]),t._v(" "),e("p",[t._v("此时使用**"),e("code",[t._v("git diff")]),t._v("**进行比较：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/14.png",alt:"image-20200412122316757"}})]),t._v(" "),e("p",[e("strong",[t._v("在 "),e("code",[t._v("git diff")]),t._v("的输出信息中：")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("--- a/A.txt")]),t._v("：表示"),e("strong",[t._v("原文件")]),t._v("为"),e("strong",[t._v("暂存区")]),t._v("中的"),e("code",[t._v("A.txt")]),t._v("；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("+++ b/A.txt")]),t._v("：表示"),e("strong",[t._v("目标文件")]),t._v("为"),e("strong",[t._v("工作区")]),t._v("中的"),e("code",[t._v("A.txt")]),t._v("；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("-1")]),t._v("： 其中"),e("code",[t._v("-")]),t._v("表示原文件，"),e("code",[t._v("1")]),t._v("表示从第"),e("code",[t._v("1")]),t._v("行开始。由于暂存区中的"),e("code",[t._v("A.txt")]),t._v("文件（"),e("strong",[t._v("原文件")]),t._v("）只有"),e("code",[t._v("1")]),t._v("行，所以将原来的"),e("code",[t._v("(-1,1)")]),t._v("简写为"),e("code",[t._v("-1")]),t._v("；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("+1，2")]),t._v("：其中"),e("code",[t._v("+")]),t._v("表示目标文件，"),e("code",[t._v("1，2")]),t._v("表示工作区中的"),e("code",[t._v("A.txt")]),t._v("文件（"),e("strong",[t._v("目标文件")]),t._v("）从第"),e("code",[t._v("1")]),t._v("行开始有"),e("code",[t._v("2")]),t._v("行；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("hello world")]),t._v("：表示"),e("strong",[t._v("原文件")]),t._v("和"),e("strong",[t._v("目标文件")]),t._v("中都存在的内容；")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("+hello java")]),t._v("表示暂存区中的"),e("code",[t._v("A.txt")]),t._v("加上该行，就能变得与工作区中的"),e("code",[t._v("A.txt")]),t._v("一样；")])])]),t._v(" "),e("p",[t._v("可以看到该指令是将同一文件的"),e("strong",[t._v("工作区")]),t._v("版本与"),e("strong",[t._v("暂存区")]),t._v("版本进行比较，各比各的，并不会将"),e("code",[t._v("A.txt")]),t._v("与"),e("code",[t._v("B.txt")]),t._v("进行比较。")]),t._v(" "),e("h3",{attrs:{id:"_3-工作区-版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-工作区-版本库"}},[t._v("#")]),t._v(" 3.工作区 "),e("code",[t._v("<-")]),t._v(" 版本库")]),t._v(" "),e("p",[t._v("以下指令作用为：比较"),e("strong",[t._v("版本库")]),t._v("和"),e("strong",[t._v("工作区")]),t._v("中的同一文件。并且："),e("strong",[t._v("原始文件")]),t._v("为"),e("strong",[t._v("版本库")]),t._v("中的文件，"),e("strong",[t._v("目标文件")]),t._v("为"),e("strong",[t._v("工作区")]),t._v("中的文件。")]),t._v(" "),e("h4",{attrs:{id:"git-diff-commit-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-commit-id"}},[t._v("#")]),t._v(" "),e("code",[t._v("git diff commit_id")])]),t._v(" "),e("p",[t._v("用于比较指定"),e("code",[t._v("commit id")]),t._v("提交上的"),e("code",[t._v("A")]),t._v("文件和工作区中的"),e("code",[t._v("A")]),t._v("文件；")]),t._v(" "),e("h4",{attrs:{id:"git-diff-head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-head"}},[t._v("#")]),t._v(" "),e("code",[t._v("git diff HEAD")])]),t._v(" "),e("p",[t._v("用于比较最新提交上的"),e("code",[t._v("A")]),t._v("文件和工作区中的"),e("code",[t._v("A")]),t._v("文件：")]),t._v(" "),e("blockquote",[e("p",[t._v("上面的"),e("code",[t._v("A")]),t._v("文件仅为一个示例，以下同理。")])]),t._v(" "),e("p",[t._v("如下图所示，先初始化"),e("code",[t._v("test.txt")]),t._v("为："),e("code",[t._v("版本库中的修改")]),t._v("，然后进行一次提交；随后在工作区中为"),e("code",[t._v("test.txt")]),t._v("添加"),e("code",[t._v("工作区的修改")]),t._v("；然后执行上述比较指令，从显示出来的比较结果可知，工作区中的"),e("code",[t._v("test.txt")]),t._v("文件比最新一次提交的"),e("code",[t._v("test.txt")]),t._v("文件多了一行"),e("code",[t._v("工作区中的修改")]),t._v("内容。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/15.png",alt:"image-20200412115931597"}})]),t._v(" "),e("h3",{attrs:{id:"_4-暂存区-版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-暂存区-版本库"}},[t._v("#")]),t._v(" 4.暂存区 "),e("code",[t._v("<-")]),t._v(" 版本库")]),t._v(" "),e("p",[t._v("以下指令作用为：比较"),e("strong",[t._v("版本库")]),t._v("和"),e("strong",[t._v("暂存区")]),t._v("中的同一文件，其中"),e("strong",[t._v("原始文件")]),t._v("为"),e("strong",[t._v("版本库")]),t._v("中的文件，"),e("strong",[t._v("目标文件")]),t._v("为"),e("strong",[t._v("暂存区")]),t._v("中的文件：")]),t._v(" "),e("h4",{attrs:{id:"git-diff-cached-commit-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-cached-commit-id"}},[t._v("#")]),t._v(" "),e("code",[t._v("git diff --cached commit_id")])]),t._v(" "),e("p",[t._v("用于比较指定提交上的"),e("code",[t._v("A")]),t._v("文件和暂存区中的"),e("code",[t._v("A")]),t._v("文件；")]),t._v(" "),e("h4",{attrs:{id:"git-diff-cached"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-cached"}},[t._v("#")]),t._v(" "),e("code",[t._v("git diff --cached")])]),t._v(" "),e("p",[t._v("用于比较最新提交上的"),e("code",[t._v("A")]),t._v("文件和暂存区中的"),e("code",[t._v("A")]),t._v("文件。示例如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/16.png",alt:"image-20200407000812878"}})]),t._v(" "),e("p",[t._v("可以看到，暂存区中的"),e("code",[t._v("A.txt")]),t._v("文件比最新提交中的"),e("code",[t._v("A.txt")]),t._v("文件多了一行"),e("code",[t._v("hello java")]),t._v("；暂存区中的"),e("code",[t._v("B.txt")]),t._v("文件比最新提交中的"),e("code",[t._v("B.txt")]),t._v("文件多了一行"),e("code",[t._v("hello java2")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_5-总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5.总结")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("关于目标文件与原始文件的判定，遵循的顺序为：工作区 "),e("code",[t._v("<-")]),t._v(" 暂存区 "),e("code",[t._v("<-")]),t._v("版本库（提交）；")])]),t._v(" "),e("li",[e("p",[t._v("上述比较指令的比较如下表所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("原始文件")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("目标文件")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("diff <file1> <file2>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较两个本地文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("本地文件/版本库")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("本地文件/版本库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("git diff")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较暂存区和工作区中的同一文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("git diff commit_id")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较指定"),e("code",[t._v("commit id")]),t._v("提交上的"),e("code",[t._v("A")]),t._v("文件和工作区中的"),e("code",[t._v("A")]),t._v("文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("git diff HEAD")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较最新提交上的"),e("code",[t._v("A")]),t._v("文件和工作区中的"),e("code",[t._v("A")]),t._v("文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("git diff --cached commit_id")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较指定提交上的"),e("code",[t._v("A")]),t._v("文件和暂存区中的"),e("code",[t._v("A")]),t._v("文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("git diff --cached")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较最新提交上的"),e("code",[t._v("A")]),t._v("文件和暂存区中的"),e("code",[t._v("A")]),t._v("文件")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("表格中的"),e("code",[t._v("A")]),t._v("文件仅为示例。")])])])]),t._v(" "),e("h2",{attrs:{id:"四、撤销修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、撤销修改"}},[t._v("#")]),t._v(" 四、撤销修改")]),t._v(" "),e("p",[t._v("主要是将已经纳入"),e("strong",[t._v("暂存区")]),t._v("的修改（"),e("strong",[t._v("绿色")]),t._v("），先恢复到"),e("strong",[t._v("工作区")]),t._v("（"),e("strong",[t._v("红色")]),t._v("），再恢复到修改前。比如撤销"),e("code",[t._v("git rm")]),t._v("这一删除操作：")]),t._v(" "),e("h3",{attrs:{id:"_1-将暂存区修改恢复到工作区（unstage）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-将暂存区修改恢复到工作区（unstage）"}},[t._v("#")]),t._v(" 1.将暂存区修改恢复到工作区（"),e("code",[t._v("unstage")]),t._v("）")]),t._v(" "),e("blockquote",[e("p",[t._v("也就是将对文件的修改操作由"),e("strong",[t._v("绿色")]),t._v("变为"),e("strong",[t._v("红色")]),t._v("。")])]),t._v(" "),e("h4",{attrs:{id:"法一：git-reset-head-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法一：git-reset-head-file"}},[t._v("#")]),t._v(" 法一："),e("code",[t._v("git reset head <file>")])]),t._v(" "),e("p",[t._v("如下图所示，通过"),e("code",[t._v("git rm")]),t._v("删除了版本库中的"),e("code",[t._v("test3.txt")]),t._v("文件，并将该操作提交到了暂存区。随后通过以上命令，将这一删除操作恢复到了工作区；")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/17.png",alt:"image-20200405225413462"}})]),t._v(" "),e("h4",{attrs:{id:"法二：git-restore-stage-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法二：git-restore-stage-file"}},[t._v("#")]),t._v(" 法二："),e("code",[t._v("git restore --stage <file>")])]),t._v(" "),e("p",[t._v("这里的参数"),e("code",[t._v("--stage")]),t._v("写成"),e("code",[t._v("--staged")]),t._v("效果是一样的，作用与法一相同：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/18.png",alt:"image-20200405225640532"}})]),t._v(" "),e("h3",{attrs:{id:"_2-撤销工作区操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-撤销工作区操作"}},[t._v("#")]),t._v(" 2.撤销工作区操作")]),t._v(" "),e("p",[t._v("比如撤销工作区中对文件的修改、新增和删除操作：")]),t._v(" "),e("h4",{attrs:{id:"法一：git-restore-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法一：git-restore-file"}},[t._v("#")]),t._v(" 法一："),e("code",[t._v("git restore <file>")])]),t._v(" "),e("p",[t._v("如下图所示，在工作区中删除了"),e("code",[t._v("test3.txt")]),t._v("文件。然后，通过上述指令撤销了工作区中对"),e("code",[t._v("test3.txt")]),t._v("的删除操作：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/19.png",alt:"image-20200405230055203"}})]),t._v(" "),e("h4",{attrs:{id:"法二：git-checkout-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法二：git-checkout-file"}},[t._v("#")]),t._v(" 法二："),e("code",[t._v("git checkout -- <file>")])]),t._v(" "),e("p",[t._v("作用与法一相同：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/20.png",alt:"image-20200405230315968"}})]),t._v(" "),e("h2",{attrs:{id:"五、修改提交注释与作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、修改提交注释与作者"}},[t._v("#")]),t._v(" 五、修改提交注释与作者")]),t._v(" "),e("h3",{attrs:{id:"_1-修改最近一次提交信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改最近一次提交信息"}},[t._v("#")]),t._v(" 1.修改最近一次提交信息")]),t._v(" "),e("h4",{attrs:{id:"git-commit-amend-m-修正信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend-m-修正信息"}},[t._v("#")]),t._v(" "),e("code",[t._v("git commit --amend -m")]),t._v(" '修正信息'")]),t._v(" "),e("p",[t._v("如果写错了提交消息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/21.png",alt:"image-20200310101619708"}})]),t._v(" "),e("p",[t._v("可以通过："),e("code",[t._v("git commit --amend -m '注释'")]),t._v("   来修改"),e("strong",[t._v("上一次")]),t._v("的提交信息：（"),e("code",[t._v("amend")]),t._v("是修复的意思）")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/22.png",alt:"image-20200310101729451"}})]),t._v(" "),e("h4",{attrs:{id:"git-commit-amend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend"}},[t._v("#")]),t._v(" "),e("code",[t._v("git commit --amend")])]),t._v(" "),e("p",[t._v("当需要为最近一次提交添加大量注释时，可以直接使用该指令进入"),e("code",[t._v("vim")]),t._v("编辑器编辑：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/23.png",alt:"image-20200407111646674"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/24.png",alt:"image-20200407111918667"}})]),t._v(" "),e("p",[t._v("这样的好处是：错误的提交和修正后的提交经过该命令修正后，只变为"),e("strong",[t._v("一次提交")]),t._v("，而不是两次提交；")]),t._v(" "),e("h4",{attrs:{id:"git-commit-amend-author-name-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend-author-name-email"}},[t._v("#")]),t._v(" "),e("code",[t._v("git commit --amend --author 'Name<email>'")])]),t._v(" "),e("p",[t._v("用于修改最近一次提交的配置信息，包含作者和注释信息。执行命令时会进入"),e("code",[t._v("vim")]),t._v("编辑器编辑注释信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/25.png",alt:"image-20200407112745165"}})]),t._v(" "),e("p",[t._v("修改前该分支上最近两次的提交信息为：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/26.png",alt:"image-20200407113017530"}})]),t._v(" "),e("p",[t._v("修改后的最近两次提交信息为：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/27.png",alt:"image-20200407112949897"}})]),t._v(" "),e("p",[t._v("可以看到成功地改变了最新一次提交的作者和提交注释。")]),t._v(" "),e("blockquote",[e("p",[t._v("**注意：**修改提交注释的同时，虽然提交的内容相同，但是提交前后的"),e("code",[t._v("commit_id")]),t._v("是不同的，说明创建了一个新提交替换了原来需要修正的提交。如下图中的提交"),e("code",[t._v("5")]),t._v("与提交"),e("code",[t._v("3")]),t._v("所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/28.png",alt:"image-20200412135216028"}})])]),t._v(" "),e("h3",{attrs:{id:"_2-修改特定提交信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改特定提交信息"}},[t._v("#")]),t._v(" 2.修改特定提交信息")]),t._v(" "),e("p",[t._v("如图所示，在"),e("code",[t._v("test")]),t._v("分支进行了四次提交。现在我们想要修改第三次提交的提交信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/29.png",alt:"image-20200409220741630"}})]),t._v(" "),e("h4",{attrs:{id:"git-rebase-i-commit-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-i-commit-id"}},[t._v("#")]),t._v(" "),e("code",[t._v("git rebase -i commit_id")])]),t._v(" "),e("p",[t._v("通过以上指令可以进入"),e("code",[t._v("rebase")]),t._v("交互模式，并显示"),e("code",[t._v("commit_id")]),t._v("之后的提交信息。比如：若命令中的"),e("code",[t._v("commit_id")]),t._v("为第一次提交的"),e("code",[t._v("commit_id")]),t._v("，那么就会显示第"),e("code",[t._v("2~4")]),t._v("次的提交信息。这里我们需要修改第三次提交的信息，只需要将它指定为第二次提交的"),e("code",[t._v("commit_id")]),t._v("即可。执行以下命令，进入"),e("code",[t._v("vim")]),t._v("编辑器：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase -i 678e0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/30.png",alt:"image-20200409221442183"}})]),t._v(" "),e("p",[t._v("在这个界面中，我们可以通过将"),e("code",[t._v("pick")]),t._v("参数修改为其他"),e("code",[t._v("rebase")]),t._v("提供的参数，从而对第三次错误提交进行修改。有两个参数可以实现这一目的：")]),t._v(" "),e("blockquote",[e("p",[t._v("这里涉及到"),e("code",[t._v("vim")]),t._v("编辑器的使用方式：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("shift + A")]),t._v("为插入命令，可进入"),e("code",[t._v("vim")]),t._v("编辑器的编辑模式；")]),t._v(" "),e("li",[t._v("编辑完成后，先按"),e("code",[t._v("ESC")]),t._v("回到"),e("code",[t._v("vim")]),t._v("编辑器的命令行模式，再输入"),e("code",[t._v(":wq")]),t._v("表示保存并退出编辑器；")])])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("reword")]),t._v("参数")])]),t._v(" "),e("p",[t._v("该参数的意思是：直接修改设置了该参数的提交的提交注释。这里应该将第三次提交的"),e("code",[t._v("pick")]),t._v("参数改为"),e("code",[t._v("reword")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/31.png",alt:"image-20200409221729553"}})]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v(":wq")]),t._v("保存并退出，随后再次进入"),e("code",[t._v("vim")]),t._v("编辑器，这次是修改设置了"),e("code",[t._v("reword")]),t._v("参数的提交的提交注释：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/32.png",alt:"image-20200409222313064"}})]),t._v(" "),e("p",[t._v("将它改为正确的提交信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/33.png",alt:"image-20200409222354009"}})]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v(":wq")]),t._v("保存并退出"),e("code",[t._v("vim")]),t._v("编辑器，完成错误提交信息的修改，再次查看历史提交信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/34.png",alt:"image-20200409222546686"}})]),t._v(" "),e("p",[t._v("可以发现：错误的提交信息得到了纠正，并且这次提交及其之后的提交的"),e("code",[t._v("commit_id")]),t._v("都发生了变化。说明"),e("code",[t._v("git")]),t._v("新创建了对应数目的提交，并对原有提交进行了覆盖，但是内容没有发生变化；")]),t._v(" "),e("blockquote",[e("p",[t._v("事实上："),e("code",[t._v("rebase")]),t._v("的含义为变换基准，"),e("code",[t._v("git rebase -i commit_id")]),t._v("中的"),e("code",[t._v("commit_id")]),t._v("所指的提交节点就是新的基准点。该基准点之后的提交都会被"),e("code",[t._v("git")]),t._v("新创建的，内容一样的新提交所覆盖。"),e("code",[t._v("rebase")]),t._v("指令之后会详细介绍。")])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("edit")]),t._v("参数")])]),t._v(" "),e("p",[t._v("该参数也可以达到上述效果，只不过稍微多了几个步骤。这个参数的意思是：停下"),e("code",[t._v("rebase")]),t._v("进程，编辑添加了该参数的提交，编辑完之后，通过调用"),e("code",[t._v("git rebase --continue")]),t._v("继续进行"),e("code",[t._v("rebase")]),t._v("；具体如下：")]),t._v(" "),e("p",[t._v("将添加了错误提交信息的提交的"),e("code",[t._v("pick")]),t._v("参数改为"),e("code",[t._v("edit")]),t._v("参数：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/35.png",alt:"image-20200409223222526"}})]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v(":wq")]),t._v("保存并退出：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/36.png",alt:"image-20200409223307520"}})]),t._v(" "),e("p",[t._v("可以看到，"),e("code",[t._v("edit")]),t._v("参数将"),e("code",[t._v("rebase")]),t._v("操作停了下来。根据提示，可以通过：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git commit --amend\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("进入"),e("code",[t._v("vim")]),t._v("编辑器，修改当前提交的注释信息：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/37.png",alt:"image-20200409223703479"}})]),t._v(" "),e("p",[t._v("修改完后，通过"),e("code",[t._v(":wq")]),t._v("保存并退出"),e("code",[t._v("vim")]),t._v("编辑器。再调用：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase --continue\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("继续进行"),e("code",[t._v("rebase")]),t._v("操作，由此完成错误提交信息的修改：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/38.png",alt:"image-20200409223842997"}})]),t._v(" "),e("p",[t._v("此时查看"),e("code",[t._v("test")]),t._v("分支的提交历史，会发现错误的提交信息得到了更正，并且与上"),e("code",[t._v("reword")]),t._v("参数一样，创建了新的提交，对原有提交进行了覆盖，同样内容也不发生变化：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/39.png",alt:"image-20200409224153743"}})]),t._v(" "),e("h4",{attrs:{id:"git-rebase-i-head-n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-i-head-n"}},[t._v("#")]),t._v(" "),e("code",[t._v("git rebase -i HEAD~n")])]),t._v(" "),e("p",[t._v("通过上述指令也可以进入"),e("code",[t._v("rebase")]),t._v("交互模式，其中"),e("code",[t._v("n")]),t._v("表示需要显示的最近"),e("code",[t._v("n")]),t._v("次提交记录。比如通过以下指令，显示"),e("code",[t._v("test")]),t._v("分支最近的三次提交记录：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase -i HEAD~3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/40.png",alt:"image-20200409224856810"}})]),t._v(" "),e("p",[t._v("进入"),e("code",[t._v("rebase")]),t._v("的交互界面之后，后续的操作和结果都与第一种方法一样，这里就不再赘述了。")]),t._v(" "),e("h2",{attrs:{id:"六、获取帮助"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、获取帮助"}},[t._v("#")]),t._v(" 六、获取帮助")]),t._v(" "),e("h3",{attrs:{id:"_1-git-help-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-help-config"}},[t._v("#")]),t._v(" 1."),e("code",[t._v("git help config")])]),t._v(" "),e("p",[t._v("该命令会打开"),e("code",[t._v("git")]),t._v("安装目录下的"),e("code",[t._v("git-config")]),t._v("帮助文档：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/41.png",alt:"image-20200412143709617"}})]),t._v(" "),e("p",[t._v("文档中详细地显示了相关操作指令的使用：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/42.png",alt:"image-20200412143856397"}})]),t._v(" "),e("h3",{attrs:{id:"_2-git-config-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-config-help"}},[t._v("#")]),t._v(" 2."),e("code",[t._v("git config --help")])]),t._v(" "),e("p",[t._v("效果与上述一样，都是弹出同样的帮助网页；")]),t._v(" "),e("h3",{attrs:{id:"_3-man-git-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-man-git-config"}},[t._v("#")]),t._v(" 3."),e("code",[t._v("man git-config")])]),t._v(" "),e("p",[e("code",[t._v("man")]),t._v("为"),e("code",[t._v("linux")]),t._v("中自带的帮助文档，也可以查看帮助；")]),t._v(" "),e("h3",{attrs:{id:"_4-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-git"}},[t._v("#")]),t._v(" 4."),e("code",[t._v("git")])]),t._v(" "),e("p",[t._v("直接在命令窗口显示常用的指令：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson2/43.png",alt:"image-20200310181313462"}})])])}),[],!1,null,null,null);_.default=i.exports}}]);