function filter(iterable, predicate) {
	//返回一个可迭代对象，只迭代predicate返回true的函数
	let iterator = iterable[Symbol.iterator]()
	return {
		[Symbol.iterator]( ) {
			return this
		},
		next() {
			for(;;) {
				let v = iterator.next()
				if (v.done || predicate(v.value)) {
					return v
				}
			}
		}
	}
}

