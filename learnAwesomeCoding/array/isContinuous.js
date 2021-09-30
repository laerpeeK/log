/*
扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。

2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。


    1.数组排序
    2.遍历数组
    3.若为0，记录0的个数加1
    4.若不为0，记录和下一个元素的间隔
    5.最后比较0的个数和间隔数，间隔数>0的个数则不能构成顺子
    6.注意中间如果有两个元素相等则不能构成顺子

*/

function isContinuous (numbers) {
	if(numbers && numbers.length > 0) {
		numbers.sort()
		let kingNum = 0
		let spaceNum = 0
		for (let i = 0; i < numbers.length - 1; i++) {
			if(numbers[i] === 0) {
				kingNum++ //大小王
			} else {
				const space = numbers[i + 1] - numbers[i] 
				console.log(space)
				if(space === 0) { //出现重复
					return false
				} else {
					spaceNum += space - 1  //连续 = 0
				}
			}
		}
		return kingNum - spaceNum >= 0 //spaceNum  间隔数 > 0的个数 则不能构成顺子 
	}
	return false
}
console.log(isContinuous([1,2,0,4,5])) //0 1 2 4 5
