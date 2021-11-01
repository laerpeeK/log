//将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
//插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

//O(n^2)  O(1)


function insertSort(array) {
	let a = array
	if (a.length <= 1) return 
	for (let i = 1; i < array.length; i++) {
		let value = array[i]
		let j = i - 1
		for (;j >= 0; j--) {
			if(a[j] > value) {
				a[j+1] = a[j]
			} else {
				break
			}
		}
		a[j+1] = value
	}
	return a
}
