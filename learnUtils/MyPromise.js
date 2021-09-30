class MyPromise {
	constructor(executor) {
		this.state = 'pending'
		this.value = undefined
		this.reason = undefined
		this.onResolvedCallback = []
		this.onRejectedCallback = []

		let resolve = (value) => {
			if(this.state === 'pending') {
				this.state ='fullFilled'
				this.value = value
				this.onResolvedCallback.forEach(fn => fn(this.value))
			}
		}

		let reject = (reason) => {
			if(this.state === 'pending') {
				this.state = 'rejected'
				this.reason = reason
				this.onRejectedCallback.forEach(fn => fn(this.reason))
			}
		}

		try {
			executor(resolve, reject)
		} catch(reason) {
			reject(reason)
		}
	}

	then(onFulFilled, onRejected) {
		
		if(this.state === 'fullFilled')	{
			onFulFilled(this.value)
		}

		if(this.state === 'rejected') {
			onRejected(this.reason)
		}

		if(this.state === 'pending') {
			this.onResolvedCallback.push(onFulFilled)

			this.onRejectedCallback.push(onRejected)
		}

	}	

}

const p = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve(1)
	},0) //一定会由时间间隔
})

p.then(
	(value) => {
		console.log('value', value)
	},
	(reason) => {
		console.log('reason', reason)
	}
)
