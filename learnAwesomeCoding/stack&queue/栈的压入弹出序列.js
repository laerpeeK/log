/*
输入两个整数序列，
第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。

1.借助一个辅助栈来模拟压入、弹出的过程。

2.设置一个索引idx，记录popV（出栈序列）栈顶的位置

3.将pushV（压入顺序）中的数据依次入栈。

4.当辅助栈栈顶元素和压popV栈顶元素相同时，辅助栈出栈。每次出栈索引idx+1。

5.出栈有可能在任意一次入栈后进行，当辅助栈栈顶元素和压popV栈顶元素相同时，继续让pushV入辅助栈。

6.当所有数据入栈完成，如果出栈顺序正确，那么辅助栈应该为空。

*/
function IsPopOrder(pushV, popV) {
	//异常退出
	if (!pushV || !popV || pushV.length === 0 || popV.length === 0) {
		return
	}

	//pushV:压入序列 1 2 3 4 5  popV:弹出序列 4 5 3 2 1
	const stack = [] //辅助栈
	let idx = 0
	for(let i = 0; i < pushV.length; i++) {
		stack.push(pushV[i]) //1 2 3  5
		while (stack.length && stack[stack.length -1] === popV[idx]) {
			stack.pop()
			idx++ //2 3 4 5
		}
	}
	return stack.length === 0
}
