/*
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

找 大于跟小于的两个前进方向。
从最左下角或最右上角数字开始

*/
function Find(target, array) {
	let i = array.length - 1
	let j = 0
	return compare(target, array, i, j)
}

function compare(target, array, i, j) {
	if (array[i] === undefined || array[i][j] === undefined) {
		return false
	}
	const temp = array[i][j]
	if (target === temp) {
		return true
	} else if (target > temp) {
		return compare(target, array, i, j+1)
	} else if (target < temp) {
		return compare(target, array, i-1, j)
	}
}


