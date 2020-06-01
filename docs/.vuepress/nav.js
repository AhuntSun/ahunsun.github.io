module.exports =[
  //深度为1的导航栏
  {
    text: "Git应用详解",link: '/git/'//!这里的连接会自动显示git下的README.md文件
  },
  //深度为2的导航栏
  {
    text: "数据结构与算法",//!去掉link表示不让点（有子导航标签的时候一般不让点）
    items: [
      {text: '理论篇', link: '/git/'},//外链的形式有两种
      {
        text: '实战篇', 
        items: [
          {text: "剑指offer", link: '/git/'},
          {text: "leecode精选", link: '/git/'},
        ]
      },
    ]
  },
  {
    text: "优秀文章",
    items: [
      {text: '浏览器工作原理', link:'/article/browser/'},
      {text: 'ES6教程', link: '/article/es6/'},
    ]
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
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      }
    ]
  },
  {
    text: '实战demo',
    items: [
      {
        text: 'JavaScript',
        items: [
          {text: 'todoList', link: 'http://ahuntsun.gitee.io/todolis'}
        ] 
      },
      {
        text: 'CSS与HTML',
        items: [
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      }
    ]
  },
  //深度为3的导航栏
  {
    text: '实用网站',
    items: [
      {
        text: '图片编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'},
          {text: '图片制作', link: 'https://app.diagrams.net/'},
          {text: '图片制作', link: 'https://app.diagrams.net/'},
          {text: '弹性盒属性演示', link: 'http://flexbox.help/'},
          {text: 'CSS属性触发的四个阶段', link: 'https://csstriggers.com/'},
        ] 
      },
      {
        text: '论坛网站',
        items: [
          {text: 'csdn', link: 'https://www.csdn.net/'},
          {text: '博客园', link: 'https://www.cnblogs.com/AhuntSun-blog/'},
          {text: '掘金', link: 'https://juejin.im/'},
          {text: 'Stack Overflow', link: 'https://stackoverflow.com/'},
          {text: 'segmentfault', link: 'https://segmentfault.com/'},
          {text: 'Hacker News', link: 'https://news.ycombinator.com/'},
          {text: 'Hacker News(知乎话题)', link: 'https://www.zhihu.com/topic/19578400/hot'},
        ]
      },
      {
        text: '在线学习',
        items: [
          {text: 'Udacity', link: 'https://cn.udacity.com/'},
          {text: 'Coursera', link: 'https://www.coursera.org/'},
          {text: 'bilibili', link: 'https://www.bilibili.com/'},
        ]
      },
    ]
  },
]