/*
方法1.存储链表中元素出现的次数

    1.用一个map存储每个节点出现的次数
    2.删除出现次数大于1的节点

此方法删除节点时可以使用上面总结的办法。

时间复杂度：O(n)

空间复杂度：O(n)
*/

function deleteDuplication(pHead) {
	const map = {}
	if (pHead && pHead.next) {
		let current = pHead

		while(current) {
			const val = map[current.val]
			map[current.val] = val? val + 1: 1
			current = current.next
		}
		current = pHead
		while (current) {
			const val = map[current.val]
			if (val > 1) { //>1
				console.log(val)
				if (current.next) {
					current.val = current.next.val
					current.next = current.next.next //后移
				} else if (current === pHead) { //是头节点，且无后续
					current = null
					pHead = null
				} else { //尾节点
					current = pHead
					while (current.next.next) {
						current = current.next
					}
					current.next = null
					current = null
				}
			} else {
				current = current.next
			}
		}
	}
	return pHead
}