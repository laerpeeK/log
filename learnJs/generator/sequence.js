function* sequence(...iterables) {
	console.log(iterables)
	for(let iterable of iterables) {
		for(let item of iterable) {
			yield item
		}
	}
}

console.log([...sequence('abc',[2,3,4,5])])