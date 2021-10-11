/*
输入一个复杂链表（每个节点中有节点值，以及两个指针，
一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。

思路

拆分成三步

1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N,
把N直接放在N的next位置，让复制后的链表和原始链表组成新的链表。

2.给复制的链表random赋值，即N.random=N.random.next。

3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。
*/
function Clone(pHead) {
	if (pHead === null) {
		return null
	}
	cloneNodes(pHead)
	cloneRandom(pHead)
	return reconnectNodes(pHead)
}

//复制一份链表放在前一个节点后面
function cloneNodes(pHead) {
	let current = pHead
	while (current) {
		let cloneNode = {
			label: current.label,
			next: current.next
		}
		current.next = cloneNode
		current = cloneNode.next
	}
}

function cloneRandom(pHead) {
	let current = pHead
	while (current) {
		let cloneNode = current.next
		if (current.random) {
			cloneNode.random = current.random.next
		} else {
			cloneNode.random = null
		}
	}
}

function reconnectNodes(pHead) {
	let cloneHead = pHead.next
	let cloneNode = pHead.next
	let current = pHead
	while (current) {
		current.next = cloneNode.next //1->3
		current = cloneNode.next //3
		if (current) {
			cloneNode.next = current.next //2->4
			cloneNode = current.next //4
		} else {
			cloneNode.next = null
		}
	}
	return cloneHead
}
