const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]

function isObject(target) {
	const type = typeof target
	return target !== null && (type === 'object' || type === 'function')
}

function getType(target) {
	return Object.prototype.toString.call(target)
}

function getInit(target) {
	const Ctor = target.constructor
	return new Ctor()
}

function forEach(array, iteratee) {
	console.log(array)
	let index = -1
	const length = array.length
	while(++index < length) {
		iteratee(array[index], index)
	}
	return array
}

function cloneSymbol(targe) {
	return Object(Symbol.prototype.valueOf.call(targe))
}

function cloneReg(targe) {
	const reFlags = /\w*$/
	const result = new targe.constructor(targe.source, reFlags.exec(targe))
	result.lastIndex = targe.lastIndex
	return result
}

function cloneFunction(func) {
	const bodyReg = /(?<={)(.|\n)+(?=})/m
	const paramReg = /(?<=\().+(?=\)\s+{)/
	const funcString = func.toString()
	if(func.prototype) {
		console.log('普通函数')
		const param =  paramReg.exec(funcString)
		const body = bodyReg.exec(funcString)
		if(body) {
			console.log('匹配到函数体：', body[0])
			if(param) {
				const paramArr = param[0].split(',')
				console.log('匹配到参数：',paramArr)
				return new Function(...paramArr, body[0])
			} else {
				return new Function(body[0])
			}
		} else {
			return null
		}
	} else {
		return eval(funcString)
	}
}
const isFunc = typeof value === 'function'
if(isFunc || !cloneableTags[tag]) {
	return object? value : {}
}


function cloneOtherType(targe, type) {
	const Ctor = targe.constructor
	switch(type) {
		case boolTag:
		case numberTag:
		case errorTag:
		case dateTag:
			return new Ctor(targe)
		case regexpTag: 
			return cloneReg(targe)
		case symbolTag:
			return cloneSymbol(targe)
		default:
			return null
	}
}

function clone(target, map = new Map()) {
	//克隆原始类型
	if(!isObject(target)) {
		return target
	}

	//初始化
	const type = getType(target)
	let cloneTarget
	if(deepTag.includes(type)) {
		cloneTarget = getInit(target, type)
	} else {
		return cloneOtherType(target, type)
	}

	//防止循环引用
	if(map.get(target)) {
		return map.get(target)
	}
	map.set(target, cloneTarget)

	//克隆set
	if(type === setTag) {
		target.forEach(value => {
			cloneTarget.add((clone(value, map)))
		})
	}

	//克隆map
	if(type === mapTag) {
		target.forEach((value, key) => {
			cloneTarget.set(key, clone(value, map))
		})
		return cloneTarget
	}

	//克隆对象和数组
	const keys = type === arrayTag? undefined: Object.keys(target)
	forEach(keys|| target, (value, key) => {
		if(keys) {
			key = value
		}
		cloneTarget[key] = clone(target[key], map)
	})
	return cloneTarget
}
