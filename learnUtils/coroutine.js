// function *idMaker() {
// 	let index = 0
// 	const max = 1;
// 	while(index < max) {
// 		yield index++;
// 	}
// }
// let gen = idMaker()
// console.log(gen.next().value)//0
// console.log(gen.next().value)//undefined

// function* anotherGenerator(i) {
// 	yield i + 1
// 	yield i + 2
// 	yield i + 3
// }

// function* generator(i) {
// 	yield i
// 	//使用yield*将执行权交给另一个生成器函数，
// 	//接下来要等到这个生成器函数anotherGenertor()执行完毕执行权才会回到generator函数。
// 	yield* anotherGenerator(i)
// 	yield i + 10
// }

// const gen = generator(10)

// console.log(gen.next().value)//11
// console.log(gen.next().value)//11
// console.log(gen.next().value)//12
// console.log(gen.next().value)//13
// console.log(gen.next().value)//20

function* genDemo() {
	console.log(" 开始执行第一段 ")
	yield 'generator 2'

	console.log(" 开始执行第二段 ")
	yield 'generator 2'

	console.log(" 开始执行第三段 ")
	yield 'generator 2'

	console.log(" 执行结束 ")
	return 'generator 2'
}

console.log('main 0')
let gen = genDemo()
console.log(gen.next().value)
console.log('main 1')
console.log(gen.next().value)
console.log('main 2')
console.log(gen.next().value)
console.log('main 3')
console.log(gen.next().value)
console.log('main 4')
