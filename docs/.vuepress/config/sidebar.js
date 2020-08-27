module.exports = {
  //!对多模块的管控,模块之间彼此不影响
  // git
  '/navitem/git/': require('../../navitem/git/sidebar'),
  // 数据结构与算法
  '/navitem/algorithm/theory/': require('../../navitem/algorithm/theory/sidebar'),
  '/navitem/algorithm/example/2offer/': require('../../navitem/algorithm/example/2offer/sidebar'),
  '/navitem/algorithm/example/leecode/': require('../../navitem/algorithm/example/leecode/sidebar'),
  // 优秀文章
  '/navitem/article/notes/browser/': require('../../navitem/article/notes/browser/sidebar'),//!第二个模块下面的侧边栏
  '/navitem/article/notes/es6/': require('../../navitem/article/notes/es6/sidebar'),//!第三个模块下面的侧边栏
  '/navitem/article/notes/toolfunc/': require('../../navitem/article/notes/toolfunc/sidebar'),
  // 随笔整合
  '/navitem/essay/': require('../../navitem/essay/sidebar'),//!第一个模块下面的侧边栏
  // 实战demo
  '/navitem/demo/': require('../../navitem/demo/sidebar'),
  // 实用网站
  '/navitem/website/1/': require('../../navitem/website/1/sidebar'),
  '/navitem/website/2/': require('../../navitem/website/2/sidebar'),
  '/navitem/website/3/': require('../../navitem/website/3/sidebar'),
  '/navitem/website/4/': require('../../navitem/website/4/sidebar'),
  '/navitem/website/5/': require('../../navitem/website/5/sidebar'),
  '/navitem/website/6/': require('../../navitem/website/6/sidebar'),
  '/navitem/website/7/': require('../../navitem/website/7/sidebar'),
  '/navitem/website/8/': require('../../navitem/website/8/sidebar'),
  '/navitem/website/9/': require('../../navitem/website/9/sidebar'),
}