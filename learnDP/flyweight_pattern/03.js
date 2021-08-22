let Upload = function(uploadType) {
	this.UploadType = uploadType
}

Upload.prototype.delFile = function(id) {
	//给共享对象设置正确的fileSize
	UploadManager.setExternalState(id, this)

	if(this.fileSize < 3000) {
		return this.dom.parentNode.removeChild(this.dom)
	}

	if(window.confirm('确定要删除该文件吗？'+this.fileName)) {
		return this.dom.parentNode.removeChild(this.dom)
	}
}

//创建upload对象
const UploadFactory = (function(){
	const createdFlyWeightObjs = {}
	return {
		create(UploadType) {
			if(createdFlyWeightObjs[UploadType]) {
				return createdFlyWeightObjs[UploadType]
			}
			return createdFlyWeightObjs[UploadType] = new Upload(UploadType)
		}
	}
})()

//负责人向UploadFactory提交创建对象的请求，并用一个uploadDatabase对象
//保存所有upload对象的外部状态，以便在程序允许过程中给upload共享对象设置外部状态
const uploadManager = (function(){
	const UploadDatabase = {}
	return {
		add(id, UploadType, fileName, fileSize) {
			const flyWeightObj = UploadFactory.create(UploadType)
			const dom = document.createElement('div')
			dom.innerHTML = 
			'<span>文件名称：'+fileName+', 文件大小：'+fileSize+'</span>'
			'<button class="delFile">删除</button>'
			dom.querySelector('.delFile').onclick = function() {
				flyWeightObj.delFile(id)
			}
			document.body.appendChild(dom)
			UploadDatabase[id] = {
				fileName,
				fileSize,
				dom
			}
			return flyWeightObj
		},
		setExternalState(id, flyWeightObj) {
			let UploadData = uploadDatabase[id]
			for(let i in UploadData) {
				flyWeightObj[i] = UploadData[i]
			}
		}
	}
})()

let id = 0
window.startUpload = function(uploadType, files) {
	for(let i = 0, file; file = files[i++];) {
		let UploadObj = UploadManager.add(++id, UploadType, file.fileName, file.fileSize)
	}
}

