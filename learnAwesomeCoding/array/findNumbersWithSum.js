/*
输入一个递增排序的数组和一个数字S，在数组中查找两个数，
使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。


数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧 比如 3,8 5,7 要取3,8。
 
a * b  (a+x)(b-y)  ab + (bx -ay - xy) > 0    a <x < y < b  bx>ay +xy? b > a*y/x + y

    设定一个小索引left，从0开始
    设定一个大索引right，从array.length开始
    判断array[left] + array[right]的值s是否符合条件
    符合条件 - 返回
    大于sum，right向左移动
    小于sum，left向右移动
    若left=right，没有符合条件的结果


*/

function FindNumbersWithSum(array, sum) {
	if (array && array.length > 0) {
		let left = 0
		let right = array.length - 1
		while (left < right) {
			const s = array[left] + array[right]
			if(s > sum) {
				right--
			} else if (s < sum) {
				left++
			} else {
				return [array[left], array[right]]
			}
		}
	}
	return []
}