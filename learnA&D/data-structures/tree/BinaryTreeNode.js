import Comparator from '../../utils/Comparator'
import HashTable from '../hash-table/HashTable'

//二叉树节点类
export default class BinaryTreeNode {
	constructor(value = null) {
		this.left = null
		this.right = null
		this.parent = null
		this.value = value

		//任何与节点相关的元信息都可以存储在这里
		this.meta = new HashTable()

		//此比较器用于比较二叉树节点之间的差异
		this.nodeComparator = new Comparator()		
	}

	get leftHeight() {
		if(!this.left) {
			return 0
		}

		return this.left.height + 1
	}

	get rightHeight() {
		if(!this.right) {
			return 0
		}
		return this.right.height + 1
	}

	get height() {
		return Math.max(this.leftHeight, this.rightHeight)
	}

	get blanceFactor() {
		return this.leftHeight - this.rightHeight
	}

	get uncle() {
		if(!this.parent) {
			return undefined
		}

		if(!this.parent.parent) {
			return undefined
		}

		if(!this.parent.parent.left || this.parent.parent.right) {
			return undefined
		}

		//通过上述判断，我们知道当前节点有祖父母节点且祖父母节点有两个孩子节点，
		//接着找谁是它的同代节点
		if(this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
			return this.parent.parent.right
		}

		return this.parent.parent.left
	}

	setValue(value) {
		this.value = value
		return this
	}

	setLeft(node) {
		if (this.left) {
			this.left.parent = null
		}

		this.left = node

		if(this.left) {
			this.left.parent = this
		}

		return this
	}

	setRight(node) {
		if(this.right) {
			this.right.parent = null
		}

		this.right = node

		if(node) {
			this.right.parent = this
		}

		return this
	}

	removeChild(nodeToRemove) {
		if(this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
			this.left = null
			return true
		}

		if(this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
			this.right = null
			return true
		}

		return false
	}

	replaceChild(nodeTOReplace, replacementNode) {
		if(!nodeToReplace || !replacementNode) {
			return false
		}

		if(this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
			this.left = replacementNode
			return true
		}

		if(this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
			this.right = replacementNode
			return true
		}

		return false
	}

	static copyNode(sourceNode, targetNode) {
		targetNode.setValue(sourceNode.value)
		targetNode.setLeft(sourceNode.left)
		targetNode.setRight(sourceNode.right)
	}

	traverseInOrder() {
		let traverse = []

		if(this.left) {
			traverse = traverse.concat(this.left.traverseInorder())
		}

		traverse.push(this.value)

		if(this.right) {
			traverse = traverse.concat(this.right.traverseInOrder())
		}
		
		return traverse
	}

	toString() {
		return this.traverseInOrder().toString()
	}
}