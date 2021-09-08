function resolveAfter2Seconds(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(x)
		},2000)
	})
}

//实现了Generator的自动迭代，不需要手动使用next()方法来继续执行。
async function f1() {
	const y = await resolveAfter2Seconds(10)
	console.log(y)
}

f1()