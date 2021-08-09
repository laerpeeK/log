//策略类
const strategies = {
	'S': function(salary) {
		return salary * 4
	},
	'A': function(salary) {
		return salary * 3
	},
	'B': function(salary) {
		return salary * 2
	}
}

//环境类
const calculateBonus = function(level, salary) {
	return strategies[level](salary)
}
