//请实现一个函数用来找出字符流中第一个只出现一次的字符。
//例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
//当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
//如果当前字符流没有存在出现一次的字符，返回#字符。

//解法：
/*
创建一个长度为256的数组container来标记字符流中字符出现的次数
使用字符ASCII码作为下标，这样数组长度最大为256
当字符没有出现过，标记为-1
当字符只出现一次，标记为字符在字符流中的位置index
当字符出现多次时，标记为-2
当调用FirstAppearingOnce时，只需要找到，数组值大于-1的且值最小的位置索引，即为第一个出现次数为1的字符
*/

let container = new Array(256).fill(-1) 
let index = 0

function Init() {
	container = new Array(256).fill(-1) //标记字符流中字符出现次数
	index = 0 
}

function Insert(ch) {
	const code = ch.charCodeAt(0)
	if(container[code] === -1) { //code:字符的unicode编码
		container[code] = index //字符在字符流中的位置
	} else if (container[code] >= 0) {
		container[code] = -2
	}
	index++
}

function FirstAppearingOnce() {
	let minIndex = 256
	let strIndex = 0
	for (let i = 0; i < 256; i++) {
		if(container[i] >= 0 && container[i] < minIndex) { //>0：说明为出现一次， <minIndex 说明要更新最小位置索引
			minIndex = container[i] //最小位置索引
			strIndex = i //字符的unicode编码
		}
	}
	return minIndex === 256? '#': String.fromCharCode(strIndex) //数组长度默认为256， !=256说明有出现一次的字符，将字符的unicode编码转化为字符
}
