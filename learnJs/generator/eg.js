function* oneDigitPrimes() {
	yield 2
	yield 3
	yield 5
	yield 7
}

let primes = oneDigitPrimes()

console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().value)
console.log(primes.next().done)

const seq = function* (from, to) {
	for(let i = from; i <= to; i++) yield i
}

console.log([...seq(3,5)])

let o = {
	x:1,
	y:2,
	z:3,
	*g() {
		for(let key of Object.keys(this)) {
			yield key
		}
	}
}

console.log([...o.g()])