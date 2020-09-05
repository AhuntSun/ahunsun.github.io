(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{454:function(t,_,v){"use strict";v.r(_);var s=v(27),r=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_08-javascript实现树结构（一）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_08-javascript实现树结构（一）"}},[t._v("#")]),t._v(" 08.JavaScript实现树结构（一）")]),t._v(" "),v("h2",{attrs:{id:"一、树结构简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、树结构简介"}},[t._v("#")]),t._v(" 一、树结构简介")]),t._v(" "),v("h3",{attrs:{id:"_1-1-简单了解树结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-简单了解树结构"}},[t._v("#")]),t._v(" 1.1.简单了解树结构")]),t._v(" "),v("p",[v("strong",[t._v("什么是树？")])]),t._v(" "),v("p",[t._v("真实的树：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/1.png",alt:"image-20200229205530929"}})]),t._v(" "),v("p",[v("strong",[t._v("树的特点：")])]),t._v(" "),v("ul",[v("li",[t._v("树一般都有一个"),v("strong",[t._v("根")]),t._v("，连接着根的是"),v("strong",[t._v("树干")]),t._v("；")]),t._v(" "),v("li",[t._v("树干会发生分叉，形成许多"),v("strong",[t._v("树枝")]),t._v("，树枝会继续分化成更小的"),v("strong",[t._v("树枝")]),t._v("；")]),t._v(" "),v("li",[t._v("树枝的最后是"),v("strong",[t._v("叶子")]),t._v("；")])]),t._v(" "),v("p",[t._v("现实生活中很多结构都是树的抽象，模拟的树结构相当于旋转"),v("code",[t._v("180°")]),t._v("的树。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/2.png",alt:"image-20200229205630945"}})]),t._v(" "),v("p",[v("strong",[t._v("树结构对比于数组/链表/哈希表有哪些优势呢：")])]),t._v(" "),v("p",[v("strong",[t._v("数组：")])]),t._v(" "),v("ul",[v("li",[t._v("优点：可以通过"),v("strong",[t._v("下标值访问")]),t._v("，效率高；")]),t._v(" "),v("li",[t._v("缺点：查找数据时需要先对数据进行"),v("strong",[t._v("排序")]),t._v("，生成"),v("strong",[t._v("有序数组")]),t._v("，才能提高查找效率；并且在插入和删除元素时，需要大量的"),v("strong",[t._v("位移操作")]),t._v("；")])]),t._v(" "),v("p",[v("strong",[t._v("链表：")])]),t._v(" "),v("ul",[v("li",[t._v("优点：数据的插入和删除操作效率都很高；")]),t._v(" "),v("li",[t._v("缺点："),v("strong",[t._v("查找")]),t._v("效率低，需要从头开始依次查找，直到找到目标数据为止；当需要在链表中间位置插入或删除数据时，插入或删除的效率都不高。")])]),t._v(" "),v("p",[v("strong",[t._v("哈希表：")])]),t._v(" "),v("ul",[v("li",[t._v("优点：哈希表的插入/查询/删除效率都非常高；")]),t._v(" "),v("li",[t._v("缺点："),v("strong",[t._v("空间利用率不高")]),t._v("，底层使用的数组中很多单元没有被利用；并且哈希表中的元素是"),v("strong",[t._v("无序")]),t._v("的，不能按照固定顺序遍历哈希表中的元素；而且不能快速找出哈希表中"),v("strong",[t._v("最大值或最小值")]),t._v("这些特殊值。")])]),t._v(" "),v("p",[v("strong",[t._v("树结构：")])]),t._v(" "),v("p",[t._v("优点：树结构综合了上述三种结构的优点，同时也弥补了它们存在的缺点（虽然效率不一定都比它们高），比如树结构中数据都是有序的，查找效率高；空间利用率高；并且可以快速获取最大值和最小值等。")]),t._v(" "),v("p",[t._v("总的来说："),v("strong",[t._v("每种数据结构都有自己特定的应用场景")])]),t._v(" "),v("p",[v("strong",[t._v("树结构：")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("树（Tree）")]),t._v(":由 n（n ≥ 0）个节点构成的"),v("strong",[t._v("有限集合")]),t._v("。当 n = 0 时，称为"),v("strong",[t._v("空树")]),t._v("。")])]),t._v(" "),v("p",[t._v("对于任一棵非空树（n > 0），它具备以下性质：")]),t._v(" "),v("ul",[v("li",[t._v("数中有一个称为**根（Root）**的特殊节点，用 **r **表示；")]),t._v(" "),v("li",[t._v("其余节点可分为 m（m > 0）个互不相交的有限集合 T~1~，T~2~，...，T~m~，其中每个集合本身又是一棵树，称为原来树的"),v("strong",[t._v("子树（SubTree）")]),t._v("。")])]),t._v(" "),v("p",[v("strong",[t._v("树的常用术语：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/3.png",alt:"image-20200229221126468"}})]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("节点的度（Degree）")]),t._v("：节点的"),v("strong",[t._v("子树个数")]),t._v("，比如节点B的度为2；")]),t._v(" "),v("li",[v("strong",[t._v("树的度")]),t._v("：树的所有节点中"),v("strong",[t._v("最大的度数")]),t._v("，如上图树的度为2；")]),t._v(" "),v("li",[v("strong",[t._v("叶节点（Leaf）")]),t._v("："),v("strong",[t._v("度为0的节点")]),t._v("（也称为叶子节点），如上图的H，I等；")]),t._v(" "),v("li",[v("strong",[t._v("父节点（Parent）")]),t._v("：度不为0的节点称为父节点，如上图节点B是节点D和E的父节点；")]),t._v(" "),v("li",[v("strong",[t._v("子节点（Child）")]),t._v("：若B是D的父节点，那么D就是B的子节点；")]),t._v(" "),v("li",[v("strong",[t._v("兄弟节点（Sibling）")]),t._v("：具有同一父节点的各节点彼此是兄弟节点，比如上图的B和C，D和E互为兄弟节点；")]),t._v(" "),v("li",[v("strong",[t._v("路径和路径长度")]),t._v("：路径指的是一个节点到另一节点的通道，路径所包含边的个数称为路径长度，比如A->H的路径长度为3；")]),t._v(" "),v("li",[v("strong",[t._v("节点的层次（Level）")]),t._v("：规定"),v("strong",[t._v("根节点在1层")]),t._v("，其他任一节点的层数是其父节点的"),v("strong",[t._v("层数加1")]),t._v("。如B和C节点的层次为2；")]),t._v(" "),v("li",[v("strong",[t._v("树的深度（Depth）")]),t._v("：树种所有节点中的"),v("strong",[t._v("最大层次")]),t._v("是这棵树的深度，如上图树的深度为4；")])]),t._v(" "),v("h3",{attrs:{id:"_1-2-树结构的表示方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-树结构的表示方式"}},[t._v("#")]),t._v(" 1.2.树结构的表示方式")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("最普通的表示方法")]),t._v("：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/4.png",alt:"image-20200229230417613"}})]),t._v(" "),v("p",[t._v("如图，树结构的组成方式类似于链表，都是由一个个节点连接构成。不过，根据每个父节点子节点数量的不同，每一个父节点需要的引用数量也不同。比如节点A需要3个引用，分别指向子节点B，C，D；B节点需要2个引用，分别指向子节点E和F；K节点由于没有子节点，所以不需要引用。")]),t._v(" "),v("p",[t._v("这种方法缺点在于我们无法确定某一结点的引用数。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("儿子-兄弟表示法")]),t._v("：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/5.png",alt:"image-20200229232805477"}})]),t._v(" "),v("p",[t._v("这种表示方法可以完整地记录每个节点的数据，比如：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("//节点A\nNode{\n  //存储数据\n  this.data = data\n  //统一只记录左边的子节点\n  this.leftChild = B\n  //统一只记录右边的第一个兄弟节点\n  this.rightSibling = null\n}\n\n//节点B\nNode{\n  this.data = data\n  this.leftChild = E\n  this.rightSibling = C\n}\n\n//节点F\nNode{\n  this.data = data\n  this.leftChild = null\n  this.rightSibling = null\n}\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br"),v("span",{staticClass:"line-number"},[t._v("17")]),v("br"),v("span",{staticClass:"line-number"},[t._v("18")]),v("br"),v("span",{staticClass:"line-number"},[t._v("19")]),v("br"),v("span",{staticClass:"line-number"},[t._v("20")]),v("br"),v("span",{staticClass:"line-number"},[t._v("21")]),v("br"),v("span",{staticClass:"line-number"},[t._v("22")]),v("br"),v("span",{staticClass:"line-number"},[t._v("23")]),v("br")])]),v("p",[t._v("这种表示法的优点在于每一个节点中引用的数量都是确定的。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("儿子-兄弟表示法旋转")])])]),t._v(" "),v("p",[t._v("以下为儿子-兄弟表示法组成的树结构：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/6.png",alt:"image-20200229234549049"}})]),t._v(" "),v("p",[t._v("将其顺时针旋转45°之后：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/7.png",alt:"image-20200229235549522"}})]),t._v(" "),v("p",[t._v("这样就成为了一棵"),v("strong",[t._v("二叉树")]),t._v("，由此我们可以得出结论："),v("strong",[t._v("任何树都可以通过二叉树进行模拟")]),t._v("。但是这样父节点不是变了吗？其实，父节点的设置只是为了方便指向子节点，在代码实现中谁是父节点并没有关系，只要能正确找到对应节点即可。")]),t._v(" "),v("h2",{attrs:{id:"二、二叉树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、二叉树"}},[t._v("#")]),t._v(" 二、二叉树")]),t._v(" "),v("h3",{attrs:{id:"_2-1-二叉树简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-二叉树简介"}},[t._v("#")]),t._v(" 2.1.二叉树简介")]),t._v(" "),v("p",[v("strong",[t._v("二叉树的概念")]),t._v("：如果树中的每一个节点最多只能由"),v("strong",[t._v("两个子节点")]),t._v("，这样的树就称为"),v("strong",[t._v("二叉树")]),t._v("；")]),t._v(" "),v("p",[t._v("二叉树十分重要，不仅仅是因为简单，更是因为几乎所有的树都可以表示成二叉树形式。")]),t._v(" "),v("p",[v("strong",[t._v("二叉树的组成")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("二叉树可以为空，也就是没有节点；")]),t._v(" "),v("li",[t._v("若二叉树不为空，则它由根节点和称为其左子树TL和右子树TR的两个不相交的二叉树组成；")])]),t._v(" "),v("p",[v("strong",[t._v("二叉树的五种形态")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/8.png",alt:"image-20200301001718079"}})]),t._v(" "),v("p",[t._v("上图分别表示：空的二叉树、只有一个节点的二叉树、只有左子树TL的二叉树、只有右子树TR的二叉树和有左右两个子树的二叉树。")]),t._v(" "),v("p",[v("strong",[t._v("二叉树的特性")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("一个二叉树的第 i 层的最大节点树为：2^(i-1)^，i >= 1；")]),t._v(" "),v("li",[t._v("深度为k的二叉树的最大节点总数为：2^k^ - 1 ，k >= 1；")]),t._v(" "),v("li",[t._v("对任何非空二叉树，若 n~0~ 表示叶子节点的个数，n~2~表示度为2的非叶子节点个数，那么两者满足关系：n~0~ = n~2~ + 1；如下图所示：H，E，I，J，G为叶子节点，总数为5；A，B，C，F为度为2的非叶子节点，总数为4；满足n~0~ = n~2~ + 1的规律。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/9.png",alt:"image-20200301092140211"}})]),t._v(" "),v("h3",{attrs:{id:"_2-2-特殊的二叉树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-特殊的二叉树"}},[t._v("#")]),t._v(" 2.2.特殊的二叉树")]),t._v(" "),v("p",[v("strong",[t._v("完美二叉树")])]),t._v(" "),v("p",[t._v("完美二叉树（Perfect Binary Tree）也成为满二叉树（Full Binary Tree），在二叉树中，除了最下一层的叶子节点外，每层节点都有2个子节点，这就构成了完美二叉树。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/10.png",alt:"image-20200301093237681"}})]),t._v(" "),v("p",[v("strong",[t._v("完全二叉树")])]),t._v(" "),v("p",[t._v("完全二叉树（Complete Binary Tree）:")]),t._v(" "),v("ul",[v("li",[t._v("除了二叉树最后一层外，其他各层的节点数都达到了最大值；")]),t._v(" "),v("li",[t._v("并且，最后一层的叶子节点从左向右是连续存在，只缺失右侧若干叶子节点；")]),t._v(" "),v("li",[t._v("完美二叉树是特殊的完全二叉树；")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/11.png",alt:"image-20200301093659373"}})]),t._v(" "),v("p",[t._v("在上图中，由于H缺失了右子节点，所以它不是完全二叉树。")]),t._v(" "),v("h3",{attrs:{id:"_2-3-二叉树的数据存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-二叉树的数据存储"}},[t._v("#")]),t._v(" 2.3.二叉树的数据存储")]),t._v(" "),v("p",[t._v("常见的二叉树存储方式为"),v("strong",[t._v("数组")]),t._v("和"),v("strong",[t._v("链表")]),t._v("：")]),t._v(" "),v("p",[v("strong",[t._v("使用数组：")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("完全二叉树")]),t._v("：按从上到下，从左到右的方式存储数据。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/12.png",alt:"image-20200301094919588"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("节点")]),t._v(" "),v("th",[t._v("A")]),t._v(" "),v("th",[t._v("B")]),t._v(" "),v("th",[t._v("C")]),t._v(" "),v("th",[t._v("D")]),t._v(" "),v("th",[t._v("E")]),t._v(" "),v("th",[t._v("F")]),t._v(" "),v("th",[t._v("G")]),t._v(" "),v("th",[t._v("H")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("序号")])]),t._v(" "),v("td",[v("strong",[t._v("1")])]),t._v(" "),v("td",[v("strong",[t._v("2")])]),t._v(" "),v("td",[v("strong",[t._v("3")])]),t._v(" "),v("td",[v("strong",[t._v("4")])]),t._v(" "),v("td",[v("strong",[t._v("5")])]),t._v(" "),v("td",[v("strong",[t._v("6")])]),t._v(" "),v("td",[v("strong",[t._v("7")])]),t._v(" "),v("td",[v("strong",[t._v("8")])])])])]),t._v(" "),v("p",[t._v("使用数组存储时，取数据的时候也十分方便：左子节点的序号等于父节点序号 * 2，右子节点的序号等于父节点序号 * 2 + 1 。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("非完全二叉树")]),t._v("：非完全二叉树需要转换成完全二叉树才能按照上面的方案存储，这样会浪费很大的存储空间。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/13.png",alt:"image-20200301100043636"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("节点")]),t._v(" "),v("th",[t._v("A")]),t._v(" "),v("th",[t._v("B")]),t._v(" "),v("th",[t._v("C")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("F")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("^")]),t._v(" "),v("th",[t._v("M")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("序号")])]),t._v(" "),v("td",[v("strong",[t._v("1")])]),t._v(" "),v("td",[v("strong",[t._v("2")])]),t._v(" "),v("td",[v("strong",[t._v("3")])]),t._v(" "),v("td",[v("strong",[t._v("4")])]),t._v(" "),v("td",[v("strong",[t._v("5")])]),t._v(" "),v("td",[v("strong",[t._v("6")])]),t._v(" "),v("td",[v("strong",[t._v("7")])]),t._v(" "),v("td",[v("strong",[t._v("8")])]),t._v(" "),v("td",[v("strong",[t._v("9")])]),t._v(" "),v("td",[v("strong",[t._v("10")])]),t._v(" "),v("td",[v("strong",[t._v("11")])]),t._v(" "),v("td",[v("strong",[t._v("12")])]),t._v(" "),v("td",[v("strong",[t._v("13")])])])])]),t._v(" "),v("p",[v("strong",[t._v("使用链表")])]),t._v(" "),v("p",[t._v("二叉树最常见的存储方式为"),v("strong",[t._v("链表")]),t._v("：每一个节点封装成一个Node，Node中包含存储的数据、左节点的引用和右节点的引用。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/14.png",alt:"image-20200301100616105"}})]),t._v(" "),v("h2",{attrs:{id:"三、二叉搜索树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、二叉搜索树"}},[t._v("#")]),t._v(" 三、二叉搜索树")]),t._v(" "),v("h3",{attrs:{id:"_3-1-认识二叉搜索树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-认识二叉搜索树"}},[t._v("#")]),t._v(" 3.1.认识二叉搜索树")]),t._v(" "),v("p",[v("strong",[t._v("二叉搜索树")]),t._v("（"),v("strong",[t._v("BST")]),t._v("，Binary Search Tree），也称为"),v("strong",[t._v("二叉排序树")]),t._v("和"),v("strong",[t._v("二叉查找树")]),t._v("。")]),t._v(" "),v("p",[t._v("二叉搜索树是一棵二叉树，可以为空；")]),t._v(" "),v("p",[t._v("如果不为空，则满足以下"),v("strong",[t._v("性质")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("条件1：非空左子树的"),v("strong",[t._v("所有")]),t._v("键值"),v("strong",[t._v("小于")]),t._v("其根节点的键值。比如三中节点6的所有非空左子树的键值都小于6；")]),t._v(" "),v("li",[t._v("条件2：非空右子树的"),v("strong",[t._v("所有")]),t._v("键值"),v("strong",[t._v("大于")]),t._v("其根节点的键值；比如三中节点6的所有非空右子树的键值都大于6；")]),t._v(" "),v("li",[t._v("条件3：左、右子树本身也都是二叉搜索树；")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/15.png",alt:"image-20200301103139916"}})]),t._v(" "),v("p",[t._v("如上图所示，树二和树三符合3个条件属于二叉树，树一不满足条件3所以不是二叉树。")]),t._v(" "),v("p",[v("strong",[t._v("总结："),v("strong",[t._v("二叉搜索树的特点主要是")]),t._v("较小的值")]),t._v("总是保存在"),v("strong",[t._v("左节点")]),t._v("上，相对"),v("strong",[t._v("较大的值")]),t._v("总是保存在"),v("strong",[t._v("右节点")]),t._v('上。这种特点使得二叉搜索树的查询效率非常高，这也就是二叉搜索树中"搜索"的来源。')]),t._v(" "),v("h3",{attrs:{id:"_3-2-二叉搜索树应用举例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-二叉搜索树应用举例"}},[t._v("#")]),t._v(" 3.2.二叉搜索树应用举例")]),t._v(" "),v("p",[t._v("下面是一个二叉搜索树：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/16.png",alt:"image-20200301111718686"}})]),t._v(" "),v("p",[t._v("若想在其中查找数据10，只需要查找4次，查找效率非常高。")]),t._v(" "),v("ul",[v("li",[t._v("第1次：将10与根节点9进行比较，由于10 > 9，所以10下一步与根节点9的右子节点13比较；")]),t._v(" "),v("li",[t._v("第2次：由于10 < 13，所以10下一步与父节点13的左子节点11比较；")]),t._v(" "),v("li",[t._v("第3次：由于10 < 11，所以10下一步与父节点11的左子节点10比较；")]),t._v(" "),v("li",[t._v("第4次：由于10 = 10，最终查找到数据10 。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/17.png",alt:"image-20200301111751041"}}),t._v("同样是15个数据，在排序好的数组中查询数据10，需要查询10次：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/18.png",alt:"image-20200301115348138"}})]),t._v(" "),v("p",[t._v("其实：如果是排序好的数组，可以通过二分查找：第一次找9，第二次找13，第三次找15...。我们发现如果把每次二分的数据拿出来以树的形式表示的话就是"),v("strong",[t._v("二叉搜索树")]),t._v("。这就是数组二分法查找效率之所以高的原因。")]),t._v(" "),v("blockquote",[v("p",[t._v("参考资料："),v("a",{attrs:{href:"https://www.bilibili.com/video/av86801505?from=search&seid=4967761411915016256",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript数据结构与算法"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);