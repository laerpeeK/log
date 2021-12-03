//时间复杂度On+k 空间复杂度On
//前提：数据范围不大的场景
const countingSort = array => {
	if (array.length <= 1) return 
	const max = findMaxValue(array)
	const counts = new Array(max + 1)
	array.forEach(element => {
		if (!counts[element]) {
			counts[element] = 0
		}
		counts[element]++
	})
	
	let sortedIndex = 0
	counts.forEach((count, i) => {
		while (count > 0) {
			array[sortedIndex] = i
			sortedIndex++
			count--
		}
	})
}

function findMaxValue(array) {
	let max = array[0]
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i]
		}
	}
	return max
}