module.exports = {
  title: 'AhuntSun',//博客标题
  description: '🌕今日事,今日毕🌕',//副标题
  // dest: './dist',//配置执行build命令后输出的目录，默认目录为.vuepress
  // port: '7777',
  // base:'/ahunsun.github.io/',
  head: require('./config/head'),
  // 使用插件
  plugins: require('./config/plugins'),
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    //导航栏
    nav: require("./config/nav.js"),
    //侧边栏
    sidebar: require("./config/sidebar.js"),
    //其他参数配置
    sidebarDepth: 2,
    lastUpdated: '最后更新于',
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