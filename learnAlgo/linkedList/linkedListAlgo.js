import {Node, LinkedList} from './singlyLinkedList'
class newLinkedList extends LinkedList {
	constructor() {
		super()
	}

	//单链表反转

	//时间复杂度On,空间复杂度O1
	reverseList() {
		const root = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			const next = currentNode.next
			currentNode.next = root.next  //巧妙之处
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}


	//环验证
	//时间复杂度On,空间复杂度O1
	checkCircle() {
		let fast = this.head.next
		let slow = this.head
		while (fast !== null && fast.next !== null) {
			fast = fast.next.next
			slow = slow.next
			if (fast === slow) return true
		}
		return false
	}

	//删除倒数第k个节点
	//时间复杂度0n,空间复杂度O1
	removeByIndexFromEnd(index) {
		if (this.checkCircle()) return false
		let pos = 1
		this.reverseList()
		let currentNode = this.head.next
		while (currentNode !== null && pos < index) {
			currentNode = currentNode.next
			pos++
		}
		if (currentNode === null) {
			return false
		}
		this.remove(curretNode.element)
		this.reverseList()
	}
}
