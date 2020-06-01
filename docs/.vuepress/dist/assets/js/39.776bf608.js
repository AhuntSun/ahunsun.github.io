(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{359:function(v,_,t){"use strict";t.r(_);var e=t(33),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_05-渲染流程（上）：html、css和javascript是如何变成页面的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_05-渲染流程（上）：html、css和javascript是如何变成页面的"}},[v._v("#")]),v._v(" 05.渲染流程（上）："),t("code",[v._v("HTML")]),v._v("、"),t("code",[v._v("CSS")]),v._v("和"),t("code",[v._v("JavaScript")]),v._v("是如何变成页面的")]),v._v(" "),t("p",[v._v("在上一篇文章中我们介绍了导航相关的流程，那导航被提交后又会怎么样呢？就进入了渲染阶段。这个阶段很重要，了解其相关流程能让你“看透”页面是如何工作的，有了这些知识，你可以解决一系列相关的问题，比如能熟练使用开发者工具，因为能够理解开发者工具里面大部分项目的含义，能优化页面卡顿问题，使用"),t("code",[v._v("JavaScript")]),v._v("优化动画流程，通过优化样式表来防止强制同步布局，等等。")]),v._v(" "),t("p",[v._v("既然它的功能这么强大，那么今天，我们就来好好聊聊渲染流程。")]),v._v(" "),t("p",[v._v("通常，我们编写好"),t("code",[v._v("HTML")]),v._v("、"),t("code",[v._v("CSS")]),v._v("、"),t("code",[v._v("JavaScript")]),v._v("等文件，经过浏览器就会显示出漂亮的页面（如下图所示），但是你知道它们是如何转化成页面的吗？这背后的原理，估计很多人都答不上来。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/1.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，左边输入的是"),t("code",[v._v("HTML")]),v._v("、"),t("code",[v._v("CSS")]),v._v("、"),t("code",[v._v("JavaScript")]),v._v("数据，这些数据经过中间渲染模块的处理，最终输出为屏幕上的像素。")]),v._v(" "),t("p",[v._v("这中间的渲染模块就是我们今天要讨论的主题。为了能更好地理解下文，你可以先结合下图快速抓住"),t("code",[v._v("HTML")]),v._v("、"),t("code",[v._v("CSS")]),v._v("和"),t("code",[v._v("JavaScript")]),v._v("的含义：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/2.png",alt:""}})]),v._v(" "),t("p",[v._v("从上图可以看出，"),t("code",[v._v("HTML")]),v._v("的内容是由"),t("strong",[v._v("标记")]),v._v("和"),t("strong",[v._v("文本")]),v._v("组成。标记也称为标签，每个标签都有它自己的语意，浏览器会根据标签的语意来正确展示"),t("code",[v._v("HTML")]),v._v("内容。比如上面的"),t("code",[v._v("<p>")]),v._v("标签是告诉浏览器在这里的内容需要创建一个新段落，中间的文本就是段落中需要显示的内容；")]),v._v(" "),t("p",[v._v("如果需要改变"),t("code",[v._v("HTML")]),v._v("的字体颜色、大小等信息，就需要用到"),t("code",[v._v("CSS")]),v._v("。"),t("code",[v._v("CSS")]),v._v("又称为层叠样式表，是由选择器和属性组成，比如图中的"),t("code",[v._v("p")]),v._v("选择器，它会把"),t("code",[v._v("HTML")]),v._v("里面"),t("code",[v._v("<p>")]),v._v("标签的内容选择出来，然后再把选择器的属性值应用到"),t("code",[v._v("<p>")]),v._v("标签内容上。选择器里面有个"),t("code",[v._v("color")]),v._v("属性，它的值是"),t("code",[v._v("red")]),v._v("，这是告诉渲染引擎把"),t("code",[v._v("<p>")]),v._v("标签的内容显示为红色；")]),v._v(" "),t("p",[v._v("至于"),t("code",[v._v("JavaScript")]),v._v("（简称为"),t("code",[v._v("JS")]),v._v("），使用它可以使网页的内容“动”起来，比如上图中，可以通过"),t("code",[v._v("JavaScript")]),v._v("来修改"),t("code",[v._v("CSS")]),v._v("样式值，从而达到修改文本颜色的目的。")]),v._v(" "),t("p",[v._v("搞清楚"),t("code",[v._v("HTML")]),v._v("、"),t("code",[v._v("CSS")]),v._v("和"),t("code",[v._v("JavaScript")]),v._v("的含义后，那么接下来我们就正式开始分析渲染模块了。")]),v._v(" "),t("p",[v._v("由于渲染机制过于复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的"),t("code",[v._v("HTML")]),v._v("经过这些子阶段，最后输出像素。我们把这样的一个处理流程叫做渲染流水线，其大致流程如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/3.png",alt:""}})]),v._v(" "),t("p",[v._v("按照渲染的时间顺序，流水线可分为如下几个子阶段：构建DOM树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。内容比较多，我会用两篇文章来为你详细讲解这各个子阶段。接下来，在介绍每个阶段的过程中，你应该重点关注以下三点内容")]),v._v(" "),t("ul",[t("li",[v._v("开始每个子阶段都有其"),t("strong",[v._v("输入的内容")]),v._v("；")]),v._v(" "),t("li",[v._v("然后每个子阶段有其"),t("strong",[v._v("处理过程")]),v._v("；")]),v._v(" "),t("li",[v._v("最终每个子阶段会生成"),t("strong",[v._v("输出内容")]),v._v("。")])]),v._v(" "),t("p",[v._v("理解了这三部分内容，能让你更加清晰地理解每个子阶段。")]),v._v(" "),t("h2",{attrs:{id:"构建dom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建dom树"}},[v._v("#")]),v._v(" 构建"),t("code",[v._v("DOM")]),v._v("树")]),v._v(" "),t("p",[t("strong",[v._v("为什么要构建"),t("code",[v._v("DOM")]),v._v("树呢")]),v._v("？这是因为浏览器无法直接理解和使用"),t("code",[v._v("HTML")]),v._v("，所以需要将"),t("code",[v._v("HTML")]),v._v("转换为浏览器能够理解的结构——"),t("code",[v._v("DOM")]),v._v("树。")]),v._v(" "),t("p",[v._v("这里我们还需要简单介绍下什么是树结构，为了更直观地理解，你可以参考下面我画的几个树结构：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/4.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，树这种结构非常像我们现实生活中的“树”，其中每个点我们称为节点，相连的节点称为父子节点。树结构在浏览器中的应用还是比较多的，比如下面我们要介绍的渲染流程，就在频繁地使用树结构。")]),v._v(" "),t("p",[v._v("接下来咱们还是言归正传，来看看"),t("code",[v._v("DOM")]),v._v("树的构建过程，你可以参考下图")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/5.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，构建"),t("code",[v._v("DOM")]),v._v("树的输入内容是一个非常简单的"),t("code",[v._v("HTML")]),v._v("文件，然后经由"),t("code",[v._v("HTML")]),v._v("解析器解析，最终输出树状结构的"),t("code",[v._v("DOM")]),v._v("。")]),v._v(" "),t("p",[v._v("为了更加直观地理解"),t("code",[v._v("DOM")]),v._v("树，你可以打开"),t("code",[v._v("Chrome")]),v._v("的“开发者工具”，选择“"),t("code",[v._v("Console")]),v._v("”标签来打开控制台，然后在控制台里面输入“"),t("code",[v._v("document")]),v._v("”后回车，这样你就能看到一个完整的"),t("code",[v._v("DOM")]),v._v("树结构，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/6.png",alt:""}})]),v._v(" "),t("p",[v._v("图中的"),t("code",[v._v("document")]),v._v("就是"),t("code",[v._v("DOM")]),v._v("结构，你可以看到，"),t("code",[v._v("DOM")]),v._v("和"),t("code",[v._v("HTML")]),v._v("内容几乎是一样的，但是和"),t("code",[v._v("HTML")]),v._v("不同的是，"),t("code",[v._v("DOM")]),v._v("是保存在内存中的树状结构，可以通过"),t("code",[v._v("JavaScript")]),v._v("来查询或修改其内容。")]),v._v(" "),t("p",[v._v("那下面就来看看如何通过"),t("code",[v._v("JavaScript")]),v._v("来修改"),t("code",[v._v("DOM")]),v._v("的内容，在控制台中输入：")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('document.getElementsByTagName("p")[0].innerText = "black"\n')])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("p",[v._v("这行代码的作用是把第一个"),t("code",[v._v("<p>")]),v._v("标签的内容修改为"),t("code",[v._v("black")]),v._v("，具体执行结果你可以参考下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/7.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，在执行了一段修改第一个"),t("code",[v._v("<p>")]),v._v("标签的"),t("code",[v._v("JavaScript")]),v._v("代码后，"),t("code",[v._v("DOM")]),v._v("的第一个"),t("code",[v._v("p")]),v._v("节点的内容成功被修改，同时页面中的内容也被修改了；")]),v._v(" "),t("p",[v._v("好了，现在我们已经生成"),t("code",[v._v("DOM")]),v._v("树了，但是"),t("code",[v._v("DOM")]),v._v("节点的样式我们依然不知道，要让"),t("code",[v._v("DOM")]),v._v("节点拥有正确的样式，这就需要样式计算了；")]),v._v(" "),t("h2",{attrs:{id:"样式计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[v._v("#")]),v._v(" 样式计算")]),v._v(" "),t("p",[v._v("样式计算的目的是为了计算出"),t("code",[v._v("DOM")]),v._v("节点中每个元素的具体样式，这个阶段大体可分为三步来完成")]),v._v(" "),t("h3",{attrs:{id:"_1-把css转换为浏览器能够理解的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-把css转换为浏览器能够理解的结构"}},[v._v("#")]),v._v(" 1. 把"),t("code",[v._v("CSS")]),v._v("转换为浏览器能够理解的结构")]),v._v(" "),t("p",[v._v("那"),t("code",[v._v("CSS")]),v._v("样式的来源主要有哪些呢？你可以先参考下图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/8.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，"),t("code",[v._v("CSS")]),v._v("样式来源主要有三种：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("通过"),t("code",[v._v("link")]),v._v("引用的外部"),t("code",[v._v("CSS")]),v._v("文件")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("<style>")]),v._v("标记内的 "),t("code",[v._v("CSS")])])]),v._v(" "),t("li",[t("p",[v._v("元素的"),t("code",[v._v("style")]),v._v("属性内嵌的"),t("code",[v._v("CSS")])])]),v._v(" "),t("li",[t("p",[v._v("和"),t("code",[v._v("HTML")]),v._v("文件一样，浏览器也是无法直接理解这些纯文本的"),t("code",[v._v("CSS")]),v._v("样式，所以当渲染引擎接收到"),t("code",[v._v("CSS")]),v._v("文本时，会执行一个转换操作，将"),t("code",[v._v("CSS")]),v._v("文本转换为浏览器可以理解的结构——"),t("code",[v._v("styleSheets")]),v._v("。")])]),v._v(" "),t("li",[t("p",[v._v("为了加深理解，你可以在"),t("code",[v._v("Chrome")]),v._v("控制台中查看其结构，只需要在控制台中输入"),t("code",[v._v("document.styleSheets")]),v._v("，然后就看到如下图所示的结构")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/9.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，这个样式表包含了很多种样式，已经把那三种来源的样式都包含进去了。当然样式表的具体结构不是我们今天讨论的重点，你只需要知道渲染引擎会把获取到的"),t("code",[v._v("CSS")]),v._v("文本全部转换为"),t("code",[v._v("styleSheets")]),v._v("结构中的数据，并且该结构同时具备了查询和修改功能，这会为后面的样式操作提供基础")]),v._v(" "),t("h3",{attrs:{id:"_2-转换样式表中的属性值，使其标准化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-转换样式表中的属性值，使其标准化"}},[v._v("#")]),v._v(" 2. 转换样式表中的属性值，使其标准化")]),v._v(" "),t("p",[v._v("现在我们已经把现有的"),t("code",[v._v("CSS")]),v._v("文本转化为浏览器可以理解的结构了，那么接下来就要对其进行属性值的标准化操作。")]),v._v(" "),t("p",[v._v("要理解什么是属性值标准化，你可以看下面这样一段"),t("code",[v._v("CSS")]),v._v("文本")]),v._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("body")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" 2em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("p")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("span")]),v._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("div")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("font-weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" bold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("div  p")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("div")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br")])]),t("p",[v._v("可以看到上面的"),t("code",[v._v("CSS")]),v._v("文本中有很多属性值，如"),t("code",[v._v("2em")]),v._v("、"),t("code",[v._v("blue")]),v._v("、"),t("code",[v._v("bold")]),v._v("，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化。")]),v._v(" "),t("p",[v._v("那标准化后的属性值是什么样子的？")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/10.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看到，"),t("code",[v._v("2em")]),v._v("被解析成了"),t("code",[v._v("32px")]),v._v("，"),t("code",[v._v("red")]),v._v("被解析成了"),t("code",[v._v("rgb(255,0,0)")]),v._v("，"),t("code",[v._v("bold")]),v._v("被解析成了"),t("code",[v._v("700")]),v._v("……")]),v._v(" "),t("h3",{attrs:{id:"_3-计算出dom树中每个节点的具体样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-计算出dom树中每个节点的具体样式"}},[v._v("#")]),v._v(" 3. 计算出"),t("code",[v._v("DOM")]),v._v("树中每个节点的具体样式")]),v._v(" "),t("p",[v._v("现在样式的属性已被标准化了，接下来就需要计算"),t("code",[v._v("DOM")]),v._v("树中每个节点的样式属性了，如何计算呢？")]),v._v(" "),t("p",[t("strong",[v._v("这就涉及到"),t("code",[v._v("CSS")]),v._v("的继承规则和层叠规则了。")])]),v._v(" "),t("p",[v._v("首先是"),t("code",[v._v("CSS")]),v._v("继承。"),t("code",[v._v("CSS")]),v._v("继承就是每个"),t("code",[v._v("DOM")]),v._v("节点都包含有父节点的样式。这么说可能有点抽象，我们可以结合具体例子，看下面这样一张样式表是如何应用到"),t("code",[v._v("DOM")]),v._v("节点上的")]),v._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("body")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" 20px "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("p")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("blue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("span")]),v._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("div")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("font-weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" bold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("red"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[v._v("div  p")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[v._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v("green"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])]),t("p",[v._v("这张样式表最终应用到DOM节点的效果如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/11.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，所有子节点都继承了父节点样式。比如"),t("code",[v._v("body")]),v._v("节点的"),t("code",[v._v("font-size")]),v._v("属性是"),t("code",[v._v("20")]),v._v("，那"),t("code",[v._v("body")]),v._v("节点下面的所有节点的"),t("code",[v._v("font-size")]),v._v("都等于"),t("code",[v._v("20")]),v._v("。")]),v._v(" "),t("p",[v._v("为了加深你对"),t("code",[v._v("CSS")]),v._v("继承的理解，你可以打开"),t("code",[v._v("Chrome")]),v._v("的“开发者工具”，选择第一个“"),t("code",[v._v("element")]),v._v("”标签，再选择“"),t("code",[v._v("style")]),v._v("”子标签，你会看到如下界面")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/12.png",alt:""}})]),v._v(" "),t("p",[v._v("这个界面展示的信息很丰富，大致可描述为如下：")]),v._v(" "),t("ul",[t("li",[v._v("首先，可以选择要查看的元素的样式（位于图中的区域"),t("code",[v._v("2")]),v._v("中），在图中的第"),t("code",[v._v("1")]),v._v("个区域中点击对应的元素元素，就可以了下面的区域查看该元素的样式了。比如这里我们选择的元素是"),t("code",[v._v("<p>")]),v._v("标签，位于"),t("code",[v._v("html.body.div.")]),v._v("这个路径下面；")]),v._v(" "),t("li",[v._v("其次，可以从样式来源（位于图中的区域"),t("code",[v._v("3")]),v._v("中）中查看样式的具体来源信息，看看是来源于样式文件，还是来源于"),t("code",[v._v("UserAgent")]),v._v("样式表。这里需要特别提下"),t("code",[v._v("UserAgent")]),v._v("样式，它是浏览器提供的一组默认样式，如果你不提供任何样式，默认使用的就是"),t("code",[v._v("UserAgent")]),v._v("样式。")]),v._v(" "),t("li",[v._v("最后，可以通过区域"),t("code",[v._v("2")]),v._v("和区域"),t("code",[v._v("3")]),v._v("来查看样式继承的具体过程。")])]),v._v(" "),t("p",[v._v("以上就是"),t("code",[v._v("CSS")]),v._v("继承的一些特性，样式计算过程中，会根据"),t("code",[v._v("DOM")]),v._v("节点的继承关系来合理计算节点样式。")]),v._v(" "),t("p",[v._v("样式计算过程中的第二个规则是样式层叠。"),t("strong",[v._v("层叠是"),t("code",[v._v("CSS")]),v._v("的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法")]),v._v("。它在"),t("code",[v._v("CSS")]),v._v("处于核心地位，"),t("code",[v._v("CSS")]),v._v("的全称“层叠样式表”正是强调了这一点。关于层叠的具体规则这里就不做过多介绍了，网上资料也非常多，你可以自行搜索学习")]),v._v(" "),t("p",[v._v("总之，样式计算阶段的目的是为了计算出"),t("code",[v._v("DOM")]),v._v("节点中每个元素的具体样式，在计算过程中需要遵守"),t("code",[v._v("CSS")]),v._v("的继承和层叠两个规则。这个阶段最终输出的内容是每个"),t("code",[v._v("DOM")]),v._v("节点的样式，并被保存在"),t("code",[v._v("ComputedStyle")]),v._v("的结构内。")]),v._v(" "),t("p",[v._v("如果你想了解每个"),t("code",[v._v("DOM")]),v._v("元素最终的计算样式，可以打开"),t("code",[v._v("Chrome")]),v._v("的“开发者工具”，选择第一个“"),t("code",[v._v("element")]),v._v("”标签，然后再选择“"),t("code",[v._v("Computed")]),v._v("”子标签，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/13.png",alt:""}})]),v._v(" "),t("p",[v._v("上图红色方框中显示了"),t("code",[v._v("html.body.div.p")]),v._v("标签的"),t("code",[v._v("ComputedStyle")]),v._v("的值。你想要查看哪个元素，点击左边对应的标签就可以了")]),v._v(" "),t("h2",{attrs:{id:"布局阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布局阶段"}},[v._v("#")]),v._v(" 布局阶段")]),v._v(" "),t("p",[v._v("现在，我们有"),t("code",[v._v("DOM")]),v._v("树和"),t("code",[v._v("DOM")]),v._v("树中元素的样式，但这还不足以显示页面，因为我们还不知道"),t("code",[v._v("DOM")]),v._v("元素的几何位置信息。那么接下来就需要计算出"),t("code",[v._v("DOM")]),v._v("树中可见元素的几何位置，我们把这个计算过程叫做布局。")]),v._v(" "),t("p",[t("code",[v._v("Chrome")]),v._v("在布局阶段需要完成两个任务："),t("strong",[v._v("创建布局树")]),v._v("和"),t("strong",[v._v("布局计算")]),v._v("；")]),v._v(" "),t("h3",{attrs:{id:"_1-创建布局树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建布局树"}},[v._v("#")]),v._v(" 1. 创建布局树")]),v._v(" "),t("p",[v._v("你可能注意到了"),t("code",[v._v("DOM")]),v._v("树还含有很多不可见的元素，比如"),t("code",[v._v("head")]),v._v("标签，还有使用了"),t("code",[v._v("display:none")]),v._v("属性的元素。所以在显示之前，我们还要额外地构建一棵只包含可见元素布局树。")]),v._v(" "),t("p",[v._v("我们结合下图来看看布局树的构造过程：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/14.png",alt:""}})]),v._v(" "),t("p",[v._v("从上图可以看出，"),t("code",[v._v("DOM")]),v._v("树中所有"),t("strong",[v._v("不可见的节点")]),v._v("都没有包含到布局树中。")]),v._v(" "),t("p",[v._v("为了构建布局树，浏览器大体上完成了下面这些工作")]),v._v(" "),t("ul",[t("li",[v._v("遍历"),t("code",[v._v("DOM")]),v._v("树中的所有"),t("strong",[v._v("可见节点")]),v._v("，并把这些节点加到布局中；")]),v._v(" "),t("li",[v._v("而不可见的节点会被布局树忽略掉，如"),t("code",[v._v("head")]),v._v("标签下面的全部内容，再比如"),t("code",[v._v("body.p.span")]),v._v("这个元素，因为它的属性包含 "),t("code",[v._v("dispaly:none")]),v._v("，所以这个元素也没有被包进布局树")])]),v._v(" "),t("h3",{attrs:{id:"_2-布局计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-布局计算"}},[v._v("#")]),v._v(" 2. 布局计算")]),v._v(" "),t("p",[v._v("现在我们有了一棵完整的布局树。那么接下来，就要计算布局树节点的坐标位置了。布局的计算过程非常复杂，我们这里先跳过不讲，等到后面章节中我再做详细的介绍。")]),v._v(" "),t("p",[v._v("在执行布局操作的时候，会把布局运算的结果重新写回布局树中，所以布局树既是输入内容也是输出内容，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。针对这个问题，"),t("code",[v._v("Chrome")]),v._v("团队正在重构布局代码，下一代布局系统叫"),t("code",[v._v("LayoutNG")]),v._v("，试图更清晰地分离输入和输出，从而让新设计的布局算法更加简单。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("好了，今天正文就到这里，我画了下面这张比较完整的渲染流水线，你可以结合这张图来回顾下今天的内容。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part1/ls5/15.png",alt:""}})]),v._v(" "),t("p",[v._v("从图中可以看出，本节内容我们介绍了渲染流程的前三个阶段："),t("code",[v._v("DOM")]),v._v("生成、样式计算和布局。要点可大致总结为如下：")]),v._v(" "),t("ul",[t("li",[v._v("浏览器不能直接理解"),t("code",[v._v("HTML")]),v._v("数据，所以第一步需要将其转换为浏览器能够理解的"),t("code",[v._v("DOM")]),v._v("树结构；")]),v._v(" "),t("li",[v._v("生成"),t("code",[v._v("DOM")]),v._v("树后，还需要根据"),t("code",[v._v("CSS")]),v._v("样式表，来计算出"),t("code",[v._v("DOM")]),v._v("树所有节点的样式；")]),v._v(" "),t("li",[v._v("最后计算"),t("code",[v._v("DOM")]),v._v("元素的布局信息，使其都保存在布局树中。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);