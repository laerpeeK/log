/*
0,1,...,n-1这n个数字排成一个圆圈，
从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

解法2:用数组模拟

    每次计算下标，需要考虑末尾条件

*/
function LastRemaining_Solution(n, m) {
	if (n < 1 || m < 1) {
		return -1
	}
	const array = []
	let index = 0
	for (let i = 0; i < n; i++) {
		array[i] = i
	}
	while (array.length > 1) {
		index = (index+m) % array.length -1
		if (index >= 0) {
			array.splice(index, 1)
		} else {
			array.splice(array.length - 1, 1)
			index = 0
		}
	}
	return array[0]
}