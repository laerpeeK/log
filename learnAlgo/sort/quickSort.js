//快速排序 时间复杂度Onlogn  空间复杂度O1
const swap = (arr, i, j) => {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
	const pivotVal = arr[pivot]
	let startIndex = left
	for (let i = left; i < right; i++) {
		if (arr[i] < pivotVal) {
			swap(arr, i, startIndex)
			startIndex++
		}
	}
	swap(arr, startIndex, pivot)
	return startIndex
}

const quickSort = (arr,left = 0, right = arr.length - 1) => {
	if(left < right) {
		let pivot =  right
		let patitionIndex = partition(arr, pivot, left, right)
		quickSort(arr, left, patitionIndex - 1 < left?left: patitionIndex - 1)
		quickSort(arr, patitionIndex + 1 > right? right: patitionIndex + 1, right)
	}
}

const testArr = []
let i = 0
while (i < 10) {
	testArr.push(Math.floor(Math.random() * 1000))
	i++
}

quickSort(testArr,0,testArr.length - 1)
console.log(testArr)