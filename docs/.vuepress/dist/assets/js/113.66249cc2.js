(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{433:function(v,e,_){"use strict";_.r(e);var t=_(33),i=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"第六讲：git协作与git-pull常见问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第六讲：git协作与git-pull常见问题"}},[v._v("#")]),v._v(" 第六讲：Git协作与Git pull常见问题")]),v._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("p",[_("code",[v._v("git")]),v._v("除了可以很好地管理个人项目外，最大的一个用处就是实现团队协作开发。况且，"),_("code",[v._v("linus")]),v._v("大神开发"),_("code",[v._v("git")]),v._v("的初衷就是为了维护"),_("code",[v._v("Linux")]),v._v("内核这一开源项目。所以，熟悉使用"),_("code",[v._v("git")]),v._v("进行多人协作开发的一般步骤和方法具有十分重要的意义。这一讲将会为你介绍使用"),_("code",[v._v("git")]),v._v("进行团队协作开发的一般方式以及"),_("code",[v._v("git pull")]),v._v("操作常见问题的解决方法。")]),v._v(" "),_("h2",{attrs:{id:"一、git协作方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、git协作方式"}},[v._v("#")]),v._v(" 一、"),_("code",[v._v("git")]),v._v("协作方式")]),v._v(" "),_("h3",{attrs:{id:"_1-常见开发模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见开发模式"}},[v._v("#")]),v._v(" 1.常见开发模式")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("Gitflow")]),v._v("：简单来说，就是多种开发模式的总称。例如：使用多少分支，什么时候合并分支等等。这方面篇幅较长，内容较多，之后会进行详细讲解；")])]),v._v(" "),_("li",[_("p",[v._v("基于"),_("code",[v._v("Git")]),v._v("分支的开发模型：一般最少有三个分支：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("develop")]),v._v("分支：频繁变化的分支，供开发人员之间进行协作开发，文件推送与合并；")]),v._v(" "),_("li",[_("code",[v._v("test")]),v._v("分支：供测试人员与产品等人员使用的一个分支，变化不是特别频繁；")]),v._v(" "),_("li",[_("code",[v._v("master")]),v._v("分支：生产发布分支，变化非常不频繁的一个分支（一般有权限设置，因为直接与生产有关）；")]),v._v(" "),_("li",[_("code",[v._v("bugfix(hotfix)")]),v._v("分支：用于紧急修复的分支；当出现紧急"),_("code",[v._v("bug")]),v._v("时，在常规的"),_("code",[v._v("develop")]),v._v("分支上修复已经赶不上了。此时可以直接将"),_("code",[v._v("master")]),v._v("分支的代码拉取到"),_("code",[v._v("bugfix")]),v._v("分支上，进行"),_("code",[v._v("bug")]),v._v("修复，修复完之后，再将它合并到"),_("code",[v._v("master")]),v._v("分支上发布；")])]),v._v(" "),_("p",[v._v("合并方向为："),_("code",[v._v("develop")]),v._v(" -> "),_("code",[v._v("test")]),v._v(" -> "),_("code",[v._v("master")])])])]),v._v(" "),_("h3",{attrs:{id:"_2-svn方式（典型模型）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-svn方式（典型模型）"}},[v._v("#")]),v._v(" 2."),_("code",[v._v("SVN")]),v._v("方式（典型模型）")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/1.png",alt:"image-20200416135410464"}})]),v._v(" "),_("p",[v._v("首先有两位用户"),_("code",[v._v("A")]),v._v("与"),_("code",[v._v("B")]),v._v("，"),_("code",[v._v("A")]),v._v("的本地仓库"),_("strong",[v._v("不为空")]),v._v("，"),_("code",[v._v("B")]),v._v("的仓库"),_("strong",[v._v("为空")]),v._v("，还有一个远程仓库"),_("code",[v._v("C")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("A")]),v._v("首先将本地仓库的代码推送（"),_("code",[v._v("push")]),v._v("）到"),_("code",[v._v("C")]),v._v("中，此时"),_("code",[v._v("A")]),v._v("和"),_("code",[v._v("C")]),v._v("两个仓库的文件一致，如图中"),_("code",[v._v("1")]),v._v("所示；")]),v._v(" "),_("li",[v._v("随后"),_("code",[v._v("B")]),v._v("将"),_("code",[v._v("C")]),v._v("的代码拉取（"),_("code",[v._v("pull")]),v._v("）下来，如图中"),_("code",[v._v("2")]),v._v("所示，此时"),_("code",[v._v("A")]),v._v("，"),_("code",[v._v("B")]),v._v("，"),_("code",[v._v("C")]),v._v("三个仓库中的文件一致；随后"),_("code",[v._v("A")]),v._v("，"),_("code",[v._v("B")]),v._v("继续在本地进行开发，并向各自的本地仓库进行了数次提交；")]),v._v(" "),_("li",[v._v("此时，"),_("code",[v._v("A")]),v._v("先向"),_("code",[v._v("C")]),v._v("推送修改过后的本地仓库文件，由于这是远程仓库"),_("code",[v._v("C")]),v._v("的首次修改，"),_("code",[v._v("C")]),v._v("中的文件"),_("code",[v._v("A")]),v._v("中都有，所以可以直接推送，不用先执行"),_("code",[v._v("git pull")]),v._v("，如图中"),_("code",[v._v("3")]),v._v("所示；")]),v._v(" "),_("li",[v._v("随后，在"),_("code",[v._v("B")]),v._v("将修改过的本地仓库文件推送到"),_("code",[v._v("C")]),v._v("的过程中会出现错误。原因在于：此时的"),_("code",[v._v("C")]),v._v("中有"),_("code",[v._v("A")]),v._v("做出的修改，不能让"),_("code",[v._v("B")]),v._v("进行覆盖，此时"),_("code",[v._v("B")]),v._v("要想成功推送，应该先将"),_("code",[v._v("C")]),v._v("中的文件拉取（"),_("code",[v._v("pull")]),v._v("）到本地；如图中"),_("code",[v._v("4")]),v._v("所示，拉取时有两种情况：\n"),_("ul",[_("li",[_("strong",[v._v("成功")]),v._v("：说明"),_("code",[v._v("A")]),v._v("与"),_("code",[v._v("B")]),v._v("修改的不是同一个文件，采用"),_("code",[v._v("Fast-forward")]),v._v("方式自动合并；")]),v._v(" "),_("li",[_("strong",[v._v("失败")]),v._v("：说明"),_("code",[v._v("A")]),v._v("与"),_("code",[v._v("B")]),v._v("修改了同一个文件，需要手动解决冲突并合并；")])])]),v._v(" "),_("li",[_("code",[v._v("B")]),v._v("成功将"),_("code",[v._v("C")]),v._v("中的文件拉取到本地合并后，就能将"),_("code",[v._v("B")]),v._v("对本地仓库所做的修改推送（"),_("code",[v._v("push")]),v._v("）到远程仓库"),_("code",[v._v("C")]),v._v("了，如图中的"),_("code",[v._v("5")]),v._v("所示；")])]),v._v(" "),_("p",[v._v("在整个过程中，可以发现远程仓库"),_("code",[v._v("C")]),v._v("仅仅是起到"),_("strong",[v._v("代码第三方托管")]),v._v("的作用；")]),v._v(" "),_("h3",{attrs:{id:"_3-模拟多人协作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-模拟多人协作"}},[v._v("#")]),v._v(" 3.模拟多人协作")]),v._v(" "),_("p",[v._v("为了模拟多用户协作，可以使用"),_("code",[v._v("--local")]),v._v("来设置每个仓库的用户信息：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git config --local user.name '张三'\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("code",[v._v("--local")]),v._v("是一个配置作用域的参数，其他的还有：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("--global")]),v._v("：作用域为每个计算机用户，优先度第二，实际上常用这个参数进行配置；")]),v._v(" "),_("li",[_("code",[v._v("--system")]),v._v("：作用域为整个系统，优先级最低；")])]),v._v(" "),_("p",[v._v("可以使用："),_("code",[v._v("git clone")]),v._v("将远程仓库的代码下载到本地某文件夹中，下面使用的是"),_("code",[v._v("SSH")]),v._v("的方式：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/2.png",alt:"image-20200328170839067"}})]),v._v(" "),_("p",[v._v("还可以通过在链接后面加上一个字符串，重新命名下载到本地的远程仓库文件的名字：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git clone git@gitee.com:ahuntsun/MY.git mygit2\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/3.png",alt:"image-20200328171302207"}})]),v._v(" "),_("h3",{attrs:{id:"_4-协作的本质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-协作的本质"}},[v._v("#")]),v._v(" 4.协作的本质")]),v._v(" "),_("p",[v._v("远程仓库通常有多个分支，而在本地仓库进行一次推送时"),_("strong",[v._v("并不是将本地仓库的所有分支都推送到远程仓库")]),v._v("，而是选择本地仓库中的一个分支，将其推送到远程仓库的其中一个分支上：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/4.png",alt:"image-20200411182057807"}})]),v._v(" "),_("p",[v._v("比如本地的"),_("code",[v._v("master")]),v._v("分支，如上图所示，可以选择远程仓库的"),_("code",[v._v("master、dev、test")]),v._v("其中一条分支进行推送。假如想要推送到远程仓库的"),_("code",[v._v("master")]),v._v("分支，如果一开始两个分支没有任何联系，自然要：")]),v._v(" "),_("ul",[_("li",[v._v("①先建立本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的关联（至于如何建立关联，下一节将会详细讲解）；")]),v._v(" "),_("li",[v._v("②通过本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的合并，使两条分支的内容第一次达到同步；")]),v._v(" "),_("li",[v._v("③在本地"),_("code",[v._v("master")]),v._v("分支上进行修改，然后将修改推送到对应的远程"),_("code",[v._v("master")]),v._v("分支上。此时，两分支的内容第二次达到同步；")])]),v._v(" "),_("h2",{attrs:{id:"二、git-pull"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、git-pull"}},[v._v("#")]),v._v(" 二、"),_("code",[v._v("git pull")])]),v._v(" "),_("p",[v._v("在实际开发中，在推送代码前，往往都要先执行一次"),_("code",[v._v("git pull")]),v._v("将远程仓库的代码拉取到本地并进行合并；从前面的学习中我们知道："),_("code",[v._v("git pull = git fetch + git merge")]),v._v("：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git fetch")]),v._v("：表示将远程仓库的所有文件拉取到本地版本库；")]),v._v(" "),_("li",[_("code",[v._v("git merge")]),v._v("：将远程仓库中的文件与本地仓库中的文件进行合并；")])]),v._v(" "),_("p",[v._v("但是，在执行"),_("code",[v._v("git pull")]),v._v("命令时，由于本地仓库与远程仓库历史提交记录的不同，往往会出现各种各样的合并错误；在分析这些错误之前，首先搭建测试环境：")]),v._v(" "),_("p",[v._v("分别创建两个本地仓库"),_("code",[v._v("mygit")]),v._v("和"),_("code",[v._v("mygit2")]),v._v("，并且这两个本地仓库与同一个远程仓库建立联系，如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/5.png",alt:"image-20200416141016230"}})]),v._v(" "),_("h3",{attrs:{id:"_1-不发生合并冲突"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-不发生合并冲突"}},[v._v("#")]),v._v(" 1.不发生合并冲突")]),v._v(" "),_("p",[v._v("在本地仓库"),_("code",[v._v("mygit2")]),v._v("中使用"),_("code",[v._v("--local")]),v._v("参数配置新的用户"),_("code",[v._v("lisi")]),v._v("模拟多人协作，随后通过"),_("code",[v._v("lisi")]),v._v("给远程仓库推送一个新的文件。回到"),_("code",[v._v("mygit")]),v._v("后执行"),_("code",[v._v("git remote show origin")]),v._v("指令，会显示如下信息：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/6.png",alt:"image-20200328172158711"}})]),v._v(" "),_("p",[v._v("表示，本地仓库"),_("code",[v._v("mygit")]),v._v("相对于远程仓库而言已经过时了，即远程仓库中有"),_("code",[v._v("mygit2")]),v._v("推送的，"),_("code",[v._v("mygit")]),v._v("中没有的文件；此时可以在"),_("code",[v._v("mygit")]),v._v("中执行"),_("code",[v._v("git pull")]),v._v("，将远程仓库中的文件拉取到本地仓库"),_("code",[v._v("mygit")]),v._v("中进行合并：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/7.png",alt:"image-20200328172428901"}})]),v._v(" "),_("p",[v._v("上图中的第二个箭头表示，在"),_("code",[v._v("pull")]),v._v("操作的过程中"),_("code",[v._v("mygit")]),v._v("中的"),_("code",[v._v("master")]),v._v("分支与远程仓库中的"),_("code",[v._v("master")]),v._v("分支采用"),_("code",[v._v("Fast-forward")]),v._v("方式进行了合并，并达到了同步。")]),v._v(" "),_("blockquote",[_("p",[v._v("这里的本地远程分支"),_("code",[v._v("origin/master")]),v._v("代表着远程"),_("code",[v._v("master")]),v._v("分支，关于本地远程分支将会在下一节进行详细讲解；")])]),v._v(" "),_("p",[v._v("关于"),_("code",[v._v("Fast-forward")]),v._v("方式之前已经介绍过了，在上述合并过程中"),_("code",[v._v("origin/master")]),v._v("分支直接指向了最新提交，中间没有其他分支，也就不会出现合并冲突，这种合并方式称为"),_("strong",[v._v("快进")]),v._v("。如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/8.png",alt:"image-20200407142030574"}})]),v._v(" "),_("p",[v._v("这是一个理想的情况，很多情况下执行"),_("code",[v._v("git pull")]),v._v("操作时，都会出现合并冲突，需要解决冲突，再进行手动合并；")]),v._v(" "),_("h3",{attrs:{id:"_2-git-pull同源合并冲突"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-pull同源合并冲突"}},[v._v("#")]),v._v(" 2."),_("code",[v._v("git pull")]),v._v("同源合并冲突")]),v._v(" "),_("p",[v._v("所谓同源，指的是本地仓库与远程仓库中的分支从根提交节点开始，有共同的提交历史；简而言之，有共同的根提交节点的两个分支称为同源；如下图所示，两仓库中的"),_("code",[v._v("master")]),v._v("分支有共同的根提交节点"),_("code",[v._v("A")]),v._v("，所以这两个仓库的"),_("code",[v._v("master")]),v._v("分支是同源的：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/9.png",alt:"image-20200410115057180"}})]),v._v(" "),_("p",[v._v("这种情况下"),_("code",[v._v("git pull")]),v._v("出现的错误为自动合并失败，比如都同时修改了"),_("code",[v._v("develop.txt")]),v._v("文件，错误信息如下：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("Auto-merging develop.txt\nCONFLICT (content): Merge conflict in develop.txt\nAutomatic merge failed; fix conflicts and then commit the result.\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("h4",{attrs:{id:"错误原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#错误原因"}},[v._v("#")]),v._v(" 错误原因")]),v._v(" "),_("p",[v._v("具体情况模拟如下：")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("mygit")]),v._v("中修改"),_("code",[v._v("hello.txt")]),v._v("文件的第二行为"),_("code",[v._v("1")]),v._v("，在"),_("code",[v._v("mygit2")]),v._v("中修改"),_("code",[v._v("hello.txt")]),v._v("文件的第二行为"),_("code",[v._v("2")]),v._v("，即对同一文件的同一处进行了修改。")]),v._v(" "),_("p",[v._v("此时取决于谁先进行"),_("code",[v._v("git push")]),v._v("操作，若"),_("code",[v._v("mygit")]),v._v("先将修改后的"),_("code",[v._v("hello.txt")]),v._v("推送到远程仓库。那么当"),_("code",[v._v("mygit2")]),v._v("再进行推送时会出现如下错误：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/10.png",alt:"image-20200328173921075"}})]),v._v(" "),_("p",[v._v("提示信息表明：远程仓库中有一些文件是你没有的，无法更新远程仓库；这是因为，"),_("code",[v._v("mygit")]),v._v("先把修改的"),_("code",[v._v("hello.txt")]),v._v("推送到了远程仓库；此时"),_("code",[v._v("mygit2")]),v._v("想要成功进行推送，需要先将远程仓库中经过"),_("code",[v._v("mygit")]),v._v("修改的"),_("code",[v._v("hello.txt")]),v._v("与本地仓库的"),_("code",[v._v("hello.txt")]),v._v("进行合并。")]),v._v(" "),_("h4",{attrs:{id:"解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[v._v("#")]),v._v(" 解决方案")]),v._v(" "),_("p",[v._v("可以使用"),_("code",[v._v("git pull")]),v._v("来解决这一问题，那么我们首先执行一次"),_("code",[v._v("git pull")]),v._v("操作：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/11.png",alt:"image-20200328174312298"}})]),v._v(" "),_("p",[v._v("可以发现"),_("code",[v._v("git pull")]),v._v("指令在进行自动合并时发生了错误，这是因为"),_("code",[v._v("mygit")]),v._v("和"),_("code",[v._v("mygit2")]),v._v("都对"),_("code",[v._v("hello.txt")]),v._v("的同一个地方做了修改，"),_("code",[v._v("git")]),v._v("不知道以谁为准，所以会导致自动合并失败，此时需要通过"),_("strong",[v._v("解决冲突三步曲")]),v._v("来手动合并：")]),v._v(" "),_("p",[_("strong",[v._v("第一步：")])]),v._v(" "),_("p",[v._v("打开冲突文件"),_("code",[v._v("hello.txt")]),v._v("可以看到典型的冲突文件显示方式：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/12.png",alt:"image-20200328180835818"}})]),v._v(" "),_("p",[v._v("箭头"),_("code",[v._v("<<<")]),v._v("与"),_("code",[v._v(">>>")]),v._v("范围内表示的是发生冲突的位置。"),_("code",[v._v("2")]),v._v("是"),_("code",[v._v("mygit2")]),v._v("对"),_("code",[v._v("hello.txt")]),v._v("的修改，"),_("code",[v._v("1")]),v._v("为远程仓库中"),_("code",[v._v("hello.txt")]),v._v("的内容；")]),v._v(" "),_("p",[v._v("经过协商后，留下第"),_("code",[v._v("3")]),v._v("行，其余删除：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/13.png",alt:"image-20200328181200775"}})]),v._v(" "),_("p",[v._v("由此手动合并了对文件"),_("code",[v._v("hello.txt")]),v._v("的修改，解决了冲突。")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("vim")]),v._v("指令补充：通过"),_("code",[v._v("esc")]),v._v("进入命令行模式后，通过上下方向键选中某一行，再双击"),_("code",[v._v("d")]),v._v("就可以删除光标所在的行；删除多行时，在命令行中输入"),_("code",[v._v(":2,4d")]),v._v("表示删除第"),_("code",[v._v("2~4")]),v._v("行；")])]),v._v(" "),_("p",[_("strong",[v._v("第二步：")])]),v._v(" "),_("p",[v._v("再次查看状态：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/14.png",alt:"image-20200328181841135"}})]),v._v(" "),_("p",[v._v("发现"),_("code",[v._v("hello.txt")]),v._v("处于工作区，"),_("code",[v._v("git")]),v._v("提示我们要通过"),_("code",[v._v("git add")]),v._v("指令将解决冲突时对"),_("code",[v._v("hello.txt")]),v._v("所做的修改纳入暂存区。")]),v._v(" "),_("p",[_("strong",[v._v("第三步：")])]),v._v(" "),_("p",[v._v("执行完"),_("code",[v._v("git add")]),v._v("之后，再进行提交"),_("code",[v._v("git commit")]),v._v(":\n"),_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/15.png",alt:"image-20200328182755564"}})]),v._v(" "),_("p",[v._v("由此，解决了冲突；")]),v._v(" "),_("p",[v._v("从上图中箭头所指内容可以看出：本地仓库"),_("code",[v._v("mygit2")]),v._v("中的"),_("code",[v._v("master")]),v._v("分支已经比本地远程分支"),_("code",[v._v("origin/master")]),v._v("分支多了两次提交。由于"),_("code",[v._v("origin/master")]),v._v("分支代表着远程仓库的"),_("code",[v._v("master")]),v._v("分支，也就是说本地仓库"),_("code",[v._v("mygit2")]),v._v("中的"),_("code",[v._v("master")]),v._v("分支比远程仓库的"),_("code",[v._v("master")]),v._v("分支领先了两次提交；过程如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/16.png",alt:"image-20200407152200173"}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("首先"),_("code",[v._v("mygit")]),v._v("在提交"),_("code",[v._v("1st")]),v._v("的基础上进行了第"),_("code",[v._v("2")]),v._v("次提交（修改"),_("code",[v._v("hello.txt")]),v._v("），之后"),_("code",[v._v("mygit")]),v._v("将本地仓库推送（"),_("code",[v._v("push")]),v._v("）到远程仓库；")])]),v._v(" "),_("li",[_("p",[v._v("此时"),_("code",[v._v("mygit2")]),v._v("同样在本地仓库中进行了一次提交"),_("code",[v._v("3rd")]),v._v("（修改"),_("code",[v._v("hello.txt")]),v._v("），此时推送到远程仓库会出现错误，需要进行"),_("code",[v._v("pull")]),v._v("操作；")])]),v._v(" "),_("li",[_("p",[v._v("当"),_("code",[v._v("mygit2")]),v._v("执行"),_("code",[v._v("pull")]),v._v("操作，将远程仓库拉取到本地后，由于发生冲突，所以暂时不会将"),_("code",[v._v("origin/master")]),v._v("的指向更新到最新提交；随后，在"),_("code",[v._v("mygit2")]),v._v("中手动解除冲突并进行合并后，"),_("code",[v._v("mygit2")]),v._v("的状态为：")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/17.png",alt:"image-20200407151529950"}})]),v._v(" "),_("p",[v._v("可以看到解决冲突，手动合并后，"),_("code",[v._v("mygit2")]),v._v("已经往前更新了两次提交，而此时"),_("code",[v._v("origin/master")]),v._v("仍然指向提交"),_("code",[v._v("1st")]),v._v("。")]),v._v(" "),_("p",[v._v("所以解决冲突后，"),_("code",[v._v("mygit2")]),v._v("中的"),_("code",[v._v("master")]),v._v("分支会比"),_("code",[v._v("origin/master")]),v._v("分支领先两次提交；再次执行"),_("code",[v._v("git push")]),v._v("后，"),_("code",[v._v("origin/master")]),v._v("分支就会指向最新的提交点"),_("code",[v._v("4th")]),v._v("了，此时三个仓库的状态为：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/18.png",alt:"image-20200407152431572"}})]),v._v(" "),_("p",[v._v("在实际开发当中，难免会出现多个人修改了"),_("strong",[v._v("同一个文件")]),v._v("的情况，在进行手动合并的过程中一定要与对方协商应该如何合并，而不是"),_("strong",[v._v("直接覆盖")]),v._v("；")]),v._v(" "),_("h3",{attrs:{id:"_3-git-pull不同源合并冲突"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-pull不同源合并冲突"}},[v._v("#")]),v._v(" 3."),_("code",[v._v("git pull")]),v._v("不同源合并冲突")]),v._v(" "),_("p",[v._v("所谓不同源，指的是两个仓库中的分支，根提交节点不同，如下图所示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/19.png",alt:"image-20200410123001021"}})]),v._v(" "),_("p",[v._v("假如本地"),_("code",[v._v("master")]),v._v("分支要将内容推送到远程"),_("code",[v._v("master")]),v._v("分支。由于本地"),_("code",[v._v("master")]),v._v("分支根提交节点为"),_("code",[v._v("1st")]),v._v("，远程"),_("code",[v._v("master")]),v._v("分支根提交节点为"),_("code",[v._v("A")]),v._v("，两个分支没有公共的父提交节点。所以，无法进行合并。这种情况下执行"),_("code",[v._v("git pull")]),v._v("会出现以下错误：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("There is no tracking information for the current branch.\nPlease specify which branch you want to merge with.\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("blockquote",[_("p",[v._v("特殊情况：假如本地仓库"),_("code",[v._v("mygit")]),v._v("是空的，也会发生不同源合并冲突。")])]),v._v(" "),_("h4",{attrs:{id:"错误原因-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#错误原因-2"}},[v._v("#")]),v._v(" 错误原因")]),v._v(" "),_("p",[v._v("简单来说"),_("code",[v._v("git pull")]),v._v("失败的原因有两点：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("第一点："),_("strong",[v._v("两仓库中的"),_("code",[v._v("master")]),v._v("分支由于根提交节点不同，没有共同的提交历史。所以，会导致采用")]),v._v("三方合并原则")]),v._v("合并分支时，找不到公共提交节点而无法合并：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/20.png",alt:"image-20200411001626440"}})]),v._v(" "),_("ul",[_("li",[v._v("**第二点：**本地"),_("code",[v._v("master")]),v._v("分支没有与远程仓库中的任一分支建立关联。因此，本地"),_("code",[v._v("master")]),v._v("分支不知道将文件推送给谁，这样自然会失败；")])]),v._v(" "),_("h4",{attrs:{id:"解决方案-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[v._v("#")]),v._v(" 解决方案")]),v._v(" "),_("p",[v._v("知道了"),_("code",[v._v("git pull")]),v._v("失败的两点原因，解决方案就很清晰了，同样分为三步：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("**第一步：**执行一次"),_("code",[v._v("git pull")]),v._v("将远程仓库的分支拉取到本地：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/21.png",alt:"image-20200411211023424"}})]),v._v(" "),_("p",[v._v("这里的本地远程分支"),_("code",[v._v("origin/master")]),v._v("和"),_("code",[v._v("origin/dev")]),v._v("是远程分支"),_("code",[v._v("master")]),v._v("和"),_("code",[v._v("dev")]),v._v("的本地形式，代表着它们，内容上与它们一致。虽然"),_("code",[v._v("git pull")]),v._v("失败了，但是我们获得了远程分支的信息，方便进行第二步的合并操作；")])]),v._v(" "),_("li",[_("p",[v._v("**第二步：**创建两分支的公共提交历史。此时两分支没有公共父节点，不能采用"),_("code",[v._v("merge")]),v._v("方式合并。应该采用"),_("code",[v._v("rebase")]),v._v("变基的方式，将本地"),_("code",[v._v("master")]),v._v("分支追加到远程"),_("code",[v._v("master")]),v._v("分支后面。由于本地远程分支"),_("code",[v._v("origin/master")]),v._v("与远程"),_("code",[v._v("master")]),v._v("分支有这相同的提交历史，所以可以这样写：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git rebase origin/master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("此时，本地"),_("code",[v._v("master")]),v._v("分支的提交历史变为："),_("code",[v._v("A <- B <- 1st <- 2nd")]),v._v("。这样本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支就有了公共的提交历史，即转换为了同源分支：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/22.png",alt:"image-20200411222958428"}})]),v._v(" "),_("blockquote",[_("p",[v._v("**简写：**可以将第一步和第二步通过参数的形式合并为一步操作：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git pull --rebase origin master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/23.png",alt:"image-20200411222302708"}})])])]),v._v(" "),_("li",[_("p",[v._v("**第三步：**建立本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的关联。常用的有以下三种方式：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("方式一：")])])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("//格式\ngit branch --set-upstream-to=origin/<branch> master\n//用在这里具体为\ngit branch --set-upstream-to=origin/master master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br")])]),_("p",[v._v("该指令作用为，将本地"),_("code",[v._v("master")]),v._v("分支相关联的远程分支设置为远程"),_("code",[v._v("master")]),v._v("分支，执行该指令后，通过"),_("code",[v._v("git branch -vv")]),v._v("查看分支的关联情况，可见已顺利建立关联：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/24.png",alt:"image-20200411213556267"}})]),v._v(" "),_("p",[v._v("之后就可以进行推送了：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/25.png",alt:"image-20200411213920987"}})]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("方式二：")])])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git push -u origin master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("该指令作用为：建立本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的联系，并进行推送：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/26.png",alt:"image-20200411215931617"}})]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("方式三：")])])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git push --set-upstream origin master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("作用为：建立本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的联系，并进行推送：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/27.png",alt:"image-20200411221552193"}})])])]),v._v(" "),_("h4",{attrs:{id:"实战演示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实战演示"}},[v._v("#")]),v._v(" 实战演示")]),v._v(" "),_("ul",[_("li",[v._v("创建两个仓库"),_("code",[v._v("mygitA")]),v._v("和"),_("code",[v._v("mygitB")]),v._v("，首先在"),_("code",[v._v("mygitA")]),v._v("中的"),_("code",[v._v("master")]),v._v("分支上添加"),_("code",[v._v("A.txt")]),v._v("，提交信息记为"),_("code",[v._v("A")]),v._v("：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/28.png",alt:"image-20200410125735375"}})]),v._v(" "),_("ul",[_("li",[v._v("在"),_("code",[v._v("mygitA")]),v._v("中创建并切换到"),_("code",[v._v("dev")]),v._v("分支，添加文件"),_("code",[v._v("C.txt")]),v._v("，并进行提交，提交信息记为"),_("code",[v._v("C")]),v._v("：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/29.png",alt:"image-20200410125946568"}})]),v._v(" "),_("ul",[_("li",[v._v("切换回"),_("code",[v._v("mygitA")]),v._v("的"),_("code",[v._v("master")]),v._v("分支，添加文件"),_("code",[v._v("B.txt")]),v._v("，并进行提交，提交信息为"),_("code",[v._v("B")]),v._v("：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/30.png",alt:"image-20200410130141667"}})]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("此时`mygitA`中两分支的状态如下：\n")])])]),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/31.png",alt:"image-20200416153057140"}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("随后，建立本地仓库"),_("code",[v._v("mygitA")]),v._v("与远程仓库的关联：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/32.png",alt:"image-20200410130748140"}})])]),v._v(" "),_("li",[_("p",[v._v("设置并推送"),_("code",[v._v("mygitA")]),v._v("的"),_("code",[v._v("master")]),v._v("分支和"),_("code",[v._v("dev")]),v._v("分支，到远程仓库的"),_("code",[v._v("master")]),v._v("分支和"),_("code",[v._v("dev")]),v._v("分支上：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/33.png",alt:"image-20200410232136808"}})])]),v._v(" "),_("li",[_("p",[v._v("回到"),_("code",[v._v("mygitB")]),v._v("，添加文件"),_("code",[v._v("1st.txt")]),v._v("和"),_("code",[v._v("2st.txt")]),v._v("并进行两次提交"),_("code",[v._v("1st")]),v._v("和"),_("code",[v._v("2nd")]),v._v("：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/34.png",alt:"image-20200410232755681"}})])])]),v._v(" "),_("p",[v._v("此时三个仓库的状态为：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/35.png",alt:"image-20200410233107154"}})]),v._v(" "),_("p",[v._v("若想将"),_("code",[v._v("mygitB")]),v._v("的"),_("code",[v._v("master")]),v._v("分支推送到远程仓库的"),_("code",[v._v("master")]),v._v("分支上，按照上文的讨论，采用简写形式，可通过以下两步进行实现：")]),v._v(" "),_("ul",[_("li",[v._v("**第一步：**通过"),_("code",[v._v("rebase")]),v._v("合并本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支：")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git pull --rebase origin master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/36.png",alt:"image-20200411231327155"}})]),v._v(" "),_("p",[v._v("执行完上述指令后，"),_("code",[v._v("mygitB")]),v._v("的状态为：")]),v._v(" "),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/37.png",alt:"image-20200411000848565"}})]),v._v(" "),_("ul",[_("li",[v._v("**第二步：**建立本地"),_("code",[v._v("master")]),v._v("分支与远程"),_("code",[v._v("master")]),v._v("分支的联系，并进行推送：")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("git push -u origin master\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[_("img",{attrs:{src:"http://ahuntsun.gitee.io/blogimagebed/img/git/lesson6/38.png",alt:"image-20200411231531483"}})]),v._v(" "),_("p",[v._v("如图所示，与远程分支建立了联系，并完成了推送；由此解决了由于不同源造成的"),_("code",[v._v("pull")]),v._v("操作冲突。")])])}),[],!1,null,null,null);e.default=i.exports}}]);