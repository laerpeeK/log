const miniConsole = (function(){
	const cache = []
	const handler = function(ev) {
		if(ev.keyCode === 113) {
			let script = document.createElement('script')
			script.onload = function() {
				for(let i = 0, fn; fn = cache[i++];) {
					fn()
				}
			}
			script.src = 'miniConsole.js'
			document.getElementsByTagName('head')[0].appendChild(script)
			document.body.removeEventListener('keydown', handler)
		}
	}

	document.body.addEventListener('keydown', handler, false)

	return {
		log() {
			let args = arguments
			cache.push(function() {
				return miniConsole.log.apply(miniConsole, args)
			})
		}
	}
})()

