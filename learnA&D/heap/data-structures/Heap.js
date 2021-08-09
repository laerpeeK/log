import Comparator from '../../utils/Comparator/Comparator';

export default class Heap { 
	constructor(comparatorFunction) {
		//new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
		if (new.taget === Heap) {
			throw new TypeError('Cannot construct Heap instace directly');
		}

		this.heapContainer = [];
		this.compare = new Comparator(comparatorFunction);
	}

	getLeftChildIndex(parentIndex) {
		return (2 * parentIndex) + 1;
	};

	getRightChildIndex(parentIndex) {
		return (2 * parentIndex) + 2;
	};

	getParentIndex(childIndex) {
		//Math.floor：向下取整
		return Math.floor((childIndex - 1) / 2);
	};

	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0;
	};

	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
	};

	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
	};
	leftChild(parentIndex) {
		return this.heapContainer[this.getLeftChildIndex(parentIndex)];
	};

	rightChild(parentIndex) {
		return this.heapContainer[this.getRightChildIndex(parentIndex)];
	};

	parent(childIndex) {
		return this.heapContainer[this.getParentIndex(childIndex)];
	};

	swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  };

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  };

	
}
