/*
方法2.重新比较连接数组

链表是排好顺序的，所以重复元素都会相邻出现 递归链表：

    1.当前节点或当前节点的next为空，返回该节点
    2.当前节点是重复节点：找到后面第一个不重复的节点
    3.当前节点不重复：将当前的节点的next赋值为下一个不重复的节点

时间复杂度：O(n)
空间复杂度：O(1)
	*/
function deleteDuplication(pHead) {
	if (!pHead || !pHead.next) {
		return pHead  
	} else if (pHead.val === pHead.next.val) {
		let tempNode = pHead.next
		while (tempNode && pHead.val === tempNode.val) {
			tempNode = tempNode.next
		}
		return deleteDuplication(tempNode)
	} else {
		pHead.next = deleteDuplication(pHead.next)
		return pHead
	}
}

