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