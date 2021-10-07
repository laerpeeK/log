/*
给定一个二叉树和其中的一个节点，请找出中序遍历顺序的下一个结点并且返回。
注意，树中的结点不仅包含左右子结点，同时包含指向父节点的指针。

*/

/*function TreeLinkNode(x) {
	this.val = x
	this.left = null
	this.right = null
	this.next = null //指向父节点
}*/

function GetNext(pNode) { //遍历到当前节点时，下个节点有不同情况
	if (!pNode) {
		return null
	}
	if (pNode.right) { //中序遍历
		pNode = pNode.right
		while (pNode.left) {
			pNode = pNode.left  
		}
		return pNode //如果当前节点有右子节点，返回左遍历终点的节点
	} else {  
		//当前节点无右子节点的情况

		while (pNode) {  
			if (!pNode.next) {  
				return null //根节点
			} else if (pNode === pNode.next.left) { //当前节点为左子节点
				return pNode.next //返回父节点
			}
			//当前节点为右子节点时，回溯，取最近的 节点是其父节点左子节点的父节点
			pNode = pNode.next 
		}
		return pNode 
	}
}