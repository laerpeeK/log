
//抽象父类
const Beverage = function() {}

Beverage.prototype.boilWater = function() {
	console.log('把水煮沸')
}

Beverage.prototype.brew = function() {}

Beverage.prototype.pourInCup = function() {}

Beverage.prototype.addCondiments = function() {}

//模板方法
Beverage.prototype.init = function() {
	this.boilWater()
	this.brew()
	this.pourInCup()
	this.addCondiments()
}

const Coffee = function() {}

Coffee.prototype = new Beverage()
Coffee.prototype.brew = function() {
	console.log('用沸水冲泡咖啡')
}
Coffee.prototype.pourInCup = function() {
	console.log('把咖啡倒进杯子')
}
Coffee.prototype.addCondiments = function() {
	console.log('加糖和牛奶')
}

const coffee = new Coffee()
coffee.init()


const Tea = function() {}
Tea.prototype = new Beverage()
Tea.prototype.brew = function() {
	console.log('用沸水浸泡茶叶')
}
Tea.prototype.pourInCup = function() {
	console.log('把茶倒进杯子')
}
Tea.prototype.addCondiments = function() {
	console.log('加柠檬')
}

const tea = new Tea()
tea.init()