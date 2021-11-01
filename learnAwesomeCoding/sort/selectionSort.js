//每次循环选取一个最小的数字放到前面的有序序列中。

//O(n^2)  O(1)

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j
			}
		}
		[array[minIndex], array[i]] = [array[i], array[minIndex]]
	}
}