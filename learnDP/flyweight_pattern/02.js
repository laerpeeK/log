let id = 0
window.startUpload = function(uploadType, files) {
	for(let i = 0, file; file = files[i++];) {
		let uploadObj = new Upload(uploadType, file.fileName, file.fileSize)
		uploadObj.init(id++)
	}
}

const Upload = function(uploadType, fileName, fileSize) {
	this.uploadType = uploadType
	this.fileName = fileName
	this.fileSize = fileSize
	this.dom = null
}

Upload.prototype.init = function(id) {
	const that = this
	this.id = id
	this.dom = document.createElement('div')
	this.dom.innerHTML = '<span>文件名称'+this.fileName+', 文件大小：'+this.fileSize+'</span>'+ '<button class = "delFile">删除</button>'

	this.dom.querySelector('.delFile').onclick = function() {
		this.deleFile()
	}
	document.body.appendChild(this.dom)
}

Upload.prototype.delFile = function() {
	if(this.fileSize < 3000) {
		return this.dom.parentNode.removeChild(this.dom)
	}
	if(window.confirm('确定要删除文件吗？'+this.fileName)) {
		return this.dom.parentNode.removeChild(this.dom)
	}
}
