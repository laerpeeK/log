//查找第一个等于给定值
//时间复杂度Ologn
const binaryFindFirst = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (target < sortedArr[mid]) {
			high = mid - 1
		} else if (target > sortedArr[mid]) {
			low = mid + 1
		} else {
			if (mid === 0 || sortedArr[mid - 1] < target) return mid
			high = mid - 1
		}
	}
	return -1
}


//查找第一个大于等于给定值的元素
