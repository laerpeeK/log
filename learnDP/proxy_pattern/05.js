/****** 计算乘积 **********/
const mult = function() {
	let a = 1
	for(let i = 0; i < arguments.length; i++) {
		a = a * arguments[i]
	}
	return a
}


/***** 计算加和 ******/
const plus = function() {
	let a = 0
	for(let i = 0; i < arguments.length; i++) {
		a = a + arguments[i]
	}
	return a
}

/******* 创建缓存代理的工厂 ******/
const createProxyFactory = function(fn) {
	const cache = []
	return function() {
		let args = Array.prototype.join.call(arguments, ',')
		if(args in cache) {
			return cache[args]
		}
		return cache[args] = fn.apply(this, arguments)
	}
}

//实例
const proxyMult = createProxyFactory(mult)
const proxyPlus = createProxyFactory(plus)
