import DoublyLinkedListNode from './DoublyLinkedListNode'
import Comparator from '../../utils/Comparator'

export default class DoublyLinkedList {
	
	constructor(comparatorFunction) {
		this.head = null
		this.tail = null
		this.compare = new Comparator(comparatorFunction)
	}

	prepend(value) {
		const newNode = new DoublyLinkedListNode(value, this.head)
		if(this.head) {
			this.head.previous = newNode
		}

		if(!this.tail) {
			this.tail = new Node
		}

		return this
	}

	append(value) {
		const newNode = new DoublyLinkedListNode(value)

		if(!this.head) {
			this.head = newNode
			this.tail = newNode
			
			return this
		}

		this.tail.next = newNode
		newNode.previous = this.tail
		this.tail = newNode
		return this
	}

	delete(value) {
		if(!this.head) {
			return null
		}
		
		let deletedNode = null
		let currentNode = this.head

		while(currentNode) {
			if(this.compare.equal(currentNode.value, value)) {
				deletedNode = currentNode
				
				//要删除的是头节点
				if(deletedNode === this.head) {
					//设第二个节点为头节点
					this.head = deletedNode.next
					
					//存在>1个节点，头节点的previous节点设为Null
					if(this.head) {
						this.head.previous = null
					}
					
					//只有一个节点的话，尾节点也置为空
					if(deletedNode === this.tail) {
						this.tail = null
					}
				} else if(deletedNode === this.tail) { //要删除的是尾节点
					this.tail = deletedNode.previous
					this.tail.next = null
				} else {
					//要删除的是中间节点
					const previousNode = deletedNode.previous
					const nextNode = deletedNode.next
					
					previousNode.next = nextNode
					nextNode.previous = previousNode
				}
			}
			currentNode = currentNode.next
		}
		return deletedNode
	}

	find({value = undefined, callback = undefined}) {
		if(!this.head) {
			return null
		}

		let currentNode = this.head
		
		while(currentNode) {
			if(callback && callback(currentNode.value)) {
				return currentNode
			}

			if(value !== undefined && this.compare.equal(currentNode.value, value)) {
				return currentNode
			}

			currentNode = currentNode.next
		}

		return null
	}

	deleteTail() {
		//无节点
		if(!this.tail) {
			return null
		}
		
		//只有一个节点
		if(this.head === this.tail) {
			const deletedTail = this.tail
			this.head = null
			this.tail = null
			
			return deletedTail
		}

		//大于1个节点
		const deletedTail = this.tail
		this.tail = this.tail.previous
		this.tail.next = null
		return deletedTail
	}

	deleteHead() {
		if (!this.head) {
			return null
		} 
		
		const deletedHead = this.head

		if(this.head.next) {
			this.head = this.head.next
			this.head.previous = null
		} else {
			this.head = null
			this.tail = null
		}

		return deletedHead
	}

	toArray() {
		const nodes = []

		let currentNode = this.head
		while(currentNode) {
			nodes.push(currentNode)
			currentNode = currentNode.next
		}
		
		return nodes
	}

	//values: []  to this doublyLinkedList
	fromArray(values) {
		values.forEach((value) => this.append(value))
		return this
	}

	toString(callback) {
		return this.toArray().map((node) => node.toString(callback)).toString()
	}

	reverse() {
		let currNode = this.head
		let prevNode = null
		let nextNode = null

		while(currNode) {
			//存储当前节点的下一个节点
			nextNode = currNode.next
			prevNode = currNode.previous

			//将当前节点的下一个节点置为当前节点的上一个节点
			currNode.next = prevNode
			//将当前节点的上个节点置为当前节点的下一个节点
			currNode.previous = nextNode


			prevNode = currNode
			currNode = nextNode
		}

		this.tail = this.head
		this.head = prevNode //原先的尾节点，由上个while取得
		
		return this
	}
}