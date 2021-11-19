console.log(Object.getOwnPropertyDescriptor({x:1}, "x")) 
 //{ value: 1, writable: true, enumerable: true, configurable: true }



const random = {
	get octet() {
		return Math.floor(Math.random()*256)
	}
}

console.log(Object.getOwnPropertyDescriptors(random, 'octet'))  
/* 
{
  octet: {
    get: [Function: get octet],
    set: undefined,
    enumerable: true,
    configurable: true
  }
}
*/

let o = {}
Object.defineProperty(o, "x", {
	value: 1,
	writable: true,
	enumerable: false,
	configurable: true
})
console.log(o.x)
console.log(Object.keys(o))
Object.defineProperty(o, "x", {
	get: function() {
		return 0
	},
	enumerable: true
})

console.log(o.x)

let p = Object.defineProperties({}, {
	x: {value: 1, writable: true, enumerable: true, configurable: true},
	y: {value: 1, writable: true, enumerable: true, configurable: true},
	r: {
		get() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		enumerable: true,
		configurable: true
	}
})

console.log(p.r)