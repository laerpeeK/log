Function.prototype.after = function(fn) {
	const self = this
	return function() {
		const ret = self.apply(this, arguments)
		if(ret === 'nextSuccessor')
			return fn.apply(this, arguments)
	}
}