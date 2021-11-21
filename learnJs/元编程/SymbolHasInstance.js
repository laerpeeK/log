let uint8 = {
	[Symbol.hasInstance](x) {
		return Number.isInteger(x) && x>=0 && x <=255 
	}
}

console.log(128 instanceof uint8)