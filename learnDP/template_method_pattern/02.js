const Beverage = function(param) {
	const boilWater = function() {
		console.log('把水煮沸')
	}

	const brew = param.brew || function() {
		throw new Error('必须传递brew方法')
	}

	const pourInCup = param.pourInCup || function() {
		throw new Error('必须传递pourInCup方法')
	}

	const addCondiments = param.addCondiments || function() {
		throw new Error('必须传递addCondiments方法')
	}

	const F = function() {}

	F.prototype.init = function() {
		boilWater()
		brew()
		pourInCup()
		addCondiments()
	}

	return F
} 


const Coffee = Beverage({
	brew() {
		console.log('用沸水冲泡咖啡')
	},
	pourInCup() {
		console.log('把咖啡倒进杯子')
	},
	addCondiments() {
		console.log('加糖和牛奶')
	}
})

const coffee = new Coffee()
cofee.init()

