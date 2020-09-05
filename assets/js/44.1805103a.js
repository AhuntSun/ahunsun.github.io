(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{479:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_28-webcomponent：像搭积木一样构建web应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_28-webcomponent：像搭积木一样构建web应用"}},[t._v("#")]),t._v(" 28.webComponent：像搭积木一样构建web应用")]),t._v(" "),a("p",[t._v("什么是组件化呢？")]),t._v(" "),a("p",[t._v("其实组件化并没有一个明确的定义，不过这里我们可以使用 "),a("code",[t._v("10")]),t._v(" 个字来形容什么是"),a("strong",[t._v("组件化")]),t._v("，那就是："),a("strong",[t._v("对内高内聚")]),t._v("，"),a("strong",[t._v("对外低耦合")]),t._v("。对内各个元素彼此紧密结合、相互依赖，对外和其他组件的联系最少且接口简单。")]),t._v(" "),a("p",[t._v("可以说，程序员对组件化开发有着天生的需求，因为一个稍微复杂点的项目，就涉及到多人协作开发的问题，每个人负责的组件需要尽可能独立完成自己的功能，其组件的内部状态不能影响到别人的组件，在需要和其他组件交互的地方得"),a("strong",[t._v("提前协商好接口")]),t._v("。通过组件化可以降低整个系统的耦合度，同时也降低程序员之间沟通复杂度，让系统变得更加"),a("strong",[t._v("易于维护")]),t._v("。")]),t._v(" "),a("p",[t._v("使用组件化能带来很多优势，所以很多语言天生就对组件化提供了很好的支持，比如 "),a("code",[t._v("C/C++")]),t._v(" 就可以很好地将功能封装成模块，无论是业务逻辑，还是基础功能，抑或是 "),a("code",[t._v("UI")]),t._v("，都能很好地将其组合在一起，实现"),a("strong",[t._v("组件内部的高度内聚")]),t._v("、"),a("strong",[t._v("组件之间的低耦合")]),t._v("。")]),t._v(" "),a("p",[t._v("大部分语言都能实现组件化，归根结底在于编程语言特性，大多数语言都有自己的函数级作用域、块级作用域和类，可以将内部的状态数据隐藏在作用域之下或者对象的内部，这样外部就无法访问了，然后通过约定好的"),a("strong",[t._v("接口和外部进行通信")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("JavaScript")]),t._v(" 虽然有不少缺点，但是作为一门编程语言，它也能很好地实现组件化，毕竟有自己的函数级作用域和块级作用域，所以封装内部状态数据并提供接口给外部都是没有问题的。")]),t._v(" "),a("p",[t._v("既然 "),a("code",[t._v("JavaScript")]),t._v(" 可以很好地实现组件化，那么我们所谈论的 "),a("code",[t._v("WebComponent")]),t._v(" 到底又是什么呢？")]),t._v(" "),a("h2",{attrs:{id:"阻碍前端组件化的因素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻碍前端组件化的因素"}},[t._v("#")]),t._v(" 阻碍前端组件化的因素")]),t._v(" "),a("p",[t._v("在前端虽然 "),a("code",[t._v("HTML")]),t._v("、"),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("JavaScript")]),t._v(" 是强大的开发语言，但是在大型项目中维护起来会比较困难，如果在页面中嵌入第三方内容时，还需要确保第三方的内容样式不会影响到当前内容，同样也要确保当前的 "),a("code",[t._v("DOM")]),t._v(" 不会影响到第三方的内容。")]),t._v(" "),a("p",[t._v("所以要聊 "),a("code",[t._v("WebComponent")]),t._v("，得先看看 "),a("code",[t._v("HTML")]),t._v(" 和"),a("code",[t._v("CSS")]),t._v("是如何"),a("strong",[t._v("阻碍前端组件化")]),t._v("的，这里我们就通过下面这样一个简单的例子来分析下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<style>\np {\n      background-color: brown;\n      color: cornsilk\n   }\n</style>\n<p>time.geekbang.org</p>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<style>\np {\n      background-color: red;\n      color: blue\n   }\n<p>time.geekbang</p>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上面这两段代码分别实现了自己 "),a("code",[t._v("p")]),t._v(" 标签的属性，如果两个人分别负责开发这两段代码的话，那么在测试阶段可能没有什么问题，不过当最终项目整合的时候，其中内部的 "),a("code",[t._v("CSS")]),t._v(" 属性会影响到其他外部的 "),a("code",[t._v("p")]),t._v(" 标签的，之所以会这样，是因为 "),a("code",[t._v("CSS")]),t._v(" 是"),a("strong",[t._v("影响全局")]),t._v("的。")]),t._v(" "),a("p",[t._v("我们在《"),a("code",[t._v("23")]),t._v(" | 渲染流水线："),a("code",[t._v("CSS")]),t._v(" 如何影响首次加载时的白屏时间？》这篇文章中分析过，渲染引擎会将所有的 "),a("code",[t._v("CSS")]),t._v(" 内容解析为 "),a("code",[t._v("CSSOM")]),t._v("，在生成布局树的时候，会在 "),a("code",[t._v("CSSOM")]),t._v(" 中为布局树中的元素查找样式，所以有两个相同标签最终所显示出来的效果是一样的，渲染引擎是不能为它们分别单独设置样式的。")]),t._v(" "),a("p",[t._v("除了 "),a("code",[t._v("CSS")]),t._v(" 的"),a("strong",[t._v("全局属性会阻碍组件化")]),t._v("，"),a("code",[t._v("DOM")]),t._v(" 也是阻碍组件化的一个因素，因为在页面中只有一个 "),a("code",[t._v("DOM")]),t._v("，任何地方都可以直接读取和修改 "),a("code",[t._v("DOM")]),t._v("。所以使用 "),a("code",[t._v("JavaScript")]),t._v(" 来实现组件化是没有问题的，但是 "),a("code",[t._v("JavaScript")]),t._v(" 一旦遇上 "),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v("，那么就相当难办了")]),t._v(" "),a("h2",{attrs:{id:"webcomponent-组件化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webcomponent-组件化开发"}},[t._v("#")]),t._v(" "),a("code",[t._v("WebComponent")]),t._v(" 组件化开发")]),t._v(" "),a("p",[t._v("现在我们了解了"),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v(" 是阻碍组件化的两个因素，那要怎么解决呢？")]),t._v(" "),a("p",[a("code",[t._v("WebComponent")]),t._v(" 给出了解决思路，它提供了对"),a("strong",[t._v("局部视图封装能力")]),t._v("，可以让 "),a("code",[t._v("DOM")]),t._v("、"),a("code",[t._v("CSSOM")]),t._v(" 和 "),a("code",[t._v("JavaScript")]),t._v(" 运行在局部环境中，这样就使得局部的 "),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v(" 不会影响到全局。")]),t._v(" "),a("p",[t._v("了解了这些，下面我们就结合具体代码来看看 "),a("code",[t._v("WebComponent")]),t._v(" 是怎么实现组件化的。")]),t._v(" "),a("p",[t._v("前面我们说了，"),a("code",[t._v("WebComponent")]),t._v(" 是"),a("strong",[t._v("一套技术的组合")]),t._v("，具体涉及到了"),a("code",[t._v("Custom elements")]),t._v("（"),a("strong",[t._v("自定义元素")]),t._v("）、"),a("code",[t._v("Shadow DOM")]),t._v("（"),a("strong",[t._v("影子 "),a("code",[t._v("DOM")])]),t._v("）和"),a("code",[t._v("HTML templates")]),t._v("（"),a("strong",[a("code",[t._v("HTML")]),t._v(" 模板")]),t._v("），详细内容你可以参考 "),a("code",[t._v("MDN")]),t._v(" 上的"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关链接"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("下面我们就来演示下这 "),a("code",[t._v("3")]),t._v(" 个技术是怎么实现数据封装的，如下面代码所")]),t._v(" "),a("p",[t._v("下面我们就来演示下这 "),a("code",[t._v("3")]),t._v("个技术是怎么实现数据封装的，如下面代码所示：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n            一：定义模板\n            二：定义内部 CSS 样式\n            三：定义 JavaScript 行为\n    --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("geekbang-t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n            "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" brown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cornsilk\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n            "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bisque"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid chocolate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("time.geekbang.org"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("time1.geekbang.org"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inner log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GeekBang")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HTMLElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取组件模板")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#geekbang-t'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建影子 DOM 节点")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shadowDOM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachShadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将模板添加到影子 DOM 上")]),t._v("\n                shadowDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        customElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'geek-bang'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GeekBang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n \n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("geek-bang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("geek-bang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("time.geekbang.org"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("time1.geekbang.org"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("geek-bang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("geek-bang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br")])]),a("p",[t._v("详细观察上面这段代码，我们可以得出：要使用 "),a("code",[t._v("WebComponent")]),t._v("，通常要实现下面三个步骤。")]),t._v(" "),a("p",[a("strong",[t._v("首先，使用 "),a("code",[t._v("template")]),t._v(" 属性来创建模板")]),t._v("。利用 "),a("code",[t._v("DOM")]),t._v(" 可以查找到模板的内容，但是模板元素是不会被渲染到页面上的，也就是说 "),a("code",[t._v("DOM")]),t._v(" 树中的 "),a("code",[t._v("template")]),t._v(" 节点"),a("strong",[t._v("不会出现在布局树")]),t._v("中，所以我们可以使用 "),a("code",[t._v("template")]),t._v(" 来自定义一些基础的元素结构，这些基础的元素结构是可以被重复使用的。一般模板定义好之后，我们还需要在模板的内部定义样式信息。")]),t._v(" "),a("p",[a("strong",[t._v("其次，我们需要创建一个 "),a("code",[t._v("GeekBang")]),t._v(" 的类")]),t._v("。在该类的构造函数中要完成三件事：")]),t._v(" "),a("ul",[a("li",[t._v("查找模板内容；")]),t._v(" "),a("li",[t._v("创建影子 "),a("code",[t._v("DOM")]),t._v("；")]),t._v(" "),a("li",[t._v("再将模板添加到影子 "),a("code",[t._v("DOM")]),t._v(" 上")])]),t._v(" "),a("p",[t._v("上面最难理解的是影子 "),a("code",[t._v("DOM")]),t._v("，其实影子 "),a("code",[t._v("DOM")]),t._v(" 的作用是将模板中的内容与全局 "),a("code",[t._v("DOM")]),t._v(" 和 "),a("code",[t._v("CSS")]),t._v(" 进行"),a("strong",[t._v("隔离")]),t._v("，这样我们就可以实现"),a("strong",[t._v("元素和样式的私有化")]),t._v("了。你可以把影子 "),a("code",[t._v("DOM")]),t._v(" 看成是一个"),a("strong",[t._v("作用域")]),t._v("，其内部的样式和元素是不会影响到全局的样式和元素的，而在全局环境下，要访问影子 "),a("code",[t._v("DOM")]),t._v(" 内部的样式或者元素也是需要通过约定好的接口的。")]),t._v(" "),a("p",[t._v("总之，通过影子 "),a("code",[t._v("DOM")]),t._v("，我们就实现了 "),a("code",[t._v("CSS")]),t._v(" 和元素的"),a("strong",[t._v("封装")]),t._v("，在创建好封装影子 "),a("code",[t._v("DOM")]),t._v(" 的类之后，我们就可以使用 "),a("code",[t._v("customElements.define")]),t._v(" 来自定义元素了（可参考上述代码定义元素的方式）。")]),t._v(" "),a("blockquote",[a("p",[t._v("最后，就很简单了，可以像正常使用 "),a("code",[t._v("HTML")]),t._v(" 元素一样使用该元素，如上述代码中的"),a("code",[t._v("<geek-bang></geek-bang>")]),t._v("。")])]),t._v(" "),a("p",[t._v("上述代码最终渲染出来的页面，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls28/1.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中我们可以看出，影子 "),a("code",[t._v("DOM")]),t._v(" 内部的样式是不会影响到全局 "),a("code",[t._v("CSSOM")]),t._v(" 的。另外，使用 "),a("code",[t._v("DOM")]),t._v(" 接口也是无法直接查询到影子 "),a("code",[t._v("DOM")]),t._v("内部元素的，比如你可以使用"),a("code",[t._v("document.getElementsByTagName('div')")]),t._v("来查找所有 "),a("code",[t._v("div")]),t._v(" 元素，这时候你会发现影子 "),a("code",[t._v("DOM")]),t._v(" 内部的元素都是无法查找的，因为要想查找影子 "),a("code",[t._v("DOM")]),t._v(" 内部的元素需要专门的接口，所以通过这种方式又将影子内部的 "),a("code",[t._v("DOM")]),t._v(" 和外部的 "),a("code",[t._v("DOM")]),t._v(" 进行了隔离。")]),t._v(" "),a("p",[t._v("通过影子 "),a("code",[t._v("DOM")]),t._v(" 可以"),a("strong",[t._v("隔离")]),t._v(" "),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v("，不过需要注意一点，影子 "),a("code",[t._v("DOM")]),t._v(" 的 "),a("code",[t._v("JavaScript")]),t._v(" 脚本是"),a("strong",[t._v("不会被隔离")]),t._v("的，比如在影子 "),a("code",[t._v("DOM")]),t._v(" 定义的 "),a("code",[t._v("JavaScript")]),t._v(" 函数依然可以被外部访问，这是因为 "),a("code",[t._v("JavaScript")]),t._v(" 语言本身已经可以很好地实现组件化了。")]),t._v(" "),a("h2",{attrs:{id:"浏览器如何实现影子-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何实现影子-dom"}},[t._v("#")]),t._v(" 浏览器如何实现影子 "),a("code",[t._v("DOM")])]),t._v(" "),a("p",[t._v("关于 "),a("code",[t._v("WebComponent")]),t._v(" 的使用方式我们就介绍到这里。"),a("code",[t._v("WebComponent")]),t._v(" 整体知识点不多，内容也不复杂，我认为核心就是影子 "),a("code",[t._v("DOM")]),t._v("。上面我们介绍影子 "),a("code",[t._v("DOM")]),t._v(" 的作用主要有以下两点：")]),t._v(" "),a("ul",[a("li",[t._v("影子 "),a("code",[t._v("DOM")]),t._v(" 中的元素对于整个网页是不可见的；")]),t._v(" "),a("li",[t._v("影子 "),a("code",[t._v("DOM")]),t._v(" 的 "),a("code",[t._v("CSS")]),t._v("不会影响到整个网页的 "),a("code",[t._v("CSSOM")]),t._v("，影子 "),a("code",[t._v("DOM")]),t._v(" 内部的 "),a("code",[t._v("CSS")]),t._v(" 只对内部的元素起作用。")])]),t._v(" "),a("p",[t._v("那么浏览器是如何实现影子 "),a("code",[t._v("DOM")]),t._v(" 的呢？下面我们就来分析下，如下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part5/ls28/2.png",alt:""}})]),t._v(" "),a("p",[t._v("该图是上面那段示例代码对应的 "),a("code",[t._v("DOM")]),t._v(" 结构图，从图中可以看出，我们使用了两次 "),a("code",[t._v("geek-bang")]),t._v(" 属性，那么就会生成两个影子"),a("code",[t._v("DOM")]),t._v("，并且每个影子 "),a("code",[t._v("DOM")]),t._v(" 都有一个 "),a("code",[t._v("shadow root")]),t._v(" 的根节点，我们可以将要展示的样式或者元素添加到影子 "),a("code",[t._v("DOM")]),t._v(" 的根节点上，每个影子 "),a("code",[t._v("DOM")]),t._v(" 你都可以看成是一个"),a("strong",[t._v("独立")]),t._v("的 "),a("code",[t._v("DOM")]),t._v("，它有自己的样式、自己的属性，内部样式不会影响到外部样式，外部样式也不会影响到内部样式。")]),t._v(" "),a("p",[t._v("浏览器为了实现影子 "),a("code",[t._v("DOM")]),t._v(" 的特性，在代码内部做了大量的条件判断，比如当通过 "),a("code",[t._v("DOM")]),t._v(" 接口去查找元素时，渲染引擎会去判断 "),a("code",[t._v("geek-bang")]),t._v(" 属性下面的 "),a("code",[t._v("shadow-root")]),t._v(" 元素是否是影子 "),a("code",[t._v("DOM")]),t._v("，如果是影子 "),a("code",[t._v("DOM")]),t._v("，那么就直接跳过 "),a("code",[t._v("shadow-root")]),t._v(" 元素的查询操作。所以这样通过 "),a("code",[t._v("DOM API")]),t._v("就无法直接查询到影子 "),a("code",[t._v("DOM")]),t._v(" 的内部元素了。")]),t._v(" "),a("p",[t._v("另外，当生成布局树的时候，渲染引擎也会判断 "),a("code",[t._v("geek-bang")]),t._v(" 属性下面的 "),a("code",[t._v("shadow-root")]),t._v(" 元素是否是影子 "),a("code",[t._v("DOM")]),t._v("，如果是，那么在影子 "),a("code",[t._v("DOM")]),t._v(" 内部元素的节点选择 "),a("code",[t._v("CSS")]),t._v(" 样式的时候，会直接使用影子 "),a("code",[t._v("DOM")]),t._v(" 内部的 "),a("code",[t._v("CSS")]),t._v(" 属性。所以这样最终渲染出来的效果就是影子 "),a("code",[t._v("DOM")]),t._v(" 内部定义的样式。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("好了，今天就讲到这里，下面我来总结下本文的主要内容。")]),t._v(" "),a("p",[t._v("首先，我们介绍了组件化开发是程序员的刚需，所谓组件化就是功能模块要实现"),a("strong",[t._v("高内聚")]),t._v("、"),a("strong",[t._v("低耦合")]),t._v("的特性。不过由于 "),a("code",[t._v("DOM")]),t._v(" 和 "),a("code",[t._v("CSSOM")]),t._v(" "),a("strong",[t._v("都是全局")]),t._v("的，所以它们是"),a("strong",[t._v("影响了前端组件化")]),t._v("的主要元素。基于这个原因，就出现 "),a("code",[t._v("WebComponent")]),t._v("，它包含自定义"),a("strong",[t._v("元素")]),t._v("、"),a("strong",[t._v("影子 "),a("code",[t._v("DOM")])]),t._v(" 和 "),a("strong",[a("code",[t._v("HTML")]),t._v(" 模板")]),t._v("三种技术，使得开发者可以隔离 "),a("code",[t._v("CSS")]),t._v(" 和 "),a("code",[t._v("DOM")]),t._v("。在此基础上，我们还重点介绍了影子 "),a("code",[t._v("DOM")]),t._v(" 到底是怎么实现的。")]),t._v(" "),a("p",[t._v("关于 "),a("code",[t._v("WebComponent")]),t._v(" 的未来如何，这里我们不好预测和评判，但是有一点可以肯定，"),a("code",[t._v("WebComponent")]),t._v(" 也会采用"),a("strong",[t._v("渐进式迭代")]),t._v("的方式向前推进，未来依然有很多坑需要去填")])])}),[],!1,null,null,null);s.default=e.exports}}]);