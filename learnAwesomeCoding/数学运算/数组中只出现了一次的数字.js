/*
一个整型数组里除了两个数字之外，
其他的数字都出现了偶数次。
请写程序找出这两个只出现一次的数字。
思路

1异或1=0 0异或0=0 1异或0=0
如果题目是只有一个只出现一次的数字：

两个相同的数异或值为0，将数组所有的值进行异或操作，最后剩余值就是目标值。
如果有两个出现一次的值

    数组所有元素异或后是两个目标值的异或值
    两个目标值不相等，所以最终的异或值不为0
    最终异或值的二进制某一位肯定是1，找到这个位置为index
    所以目标的两个值的二进制，一个index位为0，另一个index位为1

    按二进制index位为0和1，将数组分两批进行异或，两批最后的结果即为两个目标值

*/

function FindNumsAppearOnce(array) {
	let exclusive = 0
	for (let i = 0; i < array.length; i++) {
		exclusive = exclusive ^ array[i]
	}
	let index = findFirst1(exclusive)
	let result1 = 0
	let result2 = 0
	for(let i = 0; i < array.length; i++) {
		if (isN1(array[i], index)) {
			result1 = result1 ^ array[i]
		} else {
			result2 = result2 ^ array[i]
		}
	}
	return [result1, result2]
}

function findFirst1(n) {
	let index = 0
	while (((n & 1) === 0) && index < 64) {
		n = n >> 1
		index++
	}
	return index  //为1的那一位
}

function isN1(n, index) {
	return n && (n >> index)  //index 为1
}

console.log(FindNumsAppearOnce([1,2,3,3,2,5]))