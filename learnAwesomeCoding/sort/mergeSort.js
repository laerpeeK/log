/*
将已有序的子序列合并，得到完全有序的序列
即先使每个子序列有序，再使子序列段间有序
若将两个有序表合并成一个有序表，称为二路归并

*/

//O(nlogn)
//O(n)

//分割数组时直接将数组分为两个数组，合并时直接合并数组
//思路写法简单
//空间复杂度略高，需要复制多个数组
function mergeSort(array) {
	if(array.length < 2) {
		return array
	}

	const mid = Math.floor(array.length / 2)
	const front = array.slice(0, mid)
	const end = array.slice(mid)
	return merge(mergeSort(front), mergeSort(end))
}

function merge(front, end) {
	const temp = []
	while (front.length && end.length) {
		if(front[0] < end[0]) {
			temp.push(front.shift())
		} else {
			temp.push(end.shift())
		}
	} 

	while(front.length) {
		temp.push(front.shift())
	}
	while(end.length) {
		temp.push(end.shift())
	}
	return temp
}


function mergeSort2(array, left, right, temp) {
	if(left < right) {
		const mid = Math.floor((left + right) / 2)
		mergeSort2(array, left, mid, temp)
		mergeSort2(array, mid+1, right, temp)
		merge2(array, left, right, temp)
	}
	return array
}

function merge2(array, left, right, temp) {
	const mid = Math.floor((left + right) / 2)
	let leftIndex = left
	let rightIndex = mid + 1
	let tempIndex = 0

	while(leftIndex <= mid && rightIndex <= right) {
		if(array[leftIndex] < array[rightIndex]) {
			temp[tempIndex++] = array[leftIndex++]
		} else {
			temp[tempIndex++] = array[rightIndex++]
		}
	}

	while(leftIndex <= mid) {
		temp[tempIndex++] = array[leftIndex++]
	}

	while(rightIndex <= right) {
		temp[tempIndex++] = array[rightIndex++]
	}

	tempIndex = 0
	for(let i = left; i <= right; i++) {
		array[i] = temp[tempIndex++]
	}
}
