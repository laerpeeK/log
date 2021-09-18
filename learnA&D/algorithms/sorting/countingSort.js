import Sort from './sort'

export default class CountingSort extends Sort {
	sort(originalArray, smallestElement = undefiend, biggestElement = undfined) {

		//初始化数组中的最大和最小元素，以便以后构建数字桶数组。  //[0, 1, 3, 4, 1]
		let detectedSmallestElement = smallestElement || 0   
		let detectedBiggestElement = biggestElement || 0   

		if(smallestElement === undefined || biggestElement === undefined) {
			originalArray.forEach((element) => {
				this.callbacks.visitinCallback(element)

				if(this.comparator.greaterThan(element, detectedBiggestElement)) {
					detectedBiggestElement = element //4
				}

				if(this.comparator.lessThan(element, detectedSmallestElement)) {
					detectedSmallestElement = element  //0
				}
			})


		}

		//初始化桶数组
		//此数组将保存原始数组中每个数字的频率。
		const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0)  [0,0,0,0,0]

		originalArray.forEach((element) => { []
			this.callbacks.visitinCallback(element)
			
			//?
			buckets[element - detectedSmallestElement] += 1 //[1,2,,1,1]
		})

		//为bucket中的每个数字将以前的频率添加到当前频率，
		//以检测当前频率左侧应该有多少小于当前频率的数字。
		for(let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex+=1) {
			buckets[bucketIndex] += buckets[bucketIndex - 1] //[1,3,3,4,5]
		}

		//现在让我们把频率移到右边，让它们显示正确的数字。
		//如果我们不右移，bucket的值[5]将显示在排序数组（包括第5个）中，
		//5个以下的元素应该放在5的左边。在转换后，虽然这个数字将不再包括第5位。
		buckets.pop() //[1,3,3,4]
		buckets.unshift(0) //[0 , 1, 3, 3, 4]

		//现在让我们组装排序数组。
		const sortedArray = Array(originalArray.length).fill(null)  //[null, null, null, null, null]


		for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex +=1) { //[0, 1, 3, 4, 1]
			//获取要放入正确排序位置的元素。
			const element = originalArray[elementIndex]	 //0
			
			//Visit element
			this.callbacks.visitinCallback(element)

			//获取此元素在排序数组中的正确位置。
			const elementSortedPosition = buckets[element - detectedSmallestElement]  //0,1,1,3,4

			sortedArray[elementSortedPosition] = element  //[0,1,3,4]

			buckets[element - detectedSmallestElement] += 1 
		}

		return sortedArray

	}
}