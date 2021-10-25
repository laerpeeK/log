/*
队头指针在队尾指针的下一位置时，队满。 Q.front == (Q.rear + 1) % MAXSIZE
因为队头指针可能又重新从0位置开始，而此时队尾指针是MAXSIZE - 1，所以需要求余。
当队头和队尾指针在同一位置时，队空。 Q.front == Q.rear;
*/

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
			const flag = this.head === this.tail
			this.tail.next = new Node(value)
			this.tail.next.next = this.head
			this.tail = this.tail.next
			if(flag) {
				this.head.next = this.tail
			}
		}
	}

	dequeue() {
		if(this.head === null) return -1
		if(this.head === this.tail) {
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
		console.log('---获取dequeue元素---')
		while(res !== -1) {
			res = this.dequeue()
			console.log(res)
		}
	}
}
const newCircularQueue = new CircularQueue()
// 插入元素
newCircularQueue.enqueue(1)
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
// 获取元素
newCircularQueue.display()