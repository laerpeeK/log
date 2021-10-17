/*
大顶堆
从第一个非叶子节点开始依次对数组中的元素进行下沉操作


    和孩子节点的最大值max比较
    大于max — 不需要在下沉
    小于max — 和max交换位置 - 继续和下一层孩子节点比较，直到队列末尾


tips:最后一个叶子节点的索引值是n-1，它的父节点索引值是[(n-1)-1]/2 = n/2 -1 
某个节点索引为n, 左子节点为2n + 1, 右子节点为2n + 2
*/


function adjustMaxHeap(array, index, length) {
	for (let i = 2*index + 1; i < length; i = 2 * i + 1) { 
		if (i+1 <length && array[i+1] > array[i]) { //取左右子节点大的那个
			i++
		}
		if (array[index] >= array[i]) {
			break
		} else {
			[array[index], array[i]] = [array[i], array[index]]
			index = i
		}
	}
}



function createMaxHeap(arr, length) {
	for (let i = Math.floor(length / 2) - 1; i >= 0; i--) { //第一个非叶子节点
		adjustMaxHeap(arr, i, length)
	}
	return arr
}


/*
小顶堆
从第一个非叶子节点开始依次对数组中的元素进行下沉操作

    和孩子节点的最小值min比较
    小于min — 不需要在下沉
    大于min — 和min交换位置（下沉） - 继续和下一层孩子节点比较，直到队列末尾

*/
function adjustMinHeap(array, index, length) {
	for(let i = 2 * index + 1; i < length; i = 2 * i + 1) {
		if(i + 1 < length && array[i + 1] < array[i]) {
			i++
		}
		if(array[index] < array[i]) {
			break
		} else {
			[array[index], array[i]] = [array[i], array[index]]
			index = i
		}
	}
}

function createMinHead(arr, length) {
	for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
		adjustMinHeap(arr, i, length)
	}
	return arr
}