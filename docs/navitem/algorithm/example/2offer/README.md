## 0.测试用例

常见的测试用例选择：

　　1.功能测试（正常旋转数组，中间有或者无重复数字）

　　2.边界值测试（升序数组，1个数字的数组）

　　3.特殊输入测试（null，空数组）

## 1.二维数组中的查找

> 知识点：`查找`、`数组`

题目描述：在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照 从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

### 方法一：暴力枚举

````js
function find(target, array)
{
    //todo 方法1 暴力枚举
     for(let arr of array){
        for(let j of arr){
            if(j === target){
                return true;
            }
        }
    }
     return false;
}
    //todo方法2 二分查找：

    //todo方法3 
    return array.some(arr=>arr.some(e=>e===target));
}
````

### 方法二：二分查找

把每一个数组当成有序数组，进行二分查找：

```js
function find(target, array){
     for(let arr of array){
        let start = 0,
            end = arr.length - 1;
        while(start <= end){
            let mid = Math.floor((start+end)/2);
            if(target < arr[mid]){
                end = mid - 1;
            }else if(target > arr[mid]){
                start = mid + 1;
            }else{
                return true;
            }
        }
    }
     return false;
}
```

### 方法三：使用Array.some()

使用JS独有的Array数组的API some方法，骚操作骚操作：

> `some`：一旦符合要求就停止遍历

```js
function find (target, array){
    return array.some(arr => arr.some(e => e === target))
}
```

## 2.替换空格

> 知识点：`字符串`

**题目描述**

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

### 方法一：正则表达式

没什么好说的，只要正则用得6，很多问题都能解决，但不是普适的方法。

```js
function replaceSpace(str)
{
    return str.replace(/ /g,'%20');
}
```

### 方法二：字符串的查找

利用字符串具有的数组特性，进行遍历查找：

```js
function replaceSpace(str){
    let output='';
    for(let i=0,len = str.length;i<len;i++){
        if(str[i] == ' '){
            output+='%20';
        }else{
            output+=str[i];
        }
    }
    return output;
}
```

### 方法三：String.split()与String.join()

先拆分再重组：

```js
function replaceSpace(str)
{
   let res = str.split(' ')
   res = res.join('%20')
   return res
}
```

## 3.从尾到头打印链表

> 知识点：`链表`

**题目描述**

输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

### 方法一：Array.reverse()

没什么好说的😂

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let res = []
    while(head){
        res.push(head.val)
        head = head.next
    }
    res = res.reverse()
    return res
}
```

### 方法二：栈思维

个数组负责取值入栈，另一个数组负责保存依次出栈的元素：

````js
function printListFromTailToHead(head)
{
    let array = [],
        arr=[];
    while(head){
        array.push(head.val);
        head = head.next;
    }
    while(array.length){
        arr.push(array.pop());
    }
    return arr;
}
````

### 方法三：Array.unshift()

使用unshift的方式,最快速；unshift():在数组的最前面添加元素

```js
function printListFromTailToHead(head)
{
    let array = [];
    while(head){
        array.unshift(head.val);
        head = head.next;
    }
    return array;
  }
```

## 4.重建二叉树

> 知识点：`树`、`dfs`、`数组`

**题目描述**

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列`{1,2,4,7,3,5,6,8}`和中序遍历序列`{4,7,2,1,5,3,8,6}`，则重建二叉树并返回。

思路：假设有二叉树如下：

```js
    1
   / \
  2   3
 / \
4   5
```

* 它的前序遍历的顺序是：`1 2 4 5 3`。中序遍历的顺序是：`4 2 5 1 3`

  > 前序遍历顺序：根节点->左子节点->右子节点；
  >
  > 中序遍历顺序：左子节点->根节点->右子节点；

* 因为前序遍历的第一个元素就是当前二叉树的根节点。那么，这个值就可以将中序遍历分成 `2` 个部分。在以上面的例子，中序遍历就被分成了 `4 2 5` 和 `3` 两个部分。`4 2 5`就是左子树，`3`就是右子树。
* 因此可以通过`pre[0]`获取树的根节点，再通过此节点将中序遍历得出的数组分割成左右子树；

* 在左右子树中，递归重复上述操作即可。

### 方法一：

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (!pre.length || !vin.length) {
      return null;
  }
  let index = vin.indexOf(pre[0]); //在中序遍历数组中获取根节点索引

/* array.slice(start, end)；提取index为start~end的数组元素(包括start，不包括end);
   slice(start)表示的index：start~length-1
*/
  // 将中序遍历数组分成左右子树(分割后的左右子树同为中序遍历顺序)
  let left = vin.slice(0, index);   
  let right = vin.slice(index + 1);
  // 创建根节点
  let node = new TreeNode(pre[0])
  // 重建二叉树
  // pre.slice(1, index + 1)作用：创造与vin等长的前序遍历数组
  node.left = reConstructBinaryTree(pre.slice(1, index + 1), left)
  node.right = reConstructBinaryTree(pre.slice(index + 1), right)
  return node;
}

```

> 在牛客网上编程一定要注意：**不要使用中文的标点符号**

## 5.用两个栈实现队列

> 知识点：`栈`

**题目描述**

用两个栈来实现一个队列，完成队列的`Push`和`Pop`操作。 队列中的元素为`int`类型。

**解题思路**

队列的特点为：先进先出，后进后出；

### 方法一：

```js
let stack1 = [],//两个数组模拟栈的行为
    stack2 = [];
function push(node)
{
    //栈是后入先出（LIFO），队列是先入先出（FIFO）
    //模拟队列的push操作，直接往栈中推入即可
    //但是要考虑辅助栈中还存在值的情况，需要先将辅助栈中的值推回存储栈中
    while(stack2.length){
        stack1.push(stack2.pop());
    }
    stack1.push(node);
}
function pop()
{
    //模拟队列的pop操作则要考虑栈的后入先出特性，需要先将存储栈中的数组，推入辅助栈，然后辅助栈弹出
    while(stack1.length){
     	//相当于将栈顶栈底顺序翻转   
        stack2.push(stack1.pop());
    }
    return stack2.pop();
}
```

### 方法二

简便方法使用Array.shift()实现出列操作：

```js
let stack1 = []
function push(node)
{
    stack1.push(node);
}
function pop()
{
    return stack1.shift();
}
```

## 6.旋转数组的最小数字

**题目描述**

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
例如数组`{3,4,5,1,2}`为`{1,2,3,4,5}`的一个旋转，该数组的最小值为1。
`NOTE`：给出的所有元素都大于`0`，若数组大小为`0`，请返回`0`。

### 方法一：Math.min()

关键在于通过展开运算符（`...`）将数组展开：

```js
function minNumberInRotateArray(rotateArray)
{
    if(!rotateArray.length){
        return 0
    }
    return Math.min(...rotateArray)
    
}
```

### 方法二：暴力枚举

不考虑旋转和递增的特性，直接暴力枚举。复杂度O(n)

```js
function findMin(arr) {
  let min = arr[0];
  for(let i = 1, len = arr.length; i < len; ++i) {
      if(arr[i] < min) {
          min = arr[i];
      }
  }
  return min;
}
```

### 方法三：二分法

根据旋转数组由有序数组旋转而成，存在局部有序，所以可以使用二分法。

> 一般当数组局部有序时，为了复用这部分有序的元素，可以采用二分法；

**注意：**注意，这里是有序数组的旋转，所以最小值的前面的所有值都比最小值后面的值大，所以只需比较mid与right：

> 这里体现了一个解题思想：既然我们假设了index===left的元素为最小值，那就应当赋予它该值所具有的属性，即左侧的元素总大于右侧，并在此基础上继续推测；

但这里需要注意边界问题。

如果 numbers[mid]>numbers[right]，left=mid+1；而numbers[mid]<numbers[right]，right=mid。这里为什么 left 是+1，而 right 不用。因为前一句mid已经大于right，肯定不是最小值，可以跳过它，但是后一句mid小于right，它可能是最小值，不能跳过它。

难点在，当 numbers[mid]==numbers[right]，不能简单的移动，在这里可以移动right-1，因为就算这里的right是最小值，-1之后mid也是最小值还在这个范围内。

````js
function minNumberInRotateArray(rotateArray)
{
    let len = rotateArray.length;
    if(!len || !rotateArray) return 0;
    
    let left = 0;
    let right = len - 1;
    while(left < right){
         let mid = left + Math.floor((right - left)/2);
         if(rotateArray[mid] > rotateArray[right]){
             left = mid + 1;
         }else if(rotateArray[mid] === rotateArray[right]){
             right = right - 1;
         }else{
             right = mid;
         }
    }
    return rotateArray[left];
}
````

**收获**

* 对于一些涉及数组的方法（如二分法等），可以用left和right，mid等来定义下标，但是，输出时如果要求输出数据值array[left]，不要错写成下标left了。
* 思维一定要考虑全面，特别是接触到一个新的概念时，要注意到一些特例，如递增排序数组的本身是自己的旋转、相同数字数组等。

## 7.斐波那契数列

> 知识点：`数组`

**题目描述**

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39

> 该数列为：0,1,1,2,3,5,8,13,21,34...)；规律为：f(n) = f(n - 1) + f(n - 2)。最初始情况是f(0) = 0和f(1) = 1。

### 方法一：递归

```js
function fib(n){
  if(n < 0) throw new Error('输入的数字不能小于0');
  if(n === 1 || n === 2){
      return 1;
  } else if(n === 0){
    return 0
  }
  else{
      return fib(n - 1) + fib(n - 2);
  }
}
```

### 方法二：ES6尾递归

由于使用了ES6的函数默认值，所以调用时只需要输出一个参数n即可，十分方便；前提条件：开启严格模式：

```js
function fib(n, a1 = 1, a2 = 2){
  'use strict';
  if(n <= 1){return a2}
  return fib(n - 1, a2, a1 + a2)
}
```

### 方法三：动态规划

动态规划是用已知项去更好的求解未知项，将原问题拆解成若干子问题，同时保存子问题的答案，使得每个子问题只求解一次，最终获得原问题的答案。

```js
function Fibonacci(n) {
const arr = [0,1]
for(let i=2; i <= n; i++) {
    arr[i] = arr[i-1] + arr[i-2]
}
  return arr[n]
}
```

### 方法四：while循环

```js
function Fibonacci(n) {
let f = 0,g=1;
    while(n--){
        f=g+f
        g=f-g //保存原来的f值
    }
    return f
}
```

## 8.跳台阶

> 知识点：`递归`

**题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

**解题思路**

本题的前提是只有一次1阶或者2阶的跳法：

 1.假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f（n-1）；

 2.假定第一次跳的是2阶，那么剩下的是n-2个台阶，跳法是f（n-2）；

 3.由假设得出总跳法为：f（n）=f（n-1）+f（n-2）；

 4.当台阶只有一阶时，f（1）=1，只有两阶时时，f（2）=2；

 5.到这大家估计都看出来了，最终得出的是一个斐波那契数列：

  *n=1, f(n)=1*

  *n=2, f(n)=2*

  *n>2,且为整数, f(n)=f(n-1)+f(n-2)*

因此：可以稍稍改良一下就变成了斐波那契数列：

```js
function jumpFloor(number)
{
    let arr = [0,1,2]
    for(let i = 3; i<=number; i++){
        arr[i] = arr[i-1] +arr[i-2]
    }
    return arr[number]
}
```

## 9.变态跳台阶

> 知识点：`递归`

**题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

没什么好说的，就是找规律：

```js
function jumpFloorII(number)
{
    if(number === 1) return 1
    return jumpFloorII(number - 1) * 2
}
```

## 10.矩形覆盖

> 知识点：`递归`

**题目描述**

我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

比如n=3时，2*3的矩形块有3种覆盖方法：

![image-20200824142401298](C:\Users\ahuntsun\AppData\Roaming\Typora\typora-user-images\image-20200824142401298.png)

找规律，会发现，当`n>=3`后，符合斐波那契数列：

```js
function rectCover(number)
{
    let arr = [0,1,2]
    for(let i = 3; i<=number;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
        return arr[number]
}
```

## 11.二进制中1的个数

> 知识点：`进制转化`、`补码反码源码`、`数学`

**题目描述**

输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

### 方法一：逻辑右移

**思路：**

* 用1和n进行位运算，结果为1则n的二进制最右边一位为1，否则为0；

* 将n二进制形式右移1位，继续与1进行位运算；

* 由于负数右移时最高位补1，因此不能采用算术右移，而使用不考虑符号位的逻辑右移；

* 左移n位等于原来的数值乘以2的n次方；右移n位等于原来的数值除以2的n次方逻辑右移不改变符号位，直接在最左边补0 。

```js
function NumberOf1(n)
{
  let count = 0;
  while (n != 0) {
    if ((n & 1) === 1) {
      count++;
    }
  n = n >>> 1;
}
  return count;
}
```

### 方法二

**思路**：

* 如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响；
* 例如：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011；
* 我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000
* 因此，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就将进行多少次这样的操作。

```js
function NumberOf1(n)
{
   let count = 0;
   while(n){//直至整数变成0
     count++;
     n = n&(n-1);//在计算机中，数值一律用补码存储。而这里用的是位运算，所以无所谓正数负数。因为位运算之前，需要把整数转换成二进制数。
   }
   return count;
}
```

## 12.数值的整数次方

> 知识点：`进制转化`、`补码反码源码`、`数学`

**题目描述**

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。保证base和exponent不同时为0；

### 方法一：Math.pow()

没什么好说的：

```js
function Power(base, exponent)
{
    // write code here
    // return base**exponent;
    return Math.pow(base, exponent);
}
```

> 积累幂运算符`a ** b`，相当于`Math.pow(a, b)`

### 方法二：快速幂算法

**思路**

* 考察指数的正负以及底数是否为零的几种情形；
* 将指数转换为二进制形式，比如13=1101；	
* 例如求解10^13次方，可转换为(10^0001)(10^0100)(10^1000);
* 通过&1（按位与）和>>1（右移1）运算逐位读取1101，为1时将该位代表的乘数累乘到最终结果。

```js
function Power(base, exponent){
    let res = 1
    let cur = base
    let n = 0
    if (exponent > 0) {
        n = exponent;
    } else if (exponent < 0) {
        if (base === 0)
            throw new Error("分母不能为0");
        n = -exponent;
    } else {//exponent === 0
        return 1;
    }
    while (n !== 0) {
        if ((n & 1) == 1) {//即遇到指数不为0时要相乘，如上面的例子中只有(10^0001)(10^0100)(10^1000)需要进行相乘
            res *= cur;
        }
        cur *= cur; // 这里的翻倍是指从让cur从10^0001变为10^0010 -> 10^0100;依次让二进制表示的指数左移
        n >>= 1; // 右移一位:n = n >> 1
    }
    return exponent >= 0 ? res : (1 / res);
}
```

比较麻烦；

## 13.调整数组顺序使奇数位于偶数前面

> 知识点：`数组`

**题目描述**

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

**思路**

* 新建两个数组，分别用来存放奇数和偶数；

* 将偶数的数组连接到奇数数组后面。

```js
function reOrderArray(array)
{
    let odd = [];
    let even = [];
    for(let item of array){
        if((item % 2) === 0){
            even.push(item);
        }else{
            odd.push(item)
        }
    }
    return odd.concat(even);
}
```

## 14.链表中倒数第k个节点

> 知识点：`链表`、`双指针`

**题目描述**

输入一个链表，输出该链表中倒数第k个结点。

### 方法一：指针法

**实现思路**

* 两个指针，先让第一个指针pre和第二个指针last都指向头结点，然后再让第一个指针走(k-1)步，到达第k个节点；

* 然后两个指针同时往后移动，当第一个结点到达末尾的时候，第二个结点所在位置就是倒数第k个节点了。(秒)比如123456，k=4，第一次循环pre指向了4，此时再让last开始和pre一起走，当pre指向6时，last就指向了3，正式倒数第四个元素
* 本题要考察周全，因此要判断空值和负值以及k值不能超过链表的长度。
* 本题链表不含头结点。

```js
function FindKthToTail(head, k)
{
    // write code here
    if (!head || k < 1)
        return null;
    let fast = head;
    let slow = head;
    while(k-- > 0 && fast != null) {
        fast = fast.next;
    }
    // k 大于链表长度
    if (k >= 0) return null;
    while(fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
```

### 方法二：Array.unshift()

采用栈结构，通过unshift()：在数组最前面加上一个元素，实现原数组的倒序，再取出index=k-1的元素即可

```js
function FindKthToTail(head, k)
{
    var res = [];
    while(head) {
        res.unshift(head);
        head = head.next
    }
    return res[k-1];
}
```

### 方法三

这里定义了两个指针`node`和`revseNode`，遍历链表，`node`移动，当`node`移动到倒数k的位置是，`revseNode`才开始移动，当链表遍历完成后，`revseNode`移动的节点数就为K；

```js
function FindKthToTail(head, k)
{
    // write code here
    let revseNode = head;
    let node = head;
    // 循环外定义变量防止重复定义
    let i = 0;
    for(;node !== null;i++){
        if(i >= k){
            revseNode = revseNode.next;
        }
        node = node.next;
    }
    return  i < k ? null : revseNode;
}
```

如图所示：

![image-20200824173258451](C:\Users\ahuntsun\AppData\Roaming\Typora\typora-user-images\image-20200824173258451.png)

当node走到B处，revseNode再开始走，走完全程后，reveseNode位于的A点即为倒数K处；

## 15.反转链表

> 知识点：`链表`

**题目描述**

输入一个链表，反转链表后，输出新链表的表头。

### 方法一：

**思路**

* pHead为当前结点，如果当前结点为空的话，直接返回；
* pHead为当前结点，pre为当前结点的前一个结点，next为当前结点的下一个结点；
* 需要完成的目标是将pre-->pHead-->next1-->next2-->··· ···-->end反转为pre<--pHead<--next1<--next2<--··· ···<--end；
* pre结点可以用来反转方向，为了避免反转之后链表断开，用next结点暂时保存next1结点；
* 先用next保存pHead的下一个结点信息，保证单链表不会断裂；
* 保存之后，让pHead从指向next1变成指向pre；
* 到此，完成了pre到pHead的反转，即pre<--pHead;
* 将pre，pHead，next依次向后移动一个结点。
* 循环操作，直到pHead为null，此时pre就是链表的最后一个结点，链表反转完毕，pre为反转后链表的第一个结点。
* 输出pre就是反转之后所得的链表。

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  if (!pHead) {
      return false;
  }
  var pre = null;
  var next = null;
  while (pHead != null) {
      next = pHead.next;//暂时使用next保存pHead指向的下一个节点
      pHead.next = pre; //让pHead指向前一个结点达到反转
      pre = pHead;//让pre往右移动一个节点
      pHead = next;//让pHead指向原来的下一个节点
  }
  return pre;
}
```

### 方法二：

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let node = pHead;
    let arr = [];
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    //此时的arr装着正序链表元素
 	//将中间变量node初始化，再次循环将链表反转   
    node = pHead;
    while(node){
        node.val = arr.pop();
        node = node.next;
    }
    return pHead;
}
```

通过一个数组中转，将链表反转；重点在于不要改变pHead的指向，而是通过变量node来遍历链表；

## 16.合并两个排序的链表

> 知识点：`分治`

**题目描述**

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

**思路**

* 如果pHead1和pHead2中有一个为空，则result是另一个；

* 如果pHead1的头结点值小于pHead2，那么result的头结点为pHead1的头结点，其next为pHead1.next和pHead2 比较的结果。同理对pHead2也一样。(因为要保持result为递增序列)

* 因此本题可采用递归的方法。

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
  if (!pHead1) {//当其中一个链表为空时，直接返回另一个链表
      return pHead2;
  } else if (!pHead2) {
      return pHead1;
  }
  let result = null//创建合并后的链表
  if (pHead1.val < pHead2.val) {
      result = pHead1;
      result.next = Merge(pHead1.next, pHead2);
  } else {
      result = pHead2;
      result.next = Merge(pHead1, pHead2.next);
  }
  return result;
}
```

### 方法二：

```js
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    let res = new ListNode(0);
    let realres = res;
    while (pHead1 && pHead2) {
        if (pHead1.val > pHead2.val) {
            res.next = pHead2;
            res = res.next;
            pHead2 = pHead2.next;
        } else {
            res.next = pHead1;
            res = res.next;
            pHead1 = pHead1.next;
        }
    }
    if (pHead1) res.next = pHead1;
    if (pHead2) res.next = pHead2;
    return realres.next;
}
```

## 17.树的子结构

> 知识点：`二叉树`、`树`

**题目描述**

输入两棵二叉树A（root1），B（root2），判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

### 方法一：

**思路**

* 有关二叉树的算法问题，一般都可以通过递归来解决。那么写成一个正确的递归程序，首先一定要分析正确递归结束的条件。
* 如果根节点相同则递归调用isSubtree（），如果根节点不相同，则判断root1的左子树和root2是否相同，再判断右子树和root2是否相同;
* 注意null的条件，HasSubTree中，如果两棵树都不为空才进行判断，isSubtree中，如果root2为空，则说明第二棵树遍历完了，即匹配成功;
* root1为空有两种情况：（1）如果root1为空&&root2不为空说明不匹配(tree1是tree2的子树)，（2）如果root1为空，root2为空，说明匹配。

```js
/* 
  //*默认提供的代码
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//todo该函数意在判断两树中是否所有的子树节点都相同
function isSubtree(root1, root2) {
  if (!root2) return true//说明tree2为空子树，所以为tree1的子树
  if (!root1) return false;
  if (root1.val == root2.val) {
      return isSubtree(root1.left, root2.left) &&
          isSubtree(root1.right, root2.right);
  } else {
      return false;   
  }
}

function HasSubtree(pRoot1, pRoot2)
{
 if (!pRoot1|| !pRoot2) {//!pRoot2 相当于pRoot2 == null
     return false;
 }
  return isSubtree(pRoot1, pRoot2) ||//首先判断以pRoot2为根的树是否为pRoot1为根的树的子树
      HasSubtree(pRoot1.left, pRoot2) ||//再判断以pRoot2为根的树是否为pRoot1左子节点为根的树的子树
      HasSubtree(pRoot1.right, pRoot2);//再判断以pRoot2为根的树是否为pRoot1右子节点为根的树的子树
}
```

## 18.二叉树的镜像

> 知识点：`二叉树`、`树`

**题目描述**

操作给定的二叉树，将其变换为源二叉树的镜像。

![image-20200824220431521](C:\Users\ahuntsun\AppData\Roaming\Typora\typora-user-images\image-20200824220431521.png)

### 方法一：

**思路**

* 有关二叉树的算法问题，一般都可以通过递归来解决。那么写一个正确的递归程序，首先一定要分析正确递归结束的条件。

* 先前序遍历这棵树的每个结点，如果遍历到的结点有子结点，就交换它的两个子节点；

* 当交换完所有的非叶子结点的左右子结点之后，就得到了树的镜像

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(!root) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}
```

## 19.顺时针打印矩阵

> 知识点：`数组`

**题目描述**

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵：

``` js
1  2  3  4
5  6  7  8
9  10 11 12
13 14 15 16 
```

则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

### 方法一：

**思路**

* 选坐标为(0,0),(1,1)...的点记为(start,start)，作为开始坐标,下一圈开始坐标为(start+1,start+1)；

* 判断是否进入下一圈(即是否打印完成)的条件是rows>start\*2 && cols>start\*2；

* 打印一圈的左上角坐标为(start,start)，右下角的坐标为(cols-start-1,rows-start-1)

* 根据一圈左上角和右下角坐标判断“从左到右”，“从上到下”，“从右到左”，“从下到上”需要打印的点。

```js
function printMatrix(matrix) {
  if (!matrix || matrix.length == 0) {
      return;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let start = 0;
  let result = [];

  while (cols > start * 2 && rows > start * 2) {
      let endX = cols - 1 - start;
      let endY = rows - 1 - start;
      //从左到右打印一行
      for (let i = start; i <= endX; i++) {
          result.push(matrix[start][i]);
      }
      //从上到下打印一行
      if (start < endY) {
          for (let i = start + 1; i <= endY; i++) {
              result.push(matrix[i][endX]);
          }
      }
      //从右到左打印一行
      if (start < endX && start < endY) {
          for (let i = endX - 1; i >= start; i--) {
              result.push(matrix[endY][i]);
          }
      }
      //从下到上打印一行
      if (start < endX && start < endY - 1) {
          for (let i = endY - 1; i >= start + 1; i--) {
              result.push(matrix[i][start]);
          }
      }
      start++;
  }
  return result
}
```

### 方法二：

```js
function printMatrix(matrix)
{
    // write code here
    if(!matrix) return [];
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let arr = [];
    while(top <= bottom && left <= right){
        // 打印从左到右一行
        for(let m = left; m <= right; m++){
            arr.push(matrix[top][m])
        }
        top++;
        // 打印从上到下一行
        for(let m = top; m <= bottom; m++){
            arr.push(matrix[m][right])
        }
        right--;
        if(left > right || top > bottom) break;
        // 打印从右到左一行
        for(let m = right; m >= left; m--){
            arr.push(matrix[bottom][m])
        }
        bottom--;
        // 打印从下到上一行
        for(let m = bottom; m >= top; m--){
            arr.push(matrix[m][left])
        }
        left++;
    }
    return arr;
}
```

## 20.包含min函数的栈

**题目描述**

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

较优解：

```js
var stack=[]
function push(node)
{
    stack.push(node)
    // write code here
}
function pop()
{
   return stack.length ? stack.pop() : null
    // write code here
}
function top()
{
     return stack.length ? stack[stack.length-1] : null
    // write code here
}
function min()
{
    // 也可以使用扩展运算符Math.min(...stack)
    return stack.length ? Math.min.apply(null, stack) : null
    // write code here
}
```

一般都需要对输入进行有效性检验，只是一般我们忽略了而已；

## 21.栈的压入、弹出序列

**题目描述**

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

**解题思路**

假设入栈序列为A，出栈序列为B

 1.借用一个辅助的栈C，将A依次压入C，C的栈顶元素与B[0]相比，如果相同则从栈C弹出；

 2.如果不同则继续将A的元素压入栈C，直到A中所有的数字都压入栈C为止；

 3.检测辅助栈C中是否为空， 若空，则序列B是入栈序列A对应的一个出栈序列。否则，说明序列B不是栈A的出栈序列。

示例：

入栈：1，2，3，4，5

出栈：4，5，3，2，1

1） 1入辅助栈，此时1≠4；

2） 2入辅助栈，此时2≠4；

3） 3入辅助栈，此时3≠4；

4） 4入辅助栈，此时4＝4，辅助栈出栈，剩下 1，2，3；同时，弹出序列向后一位，为5；此时3≠5，继续压栈；

5） 5入辅助栈，此时5=5，辅助栈出栈，剩下1，2，3；同时，弹出序列向后一位，为3；

6） 此时3=3，辅助栈出栈，剩下1，2；同时弹出序列向后一位，为2；

7） 此时2=2，辅助栈出栈，剩下1；同时弹出序列向后一位，为1；

8） 此时1=1，辅助栈出栈，为空，所以该序列是压栈序列对应的一个弹出序列。

```js
function IsPopOrder(pushV, popV)
{
    if(!pushV.length || !popV.length){
        return;
    }
    let temp = [];
    let popIndex = 0;
    for(let i = 0; i < pushV.length ; i++){//将序列A压入栈C
        temp.unshift(pushV[i]);//unshift()在数组最前面添加元素
        while(temp.length && temp[0] === popV[popIndex]){//当栈C的元素个数不为0且栈C的栈顶元素等于序列B指针popIndex指向的当前元素时，才从栈C中弹出该元素，并使popIndex指针在序列B中向后移一位
            temp.shift();//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
            popIndex++;
        }
    }
    return (temp.length === 0);
}
```

**另一种写法**

```js
function IsPopOrder(pushV, popV)
{
    // write code here
 
    if(pushV.length == 0 || popV.length ==0 ||  popV.length != pushV.length) {
        return false;;
    }
    const stack =[];
    var j=0;
    for(var i=0;i<pushV.length;i+=1){
        stack.push(pushV[i]);
        while(stack.length !=0 && stack[stack.length-1] == popV[j]){
            stack.pop();
            j++;
        }
    }   
    if(stack.length !=0){
        return false;
    }else
        return true;
}
```

两种写法的区别在于使用的数组方法不一样，不过需要注意：要么使用push与pop，要么使用shift和unshift，不能混着用；

> 可以发现，很多题目一开始都是需要先验证输入的有效性的；

## 22.从上往下打印二叉树

**题目描述**

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

### 方法一：

**解题思路**

* 借助两个辅助队列，一个用来存放根节点代表的整棵树，一个用来存放每一个遍历过的结点值；
* 先将根节点加入到队列中，然后遍历队列中的元素，遍历过程中，访问该元素的左右节点，再将左右子节点加入到队列中来。

```js
function PrintFromTopToBottom(root) {
  let queue = [];
  queue.push(root);
  let res = [];

  if (!root) {
      return res;
  }
  while (queue.length) {
      let temp = queue.shift();//shift()删除数组最前面的元素
      res.push(temp.val);
      if (temp.left) {
          queue.push(temp.left);
      }
      if (temp.right) {
          queue.push(temp.right);
      }
  }
  return res;
}
```

## 23.二叉搜索树的后续遍历序列

**题目描述**

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。

> 树的前中后序遍历根据的是遍历根节点的顺序：
>
> * 先遍历根节点的为前序遍历；
> * 第二遍历根节点的为中序遍历；
> * 最后遍历根节点的为后序遍历；
>
> **注意：**无论哪种遍历方式，始终先遍历左子节点再遍历右子节点；

**解题思路：**

* 根据二叉搜索树的特点，序列的最后一个元素是根结点，其左子树全都比根结点小，右子树全都比根节点大。
* 将根结点前面的数组分为左右两个部分，左侧部分都比根节点小，右侧部分都比根节点大；
* 如果右侧部分有比根节点小的元素，那么就不是后序遍历，如此递归进行。

```js
function VerifySquenceOfBST(sequence) {
  if (!sequence.length) {
      return false;
  }
  return adjustSequence(sequence, 0, sequence.length - 1);
}

//判断函数
function adjustSequence(arr, start, end) {
  if (start >= end) {//此种情况为arr为空数组
      return true;
  }
  let i = end;
  while (i > start && arr[i - 1] > arr[end]) {
      --i;
  }//循环结束时arr[i - 1] < arr[end],题目说了两个数字不能
  for (let j = i - 1; j >= start; --j) {//接下来使用for循环查看arr[i - 1]前面的元素有没有比arr[end]大的有就说明不是后序遍历
      if (arr[j] > arr[end]) {
          return false;
      }
  }
  //上面函数执行了一次只是判断了根节点的情况；下面的是判断分出来的两个序列是否各为二叉搜索子树的后序遍历序列；其中(arr, start, i - 1)表示左子树；(arr, i, end - 1)表示右子树
  return adjustSequence(arr, start, i - 1) && (adjustSequence(arr, i, end - 1));
}

```

## 24.二叉树中和为某就一值的路径

**题目描述**

输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

**解题思路**

* 前序遍历二叉树，每次更新当前路径的和curSum；
* 判断当前结点是否是叶子结点，以及curtSum是否等于expectNumber。如果是，把当前路径保存在res结果中；
* 若不符合条件，则弹出此结点。

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  let res = [];
  if (!root) {
      return res;
  }
  dfsFind(root, expectNumber, [], 0, res);
  return res; 
}

function dfsFind(root, expectNumber, path, curSum, res) {
  curSum += root.val;
  path.push(root.val);

  if (curSum == expectNumber && !root.left && !root.right) {//路径和为输入值且当前为叶子节点
      res.push(path.slice(0)); //string.slice(start,end),slice(0)表示截取整个数组
  }
  if (root.left) {//左子树
      dfsFind(root.left, expectNumber, path, curSum, res);
  }

  if (root.right) {//右子树
      dfsFind(root.right, expectNumber, path, curSum, res);
  }
  path.pop();
}
```

## 25.复杂链表的复制

**题目描述**

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

**解题思路：**

 1.递归思想：把大问题转换为若干重复的小问题。

 2.将复杂链表分为头结点和剩余结点两部分，剩余部分采用递归方法。

```js
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
  if (!pHead) {
      return null;
  }
  // 复制头结点
  let node = new RandomListNode(pHead.label);
  node.random = pHead.random;
  // 递归其他节点
  node.next = Clone(pHead.next);
  return node;
}
```

## 26.二叉搜索树与双向链表

**题目描述**

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

**解题思路：**

 1.递归思想：把大问题转换为若干小问题；

 2.由于JavaScript中并没有链表或者Tree这样的原生数据结构，都是通过对象模拟的，因此最终要返回的是指向双向链表首结点的指针；

 3.将左子树构成双向链表，返回的是左子树的尾结点，将其连接到root的左边；

 4.将右子树构成双向链表，将其追加到root结点之后，并返回尾结点；

 5.向左遍历返回的链表至头结点处，即为所求双向链表的首结点。

```js
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
  if (!pRootOfTree) {
      return null;
  }
  var lastNode = null;
  lastNode = ConvertNode(pRootOfTree, lastNode);
  var head = lastNode;
  while (head && head.left) {
      head = head.left;
  }
  return head;
}

function ConvertNode(node, lastNode) {
  if (!node) {
      return;
  }
  if (node.left) {
      lastNode = ConvertNode(node.left, lastNode);
  }
  node.left = lastNode;
  if (lastNode) {
      lastNode.right = node;
  }
  lastNode = node;
  if (node.right) {
      lastNode = ConvertNode(node.right, lastNode);
  }
  return lastNode;
}
```

## 27.字符串的排序

**题目描述**

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串：abc,acb,bac,bca,cab和cba。

**解题思路：**

 1.递归思想：把大问题转换为若干小问题；

 2.n个元素的全排列 = （n-1） 个元素全排列 + 一个元素作为前缀。

 3.递归的出口：只有一个元素的全排列，此时排序完成，输出数组。

 4.遍历字符串，将每个字符放在第一个元素作为前缀，并将其余元素继续全排列。

 5.新建一个isRepeat空对象，用来判断字符是否重复，若重复则跳过排序。

```js
function Permutation(str)
{
    // write code here
        var temp = []// 用于存放所有全排列的数组
        //如果当前的字符串长度维1或者长度为0  那么直接返回该字符串即可
        if(!str.length) return []
        if(str.length === 1){
            temp.push(str)
        }else{
            // 反之  遍历该字符串
            var map = {}
            for(var i = 0; i < str.length; i++){
                //取出当前字符
               var s = str[i]
               //将剩余的字符拼接为一个新的字符串
               if(!map[s]){
               var newStr = str.slice(0, i) + str.slice( i + 1, str.length)
               // 对新的字符串进行全排列--返回结果
               var l = Permutation(newStr)
               // 遍历返回的全排列  在每个全排列的字符串前面加上取出的字符s
               for(var j = 0; j < l.length; j++){
                   var t = s + l[j]
                   temp.push(t)//加入到结果数组中
               }
                map[s] = true
              }
            }
        }
    return  temp
}
```

## 28.数组中出现次数超过一半的数字

**题目描述**

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

*解题思路：*

 1.新建一个Map对象保存数组中数字出现的次数；

 2.遍历数组，如果该数字出现过，则Map中以该数字为key的value加1；

 3.若该数字未出现过，则Map中以该数字为key的value设为1；

 4.遍历Map对象，返回value大于数组长度一半的key，即为所求数字。

> 在这里使用`Map`比使用对象要好；

```js
function MoreThanHalfNum_Solution(numbers)
{
  let map = new Map();
  let length = numbers.length;
  //array.forEach(function(currentValue, index, arr), thisValue);其中只有当前元素currentValue为必填项
  numbers.forEach(function(d) {
    if (map[d]) {//在对象中obj[key] = value可以获取对象；即在obj[d]中，d表示key，obj[d]表示d对应的value
      map[d]++;
    } else {
      map[d] = 1;
    }
  })
  for (let n in map) {//for in:获得的i为index；for of:获得的i为value
    if (map[n] > Math.floor(length / 2)) {
      return n;
    }
  }
  return 0;
}
```

## 29.最小的k个数

**题目描述**

输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。

### 方法一：

使用JavaScript的Array对象的sort()方法进行自小到大排序，然后输出最小的k个数。

```js
function GetLeastNumbers_Solution(input, k)
{
    if(input.length < k) return false;
    input.sort((a,b) => a-b);
    return input.slice(0,k);//slice取得的数组索引包含0，不包含k
}
```

### 方法二：

同理，先对数组进行排序，再返回；

```js
function GetLeastNumbers_Solution(input, k)
{
    // write code here
    var arr = input;
    var temp;
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(k <= 0 || k > arr.length){
        return [];
    } else{
        return arr.slice(0, k);
    }
}
```

## 30.连续子数组的最大和

 **题目描述**

HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？

例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)

**解题思路：**

 1.遍历数组，遇到负的和，则放弃之前的结果，重新积累，这期间保留最大值；

 2.用sum记录最终返回的最大和，用preSum记录累计值；

 3.对于数组中的一个数array[i]，若其左边的累加和preSum非负,那么在preSum中加上array[i]；

 4.判断此时的preSum是否大于sum，若大于此时的sum，则用sum记录下来。

```js
function FindGreatestSumOfSubArray(array) {
  if (array.length < 0) return 0;
  let sum = array[0]
  let preSum = array[0]; //注意初始值 不能设为0 防止只有负数        
  for (let i = 1; i < array.length; i++) {
      preSum = (preSum < 0) ? array[i] : preSum + array[i];
      sum = (preSum > sum) ? preSum : sum;
  }
  return sum;
}
```

## *31.整数中1出现的次数

**题目描述**

求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

**解题思路**：

 1.设n=abcde，自右至左，从1开始标号。

 2.如果第i位上的数字为0，则第i位可能出现1的次数由其高位决定，若没有高位，则视为0，此时第i位可能出现1的次数为：其高位数\*10^(i-1)，例如若c为0，则次数为ab\*10^2;

 3.如果第i位上的数字为1，则第i位上可能出现1的次数受其高位和低位影响，若没有，则视为0，此时第i位可能出现1的次数：其高位数\*10^(i-1)+（低位数+1），例如若c为1，则次数为ab\*10^2+（de+1）;

 4.如果第i位上的数字大于1，则第i位上可能出现1的次数受其高位影响，若没有，则视为0，此时第i位可能出现1的次数：（其高位数+1）\*10^(i-1)，例如若c大于1，则次数为（ab+1）\*10^2;

```js
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let result=0;
    for(let i = 1;i <= n;i *= 10){
        result += Math.floor(n / i / 10) * i;
        let left=n % (i * 10);
        if(left > 2 * i - 1){
            result += i;
        }else if(left >= i){
            result += left % i + 1;
        }
    }
    return result;
}
```

## 32.把数组排成最小的数

**题目描述**

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

解题思路：

 1.本题关键点是制定排序规则，设计比较器；

 2.排序规则如下：

  若ab > ba 则 a > b，

  若ab < ba 则 a < b，

  若ab = ba 则 a = b；

 3.例如：比较3和31时，'331' > '313'，所以返回结果是'3' > '31'。

 4.根据指定排序规则对数组进行排序，然后从小到大拼接即为所求结果。

> sort()函数传入一个函数制定排序的规则：
>
> * 该比较函数要有两个参数，比如a和b：若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
> * 若 a 等于 b，则返回 0。
> * 若 a 大于 b，则返回一个大于 0 的值。

```js
function PrintMinNumber(numbers) {
 numbers.sort((a, b) => {
   let aStr = a.toString()
   let bStr = b.toString()
   return aStr + bStr > bStr+aStrs//如果为true则表示ab > ba，则返回的排序结果为b > a
 });
  let res = "";
  for (let n in numbers) {
      res += numbers[n];//字符串拼接
  }
  return res;
}
```

## 33.丑数

**题目描述**

把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

**解题思路：**

 1.按顺序将丑数保存在数组中，然后求下一个丑数；

 2.下一个丑数是由数组中某个丑数A \* 2，B \* 3，C \* 5中的最小值得来的。

 3.按照题目规定，第一个丑数是1，存入数组中；

 4.第二个丑数为1\*2，1\*3，1\*5三个中的最小值；

 5.第三个丑数为2\*2，1\*3，1\*5三个中的最小值，依次类推，求出第N个数组。

```js
function GetUglyNumber_Solution(index) {
  if (index === 0) return 0;
  let uglyNum = [1];
  let factor2 = 0,
      factor3 = 0,
      factor5 = 0;
  for (let i = 1; i < index; i++) {//注意了这里的index相当于length
      uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
      if (uglyNum[i] === uglyNum[factor2] * 2) factor2++;
      if (uglyNum[i] === uglyNum[factor3] * 3) factor3++;
      if (uglyNum[i] === uglyNum[factor5] * 5) factor5++;
  }
  return uglyNum[index - 1];
}
```

## 34.第一个只出现一次的字符串

**题目描述**

在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）

解题思路：

 1.新建一个对象map，其中key用来存放字符，value用来存放该字符出现的次数；

 2.第一次循环，将所有字符和对应出现的次数存放在map中，时间复杂度为0(n)；

 3.第二次循环找到value为1的对象，并返回其索引。

```js
function FirstNotRepeatingChar(str) {
  if (str.length == 0)
      return -1;

  let map = new Map();//使用Map类创建对象，速度更快
  for (let item of str) {//可使用for的改进版写法;for..of:取得的是值；for...in：取得的是索引
      if (!map[item]) {//charX表示字符作为map的key，map[charX]表示字符charX出现的次数，作为map的value
          map[item] = 1;
      } else {
          map[item]++;
      }
  }
  for (let n in str) {//根据需要的是索引还是值选择使用for..of还是for..in
      if (map[str[n]] == 1)
          return n;
  }
}
```

## 35.数组中的逆数对

**题目描述**

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

![image-20200826105809743](C:\Users\ahuntsun\AppData\Roaming\Typora\typora-user-images\image-20200826105809743.png)

**解题思路：**

采用归并排序；

```js
var count=0;//存储逆序对数的变量
function InversePairs(data)
{
    // write code here
    //暴力方法行不通，用归并排序来做方法来做
    if(data.length<2){
        return false;
    }
    mergeSort(data,0,data.length-1);
    return count;
}
  
function mergeSort(array,start,end){
    if(start >= end || array.length < 1){
        return false;
    }
    var mid = Math.floor((start + end) / 2);
    mergeSort(array,start,mid);
    mergeSort(array,mid+1,end);
      
    merge(array,start,mid,end);
}
function merge(arr,low,middle,high){
    if(arr.length === 0 || low > middle || high < middle){//好像这里的条件判断对算法没有影响
        return;
    }
    //接下来就是对两个数组排序合并为一个数组。
    var tempArr = new Array(high - low + 1);
    var k = 0;
    var i = low;
    var j = middle + 1;
    //这里不能用for语句哦，应该用while语句
    while(i <= middle && j <= high){
        if(arr[i] <= arr[j]){
            tempArr[k++] = arr[i++];
        }
        if(arr[j] < arr[i]){
            tempArr[k++] = arr[j++];
            count = (count + (middle - i + 1)) % 1000000007;
        }
    }
    while(i<=middle){
        tempArr[k]=arr[i];
        i++;
        k++;
    }
    while(j<=high){
        tempArr[k]=arr[j];
        j++;
        k++;
    }
    //将tempArr赋值给本来的数组arr
    for(let i=low,k=0;i<=high;i++,k++){
        arr[i]=tempArr[k];
    }
}
```