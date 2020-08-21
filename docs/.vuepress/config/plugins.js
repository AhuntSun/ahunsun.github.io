// 不要忘了安装 moment
const moment = require('moment');
      moment.locale("zh-CN")

module.exports = {
  '@vuepress/last-updated':{
    transformer: (timestamp) => moment(timestamp).format("LLLL")
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'AhuntSun',
    repo: 'ahunsun.github.io',
    clientId: '8b9e4e8c568cb0f2eaa2',
    clientSecret: '3409c6255e9ce12f35063d631430d576b117ba32',
  },
  '@vuepress/back-to-top':true,
  '@vuepress/medium-zoom': {
    selector: 'img',
  },
}