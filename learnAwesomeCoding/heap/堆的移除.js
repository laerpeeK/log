/*
    由于堆属于优先队列，只能从头部移除
    移除头部后，使用末尾元素填充头部，开始头部下沉操作

*/

function minHeapPop(array = []) {
	let result = null
	if (array.length > 1) {
		result = array[0]
		array[0] = array.pop()
		adjustMinHeap(array, 0, array.length)
	} else if (array.length === 1) {
		return array.pop()
	}
	return result
}