module.exports = {
  //!对多模块的管控,模块之间彼此不影响
  // git
  '/navitem/git/': require('../navitem/git/sidebar'),
  // 数据结构与算法
  '/navitem/algorithm/theory/': require('../navitem/algorithm/theory/sidebar'),
  // 优秀文章
  '/navitem/article/browser/': require('../navitem/article/browser/sidebar'),//!第二个模块下面的侧边栏
  '/navitem/article/es6/': require('../navitem/article/es6/sidebar'),//!第三个模块下面的侧边栏
  '/navitem/article/toolFunc/': require('../navitem/article/toolFunc/sidebar'),
  // 随笔整合
  '/navitem/essay/': require('../navitem/essay/sidebar'),//!第一个模块下面的侧边栏
  // 实战demo
  '/navitem/demo/': require('../navitem/demo/sidebar'),
  // 实用网站
  '/navitem/website/1/': require('../navitem/website/1/sidebar'),
  '/navitem/website/2/': require('../navitem/website/2/sidebar'),
  '/navitem/website/3/': require('../navitem/website/3/sidebar'),
  '/navitem/website/4/': require('../navitem/website/4/sidebar'),
  '/navitem/website/5/': require('../navitem/website/5/sidebar'),
  '/navitem/website/6/': require('../navitem/website/6/sidebar'),
  '/navitem/website/7/': require('../navitem/website/7/sidebar'),
}