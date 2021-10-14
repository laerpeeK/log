/*
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

声明两个指针 P1 P2

    1.判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在

    2.从环内某个节点开始计数，再回到此节点时得到链表环的长度 length

    3.P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点

*/
function EntryNodeOfLoop (pHead) {
	if (!pHead || !pHead.next) {
		return null
	}
	let p1 = pHead.next
	let p2 = pHead.next.next

	//判断是否有环
	while (p1 !== p2) {
		if (p2 === null || p2.next === null) {
			return null
		}
		p1 = p1.next
		p2 = p2.next.next
	}

	//获取环的长度
	let temp = p1
	let length = 1
	p1 = p1.next
	while (temp !== p1) {
		p1 = p1.next
		length++
	}

	p1 = p2 = pHead
	while (length-- > 0) {
		p2 = p2.next
	}
	while (p1 !== p2) {
		p1 = p1.next
		p2 = p2.ext
	}
	return p1
}
