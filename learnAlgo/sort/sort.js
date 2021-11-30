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

const insertSort = (arr) => {
	if (arr.length <= 1) return
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i]
		let j = i - 1
		for (j;j >= 0; j--) {
			if (arr[j] > temp) {
				arr[j + 1] = arr[j]
			} else {
				break;
			}
		}
		arr[j+1] = temp
	}
	console.log(arr)
} 

const selectionSort = (arr) => {
	if (arr.length <= 1) return 
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j 
			}
		}
		const temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
	console.log(arr)
}

