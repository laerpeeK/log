class Range {
	constructor(from, to) {
		this.from = from
		this.to = to
	}

	[Symbol.iterator]() {
		let next = Math.ceil(this.from)
		let last = this.to
		return {
			next() {
				return (next <= last)?{value:next++}:{done: true}
			},
			[Symbol.iterator]() {
				return this
			}
		}
	}
}

function map(iterable,f) {
	//返回一个可迭代对象，迭代的结果是对传入的可迭代对象的每个值引用f()的结果
	let iterator = iterable[Symbol.iterator]()
	return {
		[Symbol.iterator](){
			return this
		},
		next() {
			let v = iterator.next()
			if(v.done) {
				return v
			} else {
				return {value: f(v.value)}
			}
		}
	}
}

console.log([...map(new Range(1,4),(x) => x*x)])