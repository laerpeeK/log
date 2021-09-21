/*
请实现一个函数用来匹配包括'.'和''的正则表达式。
 模式中的字符'.'表示任意一个字符，而''表示它前面的字符可以出现任意次（包含0次）。

思路

当模式中的第二个字符不是“*”时：

    1、如果字符串第一个字符和模式中的第一个字符相匹配，那么字符串和模式都后移一个字符，然后匹配剩余的。
    2、如果 字符串第一个字符和模式中的第一个字符相不匹配，直接返回false。

而当模式中的第二个字符是“*”时：

    如果字符串第一个字符跟模式第一个字符不匹配，则模式后移2个字符，继续匹配。

如果字符串第一个字符跟模式第一个字符匹配，可以有3种匹配方式：

    1、模式后移2字符，相当于x*被忽略；
    2、字符串后移1字符，模式后移2字符；
    3、字符串后移1字符，模式不变，即继续匹配字符下一位，因为*可以匹配多位；
 */
function match(s, pattern) {
	if (s == undefined || pattern == undefined) { 
		return false
	} 
	return matchStr(s, pattern, 0, 0) //从头开始匹配
}

function matchStr(s, pattern, sIndex, patternIndex) {
	if (sIndex === s.length && patternIndex === pattern.length) {  //长度均为0，匹配成功
		return true
	}

	if (sIndex !== s.length && patternIndex === pattern.length) { //不匹配
		return false
	}

	if(patternIndex + 1 < pattern.length && pattern[patternIndex+1] === '*') { //*表示它前面的字符可以出现任意次（包含0次）。
		//如果字符串第一个字符跟模式第一个字符匹配
		if(sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) { 
			return matchStr(s, pattern, sIndex, patternIndex + 2) ||  //模式后移2字符，相当于x*被忽略
				matchStr(s, pattern, sIndex+1, patternIndex + 2) ||  //字符串后移1字符，模式后移2字符
				matchStr(s, pattern, sIndex+1, patternIndex) //字符串后移1字符，模式不变，即继续匹配字符下一位，因为*可以匹配多位
		} else {
			//如果字符串第一个字符跟模式第一个字符不匹配，则模式后移2个字符，继续匹配。
			return matchStr(s, pattern, sIndex, patternIndex +2)
		}
	}

	if(sIndex < s.length && (s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
		return matchStr(s, pattern, sIndex + 1, patternIndex+1)
	}
	return false
}