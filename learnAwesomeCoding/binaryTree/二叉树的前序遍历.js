const preorderTraversalRecursive = function (root, array = []) {
	if (root) {
		arry.push(root.val)
		preorderTraversalRecursive(root.left, array)
		preorderTraversalRecursive(root.right, array)
	}
	return array
}

/*

    取根节点为目标节点，开始遍历
    1.访问目标节点
    2.左孩子入栈 -> 直至左孩子为空的节点
    3.节点出栈，以右孩子为目标节点，再依次执行1、2、3

*/

const preorderTraversal = function (root) {
	const result = []
	const stack = []
	let current = root
	while (current || stack.length > 0) { //stack.length>0 说明还没有遍历完
		while (current) {
			result.push(current.val)
			stack.push(current)
			current = current.left
		}
		current = stack.pop()
		current = current.right
	}
	return result
}


