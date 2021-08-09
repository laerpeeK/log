//对象

//1. 请使用对象字面量创建对象
const aO = {}

//2.别使用保留字作为对象的键值，这样在IE8不会运行
const b0 = {
    defaults: {},
    common: {}
}

//3.当使用动态属性名创建对象时，请使用对象计算属性名来进行创建，这样做可以让你在一个地方定义所有的对象属性
function getKey(k) {
    return `a key named ${k}`
}

const obj = {
    id:5,
    name: 'San Francisco',
    [getKey('enabled')]: true
}
console.log(obj['a key named enabled']) //true

//4.请使用对象方法的简写方式
const item4 = {
    value: 1,

    addValue(val) {
        return item4.value + val
    }
}

//5.请使用对象属性值的简写方式, 这样更简短且描述更清楚
const job = 'FrontEnd'
const item5 = {
    job
}

//6.将简写的对象属性分组后统一放到对象声明的开头
const department = 'JDC'
const boss = 'LQD'
const item6 = {
    department,
    boss,
    sex: 'male',
    age: 25
}

//7.只对非法标识符的属性使用引号，因为通常来说我们认为这样主观上会更容易阅读，
//这样会带来代码高亮上的提升，同时也更容易被JS主流引擎优化
//非法标识符： 标识符组成不仅是字母，数字，下划线
const good7 = {
    foo7: 3,
    bar7: 4,
    'data-blah': 5
}


//8.不要直接使用Object.prototype的方法,因为这些方法可能会被对象自身的同名属性覆盖
console.log(Object.prototype.hasOwnProperty.call(object,key))

//best
const has = Object.prototype.hasOwnProperty
console.log(has.call(object, key))

//9.优先使用对象运算符...来做对象浅拷贝而不是使用Object.assign，
//使用对象剩余操作符来获得一个包含确定的剩余属性的新对象
const original = {a: 1, b: 2}
const copy = {...original, c:3}
const {a,...noA} = copy //noA => {b:2, c:3}