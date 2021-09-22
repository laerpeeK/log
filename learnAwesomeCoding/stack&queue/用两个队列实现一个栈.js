const queue1 = []
const queue2 = []

//队列：先入先出
//栈：先入后出
//1，2，3
function push(x) {
	if(queue1.length === 0) {
		queue1.push(x) 
	
		while(queue2.length) {
			queue1.push(queue2.shift()) //3 2 1
		}
	} else if (queue2.length === 0) {
		queue2.push(x) //2 1

		while (queue1.length) {
			queue2.push(queue1.shift())
		}
	}
}

function pop() {
	if(queue1.length !== 0) {
		return queue1.shift()
	} else {
		return queue2.shift()
	}
}

