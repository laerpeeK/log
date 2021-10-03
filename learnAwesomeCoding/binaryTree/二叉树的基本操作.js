/*
1.第n层的节点数最多为2n个节点

2.n层二叉树最多有2^0+...+2^n=2^(n+1)-1个节点

3.第一个非叶子节点：length/2

4.一个节点的孩子节点：2n、2n+1
*/

//插入，遍历，深度
function Node(data, left, right) {
	this.data = data
	this.left = left
	this.right = right
}

Node.prototype = {
	show() {
		console.log(this.data)
	}
}

function Tree() {
	this.root = null
}

Tree.prototype = {
	insert(data) {
		const node = new Node(data, null, null)
		if(!this.root) {
			this.root = node
			return
		}

		let current = this.root
		let parent = null

		while (current) {
			parent = current
			if  (data < parent.data) {
				current = current.left
				if(!current) {
					parent.left = node
					return
				}
			} else {
				current = current.right
				if (!current) {
					parent.right = node
					return
				}
			}
		}
	},

	//先序遍历
	preOrder(node) {
		if (node) {
			node.show()
			this.preOrder(node.left)
			this.preOrder(node.right)
		}
	},

	//中序遍历
	middleOrder(node) {
		if (node) {
			this.middleOrder(node.left)
			node.show()
			this.middleOrder(node.right)
		}
	},

	//后序遍历
	laterOrder(node) {
		if (node) {
			this.laterOrder(node.left)
			this.laterOrder(node.right)
			node.show()
		}
	},

	//获取树中data最小的节点
	getMin() {
		let current = this.root
		while (current) {
			if (!current.left) {
				return current
			}
			current = current.left
		}
	},

	//获取树中data最大的节点
	getMax() {
		let current = this.root
		while (current) {
			if (!current.right) {
				return current
			}
			current = current.right
		}
	},

	//获取树的最大深度
	getDeep(node, deep) {
		deep = deep || 0
		if (node === null) {
			return deep
		}
		deep++
		let dleft = this.getDeep(node.left, deep)
		let dright = this.getDeep(node.right, deep)
		return Math.max(dleft, dright)
	},

	//树查找
	getNode(data, node) {
		if (node) {
			if (data === node.data) {
				return node
 			} else if (data < node.data) {
				 return this.getNode(data, node.left)
			 } else {
				 return this.getNode(data, node.right)
			 }
		} else {
			return null
		}
	}

}


//二分查找
function binarySearch (data, arr, start, end) {
	if (start > end) {
		return -1
	}
	const mid = Math.floor((end + start) / 2)
	if(data === arr[mid]) {
		return mid
	} else if (data < arr[mid]) {
		return binarySearch(data, arr, start, mid)
	} else {
		return binarySearch(data, arr, mid+1, end)
	}
}

