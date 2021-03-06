/*
题目2-把二叉树打印成多行
从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

思路

    使用一个队列存储当前层遍历的节点
    使用两个变量来标记当前遍历的状态
    currentNums：当前层剩余的节点数
    childNums：孩子节点数
    当前层遍历完成后开始遍历孩子节点，currentNums赋值为childNums，childNums赋值为0
*/

function Print(root) {
	const result = []
	const queue = []
	let tempArr = []
	let currentNums = 1
	let childNums = 0

	if (root) {
		queue.push(root)
		while (queue.length > 0) {
			const current = queue.shift()
			if (current.left) {
				queue.push(current.left) 
				childNums++
			}
			if (current.right) {
				queue.push(current.right)
				childNums++   //childNums <= 2 
			}
			tempArr.push(current.val) //当前层
			currentNums--
			if (currentNums === 0) {
				currentNums = childNums
				childNums = 0
				result.push(tempArr)
				tempArr = []
			}
		}
	}
}