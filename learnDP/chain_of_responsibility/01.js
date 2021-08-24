const order500 = function(orderType, pay, stock) {
	if(orderType === 1 && pay === true) {
		console.log('500元定金预购，得到100优惠券')
	} else {
		return 'nextSuccessor'
	}
}

const order200 = function(orderType, pay, stock) {
	if(orderType === 2 && pay === true) {
		console.log('200元定金预购，得到50优惠券')
	} else {
		return 'nextSuccessor'
	}
}

const orderNormal = function(orderType, pay, stock) {
	if(stock > 0) {
		console.log('普通购买，无优惠券')
	} else {
		console.log('手机库存不足')
	}
}

//Chain.prototype.setNextSuccessor 指定在链中的下一个节点
//Chain.prototype.passRequest 传递请求给某个节点
//Chain类来把普通函数包装成职责链的节点
const Chain = function(fn) {
	this.fn = fn
	this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
	return this.successor = successor
}

Chain.prototype.passRequest = function() {
	let ret = this.fn.apply(this, arguments)
	if(ret === 'nextSuccessor') {
		return this.successor && this.successor.passRequest.apply(this.successor, arguments)
	}
	return ret
}

//节点有权利决定什么时候把请求交给下一个节点。
Chain.prototype.next = function() {
	return this.successor && this.successor.passRequest.apply(this.successor, arguments)
}

//将订单函数包装成职责链的节点
const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

//指定节点在职责链中的顺序
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(2, true, 500)

//变动时仅增加一个节点，然后重新设置链中相关节点的顺序。