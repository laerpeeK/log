//1.使用标准的ES6模块语法import和export
//原因：模块是未来

import Util from './util'
export default Util

export default Util







//迭代器
//1.不要使用iterators， 建议使用JS更高优先级的函数代替for-in或for-of循环
//除非迫不得已
const numbers = [1,2,3,4,5]
let sum = 0
numbers.forEach(num => sum += num)

    //better
const num = numbers.reduce((total, num) => total+ num, 0)

//生成器
//1.现阶段请不要使用生成器generator
//原因：因为不能很好地翻译成ES5代码


//对象属性
//1.使用.来访问属性
const joke = {
    name: 'haha',
    age: 28
}

const name = joke.name


//2.当访问的属性是变量时使用[]
const luke = {
    jedi: true,
    age: 28
}

function getProp (prop) {
    return luke[prop]
}

const isJedi = getProp('jedi')


//变量声明
//1.声明变量时，请使用const, let关键字，如果没有写关键字
//变量就会暴露在全局上下文中，这样很可能和现有变量冲突
//另外，也很难明确该变量的作用域是什么。
//建议使用const来声明变量，我们需要避免全局空间的污染

const demo = new demo()
const b
const d
let a
let b
let e

//2.变量不要进行链式赋值
//原因：变量链式赋值会创建隐藏的全局变量
(function example () {
    let a = 1
    let b = a
    let c = a
}())

//3.不允许出现未被使用的变量
//原因：声明但未被使用的变量通常是不完全重构犯下的错误
//这种变量在代码里浪费空间，并会给读者构成困扰
function getXPlusY (x, y) {
    return x + y
}

const x = 1
const y = a + 2
alert(getXPlusY(x, y))

const {type, ...coords} = data


//Hoisting
//1.var存在变量提升的情况，即var声明会被提升至该作用域的顶部
//但是他们的赋值并不会，而const和let被赋予了Temporal Dead Zones
//var => undefined const,let => throw a ReferenceError

//2.匿名函数的变量名会提升，但函数内容不会

//3.命名的函数表达式的变量名会被提升，但函数名和函数内容并不会


//比较运算符&相等

//1.使用===和 !== 而非 == 和 !=
//2.条件声明例如if会用Boolean这个抽象方法将表达式转成布尔值并遵从如下规则

//Objects 等于true，[]空对象也为true
//Undefined 等于 false
//Null 等于 false
//Booleans 等于 布尔值
//Numbers 在 +0， -0或者 NaN的情况下等于false, 其他情况是true
// String 为 ''时等于false, 否则为true


//分号
//1.不使用分号
//例外情况
const test = 'good'
;(() => {
    const str = 'hahaha'
})();

//标准特性
//1.为了代码的可移植性和兼容性，我们应最大化的使用标准方法
//例如优先使用string.charAt(3) 而不是string[3]

//eval()
//约定禁止使用该方法


//with() {}
//会产生神奇的作用域，禁止使用

//修改内置对象的原型
//不要修改