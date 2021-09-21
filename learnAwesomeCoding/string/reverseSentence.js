//题目1：输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
function ReverseSentence(str) {
	if(!str) {
		return ''
	} 
	return str.split(' ').reverse().join(' ')
}

//题目2：左旋转字符串:字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
function LeftRotateString(str, n) {
	if(str && n != null) {
		return (str+str).substr(n, str.length) //开始位置和长度
	} else {
		return ''
	}
}