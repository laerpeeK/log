/*
二分查找的条件是必须有序。
和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。
*/

function binarySearch(data, arr, start, end) {
	if (start > end) {
		return -1
	}
  let mid = Math.floor((end+ start) / 2)
	if (data === arr[mid]) {
		return mid
	} else if (data < arr[mid]) {
		return binarySearch(data, arr, start, mid - 1)
	} else {
		return binarySearch(data, arr, mid+1, end)
	}
}