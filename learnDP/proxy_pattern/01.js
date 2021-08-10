//给img标签设置src属性的接口
const myImage = (function() {
	const imgNode = document.createElement('img')
	document.body.appendChild('imgNode')
	return {
		setSrc(src) {
			imgNode.src = src
		}
	}
})()

//通过虚拟代理实现图片预加载
const proxyImage = (function() {
	const img = new Image
	img.onload = function() {
		myImage.setSrc(this.src)
	}
	return {
		setSrc(src) {
			myImage.setSrc('file://xxxxx')
			img.src = src
		}
	}
})()
