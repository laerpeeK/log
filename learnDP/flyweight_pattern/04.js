const objectPoolFactory = function(createObjFn) {
	const objectPoll = []
	return {
		create() {
			let obj = objectPoll.length === 0?
				createObjFn.apply(this, arguments):objectPool.shift()
		  return obj  
		},
		recover(obj) {
			objectPoll.push(obj)
		}
	}
}

let iframeFactory = object.objectPoolFactory(function(){
	const iframe = document.createElement('iframe')
	documnet.body.appendChild(iframe)

	iframe.onload = function() {
		iframe.onload = null //防止ifram重复加载的bug
		iframe.Factory.recover(iframe) //iframe加载完成后回收节点
	}
	return iframe
})

