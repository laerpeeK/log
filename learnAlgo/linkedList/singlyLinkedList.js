class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = new Node('head')
	}

	findByValue(item) {
		let currentNode = this.head.next
		while (currentNode !== null && currentNode.element !== item) {
			currentNode = currentNode.next
		}
		return currentNode === null? -1:currentNode
	}

	findByIndex(idx) {
		let currentNode = this.head.next
		let pos = 0
		while (currentNode !== null && pos !== idx) {
			currentNode = currentNode.next
			pos++
		}
		return currentNode === null? -1:currentNode
	}

	append(newElement) {
		const newNode = new Node(newElement)
		let currentNode = this.head
		while (currentNode.next) {
			currentNode = currentNode.next
		}
		currentNode.next = newNode
	}

	insert(newElement, element) {
		const currentNode = this.findByValue(element)
		if (currentNode === -1) {
			return
		}
		const newNode = new Node(newElement)
		newNode.next = currentNode.next
		currentNode.next = newNode
	}

	findPrev(item) {
		let currentNode = this.head
		while (currentNode.next !== null && currentNode.next.element !== item) {
			currentNode = currentNode.next
		}
		if (currentNode.next === null) {
			return -1
		}
		return currentNode
	}

	remove(item) {
		const prevNode = this.findPrev(item)
		if (preNode === -1) {
			return
		}
		prevNode.next = prevNode.next.next
	}

	display() {
		let currentNode = this.head.next
		while (currentNode !== null) {
			console.log(currentNode.element)
			currentNode = currentNode.next
		}
	}
}

export {
	Node,
	LinkedList
}