//1.请使用对象字面量值创建数组
const items = []

//2.向数组中添加元素时，请使用push方法
items.push('test')

//3.使用展开运算符...复制数组
itemsCopy = [...items]

//4.把一个可迭代的对象转换成数组时，使用展开运算符...而不是Array.from
//可以应用 for..of 的对象被称为 可迭代的。
const nodes = [...foo]

//5.使用Array.from来将一个类数组对象转换为对象
//有索引属性和 length 属性的对象被称为 类数组对象。
const arrLike = {0: 'foo', 1: 'bar', 2: 'baz', length: 3}
const arr = Array.from(arrLike)

//6.遍历迭代器进行映射时使用Array.from代替扩展运算符...，因为这
//可以避免创建中间数组
const baz = Array.from(footest, bartest)
console.log(baz)

//7.使用数组的map等方法时，请使用return声明，
//如果是单一声明语句的情况，可省略return
[1,2,3].map(x => {
    const y = x +1
    return x * y
})

const flat = {}
[[0,1], [2,3], [4,5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
    return flatten
})

inbox.filter((msg) => {
    const {subject, author} = msg
    if(subject === 'Mockingbird') {
        return author === 'Harper Lee'
    }
    
    return false
})

//8.如果一个数组有多行则要在数组的开括号后和闭括号前使用新行
const arr = [[0,1], [2,3], [4,5]]
const objectInArray = [
    {
        id: 1
    },
    {
        id: 2
    }
]

const numberInArray = [
    1,
    2
]

//9.解构赋值,解构可以避免创建属性的临时引用
function getFullName(user) {
    const {firstName, lastName} = user
    return `${firstName} ${lastName}`
}

    //better
function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}


//10.当需要使用数组的多个值时,请同样使用解构赋值
const arr = [1,2,3,4]
const [first,second]  = arr

//11.函数需要回传多个值时，请使用对象的解构，而不是数组的解构，因为这样做
//可以非破坏地随时增加或者改变属性顺序
//如果是数组解构，那么在调用时就需要考虑数据的顺序

function doSomething() {
    return {top, riht, bottom, left}
}
//此时不需要考虑数据的顺序
const {top, left} = doSomething()


