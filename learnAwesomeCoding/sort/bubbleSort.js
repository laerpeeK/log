function bubbleSort(array) {
	for(let j = 0; j < array.length; j++) {
		let complete = true
		for(let i = 0; i < array.length -1 - j; j++) {
			if(array[i] > array[i+1]) {
				[array[i], array[i+1]] = [array[i+1], array[i]]
				complete = false
			}
		}
		//当一次循环没有发生冒泡，说明已经排序完成，停止循环
		if(complete) {
			break
		}
	}
	return array
}