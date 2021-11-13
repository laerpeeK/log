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
	/*
	*[Symmbol.iterator]() {
		for(let x = Math.ceil(this.from); x<= this.to; x++) yield x
	}
	*/
}

for (let x of new Range(1, 10)) {
	console.log(x)
}
