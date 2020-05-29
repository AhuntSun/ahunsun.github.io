(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{333:function(t,_,v){"use strict";v.r(_);var e=v(33),i=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"标题（不论h几都占一层目录深度）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标题（不论h几都占一层目录深度）"}},[t._v("#")]),t._v(" 标题（不论h几都占一层目录深度）")]),t._v(" "),v("ul",[v("li",[t._v("标题使用h1字号，其他子标题依次使用h2~h5 *")])]),t._v(" "),v("p",[t._v("在第一讲中我们对"),v("code",[t._v("Git")]),t._v("进行了简单的入门介绍，相信聪明的你已经了解"),v("code",[t._v("Git")]),t._v("的基本使用了。")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C1.png",alt:"image-20200412134325276"}})]),t._v(" "),v("p",[t._v("这一讲我们来进一步深入学习"),v("code",[t._v("Git")]),t._v("应用，着重介绍"),v("code",[t._v("Git")]),t._v("的一些常见操作，包括：删除文件、比较文件、撤销修改、修改注释与查看帮助文档。")]),t._v(" "),v("h2",{attrs:{id:"一、删除文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、删除文件"}},[t._v("#")]),t._v(" 一、删除文件")]),t._v(" "),v("h3",{attrs:{id:"_1-git-rm-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-rm-file"}},[t._v("#")]),t._v(" 1."),v("code",[t._v("git rm <file>")])]),t._v(" "),v("p",[v("strong",[t._v("该命令用于删除版本库中的文件")]),t._v("；删除工作区和暂存区中的文件都会报错：")]),t._v(" "),v("ul",[v("li",[t._v("若用该指令删除"),v("strong",[t._v("工作区")]),t._v("中的文件，会报找不到文件的错误：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C2.png",alt:"image-20200405195803132"}})]),t._v(" "),v("ul",[v("li",[t._v("若用该指令删除"),v("strong",[t._v("暂存区")]),t._v("中的文件，报如下错误：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C3.png",alt:"image-20200405201638233"}})]),t._v(" "),v("blockquote",[v("p",[t._v("**所谓版本库中的文件指的是：**已经通过"),v("code",[t._v("commit")]),t._v("指令提交的文件，而不是工作区中的文件（"),v("strong",[t._v("红色")]),t._v("），或暂存区中的文件（"),v("strong",[t._v("绿色")]),t._v("）。")])]),t._v(" "),v("p",[v("code",[t._v("git rm")]),t._v("完成了两步操作：")]),t._v(" "),v("ul",[v("li",[t._v("**第一步：**将版本库中的文件删除；")]),t._v(" "),v("li",[t._v("**第二步：**将删除操作纳入暂存区（"),v("code",[t._v("stage")]),t._v("）。如下图所示，相当于执行了"),v("code",[t._v("git add test.txt")]),t._v("，随后可直接提交，完成"),v("code",[t._v("test.txt")]),t._v("的删除；")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C4.png",alt:"image-20200405201927597"}})]),t._v(" "),v("h4",{attrs:{id:"_2-rm-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-rm-file"}},[t._v("#")]),t._v(" 2."),v("code",[t._v("rm <file>")])]),t._v(" "),v("p",[v("strong",[t._v("该命令用于删除工作区和版本库中的文件，不能删除暂存区文件")]),t._v("；")]),t._v(" "),v("blockquote",[v("p",[t._v("**注意：**没有添加到"),v("code",[t._v("git")]),t._v("仓库中的本地文件，都属于工作区文件。")])]),t._v(" "),v("ul",[v("li",[t._v("删除"),v("strong",[t._v("工作区")]),t._v("中的文件时：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C5.png",alt:"image-20200405222915798"}})]),t._v(" "),v("ul",[v("li",[t._v("删除"),v("strong",[t._v("版本库")]),t._v("中的文件时：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C6.png",alt:"image-20200405223040208"}})]),t._v(" "),v("p",[t._v("与"),v("code",[t._v("git rm")]),v("strong",[t._v("不同的是")]),t._v("，该指令不会将删除操作纳入"),v("strong",[t._v("暂存区")]),t._v("。需要先将删除的"),v("code",[t._v("test.txt")]),t._v("纳入"),v("strong",[t._v("暂存区")]),t._v("，再提交到"),v("strong",[t._v("版本库")]),t._v("才能完成"),v("code",[t._v("test.txt")]),t._v("文件的删除；")]),t._v(" "),v("ul",[v("li",[t._v("删除"),v("strong",[t._v("暂存区")]),t._v("中文件时：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C7.png",alt:"image-20200405223452369"}})]),t._v(" "),v("p",[t._v("从图中可知"),v("code",[t._v("rm")]),t._v("命令只能删除工作区中的"),v("code",[t._v("test3.txt")]),t._v("，不能删除暂存区中的"),v("code",[t._v("test3.txt")]),t._v("；：")]),t._v(" "),v("h3",{attrs:{id:"二、重命名文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、重命名文件"}},[t._v("#")]),t._v(" 二、重命名文件")]),t._v(" "),v("h4",{attrs:{id:"_1-git-mv-file1-file2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-mv-file1-file2"}},[t._v("#")]),t._v(" 1."),v("code",[t._v("git mv <file1> <file2>")])]),t._v(" "),v("p",[t._v("使用"),v("code",[t._v("git")]),t._v("命令"),v("code",[t._v("git mv")]),t._v("：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git mv test.txt test3.txt\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("​\t将"),v("code",[t._v("test.txt")]),t._v("重命名为"),v("code",[t._v("test3.txt")]),t._v("；"),v("code",[t._v("mv")]),t._v("命令可理解为"),v("strong",[t._v("剪切")]),t._v("的同时进行"),v("strong",[t._v("更名")]),t._v("；")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C8.png",alt:"image-20200310092256341"}})]),t._v(" "),v("p",[v("code",[t._v("changes to be committed")]),t._v("  表示该修改已经纳入"),v("strong",[t._v("暂存区")]),t._v("，可以进行提交操作；")]),t._v(" "),v("blockquote",[v("p",[t._v("一般"),v("strong",[t._v("绿色")]),t._v("的文件（操作）表示已经提交到"),v("strong",[t._v("暂存区")]),t._v("了，不用再进行"),v("code",[t._v("git add")]),t._v(" ，可以直接进行提交（"),v("code",[t._v("git commit")]),t._v("）。")])]),t._v(" "),v("p",[t._v("从上文可知"),v("code",[t._v("git mv")]),t._v("做了两件事：")]),t._v(" "),v("ul",[v("li",[t._v("**第一步：**将文件"),v("code",[t._v("test.txt")]),t._v("重命名为"),v("code",[t._v("test3.txt")]),t._v("；")]),t._v(" "),v("li",[v("strong",[t._v("第二步："),v("strong",[t._v("将重命名操作"),v("code",[t._v("test.txt -> test3.txt")]),t._v("纳入")]),t._v("暂存区")]),t._v("；")])]),t._v(" "),v("h4",{attrs:{id:"_2-mv-file1-file2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-mv-file1-file2"}},[t._v("#")]),t._v(" 2."),v("code",[t._v("mv <file1> <file2>")])]),t._v(" "),v("p",[t._v("使用系统命令"),v("code",[t._v("mv")]),t._v("：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mv test2.txt test3.txt\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("执行该语句后查看状态"),v("code",[t._v("git status")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C9.png",alt:"image-20200310095219961"}})]),t._v(" "),v("p",[t._v("发现工作区中多出两步操作：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("删除文件"),v("code",[t._v("test2.txt")]),t._v("；")])]),t._v(" "),v("li",[v("p",[t._v("新建文件"),v("code",[t._v("text3.txt")]),t._v("；")])])]),t._v(" "),v("p",[t._v("再使用"),v("code",[t._v("git add test2.txt test3.txt")]),t._v("  将操作提交到暂存区，通过"),v("code",[t._v("git status")]),t._v("查看状态：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C10.png",alt:"image-20200310095715353"}})]),t._v(" "),v("p",[t._v("此时"),v("code",[t._v("git")]),t._v("立即就能识别出来这是一个文件重命名；")]),t._v(" "),v("p",[v("strong",[t._v("由此说明"),v("code",[t._v("git mv")]),t._v("进行了三步操作：")])]),t._v(" "),v("ul",[v("li",[t._v("**第一步：**删除工作区中重命名前的文件"),v("code",[t._v("test2.txt")]),t._v("；")]),t._v(" "),v("li",[t._v("**第二步：**在工作区中创建重命名后的文件"),v("code",[t._v("test3.txt")]),t._v("；")]),t._v(" "),v("li",[v("strong",[t._v("第三步："),v("strong",[t._v("将上述的两个操作提交到")]),t._v("暂存区")]),t._v("中；")])]),t._v(" "),v("p",[t._v("即"),v("code",[t._v("git mv")]),t._v(" 与 "),v("code",[t._v("mv")]),t._v("的区别相当于"),v("code",[t._v("git rm")]),t._v(" 与 "),v("code",[t._v("rm")]),t._v(" 之间的区别。")]),t._v(" "),v("h3",{attrs:{id:"三、比较文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、比较文件"}},[t._v("#")]),t._v(" 三、比较文件")]),t._v(" "),v("h4",{attrs:{id:"_1-本地文件-本地文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地文件-本地文件"}},[t._v("#")]),t._v(" 1.本地文件 "),v("code",[t._v("<->")]),t._v(" 本地文件")]),t._v(" "),v("h5",{attrs:{id:"diff-file-a-file-b"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diff-file-a-file-b"}},[t._v("#")]),t._v(" "),v("code",[t._v("diff file_a file_b")])]),t._v(" "),v("p",[t._v("这是系统提供的比较命令，用于比较本地文件或已经提交到版本库的文件。创建文件"),v("code",[t._v("a")]),t._v("和文件"),v("code",[t._v("b")]),t._v("，使用上述指令进行比较：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C11.png",alt:"image-20200406231641027"}})]),t._v(" "),v("p",[v("strong",[t._v("在 "),v("code",[t._v("diff -u a b")]),t._v("的输出信息中：")])]),t._v(" "),v("blockquote",[v("p",[t._v("加上参数"),v("code",[t._v("-u")]),t._v("可以更详细地显示比较信息。")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("**"),v("code",[t._v("--- a")]),t._v("**表示"),v("code",[t._v("a")]),t._v("为原文件；")])]),t._v(" "),v("li",[v("p",[t._v("**"),v("code",[t._v("+++ b")]),t._v("**表示"),v("code",[t._v("b")]),t._v("为目标文件；")])]),t._v(" "),v("li",[v("p",[v("strong",[v("code",[t._v("-1，3")]),v("strong",[t._v("中   "),v("strong",[v("code",[t._v("-")])]),t._v("   表示原文件即"),v("code",[t._v("a")]),t._v("，")]),v("code",[t._v("1")])]),t._v("  表示原文件中的第一行，"),v("strong",[v("code",[t._v("3")])]),t._v("  表示到第"),v("code",[t._v("3")]),t._v("行。合起来的意思为："),v("strong",[t._v("在原文件"),v("code",[t._v("a")]),t._v("中的"),v("code",[t._v("1~3")]),t._v("行")]),t._v("；")])]),t._v(" "),v("li",[v("p",[t._v("同理："),v("strong",[v("code",[t._v("+1，3")])]),t._v("  表示："),v("strong",[t._v("目标文件"),v("code",[t._v("b")]),t._v("中的"),v("code",[t._v("1~3")]),t._v("行")]),t._v("；")])]),t._v(" "),v("li",[v("p",[t._v("数据前面"),v("strong",[t._v("有三种符号")]),t._v("，分别表示不同的信息：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("空格")]),t._v("：表示该行在两个文件中都存在，如上图所示"),v("code",[t._v("AABB")]),t._v("这一行文件"),v("code",[t._v("a")]),t._v("，"),v("code",[t._v("b")]),t._v("都有；")]),t._v(" "),v("li",[v("strong",[v("code",[t._v("-")])]),t._v(" ：表示原文件"),v("code",[t._v("a")]),t._v("去掉该行就能变为目标文件"),v("code",[t._v("b")]),t._v("；")]),t._v(" "),v("li",[v("strong",[v("code",[t._v("+")])]),t._v(" ：表示原文件"),v("code",[t._v("a")]),t._v("加上该行就能变为目标文件"),v("code",[t._v("b")]),t._v("；")])]),t._v(" "),v("p",[t._v("所以整个输出信息的意思为："),v("code",[t._v("AABB")]),t._v("这一行两文件都有，只要原文件"),v("code",[t._v("a")]),t._v("去掉：")])])]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("a1\na2\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("并加上：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("b1\nb2\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("就能变为目标文件"),v("code",[t._v("b")]),t._v("；")]),t._v(" "),v("h4",{attrs:{id:"_2-工作区-暂存区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-工作区-暂存区"}},[t._v("#")]),t._v(" 2.工作区 "),v("code",[t._v("<-")]),t._v(" 暂存区")]),t._v(" "),v("p",[t._v("以下为"),v("code",[t._v("git")]),t._v("提供的比较命令，作用为：比较"),v("strong",[t._v("暂存区")]),t._v("和"),v("strong",[t._v("工作区")]),t._v("中的同一文件。并且："),v("strong",[t._v("原始文件")]),t._v("为"),v("strong",[t._v("暂存区")]),t._v("中的文件，"),v("strong",[t._v("目标文件")]),t._v("为"),v("strong",[t._v("工作区")]),t._v("中的文件。示例如下：")]),t._v(" "),v("h5",{attrs:{id:"git-diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" "),v("code",[t._v("git diff")])]),t._v(" "),v("p",[t._v("首先，新建文件"),v("code",[t._v("A.txt")]),t._v("和"),v("code",[t._v("B.txt")]),t._v("，修改其内容并提交到"),v("strong",[t._v("暂存区")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C12.png",alt:"image-20200412120920654"}})]),t._v(" "),v("p",[t._v("然后，在"),v("strong",[t._v("工作区")]),t._v("中再次修改文件"),v("code",[t._v("A.txt")]),t._v("与"),v("code",[t._v("B.txt")]),t._v("的内容：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C13.png",alt:"image-20200412121509360"}})]),t._v(" "),v("p",[t._v("此时使用**"),v("code",[t._v("git diff")]),t._v("**进行比较：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C14.png",alt:"image-20200412122316757"}})]),t._v(" "),v("p",[v("strong",[t._v("在 "),v("code",[t._v("git diff")]),t._v("的输出信息中：")])]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("--- a/A.txt")]),t._v("：表示"),v("strong",[t._v("原文件")]),t._v("为"),v("strong",[t._v("暂存区")]),t._v("中的"),v("code",[t._v("A.txt")]),t._v("；")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("+++ b/A.txt")]),t._v("：表示"),v("strong",[t._v("目标文件")]),t._v("为"),v("strong",[t._v("工作区")]),t._v("中的"),v("code",[t._v("A.txt")]),t._v("；")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("-1")]),t._v("： 其中"),v("code",[t._v("-")]),t._v("表示原文件，"),v("code",[t._v("1")]),t._v("表示从第"),v("code",[t._v("1")]),t._v("行开始。由于暂存区中的"),v("code",[t._v("A.txt")]),t._v("文件（"),v("strong",[t._v("原文件")]),t._v("）只有"),v("code",[t._v("1")]),t._v("行，所以将原来的"),v("code",[t._v("(-1,1)")]),t._v("简写为"),v("code",[t._v("-1")]),t._v("；")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("+1，2")]),t._v("：其中"),v("code",[t._v("+")]),t._v("表示目标文件，"),v("code",[t._v("1，2")]),t._v("表示工作区中的"),v("code",[t._v("A.txt")]),t._v("文件（"),v("strong",[t._v("目标文件")]),t._v("）从第"),v("code",[t._v("1")]),t._v("行开始有"),v("code",[t._v("2")]),t._v("行；")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("hello world")]),t._v("：表示"),v("strong",[t._v("原文件")]),t._v("和"),v("strong",[t._v("目标文件")]),t._v("中都存在的内容；")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("+hello java")]),t._v("表示暂存区中的"),v("code",[t._v("A.txt")]),t._v("加上该行，就能变得与工作区中的"),v("code",[t._v("A.txt")]),t._v("一样；")])])]),t._v(" "),v("p",[t._v("可以看到该指令是将同一文件的"),v("strong",[t._v("工作区")]),t._v("版本与"),v("strong",[t._v("暂存区")]),t._v("版本进行比较，各比各的，并不会将"),v("code",[t._v("A.txt")]),t._v("与"),v("code",[t._v("B.txt")]),t._v("进行比较。")]),t._v(" "),v("h4",{attrs:{id:"_3-工作区-版本库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-工作区-版本库"}},[t._v("#")]),t._v(" 3.工作区 "),v("code",[t._v("<-")]),t._v(" 版本库")]),t._v(" "),v("p",[t._v("以下指令作用为：比较"),v("strong",[t._v("版本库")]),t._v("和"),v("strong",[t._v("工作区")]),t._v("中的同一文件。并且："),v("strong",[t._v("原始文件")]),t._v("为"),v("strong",[t._v("版本库")]),t._v("中的文件，"),v("strong",[t._v("目标文件")]),t._v("为"),v("strong",[t._v("工作区")]),t._v("中的文件。")]),t._v(" "),v("h5",{attrs:{id:"git-diff-commit-id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-commit-id"}},[t._v("#")]),t._v(" "),v("code",[t._v("git diff commit_id")])]),t._v(" "),v("p",[t._v("用于比较指定"),v("code",[t._v("commit id")]),t._v("提交上的"),v("code",[t._v("A")]),t._v("文件和工作区中的"),v("code",[t._v("A")]),t._v("文件；")]),t._v(" "),v("h5",{attrs:{id:"git-diff-head"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-head"}},[t._v("#")]),t._v(" "),v("code",[t._v("git diff HEAD")])]),t._v(" "),v("p",[t._v("用于比较最新提交上的"),v("code",[t._v("A")]),t._v("文件和工作区中的"),v("code",[t._v("A")]),t._v("文件：")]),t._v(" "),v("blockquote",[v("p",[t._v("上面的"),v("code",[t._v("A")]),t._v("文件仅为一个示例，以下同理。")])]),t._v(" "),v("p",[t._v("如下图所示，先初始化"),v("code",[t._v("test.txt")]),t._v("为："),v("code",[t._v("版本库中的修改")]),t._v("，然后进行一次提交；随后在工作区中为"),v("code",[t._v("test.txt")]),t._v("添加"),v("code",[t._v("工作区的修改")]),t._v("；然后执行上述比较指令，从显示出来的比较结果可知，工作区中的"),v("code",[t._v("test.txt")]),t._v("文件比最新一次提交的"),v("code",[t._v("test.txt")]),t._v("文件多了一行"),v("code",[t._v("工作区中的修改")]),t._v("内容。")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C15.png",alt:"image-20200412115931597"}})]),t._v(" "),v("h4",{attrs:{id:"_4-暂存区-版本库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-暂存区-版本库"}},[t._v("#")]),t._v(" 4.暂存区 "),v("code",[t._v("<-")]),t._v(" 版本库")]),t._v(" "),v("p",[t._v("以下指令作用为：比较"),v("strong",[t._v("版本库")]),t._v("和"),v("strong",[t._v("暂存区")]),t._v("中的同一文件，其中"),v("strong",[t._v("原始文件")]),t._v("为"),v("strong",[t._v("版本库")]),t._v("中的文件，"),v("strong",[t._v("目标文件")]),t._v("为"),v("strong",[t._v("暂存区")]),t._v("中的文件：")]),t._v(" "),v("h5",{attrs:{id:"git-diff-cached-commit-id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-cached-commit-id"}},[t._v("#")]),t._v(" "),v("code",[t._v("git diff --cached commit_id")])]),t._v(" "),v("p",[t._v("用于比较指定提交上的"),v("code",[t._v("A")]),t._v("文件和暂存区中的"),v("code",[t._v("A")]),t._v("文件；")]),t._v(" "),v("h5",{attrs:{id:"git-diff-cached"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-cached"}},[t._v("#")]),t._v(" "),v("code",[t._v("git diff --cached")])]),t._v(" "),v("p",[t._v("用于比较最新提交上的"),v("code",[t._v("A")]),t._v("文件和暂存区中的"),v("code",[t._v("A")]),t._v("文件。示例如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C16.png",alt:"image-20200407000812878"}})]),t._v(" "),v("p",[t._v("可以看到，暂存区中的"),v("code",[t._v("A.txt")]),t._v("文件比最新提交中的"),v("code",[t._v("A.txt")]),t._v("文件多了一行"),v("code",[t._v("hello java")]),t._v("；暂存区中的"),v("code",[t._v("B.txt")]),t._v("文件比最新提交中的"),v("code",[t._v("B.txt")]),t._v("文件多了一行"),v("code",[t._v("hello java2")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"_5-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5.总结")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("关于目标文件与原始文件的判定，遵循的顺序为：工作区 "),v("code",[t._v("<-")]),t._v(" 暂存区 "),v("code",[t._v("<-")]),t._v("版本库（提交）；")])]),t._v(" "),v("li",[v("p",[t._v("上述比较指令的比较如下表所示：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("原始文件")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("目标文件")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("diff <file1> <file2>")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较两个本地文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("本地文件/版本库")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("本地文件/版本库")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("git diff")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较暂存区和工作区中的同一文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("git diff commit_id")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较指定"),v("code",[t._v("commit id")]),t._v("提交上的"),v("code",[t._v("A")]),t._v("文件和工作区中的"),v("code",[t._v("A")]),t._v("文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("git diff HEAD")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较最新提交上的"),v("code",[t._v("A")]),t._v("文件和工作区中的"),v("code",[t._v("A")]),t._v("文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("git diff --cached commit_id")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较指定提交上的"),v("code",[t._v("A")]),t._v("文件和暂存区中的"),v("code",[t._v("A")]),t._v("文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("git diff --cached")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("比较最新提交上的"),v("code",[t._v("A")]),t._v("文件和暂存区中的"),v("code",[t._v("A")]),t._v("文件")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("版本库")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("表格中的"),v("code",[t._v("A")]),t._v("文件仅为示例。")])])])]),t._v(" "),v("h3",{attrs:{id:"四、撤销修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、撤销修改"}},[t._v("#")]),t._v(" 四、撤销修改")]),t._v(" "),v("p",[t._v("主要是将已经纳入"),v("strong",[t._v("暂存区")]),t._v("的修改（"),v("strong",[t._v("绿色")]),t._v("），先恢复到"),v("strong",[t._v("工作区")]),t._v("（"),v("strong",[t._v("红色")]),t._v("），再恢复到修改前。比如撤销"),v("code",[t._v("git rm")]),t._v("这一删除操作：")]),t._v(" "),v("h4",{attrs:{id:"_1-将暂存区修改恢复到工作区（unstage）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-将暂存区修改恢复到工作区（unstage）"}},[t._v("#")]),t._v(" 1.将暂存区修改恢复到工作区（"),v("code",[t._v("unstage")]),t._v("）")]),t._v(" "),v("blockquote",[v("p",[t._v("也就是将对文件的修改操作由"),v("strong",[t._v("绿色")]),t._v("变为"),v("strong",[t._v("红色")]),t._v("。")])]),t._v(" "),v("h5",{attrs:{id:"法一：git-reset-head-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#法一：git-reset-head-file"}},[t._v("#")]),t._v(" 法一："),v("code",[t._v("git reset head <file>")])]),t._v(" "),v("p",[t._v("如下图所示，通过"),v("code",[t._v("git rm")]),t._v("删除了版本库中的"),v("code",[t._v("test3.txt")]),t._v("文件，并将该操作提交到了暂存区。随后通过以上命令，将这一删除操作恢复到了工作区；")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C17.png",alt:"image-20200405225413462"}})]),t._v(" "),v("h5",{attrs:{id:"法二：git-restore-stage-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#法二：git-restore-stage-file"}},[t._v("#")]),t._v(" 法二："),v("code",[t._v("git restore --stage <file>")])]),t._v(" "),v("p",[t._v("这里的参数"),v("code",[t._v("--stage")]),t._v("写成"),v("code",[t._v("--staged")]),t._v("效果是一样的，作用与法一相同：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C18.png",alt:"image-20200405225640532"}})]),t._v(" "),v("h4",{attrs:{id:"_2-撤销工作区操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-撤销工作区操作"}},[t._v("#")]),t._v(" 2.撤销工作区操作")]),t._v(" "),v("p",[t._v("比如撤销工作区中对文件的修改、新增和删除操作：")]),t._v(" "),v("h5",{attrs:{id:"法一：git-restore-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#法一：git-restore-file"}},[t._v("#")]),t._v(" 法一："),v("code",[t._v("git restore <file>")])]),t._v(" "),v("p",[t._v("如下图所示，在工作区中删除了"),v("code",[t._v("test3.txt")]),t._v("文件。然后，通过上述指令撤销了工作区中对"),v("code",[t._v("test3.txt")]),t._v("的删除操作：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C19.png",alt:"image-20200405230055203"}})]),t._v(" "),v("h5",{attrs:{id:"法二：git-checkout-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#法二：git-checkout-file"}},[t._v("#")]),t._v(" 法二："),v("code",[t._v("git checkout -- <file>")])]),t._v(" "),v("p",[t._v("作用与法一相同：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C20.png",alt:"image-20200405230315968"}})]),t._v(" "),v("h3",{attrs:{id:"五、修改提交注释与作者"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、修改提交注释与作者"}},[t._v("#")]),t._v(" 五、修改提交注释与作者")]),t._v(" "),v("h4",{attrs:{id:"_1-修改最近一次提交信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改最近一次提交信息"}},[t._v("#")]),t._v(" 1.修改最近一次提交信息")]),t._v(" "),v("h5",{attrs:{id:"git-commit-amend-m-修正信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend-m-修正信息"}},[t._v("#")]),t._v(" "),v("code",[t._v("git commit --amend -m")]),t._v(" '修正信息'")]),t._v(" "),v("p",[t._v("如果写错了提交消息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C21.png",alt:"image-20200310101619708"}})]),t._v(" "),v("p",[t._v("可以通过："),v("code",[t._v("git commit --amend -m '注释'")]),t._v("   来修改"),v("strong",[t._v("上一次")]),t._v("的提交信息：（"),v("code",[t._v("amend")]),t._v("是修复的意思）")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C22.png",alt:"image-20200310101729451"}})]),t._v(" "),v("h5",{attrs:{id:"git-commit-amend"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend"}},[t._v("#")]),t._v(" "),v("code",[t._v("git commit --amend")])]),t._v(" "),v("p",[t._v("当需要为最近一次提交添加大量注释时，可以直接使用该指令进入"),v("code",[t._v("vim")]),t._v("编辑器编辑：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C23.png",alt:"image-20200407111646674"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C24.png",alt:"image-20200407111918667"}})]),t._v(" "),v("p",[t._v("这样的好处是：错误的提交和修正后的提交经过该命令修正后，只变为"),v("strong",[t._v("一次提交")]),t._v("，而不是两次提交；")]),t._v(" "),v("h5",{attrs:{id:"git-commit-amend-author-name-email"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-amend-author-name-email"}},[t._v("#")]),t._v(" "),v("code",[t._v("git commit --amend --author 'Name<email>'")])]),t._v(" "),v("p",[t._v("用于修改最近一次提交的配置信息，包含作者和注释信息。执行命令时会进入"),v("code",[t._v("vim")]),t._v("编辑器编辑注释信息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C25.png",alt:"image-20200407112745165"}})]),t._v(" "),v("p",[t._v("修改前该分支上最近两次的提交信息为：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C26.png",alt:"image-20200407113017530"}})]),t._v(" "),v("p",[t._v("修改后的最近两次提交信息为：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C27.png",alt:"image-20200407112949897"}})]),t._v(" "),v("p",[t._v("可以看到成功地改变了最新一次提交的作者和提交注释。")]),t._v(" "),v("blockquote",[v("p",[t._v("**注意：**修改提交注释的同时，虽然提交的内容相同，但是提交前后的"),v("code",[t._v("commit_id")]),t._v("是不同的，说明创建了一个新提交替换了原来需要修正的提交。如下图中的提交"),v("code",[t._v("5")]),t._v("与提交"),v("code",[t._v("3")]),t._v("所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C28.png",alt:"image-20200412135216028"}})])]),t._v(" "),v("h4",{attrs:{id:"_2-修改特定提交信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改特定提交信息"}},[t._v("#")]),t._v(" 2.修改特定提交信息")]),t._v(" "),v("p",[t._v("如图所示，在"),v("code",[t._v("test")]),t._v("分支进行了四次提交。现在我们想要修改第三次提交的提交信息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C29.png",alt:"image-20200409220741630"}})]),t._v(" "),v("h5",{attrs:{id:"git-rebase-i-commit-id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-i-commit-id"}},[t._v("#")]),t._v(" "),v("code",[t._v("git rebase -i commit_id")])]),t._v(" "),v("p",[t._v("通过以上指令可以进入"),v("code",[t._v("rebase")]),t._v("交互模式，并显示"),v("code",[t._v("commit_id")]),t._v("之后的提交信息。比如：若命令中的"),v("code",[t._v("commit_id")]),t._v("为第一次提交的"),v("code",[t._v("commit_id")]),t._v("，那么就会显示第"),v("code",[t._v("2~4")]),t._v("次的提交信息。这里我们需要修改第三次提交的信息，只需要将它指定为第二次提交的"),v("code",[t._v("commit_id")]),t._v("即可。执行以下命令，进入"),v("code",[t._v("vim")]),t._v("编辑器：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git rebase -i 678e0\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C30.png",alt:"image-20200409221442183"}})]),t._v(" "),v("p",[t._v("在这个界面中，我们可以通过将"),v("code",[t._v("pick")]),t._v("参数修改为其他"),v("code",[t._v("rebase")]),t._v("提供的参数，从而对第三次错误提交进行修改。有两个参数可以实现这一目的：")]),t._v(" "),v("blockquote",[v("p",[t._v("这里涉及到"),v("code",[t._v("vim")]),t._v("编辑器的使用方式：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("shift + A")]),t._v("为插入命令，可进入"),v("code",[t._v("vim")]),t._v("编辑器的编辑模式；")]),t._v(" "),v("li",[t._v("编辑完成后，先按"),v("code",[t._v("ESC")]),t._v("回到"),v("code",[t._v("vim")]),t._v("编辑器的命令行模式，再输入"),v("code",[t._v(":wq")]),t._v("表示保存并退出编辑器；")])])]),t._v(" "),v("p",[v("strong",[v("code",[t._v("reword")]),t._v("参数")])]),t._v(" "),v("p",[t._v("该参数的意思是：直接修改设置了该参数的提交的提交注释。这里应该将第三次提交的"),v("code",[t._v("pick")]),t._v("参数改为"),v("code",[t._v("reword")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C31.png",alt:"image-20200409221729553"}})]),t._v(" "),v("p",[t._v("通过"),v("code",[t._v(":wq")]),t._v("保存并退出，随后再次进入"),v("code",[t._v("vim")]),t._v("编辑器，这次是修改设置了"),v("code",[t._v("reword")]),t._v("参数的提交的提交注释：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C32.png",alt:"image-20200409222313064"}})]),t._v(" "),v("p",[t._v("将它改为正确的提交信息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C33.png",alt:"image-20200409222354009"}})]),t._v(" "),v("p",[t._v("通过"),v("code",[t._v(":wq")]),t._v("保存并退出"),v("code",[t._v("vim")]),t._v("编辑器，完成错误提交信息的修改，再次查看历史提交信息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C34.png",alt:"image-20200409222546686"}})]),t._v(" "),v("p",[t._v("可以发现：错误的提交信息得到了纠正，并且这次提交及其之后的提交的"),v("code",[t._v("commit_id")]),t._v("都发生了变化。说明"),v("code",[t._v("git")]),t._v("新创建了对应数目的提交，并对原有提交进行了覆盖，但是内容没有发生变化；")]),t._v(" "),v("blockquote",[v("p",[t._v("事实上："),v("code",[t._v("rebase")]),t._v("的含义为变换基准，"),v("code",[t._v("git rebase -i commit_id")]),t._v("中的"),v("code",[t._v("commit_id")]),t._v("所指的提交节点就是新的基准点。该基准点之后的提交都会被"),v("code",[t._v("git")]),t._v("新创建的，内容一样的新提交所覆盖。"),v("code",[t._v("rebase")]),t._v("指令之后会详细介绍。")])]),t._v(" "),v("p",[v("strong",[v("code",[t._v("edit")]),t._v("参数")])]),t._v(" "),v("p",[t._v("该参数也可以达到上述效果，只不过稍微多了几个步骤。这个参数的意思是：停下"),v("code",[t._v("rebase")]),t._v("进程，编辑添加了该参数的提交，编辑完之后，通过调用"),v("code",[t._v("git rebase --continue")]),t._v("继续进行"),v("code",[t._v("rebase")]),t._v("；具体如下：")]),t._v(" "),v("p",[t._v("将添加了错误提交信息的提交的"),v("code",[t._v("pick")]),t._v("参数改为"),v("code",[t._v("edit")]),t._v("参数：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C35.png",alt:"image-20200409223222526"}})]),t._v(" "),v("p",[t._v("通过"),v("code",[t._v(":wq")]),t._v("保存并退出：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C36.png",alt:"image-20200409223307520"}})]),t._v(" "),v("p",[t._v("可以看到，"),v("code",[t._v("edit")]),t._v("参数将"),v("code",[t._v("rebase")]),t._v("操作停了下来。根据提示，可以通过：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git commit --amend\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("进入"),v("code",[t._v("vim")]),t._v("编辑器，修改当前提交的注释信息：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C37.png",alt:"image-20200409223703479"}})]),t._v(" "),v("p",[t._v("修改完后，通过"),v("code",[t._v(":wq")]),t._v("保存并退出"),v("code",[t._v("vim")]),t._v("编辑器。再调用：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git rebase --continue\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("继续进行"),v("code",[t._v("rebase")]),t._v("操作，由此完成错误提交信息的修改：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C38.png",alt:"image-20200409223842997"}})]),t._v(" "),v("p",[t._v("此时查看"),v("code",[t._v("test")]),t._v("分支的提交历史，会发现错误的提交信息得到了更正，并且与上"),v("code",[t._v("reword")]),t._v("参数一样，创建了新的提交，对原有提交进行了覆盖，同样内容也不发生变化：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C39.png",alt:"image-20200409224153743"}})]),t._v(" "),v("h5",{attrs:{id:"git-rebase-i-head-n"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-i-head-n"}},[t._v("#")]),t._v(" "),v("code",[t._v("git rebase -i HEAD~n")])]),t._v(" "),v("p",[t._v("通过上述指令也可以进入"),v("code",[t._v("rebase")]),t._v("交互模式，其中"),v("code",[t._v("n")]),t._v("表示需要显示的最近"),v("code",[t._v("n")]),t._v("次提交记录。比如通过以下指令，显示"),v("code",[t._v("test")]),t._v("分支最近的三次提交记录：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git rebase -i HEAD~3\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C40.png",alt:"image-20200409224856810"}})]),t._v(" "),v("p",[t._v("进入"),v("code",[t._v("rebase")]),t._v("的交互界面之后，后续的操作和结果都与第一种方法一样，这里就不再赘述了。")]),t._v(" "),v("h3",{attrs:{id:"六、获取帮助"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、获取帮助"}},[t._v("#")]),t._v(" 六、获取帮助")]),t._v(" "),v("h4",{attrs:{id:"_1-git-help-config"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-help-config"}},[t._v("#")]),t._v(" 1."),v("code",[t._v("git help config")])]),t._v(" "),v("p",[t._v("该命令会打开"),v("code",[t._v("git")]),t._v("安装目录下的"),v("code",[t._v("git-config")]),t._v("帮助文档：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C41.png",alt:"image-20200412143709617"}})]),t._v(" "),v("p",[t._v("文档中详细地显示了相关操作指令的使用：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C42.png",alt:"image-20200412143856397"}})]),t._v(" "),v("h4",{attrs:{id:"_2-git-config-help"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-config-help"}},[t._v("#")]),t._v(" 2."),v("code",[t._v("git config --help")])]),t._v(" "),v("p",[t._v("效果与上述一样，都是弹出同样的帮助网页；")]),t._v(" "),v("h4",{attrs:{id:"_3-man-git-config"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-man-git-config"}},[t._v("#")]),t._v(" 3."),v("code",[t._v("man git-config")])]),t._v(" "),v("p",[v("code",[t._v("man")]),t._v("为"),v("code",[t._v("linux")]),t._v("中自带的帮助文档，也可以查看帮助；")]),t._v(" "),v("h4",{attrs:{id:"_4-git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-git"}},[t._v("#")]),t._v(" 4."),v("code",[t._v("git")])]),t._v(" "),v("p",[t._v("直接在命令窗口显示常用的指令：")]),t._v(" "),v("p",[v("img",{attrs:{src:"D:%5CblogPic%5Cimg%5Cgit%5Clesson2%5C43.png",alt:"image-20200310181313462"}})])])}),[],!1,null,null,null);_.default=i.exports}}]);