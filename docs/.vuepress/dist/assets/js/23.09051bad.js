(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{343:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_23-渲染流水线：css如何影响首次加载时的白屏时间？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23-渲染流水线：css如何影响首次加载时的白屏时间？"}},[t._v("#")]),t._v(" 23.渲染流水线：CSS如何影响首次加载时的白屏时间？")]),t._v(" "),a("p",[t._v("在上一篇文章中我们详细介绍了 "),a("code",[t._v("DOM")]),t._v(" 的生成过程，并结合具体例子分析了 "),a("code",[t._v("JavaScript")]),t._v(" 是如何阻塞 "),a("code",[t._v("DOM")]),t._v(" 生成的。那本文我们就继续深入聊聊渲染流水线中的 "),a("code",[t._v("CSS")]),t._v("。因为 "),a("code",[t._v("CSS")]),t._v(" 是页面中非常重要的资源，它决定了页面最终显示出来的效果，并影响着用户对整个网站的第一体验。所以，搞清楚浏览器中的 "),a("code",[t._v("CSS")]),t._v(" 是怎么工作的很有必要，只有理解了 "),a("code",[t._v("CSS")]),t._v(" 是如何工作的，你才能更加深刻地理解如何去优化页面。")]),t._v(" "),a("p",[t._v("本文我们先站在"),a("strong",[t._v("渲染流水线")]),t._v("的视角来介绍 "),a("code",[t._v("CSS")]),t._v(" 是如何工作的，然后通过"),a("code",[t._v("CSS")]),t._v(" 的工作流程来分析性能瓶颈，最后再来讨论如何"),a("strong",[t._v("减少首次加载时的白屏时间")])]),t._v(" "),a("p",[t._v("渲染流水线视角下的 "),a("code",[t._v("CSS")]),t._v("\n我们先结合下面代码来看看最简单的渲染流程：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//theme.css\ndiv{ \n    color : coral;\n    background-color:black\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geekbang com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("这两段代码分别由 "),a("code",[t._v("CSS")]),t._v(" 文件和 "),a("code",[t._v("HTML")]),t._v(" 文件构成，我们来分析下打开这段 "),a("code",[t._v("HTML")]),t._v(" 文件时的渲染流水线，你可以先参考下面这张渲染流水线示意图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls23/1.png",alt:""}})]),t._v(" "),a("p",[t._v("下面我们结合上图来分析这个页面文件的"),a("strong",[t._v("渲染流水线")]),t._v("。")]),t._v(" "),a("p",[t._v("首先是发起主页面的请求，这个"),a("strong",[t._v("发起请求方")]),t._v("可能是"),a("strong",[t._v("渲染进程")]),t._v("，也有可能是"),a("strong",[t._v("浏览器进程")]),t._v("，发起的请求被送到"),a("strong",[t._v("网络进程")]),t._v("中去执行。网络进程接收到返回的 "),a("code",[t._v("HTML")]),t._v(" 数据之后，将其发送给渲染进程，渲染进程会解析 "),a("code",[t._v("HTML")]),t._v(" 数据并构建 "),a("code",[t._v("DOM")]),t._v("。这里你需要特别注意下，"),a("strong",[t._v("请求 "),a("code",[t._v("HTML")]),t._v(" 数据")]),t._v("和"),a("strong",[t._v("构建 "),a("code",[t._v("DOM")])]),t._v(" 中间有一段空闲时间，这个空闲时间有可能成为页面渲染的瓶颈。")]),t._v(" "),a("p",[t._v("上一篇文章中我们提到过，当渲染进程接收 "),a("code",[t._v("HTML")]),t._v(" 文件字节流时，会先开启一个"),a("strong",[t._v("预解析线程")]),t._v("，如果遇到 "),a("code",[t._v("JavaScript")]),t._v(" 文件或者 "),a("code",[t._v("CSS")]),t._v(" 文件，那么预解析线程会"),a("strong",[t._v("提前下载")]),t._v("这些数据。对于上面的代码，预解析线程会解析出来一个外部的 "),a("code",[t._v("theme.css")]),t._v(" 文件，并发起 "),a("code",[t._v("theme.css")]),t._v(" 的下载。这里也有一个"),a("strong",[t._v("空闲时间")]),t._v("需要你注意一下，就是在 "),a("code",[t._v("DOM")]),t._v(" 构建结束之后、"),a("code",[t._v("theme.css")]),t._v(" 文件还未下载完成的这段时间内，渲染流水线无事可做，因为下一步是合成布局树，而合成布局树需要 "),a("code",[t._v("CSSOM")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v("，所以这里需要"),a("strong",[t._v("等待 "),a("code",[t._v("CSS")]),t._v(" 加载结束")]),t._v("并解析成 "),a("code",[t._v("CSSOM")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"那渲染流水线为什么需要-cssom-呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那渲染流水线为什么需要-cssom-呢？"}},[t._v("#")]),t._v(" 那渲染流水线为什么需要 "),a("code",[t._v("CSSOM")]),t._v(" 呢？")]),t._v(" "),a("p",[t._v("和 "),a("code",[t._v("HTML")]),t._v(" 一样，渲染引擎也是无法直接理解 "),a("code",[t._v("CSS")]),t._v(" 文件内容的，所以需要将其解析成渲染引擎能够理解的结构，这个结构就是 "),a("code",[t._v("CSSOM")]),t._v("。和 "),a("code",[t._v("DOM")]),t._v(" 一样，"),a("code",[t._v("CSSOM")]),t._v(" 也具有"),a("strong",[t._v("两个作用")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("第一个")]),t._v("：是提供给 "),a("code",[t._v("JavaScript")]),t._v(" 操作样式表的能力；")]),t._v(" "),a("li",[a("strong",[t._v("第二个")]),t._v("：是为布局树的合成提供"),a("strong",[t._v("基础的样式信息")]),t._v("。这个 "),a("code",[t._v("CSSOM")]),t._v(" 体现在 "),a("code",[t._v("DOM")]),t._v(" 中就是"),a("code",[t._v("document.styleSheets")]),t._v("。具体结构你可以去查阅相关资料，这里我就不过多介绍了，你知道 "),a("code",[t._v("CSSOM")]),t._v(" 的两个作用是怎样的就行了。")])]),t._v(" "),a("p",[t._v("有了 "),a("code",[t._v("DOM")]),t._v(" 和 "),a("code",[t._v("CSSOM")]),t._v("，接下来就可以"),a("strong",[t._v("合成布局树")]),t._v("了，我们在前面《"),a("code",[t._v("05")]),t._v(" | 渲染流程（上）："),a("code",[t._v("HTML")]),t._v("、"),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("JavaScript")]),t._v(" 文件，是如何变成页面的？》这篇文章中讲解过布局树的构造过程，这里咱们再简单回顾下。等 "),a("code",[t._v("DOM")]),t._v(" 和 "),a("code",[t._v("CSSOM")]),t._v("都构建好之后，渲染引擎就会构造布局树。布局树的结构基本上就是复制 "),a("code",[t._v("DOM")]),t._v(" 树的结构，不同之处在于 "),a("code",[t._v("DOM")]),t._v(" 树中那些"),a("strong",[t._v("不需要显示的元素会被过滤掉")]),t._v("，如 "),a("code",[t._v("display:none")]),t._v(" 属性的元素、"),a("code",[t._v("head")]),t._v(" 标签、"),a("code",[t._v("script")]),t._v(" 标签等。复制好基本的布局树结构之后，渲染引擎会为对应的 "),a("code",[t._v("DOM")]),t._v(" 元素选择对应的样式信息，这个过程就是"),a("strong",[t._v("样式计算")]),t._v("。样式计算完成之后，渲染引擎还需要计算布局树中每个元素对应的"),a("strong",[t._v("几何位置")]),t._v("，这个过程就是计算布局。通过样式计算和计算布局就完成了最终布局树的构建。再之后，就该进行后续的绘制操作了。")]),t._v(" "),a("p",[t._v("这就是在渲染过程中涉及到 "),a("code",[t._v("CSS")]),t._v(" 的一些主要流程。")]),t._v(" "),a("p",[t._v("了解了这些之后，我们再来看看稍微复杂一点的场景，还是看下面这段 "),a("code",[t._v("HTML")]),t._v(" 代码：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//theme.css\ndiv{ \n    color : coral;\n    background-color:black\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geekbang com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geekbang com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("这段代码是我在开头代码的基础之上做了一点小修改，在 "),a("code",[t._v("body")]),t._v(" 标签内部加了一个简单的 "),a("code",[t._v("JavaScript")]),t._v("。有了 "),a("code",[t._v("JavaScript")]),t._v("，渲染流水线就有点不一样了，可以参考下面这张"),a("strong",[t._v("渲染流水线")]),t._v("图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls23/2.png",alt:""}})]),t._v(" "),a("p",[t._v("那我们就结合这张图来分析含有外部 "),a("code",[t._v("CSS")]),t._v(" 文件和 "),a("code",[t._v("JavaScript")]),t._v(" 代码的页面渲染流水线，上一篇文章中我们提到过在解析 "),a("code",[t._v("DOM")]),t._v(" 的过程中，如果遇到了 "),a("code",[t._v("JavaScript")]),t._v(" 脚本，那么需要先暂停 "),a("code",[t._v("DOM")]),t._v(" 解析去执行 "),a("code",[t._v("JavaScript")]),t._v("，因为 "),a("code",[t._v("JavaScript")]),t._v(" 有可能会"),a("strong",[t._v("修改")]),t._v("当前状态下的 "),a("code",[t._v("DOM")]),t._v("。")]),t._v(" "),a("p",[t._v("不过在执行 "),a("code",[t._v("JavaScript")]),t._v(" 脚本之前，如果页面中包含了外部 "),a("code",[t._v("CSS")]),t._v(" 文件的引用，或者通过 "),a("code",[t._v("style")]),t._v(" 标签内置了 "),a("code",[t._v("CSS")]),t._v(" 内容，那么渲染引擎还需要将这些内容转换为 "),a("code",[t._v("CSSOM")]),t._v("，因为 "),a("code",[t._v("JavaScript")]),t._v(" 有修改 "),a("code",[t._v("CSSOM")]),t._v(" 的能力，所以在执行 "),a("code",[t._v("JavaScript")]),t._v(" 之前，还需要"),a("strong",[t._v("依赖")]),t._v(" "),a("code",[t._v("CSSOM")]),t._v("。也就是说 "),a("code",[t._v("CSS")]),t._v(" 在部分情况下也会"),a("strong",[t._v("阻塞 "),a("code",[t._v("DOM")])]),t._v(" 的生成。")]),t._v(" "),a("p",[t._v("我们再来看看更加复杂一点的情况，如果在 "),a("code",[t._v("body")]),t._v(" 中被包含的是 "),a("code",[t._v("JavaScript")]),t._v(" 外部引用文件，"),a("code",[t._v("Demo")]),t._v(" 代码如下所示：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//theme.css\ndiv{ \n    color : coral;\n    background-color:black\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//foo.js")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geekbang com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("foo.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("geekbang com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("从上面代码可以看出来，"),a("code",[t._v("HTML")]),t._v(" 文件中包含了 "),a("code",[t._v("CSS")]),t._v(" 的外部引用和 "),a("code",[t._v("JavaScript")]),t._v(" 外部文件，那它们的渲染流水线是怎样的呢？可参考下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls23/3.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出来，在接收到 "),a("code",[t._v("HTML")]),t._v(" 数据之后的"),a("strong",[t._v("预解析")]),t._v("过程中，"),a("code",[t._v("HTML")]),t._v(" "),a("strong",[t._v("预解析器")]),t._v("识别出来了有 "),a("code",[t._v("CSS")]),t._v(" 文件和 "),a("code",[t._v("JavaScript")]),t._v(" 文件需要下载，然后就同时发起这两个文件的下载请求，需要注意的是，这两个文件的下载过程是"),a("strong",[t._v("重叠")]),t._v("的，所以"),a("strong",[t._v("下载时间按照最久的那个文件来算")]),t._v("。")]),t._v(" "),a("p",[t._v("后面的流水线就和前面是一样的了，不管 "),a("code",[t._v("CSS")]),t._v(" 文件和 "),a("code",[t._v("JavaScript")]),t._v(" 文件谁先到达，都要先等到 "),a("code",[t._v("CSS")]),t._v(" 文件下载完成并生成 "),a("code",[t._v("CSSOM")]),t._v("，然后再执行 "),a("code",[t._v("JavaScript")]),t._v(" 脚本，最后再继续构建 "),a("code",[t._v("DOM")]),t._v("，构建布局树，绘制页面。")]),t._v(" "),a("h2",{attrs:{id:"影响页面展示的因素以及优化策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响页面展示的因素以及优化策略"}},[t._v("#")]),t._v(" 影响页面展示的因素以及优化策略")]),t._v(" "),a("p",[t._v("前面我们为什么要花这么多文字来分析渲染流水线呢？主要原因就是渲染流水线影响到了首次页面展示的速度，而首次页面展示的速度又直接影响到了用户体验，所以我们分析渲染流水线的目的就是为了找出一些影响到首屏展示的因素，然后再基于这些因素做一些针对性的调整。")]),t._v(" "),a("p",[t._v("那么接下来我们就来看看从发起 "),a("code",[t._v("URL")]),t._v(" 请求开始，到首次显示页面的内容，在视觉上经历的三个阶段。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("第一个阶段："),a("strong",[t._v("等请求发出去之后，到")]),t._v("提交数据阶段")]),t._v("，这时页面展示出来的还是之前页面的内容。关于提交数据你可以参考前面《"),a("code",[t._v("04")]),t._v(" | 导航流程：从输入 "),a("code",[t._v("URL")]),t._v(" 到页面展示，这中间发生了什么？》这篇文章。")]),t._v(" "),a("li",[a("strong",[t._v("第二个阶段："),a("strong",[t._v("提交数据之后渲染进程会创建一个空白页面，我们通常把这段时间称为")]),t._v("解析白屏")]),t._v("，并等待 "),a("code",[t._v("CSS")]),t._v(" 文件和 "),a("code",[t._v("JavaScript")]),t._v(" 文件的加载完成，生成 "),a("code",[t._v("CSSOM")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v("，然后"),a("strong",[t._v("合成布局树")]),t._v("，最后还要经过一系列的步骤准备首次渲染。")]),t._v(" "),a("li",[t._v("**第三个阶段：**等首次渲染完成之后，就开始进入完整页面的生成阶段了，然后页面会一点点被绘制出来。")])]),t._v(" "),a("p",[t._v("影响第一个阶段的因素主要是"),a("strong",[t._v("网络")]),t._v("或者是"),a("strong",[t._v("服务器处理")]),t._v("这块儿，前面文章中我们已经讲过了，这里我们就不再继续分析了。至于第三个阶段，我们会在后续文章中分析，所以这里也不做介绍了。")]),t._v(" "),a("p",[t._v("现在我们重点关注第二个阶段，这个阶段的主要问题是"),a("strong",[t._v("白屏时间")]),t._v("，如果白屏时间过久，就会影响到用户体验。为了缩短白屏时间，我们来挨个分析这个阶段的主要任务，包括了解析 "),a("code",[t._v("HTML")]),t._v("、下载 "),a("code",[t._v("CSS")]),t._v("、下载 "),a("code",[t._v("JavaScript")]),t._v("、生成 "),a("code",[t._v("CSSOM")]),t._v("、执行 "),a("code",[t._v("JavaScript")]),t._v("、生成布局树、绘制页面一系列操作。")]),t._v(" "),a("p",[t._v("通常情况下的瓶颈主要体现在下载 "),a("code",[t._v("CSS")]),t._v(" 文件、下载 "),a("code",[t._v("JavaScript")]),t._v(" 文件和执行 "),a("code",[t._v("JavaScript")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("所以要想缩短白屏时长，可以有以下策略")])]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("strong",[t._v("内联 "),a("code",[t._v("JavaScript")]),t._v("、内联 "),a("code",[t._v("CSS")])]),t._v(" 来"),a("strong",[t._v("移除")]),t._v("这两种类型的"),a("strong",[t._v("文件下载")]),t._v("，这样获取到 "),a("code",[t._v("HTML")]),t._v(" 文件之后就可以直接开始渲染流程了。")]),t._v(" "),a("li",[t._v("但并不是所有的场合都适合内联，那么还可以尽量"),a("strong",[t._v("减少文件大小")]),t._v("，比如通过 "),a("code",[t._v("webpack")]),t._v(" 等工具"),a("strong",[t._v("移除")]),t._v("一些不必要的"),a("strong",[t._v("注释")]),t._v("，并"),a("strong",[t._v("压缩 "),a("code",[t._v("JavaScript")]),t._v(" 文件")]),t._v("。")]),t._v(" "),a("li",[t._v("还可以将一些不需要在解析 "),a("code",[t._v("HTML")]),t._v(" 阶段使用的 "),a("code",[t._v("JavaScript")]),t._v(" 标记上 "),a("code",[t._v("sync")]),t._v(" 或者 "),a("code",[t._v("defer")]),t._v("。")]),t._v(" "),a("li",[t._v("对于大的 "),a("code",[t._v("CSS")]),t._v(" 文件，可以通过"),a("strong",[t._v("媒体查询属性")]),t._v("，将其拆分为多个不同用途的 "),a("code",[t._v("CSS")]),t._v(" 文件，这样只有在特定的场景下才会加载特定的 "),a("code",[t._v("CSS")]),t._v(" 文件。")]),t._v(" "),a("li",[t._v("通过以上策略就能缩短白屏展示的时长了，不过在实际项目中，总是存在各种各样的情况，这些策略并不能随心所欲地去引用，所以还需要结合实际情况来调整最佳方案。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("好了，今天就介绍到这里，下面我来总结下今天的内容。")]),t._v(" "),a("ul",[a("li",[t._v("我们首先介绍了 "),a("code",[t._v("CSS")]),t._v(" 在渲染流水线中的位置，以及 "),a("code",[t._v("CSS")]),t._v(" 是如何影响到渲染流程的；接下来我们通过渲染流水线分析了从发出请求到页面首次绘制的三个阶段；最后重点介绍了第二个白屏阶段以及优化该阶段的一些策略。")]),t._v(" "),a("li",[t._v("通过今天的内容我们可以知道虽然 "),a("code",[t._v("JavaScript")]),t._v(" 和 "),a("code",[t._v("CSS")]),t._v(" 给我们带来了极大的便利，不过也对页面的渲染带来了很多的限制，所以我们要关注资源加载速度，需要小心翼翼地处理各种资源之间的关联关系。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);