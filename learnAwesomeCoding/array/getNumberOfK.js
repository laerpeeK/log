/*
统计一个数字在排序数组中出现的次数。


    1.直接遍历数组，判断前后的值是否相同，找到元素开始位置和结束位置，时间复杂度O(n)
    2.使用二分查找找到目标值，在向前向后遍历，找到所有的数，比上面略优，时间复杂度也是O(n)
    3.使用二分查找分别找到第一个目标值出现的位置和最后一个位置，时间复杂度O(logn)

		在排序数组中找元素，首先考虑使用二分查找
*/

function binarySearch(data, arr, start, end) {
	if (start > end) {
		return -1
	}
	let mid = Math.floor((end + start) / 2)
	if(data === arr[mid]) {
		return mid
	} else if (data < arr[mid]) {
		return binarySearch(data, arr, start, mid - 1)
	} else {
		return binarySearch(data, arr, mid + 1, end)
	}
}


function GetNumberOfK(data, k) {
	if (data && data.length > 0 && k !== null) {
		const firstIndex = getFirstK(data, 0, data.length - 1, k)
		const lastIndex = getLastK(data, 0, data.length -1, k)
		if(firstIndex !== -1 && lastIndex !== -1) {
			return lastIndex - firstIndex + 1
		}
	}
	return 0
}

//判断条件：当前值为k,且前一位不为k
function getFirstK(data, first, last, k) {
	if (first > last) {
		return -1
	}
	const mid = parseInt((first + last)/2)
	if(data[mid] === k) {
		if(data[mid - 1] !== k) {
			return mid
		} else {
			return getFirstK(data, first, mid-1, k)
		}
	} else if (data[mid] > k) {
		return getFirstK(data, first, mid - 1, k)
	} else if (data[mid] < k) {
		return getFirstK(data, mid + 1, last, k)
	}
}

function getLastK(data, first, last, k) {
	if(first > last) {
		return -1
	}
	const mid = parseInt((first + last) / 2)
	if(data[mid] === k) {
		if(data[mid + 1] !== k) {
			return mid
		} else {
			return getLastK(data, mid + 1, last, k)
		}
	} else if (data[mid] > k) {
		return getLastK(data, first, mid - 1, k)
	} else if (data[mid] < k) {
		return getLastK(data, mid + 1, last , k)
	}
}



