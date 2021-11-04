let scope = 'global'
function constructFunction() {
	let scope = 'local'
	return new Function('return scope')
}

console.log(constructFunction()()) //global