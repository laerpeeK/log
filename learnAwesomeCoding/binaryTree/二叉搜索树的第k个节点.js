/*
给定一棵二叉搜索树，请找出其中的第k小的结点。
例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4
思路：
	二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。
*/
function KthNodeRecusive(pRoot, k) {
	const arr = []
	loopThroughRecusive(pRoot, arr)
	if (k>0 && k <= arr.length) {
		return arr[k - 1]
	}
	return null
}

function loopThroughRecusive(node, arr) {
	if (node) {
		loopThrough(node.left, arr)
		arr.push(node)
		loopThrough(node.right, arr)
	}
}



function KthNode(pRoot, k) {
	const arr = []
	const stack = []
	let current = pRoot
	while (stack.length > 0 || current) {
		while (current) {
			stack.push(current)
			current = current.left
		}
		current = stack.pop() //无左子节点
		arr.push(current)//中序遍历
		current = current.right
	}
	if(k >0 && k <= arr.length) {
		return arr[k - 1]
	}
	return null
}