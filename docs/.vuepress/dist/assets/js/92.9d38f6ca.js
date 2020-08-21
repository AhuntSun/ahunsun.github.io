(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{517:function(_,e,v){"use strict";v.r(e);var o=v(27),c=Object(o.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_06-max-age和expires"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_06-max-age和expires"}},[_._v("#")]),_._v(" 06.Max-age和Expires")]),_._v(" "),v("h2",{attrs:{id:"一、expires"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、expires"}},[_._v("#")]),_._v(" 一、Expires")]),_._v(" "),v("p",[v("code",[_._v("Expires")]),_._v("是"),v("code",[_._v("HTTP/1.0")]),_._v("中的，它比"),v("code",[_._v("max-age")]),_._v("要麻烦点。"),v("code",[_._v("Expires")]),_._v("指定的时间分下面二种，这个主要考虑到"),v("code",[_._v("apache")]),_._v("中设置是"),v("code",[_._v("A")]),_._v("还是"),v("code",[_._v("M")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("1.相对文件的最后访问时间(Atime)")]),_._v("\n当"),v("code",[_._v("Apache")]),_._v("使用"),v("code",[_._v("A")]),_._v("时间来做"),v("code",[_._v("Expires")]),_._v("时.这样设置时，他就和"),v("code",[_._v("max-age")]),_._v("的值"),v("strong",[_._v("相等")]),_._v("，因为"),v("code",[_._v("max-age")]),_._v("是相对文件的请求时间("),v("code",[_._v("Atime")]),_._v(")。")]),_._v(" "),v("p",[_._v("例如："),v("code",[_._v("ExpiresByType text/html A600")])]),_._v(" "),v("p",[_._v("由上面我们得知，"),v("code",[_._v("Apache")]),_._v("设置"),v("code",[_._v("Atime")]),_._v("时,过期为"),v("code",[_._v("600")]),_._v("秒时。\n"),v("code",[_._v("Expires=18:00+600=18:10")]),_._v(" "),v("code",[_._v("max-age=18:00+600=18:10")]),_._v("\n得出："),v("code",[_._v("Expires=max-age")])]),_._v(" "),v("p",[v("strong",[_._v("2.绝对修改时间(MTime)")])]),_._v(" "),v("p",[_._v("这又分二种情况，我们来拿"),v("code",[_._v("A.htm")]),_._v("来讲：假设"),v("strong",[_._v("文件的建立时间")]),_._v("为"),v("code",[_._v("18:00")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("当用户"),v("code",[_._v("Request")]),_._v("请求为"),v("code",[_._v("18:00")]),_._v("时，过期为"),v("code",[_._v("600")]),_._v("秒\n"),v("code",[_._v("Expires=18:00+600=18:10")]),_._v(" "),v("code",[_._v("max-age=18:00+600=18:10")]),_._v("\n得出:"),v("code",[_._v("Expires")]),_._v("等于"),v("code",[_._v("max-age")])])]),_._v(" "),v("li",[v("p",[_._v("当用户"),v("code",[_._v("Request")]),_._v("请求为"),v("code",[_._v("18:20")]),_._v("时，过期为"),v("code",[_._v("600")]),_._v("秒")]),_._v(" "),v("p",[v("code",[_._v("Expires=18:00+600=18:10")]),_._v("(因为设置成"),v("code",[_._v("Mtime")]),_._v("时,"),v("strong",[_._v("时间由文件建立时间来决定")]),_._v(")\n"),v("code",[_._v("max-age=18:20+600=18:30")]),_._v("\n得出:"),v("code",[_._v("Expires")]),_._v("不等于"),v("code",[_._v("max-age")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("即：当使用"),v("code",[_._v("MTime")]),_._v("时，"),v("code",[_._v("Expires")]),_._v("的初始值为文件创建时间；而"),v("code",[_._v("Max-age")]),_._v("的初始值为客户端请求数据的时间.")])]),_._v(" "),v("p",[_._v("另外要注意，像上面这种清况时，"),v("code",[_._v("max-age")]),_._v("优化，所以过期时间为"),v("code",[_._v("18:30")]),_._v("。")])])}),[],!1,null,null,null);e.default=c.exports}}]);