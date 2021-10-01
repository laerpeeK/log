/*
输入一个正数S，打印出所有和为S的连续正数序列。



    创建一个容器child，用于表示当前的子序列，初始元素为1,2

    记录子序列的开头元素small和末尾元素big

    big向右移动子序列末尾增加一个数 small向右移动子序列开头减少一个数

    当子序列的和大于目标值，small向右移动，子序列的和小于目标值，big向右移动

*/

function FindCountinuousSequence (sum) {
	const result = []
	const child = [1, 2]
	let big = 2
	let small = 1
	let currentSum = 3
	while(big < sum) { //有优化空间
		//子序列和小于num, 向右移动在子序列末尾加一个数
		while(currentSum < sum && big < sum) {
			child.push(++big)
			currentSum += big
		}

		//子序列和大于num, 子序列开头减少一个元素
		while (currentSum > sum && small < big) {
			child.shift()
			currentSum -= small++
		}

		if (currentSum === sum && child.length > 1) {
			result.push(child.slice()) //slice无参数，转化为数组
			child.push(++big)
			currentSum += big
		}
	}
	return result
}
console.log(FindCountinuousSequence(15))