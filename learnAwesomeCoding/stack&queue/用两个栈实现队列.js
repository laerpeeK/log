//用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
/*
栈1:
用于入队列存储

栈2:
出队列时将栈1的数据依次出栈，并入栈到栈2中
栈2出栈即栈1的底部数据即队列要出的数据。
*/
const stack1 = []
const stack2 = []

function push(node) {
	stack1.push(node)
}

function pop() {
	if(stack2.length === 0) {
		while(stack1.length >0) {
			stack2.push(stack1.pop())
		}
	}
	return stack2.pop() || null
}