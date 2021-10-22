/*
求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？

为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
但是对于后面问题他就没辙了。

ACMer希望你们帮帮他,并把问题更加普遍化,
可以很快的求出任意非负整数区间中1出现的次数（从1 到n中1出现的次数）。




    注意：11算出现了两个1

分别计算数字中每个位置可能出现1的情况，相加。

将数字分为两部分： 当前数字为1，其后面数字可能出现的情况low，当前数字为1，其前面数字可能出现的情况high，所有情况为low * high种情况。

例如，在分析数字8103时：

    个位 3: 个位已经是最低位了，所以low只有1中情况。high可以取0 - 810共811种情况，所有情况为1 * 811 = 811种情况。

    十位 0: low可能为10 - 19共10种情况，high可以取0 - 80共81种情况，所有情况为81 * 10 = 810种情况。

    百位 1: low可能为100 - 199共100种情况，high可以取0 - 7共8种情况;当high取8时，low还可以取100 - 104，所有情况为100 * 8 + 4 = 804种情况。

    千位 8:low可能为1000 - 1999共1000种情况，当前已经是最高位了，high只有一种情况，所有情况为1000 * 1 = 1000种情况。

*/
function NumberOf1Between1AndN_Solution(n) {
	let count = 0
	let i = 1
	let high = low = current = level = 0
	let length = n.toString().length
	while (i <= length) {
		level = Math.pow(10, i - 1)
		high = parseInt(n / (level * 10))
		low = n % level
		current = parseInt(n / level) % 10
		if (current === 0) {
			count += (high * level)
		} else if (current === 1) {
			count += (high * level + low + 1)
		} else {
			count += ((high+1) * level)
		}
		i++
	}
	return count
}