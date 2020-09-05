function init(){
  let $a = document.querySelector('.action-button')
  //先创建文档碎片
  let iFragment = document.createDocumentFragment(); 
  for(let i = 0; i < 4; i++)
  { 
    //创建span标签
    let $span = document.createElement("span"); 
    //先附加在文档碎片中
    iFragment.appendChild($span);  
  }
  //将文档碎片添加到a标签中 
  $a.appendChild(iFragment);
}
setTimeout(() => {
  init()
}, 2000);