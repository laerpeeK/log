function f(y) {
	return this.x + y
}

let o = {x: 1}
let g = f.bind(o)
console.log(g(2)) //3
let p = {x: 10, g}
console.log(p.g(2)) //3


//curry
let sum = (x, y) => x + y
let succ = sum.bind(null, 1)
console.log(succ(2))

function fx(y,z) {
	return this.x + y + z
}

let gx = fx.bind({x:1}, 2)
console.log(gx) //Function: bound fx
console.log(gx(3))