import Comparator from '../../utils/Comparator'
import LinkedListNode from './LinkedListNode'

//链表类
export default class LinkedList {
	constructor(comparatorFunction) {
		this.head = null
		this.tail = null
		this.compare = new Comparator(comparatorFunction)
	}

	//在链表头部添加一个节点
	prepend(value) {
		const newNode = new LinkedListNode(value, this.head)
		this.head = newNode
		if (!this.tail) {
			this.tail = newNode
		}
		return this
	}
  
	//在链表尾部添加一个节点
	append(value) {
		const newNode = new LinkedListNode(value)

		if (!this.head) {
			this.head = newNode
			this.tail = newNode
			return this
		}

		this.tail.next = newNode
		this.tail = newNode
		
		return this

	}

	//删除链表中值为value的节点
	delete(value) {
		if (!this.head) {
			return null
		}
		let deletedNode = null
		
		while (this.head && this.compare.equal(this.head.value, value)) {
			deleteNode = this.head
			this.head = this.head.next
		}

		let currentNode = this.head

		if (currentNode !== null) {
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deleteNode = currentNode.next
					currentNode.next = currentNode.next.next
				} else {
					currentNode = currentNode.next
				}
			}
		}

		if (this.compare.equal(this.tail.value, value)) {
			this.tail = currentNode
		}
		//返回的是最后一个值为value的要删除的节点
		return deletedNode 
	}

	//如果指定了回调，则尝试通过回调查找节点，否则查找值为value的节点
	find({ value = undefined, callback = undefined }) {
		if (!this.head) {
			return null
		}
		let currentNode = this.head

		while (currentNode) {
			if( callback && callback(currentNode.value)) {
				return currentNode
			}

			if (value !== undefined && this.compare.equal(currentNode.value, value)) {
				return currentNode
			}

			currentNode = currentNode.next
		}

		return null
	}

	//删除尾节点
	deleteTail() {
		const deletedTail = this.tail
		
		if (this.head === this.tail) {
			this.head = null
			this.tail = null

			return deletedTail
		}

		let currentNode = this.head
		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null
			} else {
				currentNode = currentNode.next
			}
		}

		this.tail = currentNode
		return deleteTail
	}

	//删除头部节点
	deleteHead() {
		if (!this.head) {
			return null
		}
		const deletedHead = this.head

		if (this.head.next) {
			this.head = this.head.next
		} else {
			this.head = null
			this.tail = null
		}

		return deletedHead
	}

	//以数组中的值来添加节点
	fromArray(values) {
		values.forEach((value) => this.append(value))
		return this
	}

	//将链表转换为数组
	toArray() {
		const nodes = []
		let currentNode = this.head
		while (currentNode) {
			nodes.push(currentNode)
			currentNode = currentNode.next
		}
		return nodes
	}

	//将链表转换为字符串
	toString(callback) {
		return this.toArray().map((node) => node.toString(callback)).toString()
	}
	
	//反转链表
	reverse() {
		let currNode = this.head
		let prevNode = null
		let nextNode = null

		while (currNode) {
			nextNode = currNode.next

			currNode.next = prevNode
			prevNode = currNode

			
			currNode = nextNode
		}

		this.tail = this.head
		this.head = prevNode

		return this

	}
}

