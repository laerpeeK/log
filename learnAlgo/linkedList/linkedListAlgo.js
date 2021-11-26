import {Node, LinkedList} from './singlyLinkedList'
class newLinkedList extends LinkedList {
	constructor() {
		super()
	}
	reverseList() {
		const root = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			const next = currentNode.next
			currentNode.next = root.next
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}
}
