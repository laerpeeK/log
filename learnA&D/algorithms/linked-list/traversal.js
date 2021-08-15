
//顺序遍历链表的节点
export default function traversal(linkedList, callback) {
	let currentNode = linkedList.head

	while(currentNode) {
		callback(currentNode.value)
		currentNode = currentNode.next
	}
}

