//快速排序：通过一趟排序将要排序的数据分割成独立的两部分，
//其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，
//整个排序过程可以递归进行，使整个数据变成有序序列。

//平均O(nlogn)  最坏O(n^2)  大多数情况小于O(nlogn)
//O(logn)


function quickSort(array) {
	if(array.length < 2) {
		return array
	}

	const target = array[0]
	const left = []
	const right = []
	for(let i = 1; i < array.length; i++) {
		if(array[i] < target) {
			left.push(array[i])
		} else {
			right.push(array[i])
		}
	}
	console.log(left , target, right)
	return quickSort(left).concat([target], quickSort(right))
}


//1.记一个索引l从数组最左侧开始，记一个索引r从数组最右侧开始
// l < r: 找到右侧小于target的值array[r]，并将其赋值到array[l]
// l < r: 找到左侧大于target的值array[l]，并将其赋值到array[r]
//这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置

function quickSort2 (array, start, end) {
	if(end - start < 1) {
		return
	}
	const target = array[start]
	let l = start
	let r = end
	while(l < r) {
		while(l < r && array[r] >= target) {
			r--
		}
		array[l] = array[r]
		while(l < r && array[l] < target) {
			l++
		}
		array[r] = array[l]
	}
	array[l] = target
	quickSort2(array, start, l - 1)
	quickSort2(array, l+1, end)
	return array
}

console.log(quickSort2([5,1,4,3,2,0], 0, 5))
