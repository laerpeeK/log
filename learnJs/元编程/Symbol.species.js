class EZArray extends Array {
	static get [Symbol.species]() {
		return Array
	}
	get first() {
		return this[0]
	}

	get last() {
		return this[this.length - 1]
	}
}

let e = new EZArray(1,2,3)
let f = e.map(x => x - 1)
console.log(f.last)