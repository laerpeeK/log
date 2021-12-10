class HashTableBaseMap {
	constructor() {
		this.store = new Map()
	}

	hash(string) {
		let len = string.length
		let hash = len
		for (let i = 0; i < len; i++) {
			hash = ((hash) << 5)^ (hash >> 27) ^ string.charCodeAt(i)
		}
		return hash & 0x7FFFFFFF
	}

	isCresh(item) {
		return Object.prototype.toString.call(item) === '[object Map]' 
	}

	put(item) {
		if (typeof item.key !== 'string') {
			throw 'item must have key!'
		}
		let hash = this.hash(item.key)
		let cresh = this.store.get(hash)
		if(cresh) {
			if (cresh.key === item.key) {
				this.store.set(hash, item)
				return 
			}

			if (!this.isCresh(cresh)) {
				this.store[hash] = new Map()
			}
			this.store[hash].set(item.key, item)
		} else {
			this.store.set(hash, item)
		}
	}

	get(key) {
		let hash = this.hash(key)
		let value = this.store.get(hash)
		if (this.isCresh(value)) {
			return value.get(key)
		} else {
			return value
		}
	}

	remove(key) {
		let hash = this.hash(key)
		let value = this.store.get(hash)
		if (!value) {
			return null
		}
		if (this.isCresh(value)) {
			value.delete(key)
		} else {
			this.store.delete(hash)
		}
	}

	clear() {
		this.store = {}
	}

	print() {
		this.store.forEach(element => {
			if (this.isCresh(element)) {
				element.forEach(item => {
					console.log(item)
				})
			} else {
				console.log(element)
			}
		})
	}
}