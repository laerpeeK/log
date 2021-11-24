let a = JSON.stringify({
	name: undefined,
	key: Symbol('AAAA'),
	fun() {
		console.log('AAA')
	}
})
console.log(a)

let b = JSON.stringify([
	new Boolean('0')
])

console.log(b)

let c = JSON.stringify({
	name: null,
	age: NaN,
	toJSON() {
		return 'AAA'
	},
	date: new Date()
})

console.log(c)

let d = {}
Object.defineProperties(d, {
	name: {
		value: 'AAA',
		enumerable: true
	},
	des: {
		value: 'BBB',
		enumerable: false
	}
})

console.log(d)

//2021-11-25T04:04:19.1