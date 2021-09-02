import Comparator from '../../utils/Comparator'

export default class Heap {
	constructor(comparatorFunction) {
		if(new.target === Heap) {
			throw new TypeError('Cannot construct Heap instance directly')
		}

		this.heapContainer = []
		this.compare = new Comparator(comparatorFunction)
	}


	//堆通常是一个可以被看做一棵完全二叉树的数组对象。
	getLeftChildIndex(parentIndex) {
		return (2 * parentIndex) + 1
	}

	getRightChildIndex(parentIndex) {
		return (2 * parentIndex) + 2
	}

	//向下取整，左子树索引<右子树索引
	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2)
	}

	//找得到父节点的索引
	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0
	}

	//2*parentIndex + 1 < this.heapContainer.length 
	//即, 左子节点索引小于尾索引
	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
	}

	//右子节点索引小于尾索引
	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.heapContainer.length
	}

	leftChild(parentIndex) {
		return this.heapContainer[this.getLeftChildIndex(parentIndex)]
	}

	rightChild(parentIndex) {
		return this.heapContainer[this.getRightChildIndex(parentIndex)]
	}

	parent(childIndex) {
		return this.heapContainer[this.getParentIndex(childIndex)]
	}

	//通过索引交换
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

	//
	poll() {
		if(this.heapContainer.length === 0) {
			return null
		}

		if(this.heapContainer.length === 1) {
			return this.heapContainer.pop()
		}

		const item = this.heapContainer[0]

		//移动最后的元素从尾部到头部
		this.heapContainer[0] = this.heapContainer.pop()
		this.heapifyDown()
		return item
	}

	add(item) {
		this.heapContainer.push(item)
		this.heapifyUp()
		return this
	}


	//查找堆中所有等于item的节点，返回一个数组
	find(item, comparator = this.compare) {		
		const foundItemIndices = []
		for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
			if(comparator.equal(item, this.heapContainer[itemIndex]))	{
				foundItemIndices.push(itemIndex)
			}
		}

		return foundItemIndices
	}

	remove(item, comparator = this.compare) {
		//查找所有要删除的节点的个数	
		const numberOfItemsToRemove = this.find(item, comparator).length
		for(let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
			//找到需要删除的节点的索引，因为每一次删除后的heapify都会让堆结构发生变化
			//从要删除的元素索引的数组里拿出最后一个索引
			const indexToRemove = this.find(item, comparator).pop()
			if(indexToRemove === (this.heapContainer.length -1)) {
				this.heapContainer.pop()
			} else {
				//如果删除的是中间的节点，需要做处理
				//移动最后一个节点到被删除节点的位置
				this.heapContainer[indexToRemove] = this.heapContainer.pop()
				//获取到当前被删除位置的父节点
				const paraentItem = this.parent(indexToRemove)
				//如果没有父节点或者父节点的次序正确，就进行向下的heapDown，否则向上heapify
				if(this.hasLeftChild(indexToRemove)
				&& (!parentItem||this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
				) {
					this.heapifyDowm(indexToRemove)
				} else {
					this.heapifyUp(indexToRemove)
				}
			}
		}
		return this
	}

	isEmpty() {
		return !this.heapContainer.length
	}

	toString() {
		return this.heapContainer.toString()
	}


	//检查堆元素对的顺序是否正确。 正确返回true
	//对于MinHeap，第一个节点必须始终较小或相等第二个节点。
	//对于MaxHeap，第一个节点必须始终大于或等于第二个节点。 
	//最大堆和最小堆的实现方式不同。
	
	pairIsInCorrectOrder(firstElement, secondElement) {
		throw new Error(`
			You have to implement heap pair comparision method
			for ${firstElement} and ${secondElement} values.
		`)
	}


	//新增节点使堆再次成为堆
	//新增节点
	heapifyUp(customStartIndex) {
		let currentIndex = customerStartIndex || this.heapContainer.length - 1// 当前最后一个节点索引
		while(
			this.hasParent(currentIndex)
			&& !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
			//当前节点有父节点，并且当前节点和父节点的次序不正确
			) {
			this.swap(currentIndex, this.getParentIndex(currentIndex))
			currentIndex = this.getParentIndex(currentIndex)
		}
	}

	//删除某一节点后，将堆再次形成堆
	//将父节点和子节点做比较后，将父节点和合适的子节点交换位置
	//最小堆就将父节点和最小的子节点交换位置
	//最大堆就将父节点和最大的子节点交换位置
	//上述交换完成后再对后面的子节点做同样的交换操作
	heapifyDown(customStartIndex = 0) {
		let currentIndex = customStartIndex //需要最先处理的节点的索引
		let nextIndex = null//下一个节点索引
		//当前节点还有左子节点时就继续循环
		while(this.hasLeftChild(currentIndex)) {
			if(
				//考虑右孩子节点
				this.hasRightChild(currentIndex)
				//如果当前节点也有右子节点，并且当前节点的左右两个子节点的次序是正确的
				&& this.pairIsInCorrectOrder(this.rightchild(currentIndex), this.leftChild(currentIndex))
			) {
				//那么下一个节点就是当前节点的右子节点
				nextIndex = this.getRightChildIndex(currentIndex)
			} else {
				//否则是左子节点
				nextIndex = this.getLeftChildIndex(currentIndex)
			}
			//考虑父子节点位置
			if(this.pairIsInCorrectOrder(
				this.heapContainer[currentIndex],
				this.heapContainer[nextIndex])) {
					//如果当前节点和下一个节点次序正确，跳出循环结束操作
					break
			}
			this.swap(currentIndex, nextIndex) 
			currentIndex = nextIndex
		}
	}


}	