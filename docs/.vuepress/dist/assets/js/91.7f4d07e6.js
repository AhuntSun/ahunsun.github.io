(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{412:function(_,v,e){"use strict";e.r(v);var o=e(33),t=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_01-一文摸透从输入url到页面渲染的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-一文摸透从输入url到页面渲染的过程"}},[_._v("#")]),_._v(" 01.一文摸透从输入URL到页面渲染的过程")]),_._v(" "),e("p",[_._v("从输入"),e("code",[_._v("URL")]),_._v("到页面渲染需要"),e("code",[_._v("Chrome")]),_._v("浏览器的多个进程配合，所以我们先来谈谈现阶段"),e("code",[_._v("Chrome")]),_._v("浏览器的多进程架构。")]),_._v(" "),e("h2",{attrs:{id:"一、chrome架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、chrome架构"}},[_._v("#")]),_._v(" 一、"),e("code",[_._v("Chrome")]),_._v("架构")]),_._v(" "),e("p",[_._v("目前"),e("code",[_._v("Chrome")]),_._v("采用的是多进程的架构模式，可分为主要的五类进程，分别是：浏览器（"),e("code",[_._v("Browser")]),_._v("）主进程、 "),e("code",[_._v("GPU")]),_._v(" 进程、网络（"),e("code",[_._v("NetWork")]),_._v("）进程、多个渲染进程和多个插件进程；")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/0.1.png",alt:""}})]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("浏览器进程")]),_._v("。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),_._v(" "),e("li",[e("strong",[_._v("渲染进程")]),_._v("。核心任务是将"),e("code",[_._v("HTML")]),_._v("、"),e("code",[_._v("CSS")]),_._v(" 和 "),e("code",[_._v("JavaScript")]),_._v("转换为用户可以与之交互的网页，排版引擎"),e("code",[_._v("Blink")]),_._v("和"),e("code",[_._v("JavaScript")]),_._v("引擎"),e("code",[_._v("V8")]),_._v("都是运行在该进程中，默认情况下，"),e("code",[_._v("Chrome")]),_._v("会为每个"),e("code",[_._v("Tab")]),_._v("标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")]),_._v(" "),e("li",[e("strong",[e("code",[_._v("GPU")]),_._v("进程")]),_._v("。其实，"),e("code",[_._v("Chrome")]),_._v("刚开始发布的时候是没有"),e("code",[_._v("GPU")]),_._v("进程的。而"),e("code",[_._v("GPU")]),_._v("的使用初衷是为了实现"),e("code",[_._v("3D CSS")]),_._v("的效果，只是随后网页、"),e("code",[_._v("Chrome")]),_._v("的"),e("code",[_._v("UI")]),_._v("界面都选择采用"),e("code",[_._v("GPU")]),_._v("来绘制，这使得"),e("code",[_._v("GPU")]),_._v("成为浏览器普遍的需求。最后，"),e("code",[_._v("Chrome")]),_._v("在其多进程架构上也引入了"),e("code",[_._v("GPU")]),_._v("进程。")]),_._v(" "),e("li",[e("strong",[_._v("网络进程")]),_._v("。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),_._v(" "),e("li",[e("strong",[_._v("插件进程")]),_._v("。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响")])]),_._v(" "),e("p",[_._v("了解了"),e("code",[_._v("Chrome")]),_._v("的多进程架构，就能够从宏观上理解从输入"),e("code",[_._v("URL")]),_._v("到页面渲染的过程了，这个过程主要分为"),e("strong",[_._v("导航阶段")]),_._v("和"),e("strong",[_._v("渲染阶段")]),_._v("。")]),_._v(" "),e("h2",{attrs:{id:"二、导航阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、导航阶段"}},[_._v("#")]),_._v(" 二、导航阶段")]),_._v(" "),e("h3",{attrs:{id:"ⅰ-浏览器主进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ⅰ-浏览器主进程"}},[_._v("#")]),_._v(" Ⅰ.浏览器主进程")]),_._v(" "),e("h4",{attrs:{id:"_1-用户输入url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户输入url"}},[_._v("#")]),_._v(" 1.用户输入"),e("code",[_._v("URL")])]),_._v(" "),e("ul",[e("li",[_._v("**1、**浏览器进程检查"),e("code",[_._v("url")]),_._v("，组装协议，构成完整的"),e("code",[_._v("url")]),_._v("，这时候有两种情况：\n"),e("ul",[e("li",[_._v("输入的是搜索内容：地址栏会使用浏览器默认的搜索引擎，来合成新的带搜索关键字的"),e("code",[_._v("URL")]),_._v("。")]),_._v(" "),e("li",[_._v("输入的是请求"),e("code",[_._v("URL")]),_._v("：地址栏会根据规则，给这段内容加上协议，合成为完整的"),e("code",[_._v("URL")]),_._v("；")])])]),_._v(" "),e("li",[_._v("**2、**浏览器进程通过进程间通信（"),e("code",[_._v("IPC")]),_._v("）把"),e("code",[_._v("url")]),_._v("请求发送给网络进程；")])]),_._v(" "),e("h3",{attrs:{id:"ⅱ-网络进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ⅱ-网络进程"}},[_._v("#")]),_._v(" Ⅱ.网络进程")]),_._v(" "),e("h4",{attrs:{id:"_2-url请求过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-url请求过程"}},[_._v("#")]),_._v(" 2."),e("code",[_._v("URL")]),_._v("请求过程")]),_._v(" "),e("ul",[e("li",[_._v("**3、**网络进程接收到"),e("code",[_._v("url")]),_._v("请求后检查本地缓存是否缓存了该请求资源，如果有则将该资源返回给浏览器进程；")])]),_._v(" "),e("blockquote",[e("p",[_._v("这里涉及到浏览器与HTTP协议的缓存策略问题，有兴趣的可以看这篇文章："),e("a",{attrs:{href:"https://www.cnblogs.com/AhuntSun-blog/p/12529920.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解HTTP协议"),e("OutboundLink")],1)])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("**4、**准备"),e("code",[_._v("IP")]),_._v("地址和端口：进行"),e("code",[_._v("DNS")]),_._v("解析时先查找缓存，没有再使用"),e("code",[_._v("DNS")]),_._v("服务器解析，查找顺序为：")]),_._v(" "),e("ul",[e("li",[_._v("浏览器缓存；")]),_._v(" "),e("li",[_._v("本机缓存；")]),_._v(" "),e("li",[e("code",[_._v("hosts")]),_._v("文件；")]),_._v(" "),e("li",[_._v("路由器缓存；")]),_._v(" "),e("li",[e("code",[_._v("ISP DNS")]),_._v("缓存；")]),_._v(" "),e("li",[e("code",[_._v("DNS")]),_._v("递归查询（本地"),e("code",[_._v("DNS")]),_._v("服务器 -> 权限"),e("code",[_._v("DNS")]),_._v("服务器 -> 顶级"),e("code",[_._v("DNS")]),_._v("服务器 -> "),e("code",[_._v("13")]),_._v("台根"),e("code",[_._v("DNS")]),_._v("服务器）")])])]),_._v(" "),e("li",[e("p",[_._v("**5、**等待"),e("code",[_._v("TCP")]),_._v("队列：浏览器会为每个域名最多维护"),e("code",[_._v("6")]),_._v("个"),e("code",[_._v("TCP")]),_._v("连接，如果发起一个"),e("code",[_._v("HTTP")]),_._v("请求时，这 "),e("code",[_._v("6")]),_._v("个 "),e("code",[_._v("TCP")]),_._v("连接都处于忙碌状态，那么这个请求就会处于排队状态；解决方案：")]),_._v(" "),e("ul",[e("li",[_._v("采用域名分片技术：将一个站点的资源放在多个（"),e("code",[_._v("CDN")]),_._v("）域名下面。")]),_._v(" "),e("li",[_._v("升级为"),e("code",[_._v("HTTP2")]),_._v("，就没有"),e("code",[_._v("6")]),_._v("个"),e("code",[_._v("TCP")]),_._v("连接的限制了；")])])]),_._v(" "),e("li",[e("p",[_._v("**6、**通过三次握手建立"),e("code",[_._v("TCP")]),_._v("连接：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/0.2.png",alt:"123"}})]),_._v(" "),e("ul",[e("li",[_._v("**第一次：**客户端先向服务器端发送一个同步数据包，报文的"),e("code",[_._v("TCP")]),_._v("首部中：标志位：**同步"),e("code",[_._v("SYN")]),_._v("**为"),e("code",[_._v("1")]),_._v("，表示这是一个请求建立连接的数据包；序号"),e("code",[_._v("Seq=x")]),_._v("，"),e("code",[_._v("x")]),_._v("为所传送数据的第一个字节的序号，随后进入"),e("code",[_._v("SYN-SENT")]),_._v("状态；")])]),_._v(" "),e("blockquote",[e("p",[_._v("标志位值为"),e("code",[_._v("1")]),_._v("表示该标志位有效。")])]),_._v(" "),e("ul",[e("li",[_._v("**第二次：**服务器根据收到数据包的"),e("code",[_._v("SYN")]),_._v("标志位判断为建立连接的请求，随后返回一个确认数据包，其中标志位"),e("code",[_._v("SYN=1")]),_._v("，"),e("code",[_._v("ACK=1")]),_._v("，序号"),e("code",[_._v("seq=y")]),_._v("，确认号"),e("code",[_._v("ack=x + 1")]),_._v("表示收到了客户端传输过来的"),e("code",[_._v("x")]),_._v("字节数据，并希望下次从"),e("code",[_._v("x+1")]),_._v("个字节开始传，并进入"),e("code",[_._v("SYN-RCVD")]),_._v("状态；")])]),_._v(" "),e("blockquote",[e("p",[_._v("这里要区分标志位"),e("code",[_._v("ACK")]),_._v("和确认号"),e("code",[_._v("ack")]),_._v("；")])]),_._v(" "),e("ul",[e("li",[_._v("**第三次：**客户端收到后，再给服务器发送一个确认数据包，标志位"),e("code",[_._v("ACK=1")]),_._v("，序号"),e("code",[_._v("seq=x+1")]),_._v("，确认号"),e("code",[_._v("ack=y+1")]),_._v("，随后进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态；")])]),_._v(" "),e("p",[_._v("服务器端收到后，也进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态，由此成功建立了"),e("code",[_._v("TCP")]),_._v("连接，可以开始数据传送；")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("为什么要第三次挥手？"),e("strong",[_._v("避免服务器等待造成")]),_._v("资源浪费")]),_._v("，具体原因：")])]),_._v(" "),e("blockquote",[e("p",[_._v("如果没有最后一个数据包确认（第三次握手），"),e("code",[_._v("A")]),_._v("先发出一个建立连接的请求数据包，由于网络原因绕远路了。"),e("code",[_._v("A")]),_._v("经过设定的超时时间后还未收到"),e("code",[_._v("B")]),_._v("的确认数据包。")]),_._v(" "),e("p",[_._v("于是发出第二个建立连接的请求数据包，这次网路通畅，"),e("code",[_._v("B")]),_._v("的确认数据包也很快就到达"),e("code",[_._v("A")]),_._v("。于是"),e("code",[_._v("A")]),_._v("与"),e("code",[_._v("B")]),_._v("开始传输数据；")]),_._v(" "),e("p",[_._v("过了一会"),e("code",[_._v("A")]),_._v("第一次发出的建立连接的请求数据包到达了"),e("code",[_._v("B")]),_._v("，"),e("code",[_._v("B")]),_._v("以为是再次建立连接，所以又发出一个确认数据包。由于A已经收到了一个确认数据包，所以会忽略"),e("code",[_._v("B")]),_._v("发来的第二个确认数据包，但是"),e("code",[_._v("B")]),_._v("发出确认数据包之后就要一直等待"),e("code",[_._v("A")]),_._v("的回复，而"),e("code",[_._v("A")]),_._v("永远也不会回复。")]),_._v(" "),e("p",[_._v("由此造成服务器资源浪费，这种情况多了"),e("code",[_._v("B")]),_._v("计算机可能就停止响应了。")])])]),_._v(" "),e("li",[e("p",[_._v("**7、**构建并发送"),e("code",[_._v("HTTP")]),_._v("请求信息；")])]),_._v(" "),e("li",[e("p",[_._v("**8、**服务器端处理请求；")])]),_._v(" "),e("li",[e("p",[_._v("**9、**客户端处理响应，首先检查服务器响应报文的状态码：")]),_._v(" "),e("ul",[e("li",[_._v("如果是"),e("code",[_._v("301/302")]),_._v("表示服务器已更换域名需要重定向，这时网络进程会从响应头的"),e("code",[_._v("Location")]),_._v("字段里面读取重定向的地址，然后再发起新的"),e("code",[_._v("HTTP")]),_._v("或者"),e("code",[_._v("HTTPS")]),_._v("请求，跳回第"),e("code",[_._v("4")]),_._v("步。")]),_._v(" "),e("li",[_._v("如果是"),e("code",[_._v("200")]),_._v("，就检查"),e("code",[_._v("Content-Type")]),_._v("字段，值为"),e("code",[_._v("text/html")]),_._v("说明是"),e("code",[_._v("HTML")]),_._v("文档，是"),e("code",[_._v("application/octet-stream")]),_._v("说明是文件下载；")])])])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/1.png",alt:""}})]),_._v(" "),e("ul",[e("li",[_._v("**10、**请求结束，当通用首部字段"),e("code",[_._v("Conection")]),_._v("不是"),e("code",[_._v("Keep-Alive")]),_._v("时，即不为"),e("code",[_._v("TCP")]),_._v("长连接时，通过四次挥手断开"),e("code",[_._v("TCP")]),_._v("连接：")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/1.5.png",alt:""}})]),_._v(" "),e("ul",[e("li",[_._v("**第一次：**客户端（主动断开连接）发送数据包给服务器，其中标志位"),e("code",[_._v("FIN=1")]),_._v("，序号位"),e("code",[_._v("seq=u")]),_._v("，并停止发送数据；")]),_._v(" "),e("li",[_._v("**第二次：**服务器收到数据包后，由于还需传输数据，无法立即关闭连接，先返回一个标志位"),e("code",[_._v("ACK=1")]),_._v("，序号"),e("code",[_._v("seq=v")]),_._v("，确认号"),e("code",[_._v("ack=u+1")]),_._v("的数据包；")]),_._v(" "),e("li",[_._v("**第三次：**服务器准备好断开连接后，返回一个数据包，其中标志位"),e("code",[_._v("FIN=1")]),_._v("，标志位"),e("code",[_._v("ACK=1")]),_._v("，序号"),e("code",[_._v("seq=w")]),_._v("，确认号"),e("code",[_._v("ack=u+1")]),_._v("；")]),_._v(" "),e("li",[_._v("**第四次：**客户端收到数据包后，返回一个标志位"),e("code",[_._v("ACK=1")]),_._v("，序号"),e("code",[_._v("seq=u+1")]),_._v("，确认号"),e("code",[_._v("ack=w+1")]),_._v("的数据包。")])]),_._v(" "),e("p",[_._v("由此通过四次挥手断开"),e("code",[_._v("TCP")]),_._v("连接。")]),_._v(" "),e("blockquote",[e("p",[_._v("详细过程参见："),e("a",{attrs:{href:"https://www.cnblogs.com/AhuntSun-blog/p/12028636.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("详解TCP连接的“三次握手”与“四次挥手”(上)"),e("OutboundLink")],1)])]),_._v(" "),e("ul",[e("li",[_._v("**为什么要四次挥手？**由于服务器不能马上断开连接，导致"),e("code",[_._v("FIN")]),_._v("释放连接报文与"),e("code",[_._v("ACK")]),_._v('确认接收报文需要分两次传输，即第二次和第三次"挥手"；')])]),_._v(" "),e("h4",{attrs:{id:"_3-准备渲染进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备渲染进程"}},[_._v("#")]),_._v(" 3.准备渲染进程")]),_._v(" "),e("ul",[e("li",[_._v("**11、**准备渲染进程：浏览器进程检查当前"),e("code",[_._v("url")]),_._v("是否与之前打开了渲染进程的页面的根域名相同，如果相同，则复用原来的进程，如果不同，则开启新的渲染进程；")])]),_._v(" "),e("h4",{attrs:{id:"_4-提交文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-提交文档"}},[_._v("#")]),_._v(" 4.提交文档")]),_._v(" "),e("ul",[e("li",[_._v("**12、**提交文档：\n"),e("ul",[e("li",[e("strong",[_._v("渲染进程")]),_._v("准备好后，"),e("strong",[_._v("浏览器")]),_._v("向"),e("strong",[_._v("渲染进程")]),_._v("发起“"),e("strong",[_._v("提交文档")]),_._v("”的消息，"),e("strong",[_._v("渲染进程")]),_._v("接收到消息后与"),e("strong",[_._v("网络进程")]),_._v("建立传输数据的“"),e("strong",[_._v("管道")]),_._v("”")]),_._v(" "),e("li",[e("strong",[_._v("渲染进程")]),_._v("接收完数据后，向浏览器发送“"),e("strong",[_._v("确认提交")]),_._v("”")]),_._v(" "),e("li",[e("strong",[_._v("浏览器进程")]),_._v("接收到确认消息后更新浏览器界面状态："),e("strong",[_._v("安全状态")]),_._v("、"),e("strong",[_._v("地址栏"),e("code",[_._v("url")])]),_._v("、"),e("strong",[_._v("前进后退的历史状态")]),_._v("、"),e("strong",[_._v("更新"),e("code",[_._v("web")]),_._v("页面")])])])])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/2.png",alt:""}})]),_._v(" "),e("h2",{attrs:{id:"三、渲染阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、渲染阶段"}},[_._v("#")]),_._v(" 三、渲染阶段")]),_._v(" "),e("p",[_._v("在渲染阶段通过"),e("strong",[_._v("渲染流水线")]),_._v("在渲染进程的主线程和合成线程配合下，完成页面的渲染；")]),_._v(" "),e("h3",{attrs:{id:"ⅲ-渲染进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ⅲ-渲染进程"}},[_._v("#")]),_._v(" Ⅲ.渲染进程")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/3.png",alt:""}})]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("渲染进程中的主线程部分")])])]),_._v(" "),e("h4",{attrs:{id:"_5-构建dom树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-构建dom树"}},[_._v("#")]),_._v(" 5.构建"),e("code",[_._v("DOM")]),_._v("树")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("13、"),e("strong",[_._v("先将请求回来的数据解压，随后"),e("code",[_._v("HTML")]),_._v("解析器将其中的"),e("code",[_._v("HTML")]),e("strong",[_._v("字节流")]),_._v("通过")]),_._v("分词器")]),_._v("拆分为一个个"),e("code",[_._v("Token")]),_._v("，然后生成节点"),e("code",[_._v("Node")]),_._v("，最后解析成浏览器识别的"),e("code",[_._v("DOM")]),_._v("树结构。")]),_._v(" "),e("p",[_._v("可以通过"),e("code",[_._v("Chrome")]),_._v("调试工具的"),e("code",[_._v("Console")]),_._v("选项打开控制台输入"),e("code",[_._v("document")]),_._v("查看"),e("code",[_._v("DOM")]),_._v("树；")])])]),_._v(" "),e("blockquote",[e("p",[_._v("渲染引擎还有一个"),e("strong",[_._v("安全检查模块")]),_._v("叫 "),e("code",[_._v("XSSAuditor")]),_._v("，是用来"),e("strong",[_._v("检测词法安全")]),_._v("的。在分词器解析出来 "),e("code",[_._v("Token")]),_._v(" 之后，它会检测这些模块是否安全，比如"),e("strong",[_._v("是否引用了外部脚本")]),_._v("，"),e("strong",[_._v("是否符合 "),e("code",[_._v("CSP")]),_._v(" 规范")]),_._v("，"),e("strong",[_._v("是否存在跨站点请求")]),_._v("等。如果出现不符合规范的内容，"),e("code",[_._v("XSSAuditor")]),_._v(" 会对该脚本或者下载任务"),e("strong",[_._v("进行拦截")]),_._v("。")])]),_._v(" "),e("p",[_._v("首次解析"),e("code",[_._v("HTML")]),_._v("时"),e("strong",[_._v("渲染进程")]),_._v("会开启一个"),e("strong",[_._v("预解析线程")]),_._v("，遇到"),e("code",[_._v("HTML")]),_._v("文档中内嵌的"),e("code",[_._v("JavaScript")]),_._v("和"),e("code",[_._v("CSS")]),_._v("外部引用就会同步提前下载这些文件，下载时间以最后下载完的文件为准。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/4.png",alt:""}})]),_._v(" "),e("h4",{attrs:{id:"_6-构建cssom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-构建cssom"}},[_._v("#")]),_._v(" 6.构建"),e("code",[_._v("CSSOM")])]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("14、")]),e("code",[_._v("CSS")]),_._v("解析器将"),e("code",[_._v("CSS")]),_._v("转换为浏览器能识别的"),e("code",[_._v("styleSheets")]),_._v("也就是"),e("code",[_._v("CSSOM")]),_._v("：可以通过控制台输入"),e("code",[_._v("document.styleSheets")]),_._v("查看；")]),_._v(" "),e("p",[_._v("这里要考虑一下阻塞的问题，由于"),e("code",[_._v("JavaScript")]),_._v("有修改"),e("code",[_._v("CSS")]),_._v("和"),e("code",[_._v("HTML")]),_._v("的能力，所以，需要先等到 "),e("code",[_._v("CSS")]),_._v(" 文件下载完成并生成 "),e("code",[_._v("CSSOM")]),_._v("，然后再执行 "),e("code",[_._v("JavaScript")]),_._v(" 脚本，最后再继续构建 "),e("code",[_._v("DOM")]),_._v("。由于这种阻塞，导致了"),e("strong",[_._v("解析白屏")]),_._v("；")])])]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("优化方案：")])]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("移除"),e("code",[_._v("js")]),_._v("和"),e("code",[_._v("css")]),_._v("的文件下载")]),_._v("：通过内联 "),e("code",[_._v("JavaScript")]),_._v("、内联 "),e("code",[_._v("CSS")]),_._v("；")]),_._v(" "),e("li",[e("strong",[_._v("尽量减少文件大小")]),_._v("：如通过 "),e("code",[_._v("webpack")]),_._v(" 等工具"),e("strong",[_._v("移除")]),_._v("不必要的"),e("strong",[_._v("注释")]),_._v("，并"),e("strong",[_._v("压缩 "),e("code",[_._v("js")]),_._v(" 文件")]),_._v("；")]),_._v(" "),e("li",[_._v("将不进行"),e("code",[_._v("DOM")]),_._v("操作或"),e("code",[_._v("CSS")]),_._v("样式修改的  "),e("code",[_._v("JavaScript")]),_._v(" 标记上 "),e("code",[_._v("sync")]),_._v(" 或者 "),e("code",[_._v("defer")]),_._v("异步引入；")]),_._v(" "),e("li",[e("strong",[_._v("使用媒体查询属性")]),_._v("：将大的"),e("code",[_._v("CSS")]),_._v("文件拆分成多个不同用途的 "),e("code",[_._v("CSS")]),_._v(" 文件，只有在特定的场景下才会加载特定的 "),e("code",[_._v("CSS")]),_._v(" 文件。")])])]),_._v(" "),e("p",[_._v("可以通过浏览器调试工具的"),e("code",[_._v("Network")]),_._v("面板中的"),e("code",[_._v("DOMContentLoaded")]),_._v("查看最后生成"),e("code",[_._v("DOM")]),_._v("树所需的时间；")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/5.png",alt:""}})]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/6.png",alt:"image-20200405110720560"}})]),_._v(" "),e("h4",{attrs:{id:"_7-样式计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-样式计算"}},[_._v("#")]),_._v(" 7.样式计算")]),_._v(" "),e("ul",[e("li",[_._v("**15、**转换样式表中的属性值，使其标准化。比如将"),e("code",[_._v("em")]),_._v("转换为"),e("code",[_._v("px")]),_._v("，"),e("code",[_._v("color")]),_._v("转换为"),e("code",[_._v("rgb")]),_._v("；")]),_._v(" "),e("li",[_._v("**16、**计算"),e("code",[_._v("DOM")]),_._v("树中每个节点的具体样式，这里遵循"),e("code",[_._v("CSS")]),_._v("的继承和层叠规则；可以通过"),e("code",[_._v("Chrome")]),_._v("调试工具的"),e("code",[_._v("Elements")]),_._v("选项的"),e("code",[_._v("Computed")]),_._v("查看某一标签的最终样式；")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/7.png",alt:"image-20200405110849074"}})]),_._v(" "),e("h4",{attrs:{id:"_8-布局阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-布局阶段"}},[_._v("#")]),_._v(" 8.布局阶段")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("**17、**创建布局树，遍历"),e("code",[_._v("DOM")]),_._v("树中的所有节点，去掉所有隐藏的节点（比如"),e("code",[_._v("head")]),_._v("，添加了"),e("code",[_._v("display:none")]),_._v("的节点），只在布局树中保留可见的节点。")])]),_._v(" "),e("li",[e("p",[_._v("**18、**计算布局树中节点的坐标位置（较复杂，这里不展开）；")])])]),_._v(" "),e("h4",{attrs:{id:"_9-分层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-分层"}},[_._v("#")]),_._v(" 9.分层")]),_._v(" "),e("ul",[e("li",[_._v("**19、**对布局树进行分层，并生成分层树（"),e("code",[_._v("Layer Tree")]),_._v("），可以通过"),e("code",[_._v("Chrome")]),_._v("调试工具的"),e("code",[_._v("Layer")]),_._v("选项查看。分层树中每一个节点都直接或间接的属于一个图层（如果一个节点没有对应的层，那么这个节点就从属于父节点的图层）")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/8.png",alt:"image-20200405111350260"}})]),_._v(" "),e("h4",{attrs:{id:"_10-图层绘制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-图层绘制"}},[_._v("#")]),_._v(" 10.图层绘制")]),_._v(" "),e("ul",[e("li",[_._v("**20、**为每个图层生成绘制列表（即绘制指令），并将其提交到合成线程。以上操作都是在渲染进程中的主线程中进行的，提交到合成线程后就不阻塞主线程了；")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/9.png",alt:""}})]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("渲染进程中的合成线程部分")])])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/10.png",alt:""}})]),_._v(" "),e("h4",{attrs:{id:"_11-切分图块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-切分图块"}},[_._v("#")]),_._v(" 11.切分图块")]),_._v(" "),e("p",[e("strong",[_._v("21、"),e("strong",[_._v("合成线程将图层切分成大小固定的图块（"),e("code",[_._v("256x256")]),_._v("或者"),e("code",[_._v("512x512")]),_._v("）然后")]),_._v("优先绘制")]),_._v("靠近视口的图块，这样就可以大大加速页面的显示速度；")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/11.png",alt:""}})]),_._v(" "),e("h3",{attrs:{id:"ⅳ-gpu进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ⅳ-gpu进程"}},[_._v("#")]),_._v(" Ⅳ."),e("code",[_._v("GPU")]),_._v("进程")]),_._v(" "),e("h4",{attrs:{id:"_12-栅格化操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-栅格化操作"}},[_._v("#")]),_._v(" 12.栅格化操作")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("22、"),e("strong",[_._v("在")]),_._v("光栅化线程池")]),_._v("中将"),e("strong",[_._v("图块")]),_._v("转换成"),e("strong",[_._v("位图")]),_._v("，通常这个过程都会使用"),e("code",[_._v("GPU")]),_._v("来加速生成，使用"),e("code",[_._v("GPU")]),_._v("生成位图的过程叫"),e("strong",[_._v("快速栅格化")]),_._v("，或者"),e("code",[_._v("GPU")]),_._v("栅格化，生成的位图被保存在"),e("code",[_._v("GPU")]),_._v("内存中。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86/12.png",alt:""}})]),_._v(" "),e("h3",{attrs:{id:"ⅴ-浏览器主进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ⅴ-浏览器主进程"}},[_._v("#")]),_._v(" Ⅴ.浏览器主进程")]),_._v(" "),e("h4",{attrs:{id:"_13-合成与显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-合成与显示"}},[_._v("#")]),_._v(" 13.合成与显示")]),_._v(" "),e("ul",[e("li",[_._v("**23、**合成：一旦所有图块都被光栅化，"),e("strong",[_._v("合成线程")]),_._v("就会将它们合成为一张图片，并生成一个绘制图块的命令——“"),e("code",[_._v("DrawQuad")]),_._v("”，然后将该命令提交给浏览器进程。")])]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("注意了："),e("strong",[_._v("合成的过程是在渲染进程的")]),_._v("合成线程")]),_._v("中完成的，不会影响到渲染进程的"),e("strong",[_._v("主线程")]),_._v("执行；")])]),_._v(" "),e("ul",[e("li",[_._v("**24、**显示：浏览器进程里面有一个叫"),e("code",[_._v("viz")]),_._v("的组件，用来接收合成线程发过来的"),e("code",[_._v("DrawQuad")]),_._v("命令，然后根据"),e("code",[_._v("DrawQuad")]),_._v("命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。")])]),_._v(" "),e("p",[_._v("到这里，经过这一系列的阶段，编写好的"),e("code",[_._v("HTML")]),_._v("、"),e("code",[_._v("CSS")]),_._v("、"),e("code",[_._v("JavaScript")]),_._v("等文件，经过浏览器就会显示出漂亮的页面了。")]),_._v(" "),e("blockquote",[e("p",[_._v("参考资料："),e("a",{attrs:{href:"https://time.geekbang.org/column/intro/100033601",target:"_blank",rel:"noopener noreferrer"}},[_._v("浏览器工作原理与实践"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=t.exports}}]);