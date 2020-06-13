module.exports = {
  title: 'AhuntSun',//博客标题
  description: 'Learn and Share',//副标题
  // dest: './dist',//配置执行build命令后输出的目录，默认目录为.vuepress
  // port: '7777',
  // base:'/ahunsun.github.io/',
  head: [
    ['link', {rel: 'icon', href: 'https://blog-static.cnblogs.com/files/AhuntSun-blog/sun1.ico'}],
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: {
    '@vuepress/back-to-top': true
  },
  // theme: '@vuepress/blog',
  themeConfig: {
    //导航栏
    nav: require("./nav.js"),
    //侧边栏
    sidebar: require("./sidebar.js"),
    //其他参数配置
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