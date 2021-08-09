var strategies = {
	isNotEmpty(value, errorMsg) {
		if(value === '') {
			return errorMsg
		}
	},
	minLength(value, length, errorMsg) {
		if(value.length < length) {
			return errorMsg
		}
	},
	isMobile(value, errorMsg) {
		if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
			return errorMsg
		}
	}
}

//context
const validateFunc = function() {

	//创建一个validator对象
	let validator = new Validator()
 
	//添加一些校验规则
	validator.add(registerForm.userName, 'isNotEmpty', '用户名不能为空')
	validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位')
	validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确')

	//获得校验结果
	const errorMsg = validator.start()
	//返回校验结果
	return errorMsg
}

const registerForm = document.getElementById('registerForm')
registerForm.onSubmit = function() {
	const errorMsg = validateFunc()
	//未通过校验，errMsg有值
	if(errorMsg) {
		alert(errorMsg)
		return false
	}
}

//Validator
const Validator = function() {
	//保存校验规则
	this.cache = []
}


Validator.prototype.add = function(dom, rule, errorMsg) {
	//把strategy和参数分开
	const ary = rule.split(':')
	//把校验的步骤用空函数包装起来，并且放入cache
	this.cache.push(function() {
		//用户挑选的strategy
		const strategy = ary.shift()
		//把input的value添加进参数列表
		ary.unshift(dom.value)
		//把errorMsg添加进参数列表
		ary.push(errorMsg)
		return strategies[strategy].apply(dom, ary)
	})
}

Valiadator.prototype.start = function() {
	for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
		//开始校验，并取得校验后的返回信息
		const msg = validatorFunc()
		//如果有确切的返回值，说明校验没有通过
		if(msg) {
			return msg
		}
	}
}



