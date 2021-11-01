function isArrayLike(o) {
	if (o && typeof o === 'object' && Number.isFinite(o.length) && o.length >=0 && Number.isInteger(o.length) && o.length && o.length < 4294967295)  {
		return true
	} else {
		return false
	}
}