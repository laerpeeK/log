/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

使用一个map将遍历过的数字存起来，值作为key，下标作为值。

对于每一次遍历：

    取map中查找是否有key为target-nums[i]的值
    如果取到了，则条件成立，返回。
    如果没有取到，将当前值作为key，下标作为值存入map

*/

const twoNum = function (nums, target) {
	const map = {}
	if (Array.isArray(nums)) {
		for(let i = 0; i < nums.length; i++) {
			if(map[target - nums[i]] !== undefined) {
				return [map[target - nums[i]], i]
			} else {
				map[nums[i]] = i
			}
		}
	}
	return []
}