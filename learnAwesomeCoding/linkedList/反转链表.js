/*
输入一个链表，反转链表后，输出新链表的表头。

思路

以链表的头部节点为基准节点

将基准节点的下一个节点挪到头部作为头节点

当基准节点的next为null，则其已经成为最后一个节点，链表已经反转完成
*/
const reverseList = function (head) {
	let currentNode = null
	let headNode = head 
	while (head && head.next) {
		currentNode = head.next //2
		head.next = currentNode.next //1 -> 3
		currentNode.next = head //2 -> 1 -> 3
		headNode = currentNode  //2
	}
	return headNode
}