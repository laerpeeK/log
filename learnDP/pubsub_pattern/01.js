//全局对象
const events = {
	clientList: [],
	//key: 消息  //fn: 订阅者回调函数
	listen(key, fn) {
		if(!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn) //订阅的消息添加至缓存列表
	},
	trigger() {
		let key = Array.prototype.shift.call(arguments) //消息
		fns = this.clientList[key] //订阅者们

		if(!fns || fns.length === 0) {
			return false //如果没有绑定对应的消息
		}

		for(let i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments) //arguments时trigger时带上的参数
		}
	}
}

//给对象安装发布-订阅功能的函数
const installEvent = function(obj) {
	for(let i in events) {
		obj[i] = events[i]
	}
}

//取消订阅的事件
events.remove = function(key, fn) {
	let fns = this.clientList[key]

	if(!fns) {
		return false //如果key对应的消息没有被人订阅，则直接返回
	}

	if(!fn) {
		fns && (fns.length = 0) //如果没有传入具体的回调函数，标识需要取消key对应消息的所有订阅
	} else {
		for(let l = fns.length -1 ; l>=0; l--) {
			//反向遍历订阅的回调函数列表
			let _fn = fns[l]
			if(_fn === fn) {
				fns.splice(l,1) //删除订阅者的回调函数
			}
		}
	}
}

