const modules = {}
function require(moduleName) {
	return modules[moduleName]
}

modules['sets.js'] = (function() {
	const exports = {}
	exports.BitSet = class BitSet {...}
	return exports
})()
module['stats.js'] = ()()

const stats = requrire('stats.js')
const BitSet = require('sets.js').BitSet
