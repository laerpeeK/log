function classOf(o) {
	return Object.prototype.toString.call(o).slice(8, -1)
}

class Range {
	get [Symbol.toStringTag]() {
		return 'Range'
	}
}

let r = new Range()
console.log(classOf(r))