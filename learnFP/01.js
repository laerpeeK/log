function foo(x = 3) {
	console.log(x)
}

foo() //3
foo(undefined) //3
foo(null) //null
foo(0) //0


