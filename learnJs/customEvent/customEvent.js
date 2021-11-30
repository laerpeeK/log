document.dispatchEvent(new CustomElement('busy', {detail: true}))

fetch(url)
	.then(handleNetWorkResponse)
	.catch(handleNetWorkError)
	.finally(() => {
		document.dispatchEvent(new CustomElement('busy', {detail: false}))
	})

	document.addEventListener('busy', (e) => {
		if (e.detail) {
			showSpinner()
		} else {
			hideSpinner()
		}
	})