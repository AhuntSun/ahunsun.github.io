module.exports =[
  //深度为1的导航栏
  {
    text: "Git应用详解",link: '/navitem/git/'//!这里的连接会自动显示git下的README.md文件
  },
  //深度为2的导航栏
  {
    text: "数据结构与算法",//!去掉link表示不让点（有子导航标签的时候一般不让点）
    items: [
      {
        text: '理论篇', 
        items: [
          {text: "JavaScript版基础知识", link: '/navitem/algorithm/theory/'},
        ]
      },
      {
        text: '实战篇', 
        items: [
          {text: "剑指offer", link: '/navitem/algorithm/example/2offer/'},
          {text: "leecode精选", link: '/navitem/algorithm/example/leecode/'},
        ]
      },
    ]
  },
  {
    text: "好文转载",
    items: [
      {text: '浏览器工作原理', link:'/navitem/article/browser/'},
      {text: 'ES6教程', link: '/navitem/article/es6/'},
      {text: '工具函数', link: '/navitem/article/toolFunc/'},
    ]
  },
  {
    text: "随笔整合",link: '/navitem/essay/'
  },
  {
    text: '实战Demo',link: '/navitem/demo/'
  },
  {
    text: "eSun-UI",link: '/navitem/esun/'
  },
  {
    text: "编程技巧",link: '/navitem/tech/'
  },
  //深度为3的导航栏
  {
    text: '工具箱',
    items: [
      {
        text: '在线编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'}
        ] 
      },
      {
        text: '在线服务',
        items: [
          {text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/'},
          {text: '贝塞尔曲线', link: 'https://cubic-bezier.com/'},
          {text: '加速度曲线速查', link: 'https://easings.net/en'}
        ]
      }
    ]
  },
  {
    text: '实用网站',
    items: [
      {text: '图片编辑', link: '/navitem/website/1/'},
      {text: '样式设计', link: '/navitem/website/2/'},
      {text: '论坛网站', link: '/navitem/website/3/'},
      {text: '在线学习', link: '/navitem/website/4/'},
      {text: '创新社区', link: '/navitem/website/5/'},
      {text: '优质图库', link: '/navitem/website/6/'},
      {text: 'UI设计', link: '/navitem/website/7/'},
    ]
  },
  {
    text: '联系我',
    items: [
      {text: '博客园', link: 'https://www.cnblogs.com/AhuntSun-blog/'},
      {text: 'CSDN', link: 'https://blog.csdn.net/qq_43425487'},
      {text: '掘金', link: 'https://juejin.im/user/5dea331b518825123e7ae8d4'},
      {text: 'Github', link: 'https://github.com/AhuntSun'},
      {text: 'Gitee', link: 'https://gitee.com/ahuntsun'},
    ]
  },
]