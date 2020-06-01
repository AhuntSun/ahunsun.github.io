module.exports = {
  //!对多模块的管控,模块之间彼此不影响
  '/git/': require('../git/sidebar'),//!第一个模块下面的侧边栏
  '/article/browser/': require('../article/browser/sidebar'),//!第二个模块下面的侧边栏
  '/article/es6/': require('../article/es6/sidebar'),//!第三个模块下面的侧边栏
}