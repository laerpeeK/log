const synchronousFile = function(id) {
	console.log('开始同步文件， id为：' +id)
}

const proxySynchronousFile = (function() {
	//保存一段时间内需要同步的ID
	let cache = []
	//定时器
	let timer

	return function(id) {
		cache.push(id)
		if(timer) { //保证不会覆盖已经启动的定时器
			return
		}

		timer = setTimeout(function() {
			synchronousFile(cache.join(',')) //2s后向本体发送需要同步的ID集合
			clearTimeout(timer) //清空定时器
			timer = null
			cache.length = 0 //清空ID集合
		}, 2000)
	}
})()


//实例
const checkbox = document.getElemnentsByTagName('input')

for(let i = 0, c; c = checkbox[i++];) {
	c.onclick = function() {
		if(this.checked === true) {
			proxySynchronousFile(this.id)
		}
	}
}

