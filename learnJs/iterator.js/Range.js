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

for (let x of new Range(1, 10)) {
	console.log(x)
}