const mult = function() {
	console.log('开始计算乘积')
	let a = 1
	for(let i = 0; i <arguments.length; i++) {
		a = a * arguments[i]
	}
	return a
}

const proxyMult = (function() {
	const cache = []
	return function() {
		let args = Array.prototype.join.call(arguments, ',')
		if(args in cache) {
			return cache[args]
		}
		return cache[args] = mult.apply(this, arguments)
	}
})()