function trace(o, m) {
	let original = o[m]
	o[m] = function (...args) {
		console.log(new Date(), 'Entering:', m)
		let result = original.apply(this, args)
		console.log(new Date(), 'Exiting:', m)
		return result
	}
}