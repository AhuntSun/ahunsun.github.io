module.exports =[
  {
    text: "懵逼指南",link: '/guide/'//!这里的连接会自动显示guide下的README.md文件
  },
  {
    text: "面试宝典",//!去掉link表示不让点（有子导航标签的时候一般不让点）
    items: [
      {text: '初级开发篇', link: '/baodian/zero/'},
      {text: '中高进阶篇', link: '/baodian/high/'},
    ]
  },
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
  }
]