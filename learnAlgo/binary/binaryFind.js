//时间复杂度Ologn
//前提支持随机访问的有序数组
const binaryFind = (sortedArr, target) => {
	if (sortedArr.length === 0) return -1
	let low = 0
	let high = sortedArr.length - 1
	while (low <= high) {
		const mid = Math.floor((low + high) / 2)
		if (target === sortedArr[mid]) {
			return mid
		} else if (target < sortedArr[mid]) {
			hight = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}

