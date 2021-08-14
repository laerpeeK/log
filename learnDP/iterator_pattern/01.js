//内部迭代器
const eath = function(ary, callback) {
	for(let i = 0; i < ary.length; i++) {
		callback.call(ary[i], i, ary[i])//把下标和元素当作参数传给callback函数
	}
}

//外部迭代器
const Iterator = function(obj) {
	let current = 0
	const next = function() {
		current += 1
	}
	const isDone = function() {
		return current >= obj.length
	}
	const getCurrItem = function() {
		return obj[current]
	}
	return {
		next,
		isDone,
		getCurrItem
	}
}

//倒序迭代器
const reverseEath = function (ary, callback) {
	for(let l = ary.length-1;l>= 0; l--) {
		callback(l, ary[l])
	}
}

//中止迭代器
const breakOffIterator = function(ary, callback) {
	for(let i = 0; i < ary.length; i++) {
		if(callback(i, ary[i]) === false) {
			break
		}
	}
}

