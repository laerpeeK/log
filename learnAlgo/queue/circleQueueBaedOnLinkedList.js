class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

class CircularQueue {
	constructor() {
		this.head = null
		this.tail = null
	}

	enqueue(value) {
		if (this.head === null) {
			this.head = new Node(value)
			this.head.next = this.head
			this.tail = this.head
		} else {
			const flag = this.head === this.tail //只有一个元素
			this.tail.next = new Node(value) 
			this.tail.next.next = this.head
			this.tail = this.tail.next
			if (flag) {
				this.head.next = this.tail
			}
		}
	}

	dequeue() {
		if (this.head === null) return -1
		if (this.head === this.tail) {
			const value = this.head.element
			this.head = null
			return value
		} else {
			const value = this.head.element
			this.head = this.head.next
			this.tail.next = this.head
			return value
		}
	}

	display() {
		let res = 0
		console.log('----获取dequeue元素----')
		while (res !== -1) {
			res = this.dequeue()
			console.log(res)
		}
	}
}