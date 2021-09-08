function resolveAfter2Seconds(value) {
		return new Promise((resolve) => {
			resolve(value)
		})
}

function* coroutineFunc(value) {
	//yield关键字交出执行权
	yield resolveAfter2Seconds(value)
	yield 1
}

let doIt = coroutineFunc('OK')
//next：恢复函数的执行权
let value = doIt.next().value
let value2 = doIt.next().value
console.log(value, value2) // {<pending>}  1
value.then((res) => {
	console.log(res)
})

for(let i = 0; i < 10; i++) {
	console.log(i)
}

