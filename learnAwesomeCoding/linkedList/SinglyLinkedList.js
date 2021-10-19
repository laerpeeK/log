function Node(element) {
	this.element = element
	this.next = null
}

function LinkedList() {
	this.head = new Node('head')
}

LinkedList.prototype.findByValue = function(item) {
	let currentNode = this.head.next
	while (currentNode !== null && currentNode.element !== item) {
		currentNode = currentNode.next
	}
	console.log(currentNode)
	return currentNode === null? -1:currentNode
}

LinkedList.prototype.findByIndex = function(index) {
	let currentNode = this.head.next
	let pos = 0
	while (currentNode !== null && pos !== index) {
		currentNode = currentNode.next
		pos++
	}
	console.log(currentNode)
	return currentNode === null? -1:currentNode
}

LinkedList.prototype.append = function(newElement) {
	const newNode = new Node(newElement)
	let currentNode = this.head
	while (currentNode.next) {
		currentNode = currentNode.next
	}
	currentNode.next = newNode
}

LinkedList.prototype.insert = function(newElement, element) {
	const currentNode = this.findByValue(element)
	if (currentNode === -1) {
		console.log('未找到插入位置')
		return
	}
	const newNode = new Node(newElement)
	newNode.next = currentNode.next
	currentNode.next = newNode
}

LinkedList.prototype.findPrev = function(item) {
	let currentNode = this.head
	while (currentNode.next !== null && currentNode.next.element !== item) {
		currentNode = currentNode.next
	}
	if (currentNode.next === null) {
		return -1
	}
	console.log(currentNode)
	return currentNode
}

LinkedList.prototype.remove = function(item) {
	const prevNode = this.findPrev(item)
	if (prevNode === -1) {
		console.log('未找到元素')
		return
	}
	prevNode.next = prevNode.next.next
}

LinkedList.prototype.display = function () {
	let currentNode = this.head.next
	while (currentNode !== null) {
		console.log(currentNode.element)
		currentNode = currentNode.next
	}
}

const list = new LinkedList()
list.append('chen')
list.append('curry')
list.append('sang')
list.append('zhao')
list.display()
console.log('------------------')
list.insert('qian', 'chen') // 首元素后插入
list.insert('zhou', 'zhao') // 尾元素后插入
list.display()
console.log('-------------------')
list.remove('curry')
list.display()
console.log('--------------------')
list.findByValue('chen')
list.findByValue('zxxxxx')
console.log('--------------------')
list.findByIndex(2)
console.log('--------------------')
list.insert('head', 'sang')
list.display()
console.log('--------------------')
list.findPrev('head')
list.remove('head')
list.display()