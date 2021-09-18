import Sort from '../sorting/sort'

export default class CountingSort extends Sort {
	
	sort(originalArray, smallestElement = undfined, biggestElement = undfined) {
		let detectedSmallestElement = smallestElement || 0
		let detectedBiggestElement = biggestElement || 0

		if(smallestElement === undefined || biggestElement === undefined) {
			originalArray.forEach((element) => {
				this.callbacks.visitingCallback(element)

				if (this.comparator.greaterThan(element, detectedBiggestElement)) {
					detectedBiggestElement = element
				}

				if(this.comparator.lessThan(element, detectedSmallestElement)) {
					detectedSmallestElement = element
				}
			})
		}

		const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0)

		originalArray.forEach((element) => { //[1,3,4,1,5]
			this.callbacks.visitingCallback(element)

			buckets[element - detectedSmallestElement] += 1 //递增  [2, ,1,1,1]
		})
		
		for(let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex++) {
			buckets[bucketIndex] += buckets[bucketIndex - 1]  //[2,2,3,4,5]
		}

		buckets.pop()															
		buckets.unshift(0)  //比它小的频率从而排序  //buckets:[0,2,2,3,4] ---
		const sortedArray = Array(originalArray.length).fill(null)

		for(let elementIndex = 0; elementIndex < originalArray.length; elementIndex++) {
			const element = originalArray[elementIndex] //1, 3, 4, 1, 5

			this.callbacks.visitingCallback(element)

			const elementSortedPosition = buckets[element - detectedSmallestElement] //0 2 3 1 4

			sortedArray[elementSortedPosition] = element //1,1,3,4,5 

			buckets[element - detectedSmallestElement] += 1
		}

		return sortedArray
	}
}