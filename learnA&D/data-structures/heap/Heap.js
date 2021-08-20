import Comparator from '../../utils/Comparator'

export default class Heap {
	constructor(comparatorFunction) {
		//new.target属性允许你检测函数或构造方法是否是通过new运算符调用的。
		//在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。
		//在普通的函数调用中，new.target 的值是undefined。
		if(new.target === Heap) {
			throw new TypeError('Cannot construct Heap instance directly')
		}
		
		this.heapContainer = []
		this.compare = new Comparator(comparatorFunction)
	}


	getLeftChildIndex(parentIndex) {
		return (2 * parentIndex) + 1
	}

	getRightChildIndex(parentIndex) {
		return (2 * parentIndex) + 2
	}

	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2)
	}

	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0
	}

	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.heapContainer.length	
	}

	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.heapContainer.length
	}

	leftChild(parentIndex) {
		return this.heapContainer[this.getLeftChildIndex(parentIndex)]
	}

	rightChild(parentIndex) {
		return this.heapContainer[this.getRightChildIndex(parentIndex)]
	}

	parentIndex(childIndex) {
		return this.heapContainer[this.getParentIndex(childIndex)]
	}


	swap(indexOne, indexTwo) {
		const tmp = this.heapContainer[indexTwo]
		this.heapContainer[indexTwo] = this.heapContainer[indexOne]
		this.heapContainer[indexOne] = tmp
	}

	peek() {
		if(this.heapContainer.length === 0) {
			return null
		}
		return this.heapContainer[0]
	}

	poll() {
		if(this.heapContainer.length === 0) {
			return null
		}
		if(this.heapContainer.length === 1) {
			return this.heapContainer.pop()
		}
		const item = this.heapContainer[0]
	
	  this.heapContainer[0] = this.heapContainer.pop()
		this.heapifyDown()
		
		return item
	}

	add(item) {
		this.heapCotainer.push(item)
		this.heapifyUp()
		return this
	}
	//未完待续

}