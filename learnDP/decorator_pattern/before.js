Function.prototype.before = function(beforeFn) {
	const _self = this
	return function() {
		beforefn.apply(this, arguments)
		return _self.apply(this, arguments)
	}
}

