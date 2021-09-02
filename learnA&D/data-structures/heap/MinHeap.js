import Heap from './Heap'
export default class MinHeap extends Heap {
	pairISInCorrectOrder(firstElement, secondElement) {
		return this.compare.lessThanOrEqual(firstElement, secondElement)
	}
}