// function resolveAfter2Seconds(x) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(x)
// 		},2000)
// 	})
// }

// //实现了Generator的自动迭代，不需要手动使用next()方法来继续执行。
// async function f1() {
// 	const y = await resolveAfter2Seconds(10)
// 	console.log(y)
// }

// f1()

async function foo() {
	console.log(1)
	//默认创建一个Promise对象，
	//然后 JavaScript 引擎会暂停当前协程的执行，将主线程的控制权转交给父协程执行，同时会将 promise_ 对象返回给父协程。
	//
	let a = await 100
	console.log(a)
	console.log(2)
}
console.log(0)
let result = foo()
console.log(result) // {< pending >}
//主线程的控制权已经交给父协程了，这时候父协程要做的一件事是调用 promise_.then 来监控 promise 状态的改变。
console.log(3)
//随后父协程将执行结束，在结束之前，会进入微任务的检查点，然后执行微任务队列，微任务队列中有resolve(100)的任务等待执行，执行到这里的时候，会触发 promise_.then 中的回调函数
//该回调函数被激活以后，会将主线程的控制权交给 foo 函数的协程，并同时将 value 值传给该协程。
//foo 协程激活之后，会把刚才的 value 值赋给了变量 a，然后 foo 协程继续执行后续语句，执行完成之后，将控制权归还给父协程。
