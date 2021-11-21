let arraylike = {
	length: 1,
	0: 1,
	[Symbol.isConcatSpreadable]: true
}

console.log([].concat(arraylike))
