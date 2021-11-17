class AsyncQueue {
	constructor() {
		//已经入队尚未出队的值保存在这里
		this.values = []
		//如果期约出队时它们对应的值尚未入队
		//就把那些期约的解决方法保存在这里
		this.resolvers = []
		//一旦关闭，任何值都不能再入队，也不会再返回任何未兑现的期约
		this.closed = false
	}

	enqueue(value) {
		if (this.closed) {
			throw new Error('AsyncQueue closed')
		}

		if (this.resolvers.length > 0) {
			const resolve = this.resolvers.shift()
			resolve(value)
		} else {
			this.values.push(value)
		}
	}

	dequeue() {
		if (this.values.length > 0) {
			const value = this.values.shift()
			return Promise.resolve(value)
		} else if (this.closed) {
			return Promise.resolve(AsyncQueue.EOS)
		} else {
			return new Promise((resolve) => {
				this.reoslvers.push(resolve)
			})
		}
	}

	close() {
		while(this.resolvers.length > 0) {
			this.reoslvers.shift()(AsyncQueue.EOS)
		}
		this.closed = true
	}

	[Symbol.iterator]() {
		return this
	}

	next() {
		return this.dequeue().then(value => (value === AsyncQueue.EOS))?{value:undefined, done:true}:{value:value, done:false}
	}
}

AsyncQueue.EOS = Symbol('end-of-stream')

function eventStream(elt, type) {
	const q = new AsyncQueue()
	elt.addEventListener(type, e => q.enqueue(e))
	return q
}

async function handleKeys() {
	for await (const event of eventStream(document, 'keypress')) {
		console.log(event.key)
	}
}