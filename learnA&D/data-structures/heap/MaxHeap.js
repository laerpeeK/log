import Heap from './Heap'
export default class MaxHeap extends Heap {
	pairISInCorrectOrder(firstElement, secondElement) {
		return this.compare.greaterThanOrEqual(fistElement, secondElement)
	}
}