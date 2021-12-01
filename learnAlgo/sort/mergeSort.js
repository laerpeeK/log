//归并排序  时间复杂度Onlogn 空间复杂度On 
const mergeArr = (left, right) => {
	let temp = []
	let leftIndex = 0
	let rightIndex = 0
	while (left.length > leftIndex && right.length > rightIndex) {
		if (left[leftIndex] <= right[rightIndex]) {
			temp.push(left[leftIndex])
			leftIndex++
		} else {
			temp.push(right[rightIndex])
			rightIndex++
		}
	}

	return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr
	const middle = Math.floor(arr.length / 2) 
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)

	return mergeArr(mergeSort(left), mergeSort(right))
}

const testArr = []
let i = 0
while (i < 100) {
	testArr.push(Math.floor(Math.random()* 1000))
	i++
}

const res = mergeSort(testArr)
console.log(res)