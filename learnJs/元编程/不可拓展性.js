let o = Object.seal(Object.create(Object.freeze({x:1}), {y:{value:2, writable: true}}))
o.y = 3
o.x = 2
console.log(o.y, o.x) //3 1

let oP = {x:1}
let pP = {y:2}
Object.setPrototypeOf(oP, pP)
console.log(oP.y) //2 
console.log(pP.isPrototypeOf(oP)) //true


