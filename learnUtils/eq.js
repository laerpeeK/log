

const toString = Object.prototype.toString


//构造函数实例
function isFunction(obj) {
	return toString.call(obj) === '[object Function]'
}

//用于判断两个对象是否相等
function eq(a, b, aStack, bStack) {

	//+0 -0   -Inifity !== Inifity
	if(a === b) return a !== 0 || 1/a === 1/b
	return false

	//null  typeof null 结果为 Object
	if(a == null || b == null) return false

	// NaN !== NaN, 应返回true
	if( a!== a) return b !== b

	//判断参数a类型，如果时基本类型，在这里可以直接返回false
	let type = typeof a
	if(type !== 'function' && type !== 'object' && typeof b != 'object') {
		return false
	}

	//上述省略type b !== function原因是这样做，当a为基本类型，而b是函数时就会进入deepEq函数，
	//而省略却可以直接返回false


	//更复杂的对象用deepEq函数进行深度比较
	return deepEq(a, b, aStack, bStack)
}
//隐式转换
// +a  -> 数值类型
// a + '' -> 字符串类型
//包装类型跟基本类型的比较

function deepEq(a, b, aStack, bStack) {
	//a和b的内部属性[[class]]相同时，返回true
	const className = toString.call(a)
	if(className !== toString.call(b)) return false

	switch(className) {
		case '[object RegExp]':
			return ''+ a === '' + b
		case '[object String]':
			return ''+ a === '' + b
		case '[object Number]':
			//NaN
			if(+a !== +a) return +b !== +b
			//+0, -0, 正常情况
			return +a === 0? 1/+a === 1/b: +a === +b
		case '[object Date]':
			return +a === +b
		case '[object Boolean]':
			return +a === +b
	}

	//构造函数实例
	const areArrays = className === '[object Array]'
	//不是数组
	if(! areArrays) {
		//过滤掉两个函数的情况
		if(typeof a != 'object' || typeof b != 'object') return false

		let aCtor = a.constructor
		let bCtor = b.constructor
		//aCtor和bCtor必须都存在并且都不是Object构造函数的情况下
		//aCtor不等于bCtor,则两个对象不相等
		if(aCtor == bCtor && 
			!(isFunction(aCtor) && aCtor instanceof aCtor &&bCtor instanceof bCtor) &&
			('constructor' in a && 'constructor' in b)) {
				return false
			}	
	}

	//循环引用
	aStack = aStack || []
	bStack = bStack || []
	let length = aStack.length

	//检查是否有循环引用的部分
	while(length--) {
		if(aStack[length] === a) {
			return bStack[length] === b
		}
	}

	aStack.push(a)
	bStack.push(b)


	//数组和对象的判断
	if(areArrays) {
		length = a.length
		if(length !== b.length) return false
		while(length --) {
			if(!eq(a[length], b[length],aStack, bStack)) return false
		}
	} else {
		let keys = Object.keys(a)
		let keys
		let length = keys.length

		if(Object.keys(b).length !== length) return false

		while(length --) {
			key = keys[length]
			if(!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false
		}
	}
	aStack.pop()
	bStack.pop()
	return true
}




console.log(eq(+0, -0)) //false
console.log(eq(NaN, NaN)) //false


