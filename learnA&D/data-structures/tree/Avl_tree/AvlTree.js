import BinarySearchTree from '../binary_search_tree/BinarySearchTree'

export default class AvlTree extends BinarySearchTree {
	
	insert(value) {
		//调用父类二叉搜索树的插入方法插入节点
		super.insert(value)

		//移除根节点沿着顺序检查平衡因子
		let currentNode = this.root.find(value) //找到刚才被插入的节点
		while(currentNode) {
			this.balance(currentNode) //调用balance方法使当前节点平衡，然后当前节点赋值为父节点
																//继续循环
			currentNode = currentNode.parent
		}
	}

	//在AVL树中删除节点
	remove(value) {
		//调用父类二叉搜索树的删除方法删除节点
		super.remove(value)
		//从根节点开始做平衡操作
		this.balance(this.root)
	}

	balance(node) {
		//如果当前节点的平衡因子>1， 说明不平衡了
		if(node.balanceFactor > 1) {
			if (node.left.balanceFactor > 0) {
				this.rotateLeftLeft(node) //右旋
			} else if (node.left.balanceFactor < 0) {
				this.rotateLeftRight(node)
			}
		} else if (node.balanceFactor < -1) {
			if(node.right.balanceFactor < 0) {
				this.rotateRightRight(node)
			} else if (node.right.balanceFactor > 0) {
				this.rotateRightLeft(node)
			}
		}
	}


	//向左子树L的左孩子L中插入新节点导致不平衡，需要右旋操作
	rotateLeftLeft(rootNode) {
	
		const leftNode = rootNode.left
		rootNode.setLeft(null)
	
		if (rootNode.parent) {
			rootNode.parent.setLeft(leftNode)
		} else if (rootNode === this.root) {
			this.root = leftNode
		}

		if(leftNode.right) {
			rootNode.setLeft(leftNode.right)
		}

		leftNode.setRight(rootNode)
	}

	//往左子树的右孩子节点插入新节点导致不平衡，
	rotateLeftRight(rootNode) {
		const leftNode = rootNode.left
		rootNode.setLeft(null)

		const leftRightNode = leftNode.right
		leftNode.setRight(null)

		if(leftRightNode.left) {
			leftNode.setRight(leftRightNode.left)
			leftRightNode.setLeft(null)
		}

		rootNode.setLeft(leftRightNode)

		leftRightNode.setLeft(leftNode)

		this.rotateLeftLeft(rootNode)
	}

	//往右子树的左孩子节点插入新节点导致不平衡，
	rotateRightLeft(rootNode) {
		const rightNode = rootNode.right
		rootNode.setRight(null)

		const rightLeftNode = rightNode.left
		rightNode.setleft(null)

		if(rightLeftNode.right) {
			rigthNode.setLeft(rightLeftNode.right)
			rightLeftNode.setRight(null)
		}

		rootNode.setRight(rightLeftNode)

		rightLeftNode.setRight(rightNode)

		this.rotateRightRight(rootNode)
	}

	//往右字树的右孩子节点插入新节点，导致不平衡，需要左旋操作
	rotateRightRight(rootNode) {
		const rightNode = rootNode.right
		rootNode.setRight(null)

		if(rootNode.parent) {
			rootNode.parent.setRight(rightNode)
		} else if (rootNode === this.root) {
			this.root = rightNode
		}

		if(rightNode.left) {
			rootNode.setRight(rightNode.left)
		}

		rightNode.setLeft(rootNode)
	}

}