/*
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
思路：
    前序遍历找到根结点root
    找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
    截取左子树的中序遍历、右子树的中序遍历
    截取左子树的前序遍历、右子树的前序遍历
    递归重建二叉树

*/
function reConstructBinaryTree(pre, vin) {
	if (pre.length === 0) {
		return null
	}
	if (pre.length === 1) {
		return new TreeNode(pre[0])
	}

	const value = pre[0]
	const index = vin.indexOf(value)
	
	const vinLeft = vin.slice(0, index)
	const vinRight = vin.slice(index+1)

	const preLeft = pre.slice(1,index+1)
	const preRight = pre.slice(index+1)

	const node = new TreeNode(value)
	node.left = reConstructBinaryTree(preLeft, vinLeft)
	node.Right = reConstructBinaryTree(preRight, vinRight)
	return node
}

/*
给定一棵二叉树的前序遍历和中序遍历，求其后序遍历


    前序遍历找到根结点root
    找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
    截取左子树的中序遍历、右子树的中序遍历
    截取左子树的前序遍历、右子树的前序遍历
    递归拼接二叉树的后序遍历

*/
let pre
let vin

while ((pre = readline()) !== null) {
	vin = readline()
	print(getHRD(pre, vin))
}

function getHRD(pre, vin) {
	if (!pre) {
		return ''
	}
	if (pre.length === 1) {
		return pre
	}
	
	const head = pre[0]
	const splitIndex = vin.indexOf(head)
	const vinLeft = vin.subString(0, splitIndex)
	const vinRight = vin.subString(splitIndex + 1)
	const preLeft = pre.subString(1, splitIndex + 1)
	const preRight = pre.subString(splitIndex + 1)
	return getHRD(preLeft, vinLeft) + getHRD(preRight, vinRight) + head
}