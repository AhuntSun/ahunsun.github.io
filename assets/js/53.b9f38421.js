(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{485:function(v,_,o){"use strict";o.r(_);var t=o(27),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"_36-https：让数据传输更安全"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_36-https：让数据传输更安全"}},[v._v("#")]),v._v(" 36.HTTPS：让数据传输更安全")]),v._v(" "),o("p",[v._v("浏览器安全主要划分为三大块内容："),o("strong",[v._v("页面安全")]),v._v("、"),o("strong",[v._v("系统安全")]),v._v("和"),o("strong",[v._v("网络安全")]),v._v("。前面我们用四篇文章介绍了页面安全和系统安全，也聊了浏览器和 "),o("code",[v._v("Web")]),v._v(" 开发者是如何应对各种类型的攻击，本文是我们专栏的最后一篇，我们就接着来聊聊"),o("strong",[v._v("网络安全协议")]),v._v(" "),o("code",[v._v("HTTPS")]),v._v("。")]),v._v(" "),o("p",[v._v("我们先从 "),o("code",[v._v("HTTP")]),v._v(" 的明文传输的特性讲起，在上一个模块的三篇文章中我们分析过，起初设计 "),o("code",[v._v("HTTP")]),v._v(" 协议的目的很单纯，就是为了传输超文本文件，那时候也没有太强的加密传输的数据需求，所以 "),o("code",[v._v("HTTP")]),v._v(" 一直保持着明文传输数据的特征。但这样的话，在传输过程中的每一个环节，数据都有可能"),o("strong",[v._v("被窃取")]),v._v("或者"),o("strong",[v._v("篡改")]),v._v("，这也意味着你和服务器之间还可能有个中间人，你们在通信过程中的一切内容都在中间人的掌握中，如下图：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/1.png",alt:""}})]),v._v(" "),o("p",[v._v("从上图可以看出，我们使用 "),o("code",[v._v("HTTP")]),v._v(" 传输的内容很容易被中间人窃取、伪造和篡改，通常我们把这种攻击方式称为"),o("strong",[v._v("中间人攻击")])]),v._v(" "),o("p",[v._v("具体来讲，在将 "),o("code",[v._v("HTTP")]),v._v(" 数据提交给 "),o("code",[v._v("TCP")]),v._v(" 层之后，数据会经过"),o("strong",[v._v("用户电脑")]),v._v("、"),o("strong",[o("code",[v._v("WiFi")]),v._v(" 路由器")]),v._v("、"),o("strong",[v._v("运营商")]),v._v("和"),o("strong",[v._v("目标服务器")]),v._v("，在这中间的每个环节中，数据都有可能被窃取或篡改。比如用户电脑被黑客安装了恶意软件，那么恶意软件就能抓取和篡改所发出的 "),o("code",[v._v("HTTP")]),v._v(" 请求的内容。或者用户一不小心连接上了 "),o("code",[v._v("WiFi")]),v._v(" 钓鱼路由器，那么数据也都能被黑客抓取或篡改。")]),v._v(" "),o("h2",{attrs:{id:"在-http-协议栈中引入安全层"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#在-http-协议栈中引入安全层"}},[v._v("#")]),v._v(" 在 "),o("code",[v._v("HTTP")]),v._v(" 协议栈中引入安全层")]),v._v(" "),o("p",[v._v("鉴于 "),o("code",[v._v("HTTP")]),v._v(" 的明文传输使得传输过程毫无安全性可言，且制约了网上购物、在线转账等一系列场景应用，于是倒逼着我们要引入"),o("strong",[v._v("加密方案")])]),v._v(" "),o("p",[v._v("从 "),o("code",[v._v("HTTP")]),v._v(" 协议栈层面来看，我们可以在 "),o("code",[v._v("TCP")]),v._v(" 和 "),o("code",[v._v("HTTP")]),v._v(" 之间插入一个安全层，所有经过安全层的数据都会被加密或者解密，你可以参考下图：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/2.png",alt:""}})]),v._v(" "),o("p",[v._v("从图中我们可以看出 "),o("code",[v._v("HTTPS")]),v._v(" 并非是一个新的协议，通常 "),o("code",[v._v("HTTP")]),v._v(" 直接和 "),o("code",[v._v("TCP")]),v._v(" 通信，"),o("code",[v._v("HTTPS")]),v._v(" 则先和"),o("strong",[v._v("安全层通信")]),v._v("，然后安全层再和 "),o("code",[v._v("TCP")]),v._v(" 层通信。也就是说 "),o("code",[v._v("HTTPS")]),v._v(" 所有的安全核心都在"),o("strong",[v._v("安全层")]),v._v("，它不会影响到上面的 "),o("code",[v._v("HTTP")]),v._v(" 协议，也不会影响到下面的 "),o("code",[v._v("TCP/IP")]),v._v("，因此要搞清楚 "),o("code",[v._v("HTTPS")]),v._v(" 是如何工作的，就要弄清楚安全层是怎么工作的。")]),v._v(" "),o("p",[v._v("总的来说，安全层有两个主要的职责："),o("strong",[v._v("对发起 "),o("code",[v._v("HTTP")]),v._v(" 请求的数据进行加密操作")]),v._v("和"),o("strong",[v._v("对接收到 "),o("code",[v._v("HTTP")]),v._v(" 的内容进行解密操作")])]),v._v(" "),o("p",[v._v("我们知道了安全层最重要的就是加解密，那么接下来我们就利用这个安全层，一步一步实现一个从简单到复杂的 "),o("code",[v._v("HTTPS")]),v._v(" 协议。")]),v._v(" "),o("h3",{attrs:{id:"第一版：使用对称加密"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第一版：使用对称加密"}},[v._v("#")]),v._v(" 第一版：使用对称加密")]),v._v(" "),o("p",[v._v("提到加密，最简单的方式是使用"),o("strong",[v._v("对称加密")]),v._v("。所谓"),o("strong",[v._v("对称加密是指加密和解密都使用的是相同的密钥")])]),v._v(" "),o("p",[v._v("了解了对称加密，下面我们就使用对称加密来实现第一版的 "),o("code",[v._v("HTTPS")]),v._v("。")]),v._v(" "),o("p",[v._v("要在两台电脑上加解密同一个文件，我们至少需要知道加解密方式和密钥，因此，在 "),o("code",[v._v("HTTPS")]),v._v(" 发送数据之前，浏览器和服务器之间需要"),o("strong",[v._v("协商加密方式")]),v._v("和"),o("strong",[v._v("密钥")]),v._v("，过程如下所示：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/3.png",alt:""}})]),v._v(" "),o("p",[v._v("通过上图我们可以看出，"),o("code",[v._v("HTTPS")]),v._v(" 首先要"),o("strong",[v._v("协商加解密方式")]),v._v("，这个过程就是 "),o("code",[v._v("HTTPS")]),v._v(" 建立安全连接的过程。为了让加密的密钥更加难以破解，我们让服务器和客户端同时决定密钥，具体过程如下：")]),v._v(" "),o("ul",[o("li",[v._v("浏览器发送它所支持的"),o("strong",[v._v("加密套件列表")]),v._v("和一个"),o("strong",[v._v("随机数")]),v._v(" "),o("code",[v._v("client-random")]),v._v("，这里的"),o("strong",[v._v("加密套件是指加密的方法")]),v._v("，加密套件列表就是指浏览器"),o("strong",[v._v("能支持多少种加密方法列表")]),v._v("。")]),v._v(" "),o("li",[v._v("服务器会从加密套件列表中选取一个加密套件，然后还会生成一个"),o("strong",[v._v("随机数")]),v._v(" "),o("code",[v._v("service-random")]),v._v("，并将 "),o("code",[v._v("service-random")]),v._v(" 和加密套件列表返回给浏览器。")]),v._v(" "),o("li",[v._v("最后浏览器和服务器"),o("strong",[v._v("分别返回确认消息")]),v._v("。")])]),v._v(" "),o("p",[v._v("这样浏览器端和服务器端都有相同的 "),o("code",[v._v("client-random")]),v._v(" 和 "),o("code",[v._v("service-random")]),v._v("了，然后它们再使用相同的方法将 "),o("code",[v._v("client-random")]),v._v(" 和 "),o("code",[v._v("service-random")]),v._v(" 混合起来生成一个"),o("strong",[v._v("密钥")]),v._v(" "),o("code",[v._v("master secret")]),v._v("，有了密钥 "),o("code",[v._v("master secret")]),v._v(" 和加密套件之后，双方就可以进行数据的加密传输了。")]),v._v(" "),o("p",[v._v("通过将对称加密应用在"),o("strong",[v._v("安全层")]),v._v("上，我们实现了第一个版本的 "),o("code",[v._v("HTTPS")]),v._v("，虽然这个版本能够很好地工作，但是其中传输 "),o("code",[v._v("client-random")]),v._v(" 和 "),o("code",[v._v("service-random")]),v._v(" 的过程却是"),o("strong",[v._v("明文")]),v._v("的，这意味着黑客也可以"),o("strong",[v._v("拿到协商的加密套件")]),v._v("和"),o("strong",[v._v("双方的随机数")]),v._v("，由于利用随机数"),o("strong",[v._v("合成密钥的算法")]),v._v("是"),o("strong",[v._v("公开")]),v._v("的，所以黑客拿到随机数之后，也可以合成密钥，这样数据依然可以被破解，那么黑客也就可以使用密钥来"),o("strong",[v._v("伪造")]),v._v("或"),o("strong",[v._v("篡改数据")]),v._v("了。")]),v._v(" "),o("h3",{attrs:{id:"第二版：使用非对称加密"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第二版：使用非对称加密"}},[v._v("#")]),v._v(" 第二版：使用非对称加密")]),v._v(" "),o("p",[v._v("不过非对称加密能够解决这个问题，因此接下来我们就利用"),o("strong",[v._v("非对称加密")]),v._v("来实现我们第二版的 "),o("code",[v._v("HTTPS")]),v._v("，不过在讨论具体的实现之前，我们先看看什么是非对称加密。")]),v._v(" "),o("p",[v._v("和对称加密只有一个密钥不同，"),o("strong",[v._v("非对称加密算法有 "),o("code",[v._v("A")]),v._v("、"),o("code",[v._v("B")]),v._v(" 两把密钥，如果你用 "),o("code",[v._v("A")]),v._v(" 密钥来加密，那么只能使用 "),o("code",[v._v("B")]),v._v(" 密钥来解密；反过来，如果你要 "),o("code",[v._v("B")]),v._v(" 密钥来加密，那么只能用 "),o("code",[v._v("A")]),v._v(" 密钥来解密")])]),v._v(" "),o("p",[v._v("在 "),o("code",[v._v("HTTPS")]),v._v(" 中，服务器会将其中的一个"),o("strong",[v._v("密钥")]),v._v("通过"),o("strong",[v._v("明文")]),v._v("的形式发送给浏览器，我们把这个密钥称为"),o("strong",[v._v("公钥")]),v._v("，服务器自己留下的那个密钥称为"),o("strong",[v._v("私钥")]),v._v("。顾名思义，"),o("strong",[v._v("公钥是每个人都能获取到的，而私钥只有服务器才能知道，不对任何人公开")]),v._v("。下图是使用非对称加密改造的 "),o("code",[v._v("HTTPS")]),v._v(" 协议：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/4.png",alt:""}})]),v._v(" "),o("p",[v._v("根据该图，我们来分析下使用非对称加密的请求流程。")]),v._v(" "),o("ul",[o("li",[v._v("首先浏览器还是发送"),o("strong",[v._v("加密套件列表")]),v._v("给服务器。")]),v._v(" "),o("li",[v._v("然后服务器会选择一个加密套件，不过和对称加密不同的是，使用非对称加密时服务器上需要有"),o("strong",[v._v("用于浏览器加密的公钥")]),v._v("和"),o("strong",[v._v("服务器解密 "),o("code",[v._v("HTTP")]),v._v(" 数据的私钥")]),v._v("，由于公钥是给浏览器加密使用的，因此服务器会将加密套件和公钥一道发送给浏览器。")]),v._v(" "),o("li",[v._v("最后就是浏览器和服务器返回确认消息。")])]),v._v(" "),o("p",[v._v("这样浏览器端就有了服务器的"),o("strong",[v._v("公钥")]),v._v("，在浏览器端向服务器端发送数据时，就可以使用该公钥来加密数据。由于公钥加密的数据只有"),o("strong",[v._v("私钥才能解密")]),v._v("，所以即便黑客截获了数据和公钥，他也是无法使用公钥来解密数据的。")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("第一个是非对称加密的效率太低")]),v._v("。这会"),o("strong",[v._v("严重影响到加解密数据的速度")]),v._v("，进而影响到用户打开页面的速度。")]),v._v(" "),o("li",[o("strong",[v._v("第二个是无法保证服务器发送给浏览器的数据安全")]),v._v("。虽然浏览器端可以使用公钥来加密，但是服务器端只能采用私钥来加密，私钥加密只有公钥能解密，但黑客也是可以获取得到公钥的，这样就不能保证服务器端数据的安全了。")])]),v._v(" "),o("h3",{attrs:{id:"第三版：对称加密和非对称加密搭配使用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第三版：对称加密和非对称加密搭配使用"}},[v._v("#")]),v._v(" 第三版：对称加密和非对称加密搭配使用")]),v._v(" "),o("p",[v._v("基于以上两点原因，我们最终选择了一个更加完美的方案，那就是"),o("strong",[v._v("在传输数据阶段依然使用对称加密，但是对称加密的密钥我们采用非对称加密来传输")]),v._v("。下图就是改造后的版本：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/5.png",alt:""}})]),v._v(" "),o("p",[o("strong",[v._v("从图中可以看出，改造后的流程是这样的：")])]),v._v(" "),o("ul",[o("li",[v._v("首先浏览器向服务器发送"),o("strong",[v._v("对称加密套件列表")]),v._v("、"),o("strong",[v._v("非对称加密套件列表")]),v._v("和"),o("strong",[v._v("随机数 "),o("code",[v._v("client-random")])]),v._v("；")]),v._v(" "),o("li",[v._v("服务器保存"),o("strong",[v._v("随机数 "),o("code",[v._v("client-random")])]),v._v("，"),o("strong",[v._v("选择对称加密")]),v._v("和"),o("strong",[v._v("非对称加密的套件")]),v._v("，然后"),o("strong",[v._v("生成随机数 "),o("code",[v._v("service-random")])]),v._v("，向浏览器发送选择的"),o("strong",[v._v("加密套件")]),v._v("、"),o("code",[v._v("service-random")]),v._v(" 和"),o("strong",[v._v("公钥")]),v._v("；")]),v._v(" "),o("li",[v._v("浏览器保存"),o("strong",[v._v("公钥")]),v._v("，并利用 "),o("code",[v._v("client-random")]),v._v(" 和 "),o("code",[v._v("service-random")]),v._v(" 计算出来 "),o("code",[v._v("pre-master")]),v._v("，然后利用"),o("strong",[v._v("公钥")]),v._v("对 "),o("code",[v._v("pre-master")]),v._v(" 加密，并向服务器发送加密后的数据；")]),v._v(" "),o("li",[v._v("最后服务器拿出自己的"),o("strong",[v._v("私钥")]),v._v("，解密出 "),o("code",[v._v("pre-master")]),v._v(" 数据，并返回确认消息。")])]),v._v(" "),o("p",[v._v("到此为止，服务器和浏览器就有了共同的 "),o("code",[v._v("client-random")]),v._v("、"),o("code",[v._v("service-random")]),v._v(" 和 "),o("code",[v._v("pre-master")]),v._v("，然后服务器和浏览器会使用这"),o("strong",[v._v("三组随机数")]),v._v("生成"),o("strong",[v._v("对称密钥")]),v._v("，因为服务器和浏览器使用同一套方法来生成密钥，所以最终生成的密钥也是"),o("strong",[v._v("相同")]),v._v("的。")]),v._v(" "),o("p",[v._v("有了对称加密的密钥之后，双方就可以使用"),o("strong",[v._v("对称加密")]),v._v("的方式来传输数据了。")]),v._v(" "),o("p",[v._v("需要特别注意的一点，"),o("strong",[o("code",[v._v("pre-master")]),v._v(" 是经过公钥加密之后传输的，所以黑客无法获取到 "),o("code",[v._v("pre-master")]),v._v("，这样黑客就无法生成密钥，也就保证了黑客无法破解传输过程中的数据了")])]),v._v(" "),o("h3",{attrs:{id:"第四版：添加数字证书"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#第四版：添加数字证书"}},[v._v("#")]),v._v(" 第四版：添加数字证书")]),v._v(" "),o("p",[v._v("通过对称和非对称混合方式，我们完美地实现了数据的加密传输。不过这种方式依然存在着问题，比如我要打开极客时间的官网，但是黑客通过 "),o("code",[v._v("DNS")]),v._v(" "),o("strong",[v._v("劫持")]),v._v("将极客时间官网的 "),o("code",[v._v("IP")]),v._v(" 地址替换成了黑客的 "),o("code",[v._v("IP")]),v._v(" 地址，这样我访问的其实是黑客的服务器了，黑客就可以在自己的服务器上实现公钥和私钥，而对浏览器来说，它完全"),o("strong",[v._v("不知道现在访问的是个黑客的站点")]),v._v("。")]),v._v(" "),o("p",[v._v("所以我们还需要服务器"),o("strong",[v._v("向浏览器提供证明")]),v._v("“"),o("strong",[v._v("我就是我")]),v._v("”，那怎么证明呢？")]),v._v(" "),o("p",[v._v("这里我们结合实际生活中的一个例子，比如你要买房子，首先你需要给房管局提交你买房的材料，包括银行流水、银行证明、身份证等，然后房管局工作人员在验证无误后，会发给你一本盖了章的房产证，房产证上包含了你的名字、身份证号、房产地址、实际面积、公摊面积等信息。")]),v._v(" "),o("p",[v._v("在这个例子中，你之所以能证明房子是你自己的，是因为引进了房管局这个"),o("strong",[v._v("权威机构")]),v._v("，并通过这个权威机构给你颁发一个"),o("strong",[v._v("证书")])]),v._v(" "),o("p",[v._v("对于浏览器来说，"),o("strong",[v._v("数字证书")]),v._v("有两个作用：")]),v._v(" "),o("ul",[o("li",[o("strong",[v._v("第一："),o("strong",[v._v("是通过数字证书")]),v._v("向浏览器证明服务器的身份")]),v._v("；")]),v._v(" "),o("li",[o("strong",[v._v("第二："),o("strong",[v._v("数字证书里面包含了")]),v._v("服务器公钥")]),v._v("。")])]),v._v(" "),o("p",[v._v("接下来我们看看含有数字证书的 "),o("code",[v._v("HTTPS")]),v._v(" 的请求流程，你可以参考下图：")]),v._v(" "),o("p",[o("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/browser/part6/ls36/6.png",alt:""}})]),v._v(" "),o("p",[o("strong",[v._v("相较于第三版的 "),o("code",[v._v("HTTPS")]),v._v(" 协议，这里主要有两点改变：")])]),v._v(" "),o("ul",[o("li",[v._v("服务器"),o("strong",[v._v("没有直接返回公钥给浏览器")]),v._v("，而是返回了"),o("strong",[v._v("数字证书")]),v._v("，而"),o("strong",[v._v("公钥")]),v._v("正是"),o("strong",[v._v("包含在数字证书中")]),v._v("的；")]),v._v(" "),o("li",[v._v("在浏览器端多了一个"),o("strong",[v._v("证书验证")]),v._v("的操作，验证了证书之后，才继续后续流程。")])]),v._v(" "),o("p",[v._v("通过引入数字证书，我们就实现了服务器的身份认证功能，这样即便黑客伪造了服务器，但是由于证书是没有办法伪造的，所以依然无法欺骗用户。")]),v._v(" "),o("h2",{attrs:{id:"数字证书的申请和验证"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#数字证书的申请和验证"}},[v._v("#")]),v._v(" 数字证书的申请和验证")]),v._v(" "),o("p",[v._v("在第四版的 "),o("code",[v._v("HTTPS")]),v._v(" 中，我们提到过，有了数字证书，黑客就无法欺骗用户了，不过我们并没有解释清楚如何通过数字证书来证明用户身份，所以接下来我们再来把这个问题解释清楚。")]),v._v(" "),o("p",[o("strong",[v._v("如何申请数字证书")])]),v._v(" "),o("p",[v._v("我们先来看看如何向 "),o("code",[v._v("CA")]),v._v(" 申请证书。比如极客时间需要向某个 "),o("code",[v._v("CA")]),v._v(" 去申请数字证书，通常的申请流程分以下几步：")]),v._v(" "),o("ul",[o("li",[v._v("首先极客时间需要"),o("strong",[v._v("准备一套私钥和公钥")]),v._v("，"),o("strong",[v._v("私钥")]),v._v("留着自己使用；")]),v._v(" "),o("li",[v._v("然后极客时间向 "),o("code",[v._v("CA")]),v._v(" 机构提交公钥、公司、站点等信息并等待认证，这个认证过程可能是收费的；")]),v._v(" "),o("li",[o("code",[v._v("CA")]),v._v(" 通过线上、线下等多种渠道来验证极客时间所提供信息的真实性，如公司是否存在、企业是否合法、域名是否归属该企业等；")]),v._v(" "),o("li",[v._v("如信息审核通过，"),o("code",[v._v("CA")]),v._v(" 会向极客时间签发"),o("strong",[v._v("认证的数字证书")]),v._v("，包含了极客时间的公钥、组织信息、"),o("code",[v._v("CA")]),v._v(" 的信息、有效时间、证书序列号等，这些信息都是明文的，同时包含一个 "),o("code",[v._v("CA")]),v._v(" 生成的"),o("strong",[v._v("签名")]),v._v("。")])]),v._v(" "),o("p",[v._v("这样我们就完成了极客时间数字证书的申请过程。前面几步都很好理解，不过最后一步数字签名的过程还需要解释下：首先 "),o("code",[v._v("CA")]),v._v(" 使用**"),o("code",[v._v("Hash")]),v._v(" 函数"),o("strong",[v._v("来计算极客时间提交的明文信息，并得出")]),v._v("信息摘要**；然后 "),o("code",[v._v("CA")]),v._v(" 再使用它的私钥对信息摘要进行加密，"),o("strong",[v._v("加密后的密文就是 "),o("code",[v._v("CA")]),v._v(" 颁给极客时间的数字签名")]),v._v("。这就相当于房管局在房产证上盖的章，这个章是可以去验证的，同样我们也可以通过数字签名来验证是否是该 "),o("code",[v._v("CA")]),v._v(" 颁发的。")]),v._v(" "),o("h2",{attrs:{id:"浏览器如何验证数字证书"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#浏览器如何验证数字证书"}},[v._v("#")]),v._v(" 浏览器如何验证数字证书")]),v._v(" "),o("p",[v._v("有了 "),o("code",[v._v("CA")]),v._v(" 签名过的数字证书，当浏览器向极客时间服务器发出请求时，服务器会返回"),o("strong",[v._v("数字证书")]),v._v("给浏览器。")]),v._v(" "),o("p",[v._v("浏览器接收到数字证书之后，会对数字证书进行验证。首先浏览器读取证书中相关的明文信息，采用 "),o("code",[v._v("CA")]),v._v(" 签名时相同的 "),o("code",[v._v("Hash")]),v._v(" 函数来计算并得到"),o("strong",[v._v("信息摘要 "),o("code",[v._v("A")])]),v._v("；然后再利用对应 "),o("code",[v._v("CA")]),v._v(" 的"),o("strong",[v._v("公钥")]),v._v("解密签名数据，得到"),o("strong",[v._v("信息摘要 "),o("code",[v._v("B")])]),v._v("；对比信息摘要 "),o("code",[v._v("A")]),v._v(" 和信息摘要 "),o("code",[v._v("B")]),v._v("，"),o("strong",[v._v("如果一致")]),v._v("，则可以"),o("strong",[v._v("确认证书是合法的")]),v._v("，即证明了这个服务器是极客时间的；同时浏览器还会验证证书相关的域名信息、有效时间等信息。")]),v._v(" "),o("p",[v._v("这时候相当于验证了 "),o("code",[v._v("CA")]),v._v(" 是谁，但是这个 "),o("code",[v._v("CA")]),v._v(" 可能比较小众，浏览器不知道该不该信任它，然后浏览器会继续查找给这个 "),o("code",[v._v("CA")]),v._v(" 颁发证书的 "),o("code",[v._v("CA")]),v._v("，再以同样的方式验证它上级 "),o("code",[v._v("CA")]),v._v(" 的可靠性。通常情况下，操作系统中会内置信任的顶级 "),o("code",[v._v("CA")]),v._v(" 的证书信息（包含"),o("strong",[v._v("公钥")]),v._v("），如果这个 "),o("code",[v._v("CA")]),v._v(" 链中没有找到浏览器内置的顶级的 "),o("code",[v._v("CA")]),v._v("，证书也会被判定非法。")]),v._v(" "),o("p",[o("strong",[v._v("另外，在申请和使用证书的过程中，还需要注意以下三点：")])]),v._v(" "),o("ul",[o("li",[v._v("申请数字证书是不需要提供私钥的，要确保私钥永远只能由服务器掌握；")]),v._v(" "),o("li",[v._v("数字证书最核心的是 "),o("code",[v._v("CA")]),v._v(" 使用它的"),o("strong",[v._v("私钥")]),v._v("生成的"),o("strong",[v._v("数字签名")]),v._v("；")]),v._v(" "),o("li",[v._v("内置 "),o("code",[v._v("CA")]),v._v(" 对应的"),o("strong",[v._v("证书")]),v._v("称为"),o("strong",[v._v("根证书")]),v._v("，根证书是最权威的机构，它们自己为自己签名，我们把这称为自签名证书。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);