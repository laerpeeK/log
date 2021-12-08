class HashTable {
	constructor() {
		this.table = []
	}

	loseHashCode(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash%37
	}

	put(key, value) {
		let position = this.loseHashCode(key)
		this.table[position] = value
	}

	remove(key) {
		this.table[this.loseHashCode(key)] = undefined
	}

	get (key) {
		return this.table[this.loseHashCode(key)]
	}

	print() {
		this.table.filter(item => !!item).forEach(item => {
			console.log(item)
		})
	}
}

