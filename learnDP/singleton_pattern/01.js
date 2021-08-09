
//管理单例的职责
let getSingle = function(fn) {
	let result
	return function() {
		return result || (result = fn.apply(this, arguments))
	}
}


//创建实例对象的职责
let createLoginLayer = function() {
	let div = document.createElement('div')
	div.innerHTML = '我是登录浮窗'
	div.style.display = 'none'
	document.body.appendChild(div)
}

let createSingleLoginLayer = getSingle(createLoginLayer)



