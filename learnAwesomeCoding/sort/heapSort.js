/*
创建一个大顶堆，大顶堆的堆顶一定是最大的元素。
交换第一个元素和最后一个元素，让剩余的元素继续调整为大顶堆。
从后往前以此和第一个元素交换并重新构建，排序完成。
*/

//O(nlogn)  O(1)


function heapSort(array) {
	createHeap(array)
	for(let i = array.length -1; i >0; i--) {
		[array[i], array[0]] = [array[0], array[i]]
		adjust(array, 0, i)
	}
	return array
}

function createHeap(array) {
	const len = array.length
	const start = parseInt(len / 2) - 1
	for(let i = start; i >= 0; i--) {
		adjust(array, i, len)
	}
}

function adjust(array, target, len) {
	for(let i = 2*target + 1; i < len; i = 2 * i +1) {
		if(i +1 < len && array[i+1] > array[i]) {
			i = i + 1
		}

		if(array[i] > array[target]) {
			[array[i], array[target]] = [array[target], array[i]]
			target = i
		} else {
			break
		}
	}
}

