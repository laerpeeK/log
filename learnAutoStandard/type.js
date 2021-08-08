//1.原始类型：存储原始类型直接作用值本身
const foo = 1
let bar = foo
bar = 9
console.log(foo, bar)// 1 9

//2.复杂类型：访问复杂类型作用于值的引用
const fooObj = [1,2,3]
const barObj = fooObj
barObj[0] = 9
console.log(fooObj[0], barObj[0]) // 9 9

//3.对所有引用都使用const, 这样做可以确保你无法重新分配引用，以避免错误与难以理解的代码

const a = 1
const b = 2

//4.如果引用是可变动的，使用let代替var
let count = 1
if(count < 10) {
    count += 1
}







