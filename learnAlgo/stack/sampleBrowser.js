const stack = require('./stackBasedOnLinkedList')

class SampleBrowser {
	constructor() {
		this.normalStack = new stack.CreatedStack()
		this.backStack = new stack.CreatedStack()
	}

	pushNormal(name) {
		this.normalStack.push(name)
		this.backStack.clear()
		this.displayAllStack()
	}

	back() {
		const value = this.normalStack.pop()
		if (value !== -1) {
			this.backStack.push(value)
			this.displayAllStack()
		} else {
			console.log('无法后退')
		}
	}

	front() {
		const value = this.backStack.pop()
		if (value !== -1) {
			this.normalStack.push(value)
			this.displayAllStack()
		} else {
			console.log('无法前进')
		}
	}

	displayAllStack() {
		console.log('---后退页面---')
		this.backStack.display()
		console.log('---浏览页面---')
		this.normalStack.display()
	}
}