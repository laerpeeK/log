function getCurrentVersionNumber(versionCallback) {
	let request = new XMLHttpRequest()
	request.open('GET','http://www.example.com/api/version')
	request.send()

	request.onload = function() {
		if(request.status === 200) {
			let currentVersion = parseFloat(request.responseText)
			versionCallback(null, currentVersion)
		} else {
			versionCallback(this.responseText, null)
		}
	}

	request.onerror = function(e) {
		versionCallback(e.type, null)
	}
}

