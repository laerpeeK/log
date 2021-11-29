const bubbleSort = (arr) => {
	if (arr.length <= 1) return 
	for (let i = 0; i < arr.length; i++) {
		let hasChange = false
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
				hasChange = true
			}
		}
		if (!hasChange) break //某一次遍历时，剩下的元素已排序完整
	}
	console.log(arr) 
}



