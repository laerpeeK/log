/*

    由于堆属于优先队列，只能从末尾添加
    添加后有可能破坏堆的结构，需要从下到上进行调整
    如果元素小于父元素，上浮

*/
function minHeadAdd(array = [], element) {
	array.push(element)
	if (array.length > 1) {
		let index = array.length - 1
		let target = Math.floor((index - 1)/2)
		while (target >= 0) {
			if (array[index] < array[target]) {
				[array[index], array[target]] = [array[target], array[index]]
				index = target
				target = Math.floor((index - 1) / 2)
			} else {
				break;
			}
		}
	}
	return array;
}