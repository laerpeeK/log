/*
将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，
但是string不符合数字要求时返回0)，
要求不能使用字符串转换整数的库函数。 
数值为0或者字符串不是一个合法的数值则返回0。

循环字符串：当前值*10相加，循环时看每一项是否合法，最后根据首位符号判断正负

主要考虑编写代码的严谨性，需要判断以下异常情况

    1.输入为空
    2.有无符号 正负

*/
function StrToInt(str) {
	if (str === undefined || str === '') {
		return 0
	}
	const first = str[0]
	let i = 1
	let int = 0
	if (first >= 0 && first <= 9) {
		int = first
	} else if (first !== '-' && first !== '+') {
		return 0
	}
	while (i < str.length) {
		if (str[i] >= 0 && str[i] <= 9) {
			int = int*10 + (str[i]-0)
			i++
		} else {
			return 0
		}
	}
	return first === '-'? 0-int : int
}