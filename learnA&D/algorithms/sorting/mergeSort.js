import Sort from './sort'

export default class MergetSort extends Sort {
	sort(originalArray) {
		this.callbacks.visitingCallback(null)
	
		if(originalArray.length <= 1) {
			return originalArray
		}

		const middleArray = Math.floor(originalArray.length / 2)
		const leftArray = originalArray.slice(0, middleIndex)
		const rightArray = originalArray.slice(middleIndex, originalArray.length)
		
		
	
	}
}