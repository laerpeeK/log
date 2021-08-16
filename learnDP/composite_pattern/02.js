const Folder = function(name) {
	this.name = name
	this.parent = null
	this.files = []
}

Folder.prototype.add = function(file) {
	file.parent = this
	this.files.push(file)
}

Folder.prototype.scan = function() {
	console.log('开始扫描文件夹：'+this.name)
	for(let i = 0, file, files = this.files; file = files[i++];) {
		file.scan()
	}
}

Folder.prototype.remove = function() {
	if(!this.parent) { //根节点或树外的游离节点
		return
	}
	for( let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
		let file = files[l]
		if(file === this) {
			file.splice(l, 1)
		}
	}
}

let File = function(name) {
	this.name = name
	this.parent = null
}

File.prototype.add = function() {
	throw new Error('不能添加在文件下面')
}

File.prototype.scan = function() {
	console.log('开始扫描文件：'+this.name)
}

File.prototype.remove = function() {
	if(!this.parent) {
		return
	}
	for(let files = this.parent.files, l = files.length -1; l >= 0; l--) {
		let file = files[l]
		if(file === this ) {
			files.splice(l, 1)
		}
	}
}

