function* smallNumbers() {
	console.log('next被第一次调用；参数被丢弃')
	let y1 = yield 1
	console.log('next被第二次调用，参数为',y1)
	let y2 = yield 2
}

let g=  smallNumbers()
console.log(g.next('a'))
console.log(g.next('b'))