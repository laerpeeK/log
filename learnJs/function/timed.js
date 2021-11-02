//这个函数接收一个函数并返回一个包装后的版本
function timed(f) {
	return function (...args) {
		console.log(`Entering function ${f.name}`)
		let startTime = Date.now()
		try {
			//把收集到的实参传给包装后的函数
			return f(...args)
		} 
		finally {
			//在返回被包装的返回值前，打印经过的时间
			console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`)
		}
	}
}

function benchmark(n) {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		sum += i
	}
	return sum
}
timed(benchmark)(100000)