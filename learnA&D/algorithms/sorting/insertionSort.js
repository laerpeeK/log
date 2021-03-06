import Sort from './sort'

export default class InsertionSort extends Sort {
	sort(originalArray) {
		const array = [...originalArray]

		for(let i = 1; i < array.length; i += 1) {
			let currentIndex = i

			this.callbacks.visitingCallback(array[i])

			while(
				array[currentIndex - 1] !== undefined
				&& this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
			) {
				this.callbacks.visitingCallback(array[currentIndex -1])
				
				[
					array[currentIndex - 1],
					array[currentIndex]
				] = [
					array[currentIndex],
					array[currentIndex - 1]
				]
				currentIndex -= 1
			}
		}

		return array
	}
}