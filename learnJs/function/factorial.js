function factorial(n) {
	if (Number.isInteger(n) && n > 0) {
		if (!(n in factorial)) {
			factorial[n] = n * factorial(n - 1)
		}
		return factorial[n]
	} else {
		return NaN
	}
}

factorial[1] = 1 //初始化缓存，保存最基础的值
console.log(factorial(6))