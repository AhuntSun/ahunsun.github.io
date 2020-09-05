(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{481:function(_,v,o){"use strict";o.r(v);var e=o(27),c=Object(e.a)({},(function(){var _=this,v=_.$createElement,o=_._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"_31-http3：甩掉tcp、tcl包袱-构建高效网络"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_31-http3：甩掉tcp、tcl包袱-构建高效网络"}},[_._v("#")]),_._v(" 31.HTTP3：甩掉TCP、TCL包袱 构建高效网络")]),_._v(" "),o("p",[_._v("前面两篇文章我们分析了 "),o("code",[_._v("HTTP/1")]),_._v(" 和 "),o("code",[_._v("HTTP/2")]),_._v("，在 "),o("code",[_._v("HTTP/2")]),_._v(" 出现之前，开发者需要采取很多变通的方式来解决 "),o("code",[_._v("HTTP/1")]),_._v(" 所存在的问题，不过 "),o("code",[_._v("HTTP/2")]),_._v(" 在 "),o("code",[_._v("2018")]),_._v(" 年就开始得到了大规模的应用，"),o("code",[_._v("HTTP/1")]),_._v(" 中存在的一大堆缺陷都得到了解决。")]),_._v(" "),o("p",[o("code",[_._v("HTTP/2")]),_._v(" 的一个核心特性是使用了"),o("strong",[_._v("多路复用技术")]),_._v("，因此它可以通过一个 "),o("code",[_._v("TCP")]),_._v(" 连接来发送多个 "),o("code",[_._v("URL")]),_._v(" 请求。多路复用技术能"),o("strong",[_._v("充分利用带宽")]),_._v("，最大限度规避了 "),o("code",[_._v("TCP")]),_._v(" 的"),o("strong",[_._v("慢启动")]),_._v("所带来的问题，同时还实现了"),o("strong",[_._v("头部压缩")]),_._v("、"),o("strong",[_._v("服务器推送")]),_._v("等功能，使得页面资源的传输速度得到了大幅提升。在 "),o("code",[_._v("HTTP/1.1")]),_._v(" 时代，为了提升并行下载效率，浏览器为每个域名维护了 "),o("code",[_._v("6")]),_._v(" 个 "),o("code",[_._v("TCP")]),_._v(" 连接；而采用 "),o("code",[_._v("HTTP/2")]),_._v(" 之后，浏览器只需要为每个域名维护 "),o("code",[_._v("1")]),_._v(" 个 "),o("code",[_._v("TCP")]),_._v(" 持久连接，同时还解决了 "),o("code",[_._v("HTTP/1.1")]),_._v(" 队头阻塞的问题。")]),_._v(" "),o("p",[_._v("从目前的情况来看，"),o("code",[_._v("HTTP/2")]),_._v(" 似乎可以完美取代 "),o("code",[_._v("HTTP/1")]),_._v(" 了，不过 "),o("code",[_._v("HTTP/2")]),_._v(" 依然存在一些缺陷，于是就有了 "),o("code",[_._v("HTTP/3")]),_._v("。和通常一样，介绍 "),o("code",[_._v("HTTP/3")]),_._v(" 之前，我们先来看看 "),o("code",[_._v("HTTP/2")]),_._v(" 到底有什么缺陷。")]),_._v(" "),o("h2",{attrs:{id:"tcp-的队头阻塞"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的队头阻塞"}},[_._v("#")]),_._v(" "),o("code",[_._v("TCP")]),_._v(" 的队头阻塞")]),_._v(" "),o("p",[_._v("虽然 "),o("code",[_._v("HTTP/2")]),_._v(" 解决了应用层面的队头阻塞问题，不过和 "),o("code",[_._v("HTTP/1.1")]),_._v(" 一样，"),o("code",[_._v("HTTP/2")]),_._v(" 依然是基于 "),o("code",[_._v("TCP")]),_._v(" 协议的，而 "),o("code",[_._v("TCP")]),_._v(" 最初就是为了"),o("strong",[_._v("单连接")]),_._v("而设计的。你可以把 "),o("code",[_._v("TCP")]),_._v(" 连接看成是两台计算机之前的一个"),o("strong",[_._v("虚拟管道")]),_._v("，计算机的一端将要传输的数据按照顺序放入管道，最终数据会以相同的顺序出现在管道的另外一头。")]),_._v(" "),o("p",[_._v("接下来我们就来分析下 "),o("code",[_._v("HTTP/1.1")]),_._v(" 协议栈中 "),o("code",[_._v("TCP")]),_._v(" 是如何传输数据的。为直观理解，你可以参考下图：")]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/1.png",alt:""}})]),_._v(" "),o("p",[_._v("通过上图你会发现，从一端发送给另外一端的数据会被拆分为一个个"),o("strong",[_._v("按照顺序排列")]),_._v("的数据包，这些数据包通过网络传输到了接收端，接收端再按照顺序将这些数据包组合成原始数据，这样就完成了数据传输。")]),_._v(" "),o("p",[_._v("不过，如果在数据传输的过程中，有一个数据因为网络故障或者其他原因而"),o("strong",[_._v("丢包")]),_._v("了，那么整个 "),o("code",[_._v("TCP")]),_._v(" 的连接就会处于"),o("strong",[_._v("暂停状态")]),_._v("，需要等待丢失的数据包被重新传输过来。你可以把 "),o("code",[_._v("TCP")]),_._v(" 连接看成是一个"),o("strong",[_._v("按照顺序传输数据")]),_._v("的管道，管道中的"),o("strong",[_._v("任意一个数据丢失")]),_._v("了，那之后的数据"),o("strong",[_._v("都需要等待该数据的重新传输")]),_._v("。为了直观理解，你可以参考下图：")]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/2.png",alt:""}})]),_._v(" "),o("p",[_._v("我们就把在 "),o("code",[_._v("TCP")]),_._v(" 传输过程中，由于单个数据包的丢失而造成的阻塞称为 "),o("code",[_._v("TCP")]),_._v(" 上的"),o("strong",[_._v("队头阻塞")]),_._v("。")]),_._v(" "),o("p",[_._v("那队头阻塞是怎么影响 "),o("code",[_._v("HTTP/2")]),_._v(" 传输的呢？首先我们来看正常情况下 "),o("code",[_._v("HTTP/2")]),_._v(" 是怎么传输多路请求的，为了直观理解，你可以参考下图：")]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/3.png",alt:""}})]),_._v(" "),o("p",[_._v("通过该图，我们知道在 "),o("code",[_._v("HTTP/2")]),_._v(" 中，多个请求是跑在一个 "),o("code",[_._v("TCP")]),_._v(" 管道中的，如果其中任意一路数据流中出现了丢包的情况，那么就会"),o("strong",[_._v("阻塞")]),_._v("该 "),o("code",[_._v("TCP")]),_._v(" 连接中的"),o("strong",[_._v("所有请求")]),_._v("。这不同于 "),o("code",[_._v("HTTP/1.1")]),_._v("，使用 "),o("code",[_._v("HTTP/1.1")]),_._v(" 时，浏览器为每个域名开启了 "),o("code",[_._v("6")]),_._v(" 个 "),o("code",[_._v("TCP")]),_._v(" 连接，如果其中的 "),o("code",[_._v("1")]),_._v(" 个"),o("code",[_._v("TCP")]),_._v(" 连接发生了"),o("strong",[_._v("队头阻塞")]),_._v("，那么其他的 "),o("code",[_._v("5")]),_._v(" 个连接依然可以继续传输数据。")]),_._v(" "),o("p",[_._v("所以随着"),o("strong",[_._v("丢包率的增加")]),_._v("，"),o("code",[_._v("HTTP/2")]),_._v(" 的"),o("strong",[_._v("传输效率也会越来越差")]),_._v("。有测试数据表明，当系统达到了 "),o("code",[_._v("2%")]),_._v("的丢包率时，"),o("code",[_._v("HTTP/1.1")]),_._v(" 的传输效率反而比"),o("code",[_._v("HTTP/2")]),_._v(" 表现得更好。")]),_._v(" "),o("h2",{attrs:{id:"tcp-建立连接的延时"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tcp-建立连接的延时"}},[_._v("#")]),_._v(" "),o("code",[_._v("TCP")]),_._v(" 建立连接的延时")]),_._v(" "),o("p",[_._v("除了 "),o("code",[_._v("TCP")]),_._v(" "),o("strong",[_._v("队头阻塞")]),_._v("之外，"),o("code",[_._v("TCP")]),_._v(" 的握手过程也是影响传输效率的一个重要因素。")]),_._v(" "),o("p",[_._v("为了搞清楚 "),o("code",[_._v("TCP")]),_._v(" 协议建立连接的延迟问题，我们还是先来回顾下网络延迟的概念，这会有助于你对后面内容的理解。"),o("strong",[_._v("网络延迟")]),_._v("又称为 "),o("code",[_._v("RTT")]),_._v("（"),o("code",[_._v("Round Trip Time")]),_._v("）。我们把从浏览器发送一个数据包到服务器，再从服务器返回数据包到浏览器的整个往返时间称为 "),o("code",[_._v("RTT")]),_._v("（如下图）。"),o("code",[_._v("RTT")]),_._v(" 是反映网络性能的一个重要指标。")]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/4.png",alt:""}})]),_._v(" "),o("p",[_._v("那建立 "),o("code",[_._v("TCP")]),_._v(" 连接时，需要花费多少个 "),o("code",[_._v("RTT")]),_._v(" 呢？下面我们来计算下。")]),_._v(" "),o("p",[_._v("我们知道 "),o("code",[_._v("HTTP/1")]),_._v(" 和 "),o("code",[_._v("HTTP/2")]),_._v(" 都是使用 "),o("code",[_._v("TCP")]),_._v(" 协议来传输的，而如果使用 "),o("code",[_._v("HTTPS")]),_._v(" 的话，还需要使用 "),o("code",[_._v("TLS")]),_._v(" 协议进行安全传输，而使用 "),o("code",[_._v("TLS")]),_._v(" 也需要一个握手过程，这样就需要有"),o("strong",[_._v("两个握手延迟过程")]),_._v("。")]),_._v(" "),o("ul",[o("li",[_._v("在建立 "),o("code",[_._v("TCP")]),_._v(" 连接的时候，需要和服务器进行"),o("strong",[_._v("三次握手来确认连接成功")]),_._v("，也就是说需要在消耗完 "),o("code",[_._v("1.5")]),_._v(" 个 "),o("code",[_._v("RTT")]),_._v(" 之后才能进行数据传输。")]),_._v(" "),o("li",[_._v("进行 "),o("code",[_._v("TLS")]),_._v(" 连接，"),o("code",[_._v("TLS")]),_._v(" 有两个版本——"),o("code",[_._v("TLS1.2")]),_._v(" 和 "),o("code",[_._v("TLS1.3")]),_._v("，每个版本建立连接所花的时间不同，大致是需要 "),o("code",[_._v("1～2")]),_._v(" 个 "),o("code",[_._v("RTT")]),_._v("，关于 "),o("code",[_._v("HTTPS")]),_._v(" 我们到后面到安全模块再做详细介绍")])]),_._v(" "),o("p",[_._v("总之，在传输数据之前，我们需要花掉 "),o("code",[_._v("3～4")]),_._v(" 个 "),o("code",[_._v("RTT")]),_._v("。如果浏览器和服务器的物理距离较近，那么 "),o("code",[_._v("1")]),_._v(" 个 "),o("code",[_._v("RTT")]),_._v(" 的时间可能在 "),o("code",[_._v("10")]),_._v(" 毫秒以内，也就是说总共要消耗掉 "),o("code",[_._v("30～40")]),_._v(" 毫秒。这个时间也许用户还可以接受，但如果服务器相隔较远，那么 "),o("code",[_._v("1")]),_._v(" 个 "),o("code",[_._v("RTT")]),_._v(" 就可能需要 "),o("code",[_._v("100")]),_._v(" 毫秒以上了，这种情况下整个握手过程需要 "),o("code",[_._v("300～400")]),_._v(" 毫秒，这时用户就能明显地感受到“慢”了。")]),_._v(" "),o("h2",{attrs:{id:"tcp-协议僵化"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议僵化"}},[_._v("#")]),_._v(" "),o("code",[_._v("TCP")]),_._v(" 协议僵化")]),_._v(" "),o("p",[_._v("现在我们知道了 "),o("code",[_._v("TCP")]),_._v(" 协议存在"),o("strong",[_._v("队头阻塞")]),_._v("和"),o("strong",[_._v("建立连接延迟")]),_._v("等缺点，那我们是不是可以通过改进 "),o("code",[_._v("TCP")]),_._v(" 协议来解决这些问题呢？")]),_._v(" "),o("p",[_._v("答案是：非常困难。之所以这样，主要有两个原因。")]),_._v(" "),o("p",[_._v("第一个是"),o("strong",[_._v("中间设备的僵化")]),_._v("。要搞清楚什么是中间设备僵化，我们先要弄明白什么是"),o("strong",[_._v("中间设备")]),_._v("。我们知道互联网是由多个网络互联的网状结构，为了能够保障互联网的正常工作，我们需要在互联网的各处搭建各种设备，这些设备就被称为中间设备。")]),_._v(" "),o("p",[_._v("这些中间设备有很多种类型，并且每种设备都有自己的目的，这些设备包括了"),o("strong",[_._v("路由器")]),_._v("、"),o("strong",[_._v("防火墙")]),_._v("、"),o("code",[_._v("NAT")]),_._v("、"),o("strong",[_._v("交换机")]),_._v("等。它们通常依赖一些很少升级的软件，这些软件使用了大量的 "),o("code",[_._v("TCP")]),_._v(" 特性，这些功能被设置之后就很少更新了。")]),_._v(" "),o("p",[_._v("所以，如果我们在客户端升级了 "),o("code",[_._v("TCP")]),_._v(" 协议，但是当新协议的数据包经过这些中间设备时，它们可能不理解包的内容，于是这些数据就会被丢弃掉。这就是"),o("strong",[_._v("中间设备僵化")]),_._v("，它是阻碍 "),o("code",[_._v("TCP")]),_._v(" 更新的一大障碍。")]),_._v(" "),o("p",[_._v("除了中间设备僵化外，"),o("strong",[_._v("操作系统")]),_._v("也是导致 "),o("code",[_._v("TCP")]),_._v(" 协议僵化的另外一个原因。因为 "),o("code",[_._v("TCP")]),_._v(" 协议都是通过操作系统内核来实现的，应用程序只能使用不能修改。通常操作系统的更新都滞后于软件的更新，因此要想自由地更新内核中的 "),o("code",[_._v("TCP")]),_._v(" 协议也是非常困难的")]),_._v(" "),o("h2",{attrs:{id:"quic-协议"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quic-协议"}},[_._v("#")]),_._v(" "),o("code",[_._v("QUIC")]),_._v(" 协议")]),_._v(" "),o("p",[o("code",[_._v("HTTP/2")]),_._v(" 存在一些比较严重的与 "),o("code",[_._v("TCP")]),_._v(" 协议相关的缺陷，但由于 "),o("code",[_._v("TCP")]),_._v(" 协议僵化，我们几乎不可能通过修改 "),o("code",[_._v("TCP")]),_._v(" 协议自身来解决这些问题，那么解决问题的思路是"),o("strong",[_._v("绕过 "),o("code",[_._v("TCP")]),_._v(" 协议")]),_._v("，发明一个 "),o("code",[_._v("TCP")]),_._v(" 和 "),o("code",[_._v("UDP")]),_._v(" 之外的新的传输协议。但是这也面临着和修改 "),o("code",[_._v("TCP")]),_._v(" 一样的挑战，因为中间设备的僵化，这些设备只认 "),o("code",[_._v("TCP")]),_._v(" 和 "),o("code",[_._v("UDP")]),_._v("，如果采用了新的协议，新协议在这些设备同样不被很好地支持。")]),_._v(" "),o("p",[_._v("因此，"),o("code",[_._v("HTTP/3")]),_._v(" 选择了一个折衷的方法——"),o("code",[_._v("UDP")]),_._v(" 协议，基于 "),o("code",[_._v("UDP")]),_._v(" 实现了类似于 "),o("code",[_._v("TCP")]),_._v(" 的"),o("strong",[_._v("多路数据流")]),_._v("、"),o("strong",[_._v("传输可靠性")]),_._v("等功能，我们把这套功能称为"),o("code",[_._v("QUIC")]),_._v(" 协议。关于 "),o("code",[_._v("HTTP/2")]),_._v(" 和 "),o("code",[_._v("HTTP/3")]),_._v(" 协议栈的比较，你可以参考下图：")]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/5.png",alt:""}})]),_._v(" "),o("p",[_._v("通过上图我们可以看出，"),o("code",[_._v("HTTP/3")]),_._v(" 中的 "),o("code",[_._v("QUIC")]),_._v(" 协议集合了以下几点功能。")]),_._v(" "),o("ul",[o("li",[_._v("实现了类似 "),o("code",[_._v("TCP")]),_._v(" 的"),o("strong",[_._v("流量控制")]),_._v("、"),o("strong",[_._v("传输可靠性")]),_._v("的功能。虽然 "),o("code",[_._v("UDP")]),_._v(" 不提供可靠性的传输，但 "),o("code",[_._v("QUIC")]),_._v(" 在 "),o("code",[_._v("UDP")]),_._v(" 的基础之上增加了一层来保证数据可靠性传输。它提供了"),o("strong",[_._v("数据包重传")]),_._v("、"),o("strong",[_._v("拥塞控制")]),_._v("以及其他一些 "),o("code",[_._v("TCP")]),_._v(" 中存在的特性。")]),_._v(" "),o("li",[_._v("集成了 "),o("code",[_._v("TLS")]),_._v(" "),o("strong",[_._v("加密功能")]),_._v("。目前 "),o("code",[_._v("QUIC")]),_._v(" 使用的是 "),o("code",[_._v("TLS1.3")]),_._v("，相较于早期版本 "),o("code",[_._v("TLS1.3")]),_._v(" 有更多的优点，其中最重要的一点是"),o("strong",[_._v("减少了握手所花费的 "),o("code",[_._v("RTT")]),_._v(" 个数")]),_._v("。")]),_._v(" "),o("li",[_._v("实现了 "),o("code",[_._v("HTTP/2")]),_._v(" 中的"),o("strong",[_._v("多路复用功能")]),_._v("。和 "),o("code",[_._v("TCP")]),_._v(" 不同，"),o("code",[_._v("QUIC")]),_._v(" 实现了在同一物理连接上可以有多个独立的逻辑数据流（如下图）。实现了"),o("strong",[_._v("数据流的单独传输")]),_._v("，就解决了 "),o("code",[_._v("TCP")]),_._v(" 中"),o("strong",[_._v("队头阻塞")]),_._v("的问题。")])]),_._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls31/6.png",alt:""}})]),_._v(" "),o("p",[_._v("实现了"),o("strong",[_._v("快速握手功能")]),_._v("。由于 "),o("code",[_._v("QUIC")]),_._v(" 是基于 "),o("code",[_._v("UDP")]),_._v(" 的，所以 "),o("code",[_._v("QUIC")]),_._v(" 可以实现使用 "),o("code",[_._v("0-RTT")]),_._v(" 或者 "),o("code",[_._v("1-RTT")]),_._v(" 来建立连接，这意味着 "),o("code",[_._v("QUIC")]),_._v(" 可以用最快的速度来发送和接收数据，这样可以大大提升首次打开页面的速度。")]),_._v(" "),o("h2",{attrs:{id:"http-3-的挑战"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-3-的挑战"}},[_._v("#")]),_._v(" "),o("code",[_._v("HTTP/3")]),_._v(" 的挑战")]),_._v(" "),o("p",[_._v("通过上面的分析，我们相信在技术层面，"),o("code",[_._v("HTTP/3")]),_._v(" 是个完美的协议。不过要将 "),o("code",[_._v("HTTP/3")]),_._v(" 应用到实际环境中依然面临着诸多严峻的挑战，这些挑战主要来自于以下"),o("strong",[_._v("三个方面：")])]),_._v(" "),o("ul",[o("li",[o("p",[_._v("**第一：**从目前的情况来看，服务器和浏览器端都没有对 "),o("code",[_._v("HTTP/3")]),_._v(" 提供比较完整的支持。"),o("code",[_._v("Chrome")]),_._v(" 虽然在数年前就开始支持 "),o("code",[_._v("Google")]),_._v(" 版本的 "),o("code",[_._v("QUIC")]),_._v("，但是这个版本的 "),o("code",[_._v("QUIC")]),_._v(" 和官方的 "),o("code",[_._v("QUIC")]),_._v(" 存在着非常大的差异。")])]),_._v(" "),o("li",[o("p",[_._v("**第二：**部署 "),o("code",[_._v("HTTP/3")]),_._v(" 也存在着非常大的问题。因为系统内核对 "),o("code",[_._v("UDP")]),_._v(" 的优化远远没有达到 "),o("code",[_._v("TCP")]),_._v(" 的优化程度，这也是阻碍 "),o("code",[_._v("QUIC")]),_._v(" 的一个重要原因。")])]),_._v(" "),o("li",[o("p",[_._v("**第三：**中间设备僵化的问题。这些设备对 "),o("code",[_._v("UDP")]),_._v(" 的优化程度远远低于 "),o("code",[_._v("TCP")]),_._v("，据统计使用 "),o("code",[_._v("QUIC")]),_._v(" 协议时，大约有 "),o("code",[_._v("3%～7%")]),_._v(" 的丢包率。")])])]),_._v(" "),o("h2",{attrs:{id:"总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),o("p",[_._v("好了，今天就介绍到这里，下面我来总结下本文的主要内容。")]),_._v(" "),o("p",[_._v("我们首先分析了"),o("code",[_._v("HTTP/2")]),_._v(" 中所存在的一些问题，主要包括了 "),o("code",[_._v("TCP")]),_._v(" 的"),o("strong",[_._v("队头阻塞")]),_._v("、"),o("strong",[_._v("建立 "),o("code",[_._v("TCP")]),_._v(" 连接的延时")]),_._v("、"),o("strong",[o("code",[_._v("TCP")]),_._v(" 协议僵化")]),_._v("等问题。")]),_._v(" "),o("p",[_._v("这些问题都是 "),o("code",[_._v("TCP")]),_._v(" 的内部问题，因此要解决这些问题就要优化 "),o("code",[_._v("TCP")]),_._v(" 或者“"),o("strong",[_._v("另起炉灶")]),_._v("”创造新的协议。由于优化 "),o("code",[_._v("TCP")]),_._v(" 协议存在着诸多挑战，所以官方选择了创建新的 "),o("code",[_._v("QUIC")]),_._v(" 协议。")]),_._v(" "),o("p",[o("code",[_._v("HTTP/3")]),_._v(" 正是基于 "),o("code",[_._v("QUIC")]),_._v(" 协议的，你可以把 "),o("code",[_._v("QUIC")]),_._v(" 看成是集成了“"),o("code",[_._v("TCP+HTTP/2")]),_._v(" 的"),o("strong",[_._v("多路复用")]),_._v(" +"),o("code",[_._v("TLS")]),_._v(" 等功能”的一套协议。这是集众家所长的一个协议，从协议最底层对 "),o("code",[_._v("Web")]),_._v(" 的文件传输做了比较彻底的优化，所以等生态相对成熟时，可以用来打造比现在的 "),o("code",[_._v("HTTP/2")]),_._v(" 还更加高效的网络。")]),_._v(" "),o("p",[_._v("虽说这套协议解决了 "),o("code",[_._v("HTTP/2")]),_._v(" 中因 "),o("code",[_._v("TCP")]),_._v(" 而带来的问题，不过由于是改动了底层协议，所以推广起来还会面临着巨大的挑战。")]),_._v(" "),o("p",[o("strong",[_._v("关于 HTTP/3 的未来，我有下面两点判断：")])]),_._v(" "),o("ul",[o("li",[_._v("从标准制定到实践再到协议优化还需要走很长一段路；")]),_._v(" "),o("li",[_._v("因为"),o("strong",[_._v("动了底层协议")]),_._v("，所以 "),o("code",[_._v("HTTP/3")]),_._v(" 的增长会比较缓慢，这和 "),o("code",[_._v("HTTP/2")]),_._v(" 有着本质的区别")])])])}),[],!1,null,null,null);v.default=c.exports}}]);