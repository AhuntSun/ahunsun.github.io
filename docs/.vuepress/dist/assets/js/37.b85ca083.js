(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{462:function(t,a,s){"use strict";s.r(a);var v=s(27),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_22-dom树：javascript是如何影响dom树构建的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-dom树：javascript是如何影响dom树构建的"}},[t._v("#")]),t._v(" 22.DOM树：JavaScript是如何影响DOM树构建的")]),t._v(" "),s("p",[t._v("在上一篇文章中，我们通过开发者工具中的网络面板，介绍了网络请求过程的几种性能指标以及对页面加载的影响。")]),t._v(" "),s("p",[t._v("而在渲染流水线中，后面的步骤都直接或者间接地依赖于 "),s("code",[t._v("DOM")]),t._v(" 结构，所以本文我们就继续沿着网络数据流路径来介绍 "),s("code",[t._v("DOM")]),t._v(" 树是怎么生成的。然后再基于 "),s("code",[t._v("DOM")]),t._v(" 树的解析流程介绍两块内容：第一个是在解析过程中遇到 "),s("strong",[s("code",[t._v("JavaScript")]),t._v(" 脚本")]),t._v("，"),s("code",[t._v("DOM")]),t._v(" 解析器是如何处理的？第二个是 "),s("code",[t._v("DOM")]),t._v(" 解析器是如何处理"),s("strong",[t._v("跨站点资源")]),t._v("的？")]),t._v(" "),s("h2",{attrs:{id:"什么是-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dom"}},[t._v("#")]),t._v(" 什么是 "),s("code",[t._v("DOM")])]),t._v(" "),s("p",[t._v("从网络传给渲染引擎的 "),s("code",[t._v("HTML")]),t._v(" 文件字节流是无法直接被渲染引擎理解的，所以要将其转化为渲染引擎能够理解的内部结构，这个结构就是 "),s("code",[t._v("DOM")]),t._v("。"),s("code",[t._v("DOM")]),t._v(" 提供了对 "),s("code",[t._v("HTML")]),t._v(" "),s("strong",[t._v("文档结构化")]),t._v("的表述。在渲染引擎中，"),s("code",[t._v("DOM")]),t._v(" 有三个层面的作用")]),t._v(" "),s("ul",[s("li",[t._v("从"),s("strong",[t._v("页面的视角")]),t._v("来看，"),s("code",[t._v("DOM")]),t._v(" 是生成页面的"),s("strong",[t._v("基础数据结构")]),t._v("。")]),t._v(" "),s("li",[t._v("从 "),s("strong",[s("code",[t._v("JavaScript")]),t._v(" 脚本视角")]),t._v("来看，"),s("code",[t._v("DOM")]),t._v(" 提供给 "),s("code",[t._v("JavaScript")]),t._v(" 脚本操作的接口，通过这套接口，"),s("code",[t._v("JavaScript")]),t._v(" 可以对 "),s("code",[t._v("DOM")]),t._v(" 结构进行访问，从而改变文档的"),s("strong",[t._v("结构")]),t._v("、"),s("strong",[t._v("样式")]),t._v("和"),s("strong",[t._v("内容")]),t._v("。")]),t._v(" "),s("li",[t._v("从"),s("strong",[t._v("安全视角")]),t._v("来看，"),s("code",[t._v("DOM")]),t._v(" 是一道安全防护线，一些不安全的内容在 "),s("code",[t._v("DOM")]),t._v(" 解析阶段就被拒之门外了。")])]),t._v(" "),s("p",[t._v("简言之，"),s("code",[t._v("DOM")]),t._v(" 是表述 "),s("code",[t._v("HTML")]),t._v(" 的"),s("strong",[t._v("内部数据结构")]),t._v("，它会将 "),s("code",[t._v("Web")]),t._v(" 页面和 "),s("code",[t._v("JavaScript")]),t._v(" 脚本连接起来，并过滤一些不安全的内容。")]),t._v(" "),s("h2",{attrs:{id:"dom-树如何生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-树如何生成"}},[t._v("#")]),t._v(" "),s("code",[t._v("DOM")]),t._v(" 树如何生成")]),t._v(" "),s("p",[t._v("在渲染引擎内部，有一个叫"),s("code",[t._v("HTML")]),t._v(" 解析器（"),s("code",[t._v("HTMLParser")]),t._v("）的模块，它的职责就是负责将 "),s("code",[t._v("HTML")]),t._v(" "),s("strong",[t._v("字节流")]),t._v("转换为 "),s("code",[t._v("DOM")]),t._v(" 结构。所以这里我们需要先要搞清楚 "),s("code",[t._v("HTML")]),t._v(" 解析器是怎么工作的。")]),t._v(" "),s("p",[t._v("在开始介绍 "),s("code",[t._v("HTML")]),t._v(" 解析器之前，我要先解释一个大家在留言区问到过好多次的问题："),s("code",[t._v("HTML")]),t._v(" 解析器是等整个 "),s("code",[t._v("HTML")]),t._v(" 文档加载完成之后开始解析的，还是随着 "),s("code",[t._v("HTML")]),t._v(" 文档边加载边解析的？")]),t._v(" "),s("p",[t._v("在这里我统一解答下，"),s("code",[t._v("HTML")]),t._v(" 解析器并不是等整个文档加载完成之后再解析的，而是"),s("strong",[t._v("网络进程加载了多少数据，"),s("code",[t._v("HTML")]),t._v(" 解析器便解析多少数据")]),t._v("。")]),t._v(" "),s("p",[t._v("那详细的流程是怎样的呢？网络进程接收到响应头之后，会根据响应头中的 "),s("code",[t._v("content-type")]),t._v(" 字段来判断文件的类型，比如 "),s("code",[t._v("content-type")]),t._v(" 的值是“"),s("code",[t._v("text/html")]),t._v("”，那么浏览器就会判断这是一个 "),s("code",[t._v("HTML")]),t._v(" 类型的文件，然后为该请求选择或者创建一个渲染进程。渲染进程准备好之后，网络进程和渲染进程之间会建立一个共享数据的管道，网络进程接收到数据后就往这个管道里面放，而渲染进程则从管道的另外一端不断地读取数据，并同时将读取的数据“喂”给 "),s("code",[t._v("HTML")]),t._v(" 解析器。你可以把这个管道想象成一个“水管”，网络进程接收到的字节流像水一样倒进这个“水管”，而“水管”的另外一端是渲染进程的 "),s("code",[t._v("HTML")]),t._v(" 解析器，它会动态接收字节流，并将其解析为 "),s("code",[t._v("DOM")]),t._v("。")]),t._v(" "),s("p",[t._v("解答完这个问题之后，接下来我们就可以来详细聊聊 "),s("code",[t._v("DOM")]),t._v(" 的具体生成流程了。")]),t._v(" "),s("p",[t._v("前面我们说过代码从网络传输过来是字节流的形式，那么后续字节流是如何转换为 "),s("code",[t._v("DOM")]),t._v(" 的呢？你可以参考下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/1.png",alt:""}})]),t._v(" "),s("p",[t._v("从图中你可以看出，字节流转换为 "),s("code",[t._v("DOM")]),t._v(" 需要三个阶段。")]),t._v(" "),s("p",[s("strong",[t._v("第一个阶段，通过分词器将字节流转换为 "),s("code",[t._v("Token")]),t._v("。")])]),t._v(" "),s("p",[t._v("前面《"),s("code",[t._v("14")]),t._v(" | 编译器和解释器："),s("code",[t._v("V8")]),t._v(" 是如何执行一段 "),s("code",[t._v("JavaScript")]),t._v(" 代码的？》文章中我们介绍过，"),s("code",[t._v("V8")]),t._v(" 编译 "),s("code",[t._v("JavaScript")]),t._v(" 过程中的第一步是做"),s("strong",[t._v("词法分析")]),t._v("，将 "),s("code",[t._v("JavaScript")]),t._v(" 先分解为一个个 "),s("code",[t._v("Token")]),t._v("。解析 "),s("code",[t._v("HTML")]),t._v(" 也是一样的，需要通过"),s("strong",[t._v("分词器")]),t._v("先将"),s("strong",[t._v("字节流")]),t._v("转换为一个个 "),s("code",[t._v("Token")]),t._v("，分为 "),s("code",[t._v("Tag Token")]),t._v(" 和"),s("strong",[t._v("文本 "),s("code",[t._v("Token")])]),t._v("。上述 "),s("code",[t._v("HTML")]),t._v(" 代码通过词法分析生成的 "),s("code",[t._v("Token")]),t._v(" 如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/2.png",alt:""}})]),t._v(" "),s("p",[t._v("由图可以看出，"),s("code",[t._v("Tag Token")]),t._v(" 又分 "),s("code",[t._v("StartTag")]),t._v(" 和 "),s("code",[t._v("EndTag")]),t._v("，比如"),s("code",[t._v("<body>")]),t._v("就是 "),s("code",[t._v("StartTag")]),t._v(" ，"),s("code",[t._v("</body>")]),t._v("就是"),s("code",[t._v("EndTag")]),t._v("，分别对于图中的蓝色和红色块，文本 "),s("code",[t._v("Token")]),t._v(" 对应的绿色块。")]),t._v(" "),s("p",[s("strong",[t._v("至于后续的第二个和第三个阶段是同步进行的，需要将 "),s("code",[t._v("Token")]),t._v(" 解析为 "),s("code",[t._v("DOM")]),t._v(" 节点，并将 "),s("code",[t._v("DOM")]),t._v(" 节点添加到 "),s("code",[t._v("DOM")]),t._v(" 树中")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("HTML")]),t._v(" 解析器维护了一个"),s("code",[t._v("Token")]),t._v(" 栈结构，该 "),s("code",[t._v("Token")]),t._v(" 栈主要用来计算节点之间的父子关系，在第一个阶段中生成的 "),s("code",[t._v("Token")]),t._v(" 会被按照顺序压到这个栈中。具体的处理规则如下所示：")])]),t._v(" "),s("ul",[s("li",[t._v("如果压入到栈中的是"),s("code",[t._v("StartTag Token")]),t._v("，"),s("code",[t._v("HTML")]),t._v(" 解析器会为该 "),s("code",[t._v("Token")]),t._v(" 创建一个 "),s("code",[t._v("DOM")]),t._v(" 节点，然后将该节点加入到 "),s("code",[t._v("DOM")]),t._v(" 树中，它的父节点就是栈中相邻的那个元素生成的节点。")]),t._v(" "),s("li",[t._v("如果分词器解析出来是文本 "),s("code",[t._v("Token")]),t._v("，那么会生成一个"),s("strong",[t._v("文本节点")]),t._v("，然后将该节点加入到 "),s("code",[t._v("DOM")]),t._v(" 树中，文本 "),s("code",[t._v("Token")]),t._v(" 是不需要压入到栈中，它的父节点就是当前栈顶 "),s("code",[t._v("Token")]),t._v(" 所对应的 "),s("code",[t._v("DOM")]),t._v(" 节点。")]),t._v(" "),s("li",[t._v("如果分词器解析出来的是"),s("code",[t._v("EndTag")]),t._v(" 标签，比如是 "),s("code",[t._v("EndTag div")]),t._v("，"),s("code",[t._v("HTML")]),t._v(" 解析器会查看 "),s("code",[t._v("Token")]),t._v(" 栈顶的元素是否是 "),s("code",[t._v("StarTag div")]),t._v("，如果是，就将 "),s("code",[t._v("StartTag div")]),t._v(" 从栈中弹出，表示该 "),s("code",[t._v("div")]),t._v(" 元素解析完成。")])]),t._v(" "),s("p",[t._v("通过分词器产生的新 "),s("code",[t._v("Token")]),t._v(" 就这样不停地压栈和出栈，整个解析过程就这样一直持续下去，直到分词器将所有字节流分词完成。")]),t._v(" "),s("p",[t._v("为了更加直观地理解整个过程，下面我们结合一段 "),s("code",[t._v("HTML")]),t._v(" 代码（如下），来一步步分析 "),s("code",[t._v("DOM")]),t._v(" 树的生成过程。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("这段代码以字节流的形式传给了 "),s("code",[t._v("HTML")]),t._v(" 解析器，经过分词器处理，解析出来的第一个 "),s("code",[t._v("Token")]),t._v(" 是 "),s("code",[t._v("StartTag html")]),t._v("，解析出来的 "),s("code",[t._v("Token")]),t._v(" 会被压入到栈中，并同时创建一个 "),s("code",[t._v("html")]),t._v(" 的 "),s("code",[t._v("DOM")]),t._v(" 节点，将其加入到 "),s("code",[t._v("DOM")]),t._v(" 树中。")]),t._v(" "),s("p",[t._v("这里需要补充说明下，"),s("code",[t._v("HTML")]),t._v(" 解析器开始工作时，会默认创建了一个根为 "),s("code",[t._v("document")]),t._v(" 的空 "),s("code",[t._v("DOM")]),t._v(" 结构，同时会将一个 "),s("code",[t._v("StartTag document")]),t._v(" 的 "),s("code",[t._v("Token")]),t._v(" 压入"),s("strong",[t._v("栈底")]),t._v("。然后经过分词器解析出来的第一个 "),s("code",[t._v("StartTag html Token")]),t._v(" 会被压入到栈中，并创建一个 "),s("code",[t._v("html")]),t._v(" 的 "),s("code",[t._v("DOM")]),t._v(" 节点，添加到 "),s("code",[t._v("document")]),t._v(" 上，如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/3.png",alt:""}})]),t._v(" "),s("p",[t._v("然后按照同样的流程解析出来 "),s("code",[t._v("StartTag body")]),t._v(" 和 "),s("code",[t._v("StartTag div")]),t._v("，其 "),s("code",[t._v("Token")]),t._v(" 栈和 "),s("code",[t._v("DOM")]),t._v(" 的状态如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/4.png",alt:""}})]),t._v(" "),s("p",[t._v("接下来解析出来的是第一个 "),s("code",[t._v("div")]),t._v(" 的文本 "),s("code",[t._v("Token")]),t._v("，渲染引擎会为该 "),s("code",[t._v("Token")]),t._v(" 创建一个"),s("strong",[t._v("文本节点")]),t._v("，并将该 "),s("code",[t._v("Token")]),t._v(" 添加到 "),s("code",[t._v("DOM")]),t._v(" 中，它的父节点就是当前 "),s("code",[t._v("Token")]),t._v(" 栈顶元素对应的节点，如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/5.png",alt:""}})]),t._v(" "),s("p",[t._v("再接下来，分词器解析出来第一个 "),s("code",[t._v("EndTag div")]),t._v("，这时候 "),s("code",[t._v("HTML")]),t._v(" 解析器会去判断当前栈顶的元素是否是 "),s("code",[t._v("StartTag div")]),t._v("，如果是则从栈顶弹出 "),s("code",[t._v("StartTag div")]),t._v("，如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/6.png",alt:""}})]),t._v(" "),s("p",[t._v("按照同样的规则，一路解析，最终结果如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/7.png",alt:""}})]),t._v(" "),s("p",[t._v("通过上面的介绍，相信你已经清楚 "),s("code",[t._v("DOM")]),t._v("是怎么生成的了。不过在实际生产环境中，"),s("code",[t._v("HTML")]),t._v(" 源文件中既包含 "),s("code",[t._v("CSS")]),t._v(" 和 "),s("code",[t._v("JavaScript")]),t._v("，又包含图片、音频、视频等文件，所以处理过程远比上面这个示范 "),s("code",[t._v("Demo")]),t._v(" 复杂。不过理解了这个简单的 "),s("code",[t._v("Demo")]),t._v(" 生成过程，我们就可以往下分析更加复杂的场景了。")]),t._v(" "),s("h2",{attrs:{id:"javascript-是如何影响-dom-生成的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-是如何影响-dom-生成的"}},[t._v("#")]),t._v(" "),s("code",[t._v("JavaScript")]),t._v(" 是如何影响 "),s("code",[t._v("DOM")]),t._v(" 生成的")]),t._v(" "),s("p",[t._v("我们再来看看稍微复杂点的 "),s("code",[t._v("HTML")]),t._v(" 文件，如下所示：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    div1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang'")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("我在两段 "),s("code",[t._v("div")]),t._v(" 中间插入了一段 "),s("code",[t._v("JavaScript")]),t._v(" 脚本，这段脚本的解析过程就有点不一样了。"),s("code",[t._v("script")]),t._v("标签之前，所有的解析流程还是和之前介绍的一样，但是解析到"),s("code",[t._v("script")]),t._v("标签时，渲染引擎判断这是一段脚本，此时 "),s("code",[t._v("HTML")]),t._v("解析器就会"),s("strong",[t._v("暂停")]),t._v(" "),s("code",[t._v("DOM")]),t._v(" 的解析，因为接下来的 "),s("code",[t._v("JavaScript")]),t._v(" "),s("strong",[t._v("可能要修改")]),t._v("当前已经生成的 "),s("code",[t._v("DOM")]),t._v(" 结构。")]),t._v(" "),s("p",[t._v("通过前面 "),s("code",[t._v("DOM")]),t._v(" 生成流程分析，我们已经知道当解析到 "),s("code",[t._v("script")]),t._v(" 脚本标签时，其 "),s("code",[t._v("DOM")]),t._v(" 树结构如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls22/8.png",alt:""}})]),t._v(" "),s("p",[t._v("这时候 "),s("code",[t._v("HTML")]),t._v(" 解析器"),s("strong",[t._v("暂停工作")]),t._v("，"),s("code",[t._v("JavaScript")]),t._v(" 引擎介入，并执行 "),s("code",[t._v("script")]),t._v(" 标签中的这段脚本，因为这段 "),s("code",[t._v("JavaScript")]),t._v(" 脚本修改了 "),s("code",[t._v("DOM")]),t._v(" 中第一个 "),s("code",[t._v("div")]),t._v(" 中的内容，所以执行这段脚本之后，"),s("code",[t._v("div")]),t._v(" 节点内容已经修改为 "),s("code",[t._v("time.geekbang")]),t._v(" 了。脚本执行完成之后，"),s("code",[t._v("HTML")]),t._v(" 解析器恢复解析过程，继续解析后续的内容，直至生成最终的"),s("code",[t._v("DOM")]),t._v("。")]),t._v(" "),s("p",[t._v("以上过程应该还是比较好理解的，不过除了在页面中直接内嵌 "),s("code",[t._v("JavaScript")]),t._v("脚本之外，我们还通常需要在页面中引入 "),s("code",[t._v("JavaScript")]),t._v(" 文件，这个解析过程就稍微复杂了些，如下面代码：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//foo.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndiv1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("foo.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("这段代码的功能还是和前面那段代码是一样的，不过这里我把内嵌 "),s("code",[t._v("JavaScript")]),t._v(" 脚本修改成了通过 "),s("code",[t._v("JavaScript")]),t._v(" 文件加载。其整个执行流程还是一样的，执行到 "),s("code",[t._v("JavaScript")]),t._v(" 标签时，暂停整个 "),s("code",[t._v("DOM")]),t._v(" 的解析，执行 "),s("code",[t._v("JavaScript")]),t._v(" 代码，不过这里执行 "),s("code",[t._v("JavaScript")]),t._v(" 时，需要"),s("strong",[t._v("先下载")]),t._v("这段 "),s("code",[t._v("JavaScript")]),t._v(" 代码。这里需要重点关注下载环境，因为"),s("code",[t._v("JavaScript")]),t._v(" 文件的下载过程会"),s("strong",[t._v("阻塞 "),s("code",[t._v("DOM")]),t._v(" 解析")]),t._v("，而通常下载又是非常耗时的，会受到网络环境、"),s("code",[t._v("JavaScript")]),t._v(" 文件大小等因素的影响。")]),t._v(" "),s("p",[t._v("不过 "),s("code",[t._v("Chrome")]),t._v(" 浏览器做了很多优化，其中一个主要的优化是"),s("strong",[t._v("预解析操作")]),t._v("。当渲染引擎"),s("strong",[t._v("收到字节流之后")]),t._v("，会开启一个"),s("strong",[t._v("预解析线程")]),t._v("，用来分析 "),s("code",[t._v("HTML")]),t._v(" 文件中包含的 "),s("code",[t._v("JavaScript")]),t._v("、"),s("code",[t._v("CSS")]),t._v(" 等相关文件，解析到相关文件之后，"),s("strong",[t._v("预解析线程会提前下载这些文件")]),t._v("。")]),t._v(" "),s("p",[t._v("再回到 "),s("code",[t._v("DOM")]),t._v(" 解析上，我们知道引入 "),s("code",[t._v("JavaScript")]),t._v(" 线程会阻塞 "),s("code",[t._v("DOM")]),t._v("，不过也有一些相关的策略来规避：")]),t._v(" "),s("ul",[s("li",[t._v("**第一：**比如使用 "),s("code",[t._v("CDN")]),t._v(" 来加速 "),s("code",[t._v("JavaScript")]),t._v(" 文件的加载；")]),t._v(" "),s("li",[t._v("**第二：**压缩 "),s("code",[t._v("JavaScript")]),t._v(" 文件的体积；")]),t._v(" "),s("li",[t._v("**第三：**另外，如果 "),s("code",[t._v("JavaScript")]),t._v(" 文件中没有操作 "),s("code",[t._v("DOM")]),t._v(" 相关代码，就可以将该 "),s("code",[t._v("JavaScript")]),t._v(" 脚本设置为异步加载，通过 "),s("code",[t._v("async")]),t._v(" 或 "),s("code",[t._v("defer")]),t._v(" 来标记代码，使用方式如下所示：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script async type=\"text/javascript\" src='foo.js'><\/script>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script defer type=\"text/javascript\" src='foo.js'><\/script>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("async")]),t._v(" 和 "),s("code",[t._v("defer")]),t._v(" 虽然都是异步的，不过还有一些差异，使用 "),s("code",[t._v("async")]),t._v(" 标志的脚本文件一旦加载完成，会立即执行；而使用了 "),s("code",[t._v("defer")]),t._v(" 标记的脚本文件，需要在 "),s("code",[t._v("DOMContentLoaded")]),t._v(" 事件"),s("strong",[t._v("之前")]),t._v("执行。")]),t._v(" "),s("p",[t._v("现在我们知道了 "),s("code",[t._v("JavaScript")]),t._v(" 是如何阻塞 "),s("code",[t._v("DOM")]),t._v("解析的了，那接下来我们再来结合文中代码看看另外一种情况：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<head>\n    <style src='theme.css'></style>\n</head>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            div1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要 DOM")]),t._v("\n            div1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要 CSSOM")]),t._v("\n        ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("该示例中，"),s("code",[t._v("JavaScript")]),t._v(" 代码出现了 "),s("code",[t._v("div1.style.color = ‘red'")]),t._v(" 的语句，它是用来操纵 "),s("code",[t._v("CSSOM")]),t._v(" 的，所以在执行 "),s("code",[t._v("JavaScript")]),t._v(" 之前，需要先解析 "),s("code",[t._v("JavaScript")]),t._v(" 语句之上所有的 "),s("code",[t._v("CSS")]),t._v(" 样式。所以如果代码里引用了外部的 "),s("code",[t._v("CSS")]),t._v(" 文件，那么在执行 "),s("code",[t._v("JavaScript")]),t._v(" 之前，还需要等待外部的 "),s("code",[t._v("CSS")]),t._v(" 文件下载完成，并解析生成 "),s("code",[t._v("CSSOM")]),t._v("对象之后，才能执行 "),s("code",[t._v("JavaScript")]),t._v(" 脚本。")]),t._v(" "),s("p",[t._v("而 "),s("code",[t._v("JavaScript")]),t._v(" 引擎在解析 "),s("code",[t._v("JavaScript")]),t._v(" 之前，是不知道 "),s("code",[t._v("JavaScript")]),t._v(" 是否操纵了 "),s("code",[t._v("CSSOM")]),t._v(" 的，所以渲染引擎在遇到 "),s("code",[t._v("JavaScript")]),t._v(" 脚本时，不管该脚本是否操纵了 "),s("code",[t._v("CSSOM")]),t._v("，"),s("strong",[t._v("都会执行 "),s("code",[t._v("CSS")]),t._v(" 文件下载")]),t._v("，"),s("strong",[t._v("解析操作")]),t._v("，再"),s("strong",[t._v("执行 "),s("code",[t._v("JavaScript")]),t._v(" 脚本")]),t._v("。")]),t._v(" "),s("p",[t._v("所以说 "),s("code",[t._v("JavaScript")]),t._v(" 脚本是"),s("strong",[t._v("依赖样式表")]),t._v("的，这又多了一个"),s("strong",[t._v("阻塞")]),t._v("过程。至于如何优化，我们在下篇文章中再来深入探讨。")]),t._v(" "),s("blockquote",[s("p",[t._v("即"),s("code",[t._v("HTML")]),t._v("解析"),s("code",[t._v("HTML")]),t._v("为"),s("code",[t._v("DOM")]),t._v("树的过程会被"),s("code",[t._v("js")]),t._v("阻塞，而"),s("code",[t._v("js")]),t._v("的执行又会被"),s("code",[t._v("CSS")]),t._v("阻塞；")])]),t._v(" "),s("p",[t._v("通过上面的分析，我们知道了 "),s("strong",[s("code",[t._v("JavaScript")]),t._v(" 会阻塞 "),s("code",[t._v("DOM")]),t._v(" 生成，而样式文件又会阻塞 "),s("code",[t._v("JavaScript")]),t._v(" 的执行")]),t._v("，所以在实际的工程中需要重点关注 "),s("code",[t._v("JavaScript")]),t._v(" 文件和样式表文件，使用不当会影响到页面性能的")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("好了，今天就讲到这里，下面我来总结下今天的内容。")]),t._v(" "),s("p",[t._v("首先我们介绍了 "),s("code",[t._v("DOM")]),t._v(" 是如何生成的，然后又基于 "),s("code",[t._v("DOM")]),t._v(" 的生成过程分析了 "),s("code",[t._v("JavaScript")]),t._v(" 是如何影响到 "),s("code",[t._v("DOM")]),t._v(" 生成的。因为 "),s("code",[t._v("CSS")]),t._v(" 和 "),s("code",[t._v("JavaScript")]),t._v(" 都会影响到 "),s("code",[t._v("DOM")]),t._v(" 的生成，所以我们又介绍了一些加速生成 "),s("code",[t._v("DOM")]),t._v(" 的方案，理解了这些，能让你更加深刻地理解如何去优化首次页面渲染。")]),t._v(" "),s("p",[t._v("额外说明一下，渲染引擎还有一个"),s("strong",[t._v("安全检查模块")]),t._v("叫 "),s("code",[t._v("XSSAuditor")]),t._v("，是用来"),s("strong",[t._v("检测词法安全")]),t._v("的。在分词器解析出来 "),s("code",[t._v("Token")]),t._v(" 之后，它会检测这些模块是否安全，比如"),s("strong",[t._v("是否引用了外部脚本")]),t._v("，"),s("strong",[t._v("是否符合 "),s("code",[t._v("CSP")]),t._v(" 规范")]),t._v("，"),s("strong",[t._v("是否存在跨站点请求")]),t._v("等。如果出现不符合规范的内容，"),s("code",[t._v("XSSAuditor")]),t._v(" 会对该脚本或者下载任务"),s("strong",[t._v("进行拦截")]),t._v("。详细内容我们会在后面的安全模块介绍，这里就不赘述了")])])}),[],!1,null,null,null);a.default=e.exports}}]);