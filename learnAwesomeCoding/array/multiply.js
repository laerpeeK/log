/*
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
*/

function multiply (array) {
	const result = []
	if (Array.isArray(array) && array.length > 0) {
		//计算下三角
		result[0] = 1
		for (let i = 1; i < array.length; i++) {
			result[i] = result[i - 1] * array[i - 1]
		}

		//乘上三角
		let temp = 1
		for (let i = array.length - 2; i >= 0; i--) {
			temp = temp * array[i+1]
			result[i] = result[i] * temp
		}
	}
	return result
}