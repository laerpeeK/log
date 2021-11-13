let iterable = [99,88,77,66,55] //可迭代对象
let iterator = iterable[Symbol.iterator]() //迭代器方法获得一个迭代器对象
for (let result = iterator.next(); !result.done; result = iterator.next()) { //next返回迭代结果对象
	console.log(result.value)
}