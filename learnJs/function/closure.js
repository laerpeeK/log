let scope = 'global scope'
function checkscope() {
	let scope = 'local scope'
	function f() {
		//return this == global true
		return scope //local scope
	}
	return f()
}

console.log(checkscope())