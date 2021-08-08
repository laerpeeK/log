//1.不要使用Function构造函数创建函数
//原因：此方式创建函数和对字符串使用 eval() 一样会产生漏洞

//2.在函数签名中使用空格
const x = function b () {}
const y = function a () {}

//3.使用具名函数表达式而非函数声明

/*
原因：这样做会导致函数声明被提升，
这意味着很容易在文件中定义此函数之前引用它，
不利于可读性和可维护性。
如果你发现函数定义既庞大又复杂以至于不能理解文件的其他部分，
或许你应该将它拆分成模块！
别忘记要显式命名表达式，
而不用管名字是否是从包含的变量（通常出现在
现代浏览器中或者使用 Babel 编译器的时候）中推断的。
这样会消除错误调用堆栈中的任何假设。 (讨论)
*/

const short = function longUniqueMoreDescriptiveLexicalFoo () {}

//4.用圆括号包裹自执行匿名函数

/*
原因：一个立即执行匿名函数表达式是一个单一的单元，
将其及其调用括号包装在括号中，能够清楚地表达这一点。
注意，在到处都是模块的世界中几乎不需要 IIFE。
*/
(function () {
    console.log('Welcome to the Internet. Please follow me.')
}())


//5.不要在非函数代码块(if, while等)中声明函数
let test
if(isUse) {
    test = () => {
        //do something
    }
}


//6.不要将参数命名为arguments, 
//会导致该参数的优先级高于每个函数作用域内原先存在的arguments对象
function foo (name, options, args) {
    //
}


//7.不要使用arguments, 使用剩余运算符...
//arguments只是一个类数组， 而...是一个真正的数组
function test(...args) {
    return args.join('')
}


//8.使用参数默认值语法而不是修改函数参数
function handleThings (opts = {}) {
    //...
}

//9.避免参数默认值的副作用


//10.将参数默认值放在最后
function handleThings (name, opts = {}) {
    //...
}

//11.不要更改参数
//原因：操作作为参数传入的对象可能在原始调用中造成意想不到的变量副作用
function f2 (obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key')?obj.key:1
}


//12.不要给参数重新赋值
//原因：参数重新赋值可能会导致无法预期的行为，尤其是当操作 arguments 对象时，
//也可能导致优化问题，尤其是在 V8 引擎中
function f3 (a) {
    const b = a||1
}

function f4 (a = 1) {

}

//13. 调用可变参数函数时建议使用展开运算符 ....
//原因：显然你无需使用上下文，很难结合 new 和 apply
const x = [1,2,3,4,5]
console.log(...x)
new Date(...[2016,8,5])

//箭头函数

//1. 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记.
//原因：它将创建在 this 上下文中执行的函数版本，通常是您想要的，并且语法更简洁
//如果您有一个相当复杂的函数，则可以将该逻辑移到其自己的命名函数表达式中

[1,2,3].map((x) => {
    const y = x + 1
    return x * y
})

//2.如果函数体只包含一条没有副作用的返回表达式的语句，
//可以省略花括号并使用隐式的 return， 否则保留花括号并使用 return 语句
[1,2,3].map((number) => {
    const nextNumber = number + 1
    return `A string containing the ${nextNumber}`
})

[1,2,3].map((number, index) => ({
    index: number
}))

//3.一旦表达式跨多行，使用圆括号以便更好阅读
['get', 'post', 'put'].map(httpMethod => (
    Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMehtod
    )
))

//4.函数如果只接收一个参数并且没使用花括号，则省略圆括号
//否则为了清晰明确，则使用圆括号包裹参数，
//注意：总是使用圆括号也是可以接受的
[1,2,3].map(number => x * x)
[1,2,3].map((x) => {
    const y = x + 1
    return x * y
})


//5.使用class, 避免直接操作prototype
class Queue {
    constructor(contents = []) {
        this._queue = [...contents]
    }
    pop() {
        const value = this._queue[0]
        this._queue.splice(0, 1)
        return value
    }
}


//6.使用extends来实现继承
//原因：这是一个不会破坏instanceof的内建实现原型式继承的方式
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0]
    }
}

//7.如果未声明构造函数，则类会有一个默认的构造函数，
//没必要用空的构造函数或者将其委托给父类
class Rey extends Jedi {
    constructor(...args) {
        super(...args)
        this.name = 'Rey'
    }
}

//8.避免类成员重复，因为重复的类成员声明会默认使用最后声明的，通常会导致bug
class Foo {
    bar () {}
}

class Foo2 {
    bar () {return 2}
}


