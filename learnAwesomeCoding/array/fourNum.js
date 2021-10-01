/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在四个元素 a，b，c，d ，使得 a + b + c + d = 0 ？找出所有满足条件且不重复的四元组。

注意：答案中不可以包含重复的四元组。

到这里其实我们就能发现一些规律，我们可以像三数之和那样，我们可以通过大小指针来逼近结果，从而达到降低一层时间复杂度的效果。

*/

const fourSum = function (nums,target) {
	if (nums.length < 4) {
		return []
	}
	nums.sort((a, b) => a - b)
	const result = []
	for (let i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		if (nums[i] + nums[i + 1] + nums[i + 2] +nums[i + 3] > target) {
			break
		}
		for(let j = i + 1; j < nums.length - 2; j++) {
			if (j > i + 1 &&  nums[j] === nums[j - 1]) {
				continue;
			}
			let left = j + 1,
					right = nums.length - 1
			while (left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right]
				if(sum === target) {
					result.push([nums[i], nums[j], nums[left], nums[right]])
				}
				if(sum <= target) {
					while (nums[left] === nums[++left]);
				}else {
					while (nums[right] === nums[--right]);
				}
			}
		}
	}
	return result
}