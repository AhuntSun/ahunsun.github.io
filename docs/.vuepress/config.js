module.exports = {
  title: '你好 VuePress',
  description: '钊哥带你上王者',
  dest: './dist',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: './logo.jpg'}],
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
sidebarDepth: 2,
lastUpdated: 'Last Updated',
searchMaxSuggestoins: 10,
serviceWorker: {
  updatePopup:{
    message: "有新内容",
    buttonText: "更新",
  }
},
editLinks: true,
editLinksText: "在Github 上编辑此页！"
  }
}