/*
1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.

2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.

3.数据栈出栈，最小值栈也出栈。

4.这样最小值栈的栈顶永远是当前栈的最小值。

*/

const dataStack = []
const minStack = []

function push(code) {
	dataStack.push(code)
	if(minStack.length === 0 || node < min()) {
		minStack.push(node)
	} else {
		minStack.push(min())
	}
}


function pop() {
	minStack.pop()
	return dataStack.pop()
}

function top() {
	const length = dataStack.length
	return length > 0 && dataStack[length -1]
}

function min() {
	const length = minStack.length
	return length > 0 && minStack[length - 1]
}


