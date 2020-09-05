(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{480:function(_,v,e){"use strict";e.r(v);var o=e(27),c=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_30-http2：如何提升网络速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30-http2：如何提升网络速度"}},[_._v("#")]),_._v(" 30.HTTP2：如何提升网络速度")]),_._v(" "),e("p",[_._v("上一篇文章我们聊了 "),e("code",[_._v("HTTP/1.1")]),_._v(" 的发展史，虽然 "),e("code",[_._v("HTTP/1.1")]),_._v(" 已经做了大量的优化，但是依然存在很多性能瓶颈，依然不能满足我们日益变化的新需求，所以就有了我们今天要聊的 "),e("code",[_._v("HTTP/2")]),_._v("。")]),_._v(" "),e("p",[_._v("本文我们依然从需求的层面来谈，先分析 "),e("code",[_._v("HTTP/1.1")]),_._v(" 存在哪些问题，然后再来分析 "),e("code",[_._v("HTTP/2")]),_._v(" 是如何解决这些问题的。")]),_._v(" "),e("p",[_._v("我们知道 "),e("code",[_._v("HTTP/1.1")]),_._v(" 为网络效率做了大量的优化，最核心的有如下三种方式：")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("增加了持久连接")]),_._v("；")]),_._v(" "),e("li",[_._v("浏览器为每个域名最多"),e("strong",[_._v("同时维护 "),e("code",[_._v("6")]),_._v(" 个 "),e("code",[_._v("TCP")]),_._v(" 持久连接")]),_._v("；")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("CDN")]),_._v(" 的实现"),e("strong",[_._v("域名分片机制")]),_._v("。")])]),_._v(" "),e("p",[_._v("通过这些方式就大大提高了页面的下载速度，你可以通过下图来直观感受下：")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls30/1.png",alt:""}})]),_._v(" "),e("p",[_._v("在该图中，引入了 "),e("code",[_._v("CDN")]),_._v("，并同时为每个域名维护 "),e("code",[_._v("6")]),_._v(" 个连接，这样就大大减轻了整个资源的下载时间。这里我们可以简单计算下：如果使用单个 "),e("code",[_._v("TCP")]),_._v(" 的持久连接，下载 "),e("code",[_._v("100")]),_._v(" 个资源所花费的时间为 "),e("code",[_._v("100 * n * RTT")]),_._v("；若通过上面的技术，就可以把整个时间缩短为 "),e("code",[_._v("100 * n * RTT")]),_._v("/("),e("code",[_._v("6")]),_._v(" * "),e("code",[_._v("CDN")]),_._v("个数)。从这个计算结果来看，我们的页面加载速度变快了不少")]),_._v(" "),e("h2",{attrs:{id:"http-1-1-的主要问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-的主要问题"}},[_._v("#")]),_._v(" "),e("code",[_._v("HTTP/1.1")]),_._v(" 的主要问题")]),_._v(" "),e("p",[_._v("虽然 "),e("code",[_._v("HTTP/1.1")]),_._v(" 采取了很多优化资源加载速度的策略，也取得了一定的效果，但是 "),e("code",[_._v("HTTP/1.1")]),_._v("对带宽的利用率却并不理想，这也是 "),e("code",[_._v("HTTP/1.1")]),_._v(" 的一个核心问题。")]),_._v(" "),e("p",[_._v("带宽是指每秒最大能发送或者接收的字节数。我们把每秒能发送的最大字节数称为上行带宽，每秒能够接收的最大字节数称为下行带宽。")]),_._v(" "),e("p",[_._v("之所以说 "),e("code",[_._v("HTTP/1.1")]),_._v(" 对带宽的利用率不理想，是因为 "),e("code",[_._v("HTTP/1.1")]),_._v(" 很难将带宽用满。比如我们常说的 "),e("code",[_._v("100M")]),_._v(" 带宽，实际的下载速度能达到 "),e("code",[_._v("12.5M/S")]),_._v("，而采用 "),e("code",[_._v("HTTP/1.1")]),_._v(" 时，也许在加载页面资源时最大只能使用到 "),e("code",[_._v("2.5M/S")]),_._v("，很难将 "),e("code",[_._v("12.5M")]),_._v(" 全部用满。")]),_._v(" "),e("p",[_._v("之所以会出现这个问题，主要是由以下三个原因导致的。")]),_._v(" "),e("p",[e("strong",[_._v("第一个原因，"),e("code",[_._v("TCP")]),_._v(" 的慢启动。")])]),_._v(" "),e("p",[_._v("一旦一个 "),e("code",[_._v("TCP")]),_._v(" 连接建立之后，就进入了发送数据状态，刚开始 "),e("code",[_._v("TCP")]),_._v(" 协议会采用一个非常慢的速度去发送数据，然后慢慢加快发送数据的速度，直到发送数据的速度达到一个理想状态，我们把这个过程称为"),e("strong",[_._v("慢启动")]),_._v("。")]),_._v(" "),e("p",[_._v("你可以把每个 "),e("code",[_._v("TCP")]),_._v(" 发送数据的过程看成是一"),e("strong",[_._v("辆车的启动过程")]),_._v("，当刚进入公路时，会有从 "),e("code",[_._v("0")]),_._v(" 到一个稳定速度的提速过程，"),e("code",[_._v("TCP")]),_._v(" 的慢启动就类似于该过程。")]),_._v(" "),e("p",[_._v("慢启动是 "),e("code",[_._v("TCP")]),_._v(" 为了减少网络拥塞的一种策略，我们是没有办法改变的。")]),_._v(" "),e("p",[_._v("而之所以说慢启动会带来性能问题，是因为页面中常用的一些关键资源文件本来就不大，如 "),e("code",[_._v("HTML")]),_._v(" 文件、"),e("code",[_._v("CSS")]),_._v(" 文件和 "),e("code",[_._v("JavaScript")]),_._v(" 文件，通常这些文件在 "),e("code",[_._v("TCP")]),_._v(" 连接建立好之后就要发起请求的，但这个过程是慢启动，所以耗费的时间比正常的时间要多很多，这样就推迟了宝贵的首次渲染页面的时长了。")]),_._v(" "),e("p",[e("strong",[_._v("第二个原因，同时开启了多条 "),e("code",[_._v("TCP")]),_._v(" 连接，那么这些连接会竞争固定的带宽。")])]),_._v(" "),e("p",[_._v("你可以想象一下，系统同时建立了多条 "),e("code",[_._v("TCP")]),_._v(" 连接，当带宽充足时，每条连接发送或者接收速度会慢慢向上增加；而一旦带宽不足时，这些 "),e("code",[_._v("TCP")]),_._v(" 连接又会减慢发送或者接收的速度。比如一个页面有 "),e("code",[_._v("200")]),_._v(" 个文件，使用了 "),e("code",[_._v("3")]),_._v("个 "),e("code",[_._v("CDN")]),_._v("，那么加载该网页的时候就需要建立 "),e("code",[_._v("6 * 3")]),_._v("，也就是 "),e("code",[_._v("18")]),_._v(" 个 "),e("code",[_._v("TCP")]),_._v(" 连接来下载资源；在下载过程中，当发现带宽不足的时候，各个 "),e("code",[_._v("TCP")]),_._v(" 连接就需要动态减慢接收数据的速度。")]),_._v(" "),e("p",[_._v("这样就会出现一个问题，因为有的 "),e("code",[_._v("TCP")]),_._v(" 连接下载的是一些关键资源，如 "),e("code",[_._v("CSS")]),_._v(" 文件、"),e("code",[_._v("JavaScript")]),_._v(" 文件等，而有的 "),e("code",[_._v("TCP")]),_._v(" 连接下载的是图片、视频等普通的资源文件，但是多条 "),e("code",[_._v("TCP")]),_._v(" 连接之间又不能协商让哪些关键资源优先下载，这样就有可能影响那些关键资源的下载速度了。")]),_._v(" "),e("p",[e("strong",[_._v("第三个原因，"),e("code",[_._v("HTTP/1.1")]),_._v(" 队头阻塞的问题。")])]),_._v(" "),e("p",[_._v("通过上一篇文章，我们知道在 "),e("code",[_._v("HTTP/1.1")]),_._v(" 中使用持久连接时，虽然能公用一个 "),e("code",[_._v("TCP")]),_._v(" 管道，但是在一个管道中同一时刻只能处理一个请求，在"),e("strong",[_._v("当前的请求没有结束之前")]),_._v("，其他的请求只能处于"),e("strong",[_._v("阻塞状态")]),_._v("。这意味着我们不能随意在一个管道中发送请求和接收内容。")]),_._v(" "),e("p",[_._v("这是一个很严重的问题，因为阻塞请求的因素有很多，并且都是一些不确定性的因素，假如有的请求被阻塞了 "),e("code",[_._v("5")]),_._v(" 秒，那么后续排队的请求都要延迟等待 "),e("code",[_._v("5")]),_._v(" 秒，在这个等待的过程中，带宽、"),e("code",[_._v("CPU")]),_._v(" 都被白白浪费了。")]),_._v(" "),e("p",[_._v("在浏览器处理生成页面的过程中，是非常希望能提前接收到数据的，这样就可以对这些数据做预处理操作，比如提前接收到了图片，那么就可以提前进行编解码操作，等到需要使用该图片的时候，就可以直接给出处理后的数据了，这样能让用户感受到整体速度的提升。")]),_._v(" "),e("p",[_._v("但队头阻塞使得这些数据不能并行请求，所以队头阻塞是很不利于浏览器优化的。")]),_._v(" "),e("h2",{attrs:{id:"http-2-的多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-2-的多路复用"}},[_._v("#")]),_._v(" "),e("code",[_._v("HTTP/2")]),_._v(" 的多路复用")]),_._v(" "),e("p",[_._v("前面我们分析了 "),e("code",[_._v("HTTP/1.1")]),_._v(" 所存在的一些主要问题："),e("strong",[_._v("慢启动")]),_._v("和 "),e("code",[_._v("TCP")]),_._v(" 连接之间"),e("strong",[_._v("相互竞争带宽")]),_._v("是由于 "),e("code",[_._v("TCP")]),_._v(" 本身的机制导致的，而队头阻塞是由于 "),e("code",[_._v("HTTP/1.1")]),_._v(" 的机制导致的。")]),_._v(" "),e("p",[_._v("那么该如何去解决这些问题呢？")]),_._v(" "),e("p",[_._v("虽然 "),e("code",[_._v("TCP")]),_._v(" 有问题，但是我们依然没有换掉 "),e("code",[_._v("TCP")]),_._v(" 的能力，所以我们就要想办法去规避 "),e("code",[_._v("TCP")]),_._v(" 的慢启动和 "),e("code",[_._v("TCP")]),_._v(" 连接之间的竞争问题。")]),_._v(" "),e("p",[_._v("基于此，"),e("code",[_._v("HTTP/2")]),_._v(" 的思路就是"),e("strong",[_._v("一个域名只使用一个 "),e("code",[_._v("TCP")]),_._v(" 长连接")]),_._v("来传输数据，这样整个页面资源的下载过程只需要一次慢启动，同时也避免了多个 "),e("code",[_._v("TCP")]),_._v(" 连接竞争带宽所带来的问题。")]),_._v(" "),e("p",[_._v("另外，就是队头阻塞的问题，等待请求完成后才能去请求下一个资源，这种方式无疑是最慢的，所以 "),e("code",[_._v("HTTP/2")]),_._v(" 需要实现"),e("strong",[_._v("资源的并行请求")]),_._v("，也就是任何时候都可以将请求发送给服务器，而并不需要等待其他请求的完成，然后服务器也可以随时返回处理好的请求资源给浏览器。")]),_._v(" "),e("p",[_._v("所以，"),e("code",[_._v("HTTP/2")]),_._v(" 的解决方案可以总结为："),e("strong",[_._v("一个域名只使用一个 "),e("code",[_._v("TCP")]),_._v(" 长连接")]),_._v("和"),e("strong",[_._v("消除队头阻塞")]),_._v("问题。可以参考下图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls30/2.png",alt:""}})]),_._v(" "),e("p",[_._v("该图就是 "),e("code",[_._v("HTTP/2")]),_._v(" 最核心、最重要且最具颠覆性的"),e("strong",[_._v("多路复用机制")]),_._v("。从图中你会发现每个请求都有一个对应的 "),e("code",[_._v("ID")]),_._v("，如 "),e("code",[_._v("stream1")]),_._v(" 表示 "),e("code",[_._v("index.html")]),_._v(" 的请求，"),e("code",[_._v("stream2")]),_._v(" 表示 "),e("code",[_._v("foo.css")]),_._v(" 的请求。这样在浏览器端，就可以随时将请求发送给服务器了。")]),_._v(" "),e("p",[_._v("服务器端接收到这些请求后，会根据自己的喜好来决定优先返回哪些内容，比如服务器可能早就缓存好了"),e("code",[_._v("index.html")]),_._v(" 和 "),e("code",[_._v("bar.js")]),_._v(" 的响应头信息，那么当接收到请求的时候就可以立即把 "),e("code",[_._v("index.html")]),_._v(" 和 "),e("code",[_._v("bar.js")]),_._v(" 的响应头信息返回给浏览器，然后再将 "),e("code",[_._v("index.html")]),_._v(" 和 "),e("code",[_._v("bar.js")]),_._v(" 的响应体数据返回给浏览器。之所以可以随意发送，是因为每份数据都有对应的 "),e("code",[_._v("ID")]),_._v("，浏览器接收到之后，会筛选出"),e("strong",[_._v("相同 "),e("code",[_._v("ID")]),_._v(" 的内容")]),_._v("，将其拼接为完整的 "),e("code",[_._v("HTTP")]),_._v(" 响应数据。")]),_._v(" "),e("p",[e("code",[_._v("HTTP/2")]),_._v(" 使用了多路复用技术，可以将请求分成一帧一帧的数据去传输，这样带来了一个额外的好处，就是当收到一个"),e("strong",[_._v("优先级高")]),_._v("的请求时，比如接收到 "),e("code",[_._v("JavaScript")]),_._v(" 或者 "),e("code",[_._v("CSS")]),_._v(" 关键资源的请求，服务器可以暂停之前的请求来优先处理关键资源的请求")]),_._v(" "),e("h2",{attrs:{id:"多路复用的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多路复用的实现"}},[_._v("#")]),_._v(" 多路复用的实现")]),_._v(" "),e("p",[_._v("现在我们知道为了解决 "),e("code",[_._v("HTTP/1.1")]),_._v(" 存在的问题，"),e("code",[_._v("HTTP/2")]),_._v(" 采用了多路复用机制，那 "),e("code",[_._v("HTTP/2")]),_._v(" 是怎么实现多路复用的呢？你可以先看下面这张图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls30/3.png",alt:""}})]),_._v(" "),e("p",[_._v("从图中可以看出，"),e("code",[_._v("HTTP/2")]),_._v(" 添加了一个二进制分帧层，那我们就结合图来分析下 "),e("code",[_._v("HTTP/2")]),_._v(" 的请求和接收过程。")]),_._v(" "),e("ul",[e("li",[_._v("首先，浏览器准备好请求数据，包括了请求行、请求头等信息，如果是 "),e("code",[_._v("POST")]),_._v(" 方法，那么还要有请求体。")]),_._v(" "),e("li",[_._v("这些数据经过二进制分帧层处理之后，会被转换为一个个带有请求 "),e("code",[_._v("ID")]),_._v(" 编号的"),e("strong",[_._v("帧")]),_._v("，通过协议栈将这些帧发送给服务器。")]),_._v(" "),e("li",[_._v("服务器接收到所有帧之后，会将所有相同 "),e("code",[_._v("ID")]),_._v(" 的帧"),e("strong",[_._v("合并")]),_._v("为一条完整的请求信息。")]),_._v(" "),e("li",[_._v("然后服务器处理该条请求，并将处理的响应行、响应头和响应体分别发送至二进制分帧层。")]),_._v(" "),e("li",[_._v("同样，二进制分帧层会将这些响应数据转换为一个个带有请求 "),e("code",[_._v("ID")]),_._v(" 编号的"),e("strong",[_._v("帧")]),_._v("，经过"),e("strong",[_._v("协议栈")]),_._v("发送给浏览器。")]),_._v(" "),e("li",[_._v("浏览器接收到响应帧之后，会根据 "),e("code",[_._v("ID")]),_._v(" 编号将帧的数据提交给对应的请求")])]),_._v(" "),e("p",[_._v("从上面的流程可以看出，通过引入二进制分帧层，就实现了 "),e("code",[_._v("HTTP")]),_._v(" 的多路复用技术。")]),_._v(" "),e("p",[_._v("上一篇文章我们介绍过，"),e("code",[_._v("HTTP")]),_._v(" 是浏览器和服务器通信的语言，在这里虽然 "),e("code",[_._v("HTTP/2")]),_._v("引入了二进制分帧层，不过 "),e("code",[_._v("HTTP/2")]),_._v(" 的语义和 "),e("code",[_._v("HTTP/1.1")]),_._v(" 依然是一样的，也就是说它们通信的语言并没有改变，比如开发者依然可以通过 "),e("code",[_._v("Accept")]),_._v(" 请求头告诉服务器希望接收到什么类型的文件，依然可以使用 "),e("code",[_._v("Cookie")]),_._v(" 来保持登录状态，依然可以使用 "),e("code",[_._v("Cache")]),_._v(" 来缓存本地文件，这些都没有变，发生改变的只是传输方式。这一点对开发者来说尤为重要，这意味着我们不需要为 "),e("code",[_._v("HTTP/2")]),_._v(" 去重建生态，并且 "),e("code",[_._v("HTTP/2")]),_._v(" 推广起来会也相对更轻松了")]),_._v(" "),e("h2",{attrs:{id:"http-2-其他特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-2-其他特性"}},[_._v("#")]),_._v(" "),e("code",[_._v("HTTP/2")]),_._v(" 其他特性")]),_._v(" "),e("p",[_._v("通过上面的分析，我们知道了"),e("strong",[_._v("多路复用")]),_._v("是 "),e("code",[_._v("HTTP/2")]),_._v(" 的最核心功能，它能实现资源的"),e("strong",[_._v("并行传输")]),_._v("。多路复用技术是建立在二进制分帧层的基础之上。其实基于"),e("strong",[_._v("二进制分帧层")]),_._v("，"),e("code",[_._v("HTTP/2")]),_._v(" 还附带实现了很多其他功能，下面我们就来简要了解下。")]),_._v(" "),e("h3",{attrs:{id:"_1-可以设置请求的优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-可以设置请求的优先级"}},[_._v("#")]),_._v(" 1. 可以设置请求的优先级")]),_._v(" "),e("p",[_._v("我们知道浏览器中有些数据是非常重要的，但是在发送请求时，重要的请求可能会晚于那些不怎么重要的请求，如果服务器按照请求的顺序来回复数据，那么这个重要的数据就有可能推迟很久才能送达浏览器，这对于用户体验来说是非常不友好的。")]),_._v(" "),e("p",[_._v("为了解决这个问题，"),e("code",[_._v("HTTP/2")]),_._v(" 提供了"),e("strong",[_._v("请求优先级")]),_._v("，可以在发送请求时，标上该请求的优先级，这样服务器接收到请求之后，会优先处理优先级高的请求。")]),_._v(" "),e("h3",{attrs:{id:"_2-服务器推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器推送"}},[_._v("#")]),_._v(" 2. 服务器推送")]),_._v(" "),e("p",[_._v("除了设置请求的优先级外，"),e("code",[_._v("HTTP/2")]),_._v(" 还可以直接将数据"),e("strong",[_._v("提前推送到浏览器")]),_._v("。你可以想象这样一个场景，当用户请求一个 "),e("code",[_._v("HTML")]),_._v(" 页面之后，服务器知道该 "),e("code",[_._v("HTML")]),_._v(" 页面会引用几个重要的 "),e("code",[_._v("JavaScript")]),_._v(" 文件和 "),e("code",[_._v("CSS")]),_._v(" 文件，那么在接收到 "),e("code",[_._v("HTML")]),_._v(" 请求之后，附带将要使用的 "),e("code",[_._v("CSS")]),_._v(" 文件和 "),e("code",[_._v("JavaScript")]),_._v(" 文件一并发送给浏览器，这样当浏览器解析完 "),e("code",[_._v("HTML")]),_._v(" 文件之后，就能直接拿到需要的 "),e("code",[_._v("CSS")]),_._v(" 文件和 "),e("code",[_._v("JavaScript")]),_._v(" 文件，这对首次打开页面的速度起到了至关重要的作用。")]),_._v(" "),e("h3",{attrs:{id:"_3-头部压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-头部压缩"}},[_._v("#")]),_._v(" 3. 头部压缩")]),_._v(" "),e("p",[_._v("无论是 "),e("code",[_._v("HTTP/1.1")]),_._v(" 还是 "),e("code",[_._v("HTTP/2")]),_._v("，它们都有请求头和响应头，这是浏览器和服务器的通信语言。"),e("code",[_._v("HTTP/2")]),_._v(" 对请求头和响应头进行了压缩，你可能觉得一个 "),e("code",[_._v("HTTP")]),_._v(" 的头文件没有多大，压不压缩可能关系不大，但你这样想一下，在浏览器发送请求的时候，基本上都是发送 "),e("code",[_._v("HTTP")]),_._v(" 请求头，很少有请求体的发送，通常情况下页面也有 "),e("code",[_._v("100")]),_._v(" 个左右的资源，如果将这 "),e("code",[_._v("100")]),_._v(" 个请求头的数据压缩为原来的 "),e("code",[_._v("20%")]),_._v("，那么传输效率肯定能得到大幅提升。")]),_._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),e("p",[_._v("好了，今天就介绍这里，下面我来总结下本文的主要内容。")]),_._v(" "),e("p",[_._v("我们首先分析了影响 "),e("code",[_._v("HTTP/1.1")]),_._v(" 效率的三个主要因素："),e("code",[_._v("TCP")]),_._v(" 的"),e("strong",[_._v("慢启动")]),_._v("、多条 "),e("code",[_._v("TCP")]),_._v(" "),e("strong",[_._v("连接竞争带宽")]),_._v("和"),e("strong",[_._v("队头阻塞")]),_._v("。")]),_._v(" "),e("p",[_._v("接下来我们分析了 "),e("code",[_._v("HTTP/2")]),_._v(" 是如何采用"),e("strong",[_._v("多路复用")]),_._v("机制来解决这些问题的。多路复用是通过在协议栈中添加"),e("strong",[_._v("二进制分帧")]),_._v("层来实现的，有了二进制分帧层还能够实现请求的优先级、服务器推送、头部压缩等特性，从而大大提升了文件传输效率。")]),_._v(" "),e("p",[e("code",[_._v("HTTP/2")]),_._v(" 协议规范于 "),e("code",[_._v("2015")]),_._v(" 年 "),e("code",[_._v("5")]),_._v(" 月正式发布，在那之后，该协议已在互联网和万维网上得到了广泛的实现和部署。从目前的情况来看，国内外一些排名靠前的站点基本都实现了 "),e("code",[_._v("HTTP/2")]),_._v(" 的部署。使用 "),e("code",[_._v("HTTP/2")]),_._v(" 能带来 "),e("code",[_._v("20%～60%")]),_._v(" 的效率提升，至于 "),e("code",[_._v("20%")]),_._v(" 还是 "),e("code",[_._v("60%")]),_._v("要看优化的程度。总之，我们也应该与时俱进，放弃 "),e("code",[_._v("HTTP/1.1")]),_._v(" 和其性能优化方法，去“拥抱”"),e("code",[_._v("HTTP/2")])])])}),[],!1,null,null,null);v.default=c.exports}}]);