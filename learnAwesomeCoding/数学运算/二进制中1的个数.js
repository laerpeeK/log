/*
题目

输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

我们可以让目标数字和一个数字做与运算
这个用户比较的数字必须只有一位是1其他位是0，
这样就可以知道目标数字的这一位是否为0。
所以用于比较的这个数字初始值为1，
比较完后让1左移1位，这样就可以依次比较所有位是否为1。
*/
function NumberOf1(n) {
	let flag = 1	
	let count = 0
	while (flag) {
		if(flag & n) {
			count++
		}
		flag = flag << 1
		console.log(flag)
	}
	return count
}

console.log(NumberOf1(1))