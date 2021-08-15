const Ryu = {
	attack() {
		console.log('攻击')
	},
	defense() {
		console.log('防御')
	},
	jump() {
		console.log('跳跃')
	},
	crouch() {
		console.log('蹲下')
	}
}

const makeCommand = function(receiver, state) {
	return function() {
		receiver[state]()
	}
}

const commands = {
	'119':'jump',
	'115':'crouch',
	'97':'defense',
	'100':'attack'
}

const commandStack = [] 

document.onkyePress = function(ev) {
	let keyCode = e.keyCode,
			command = makeCommand(Ryu, commands[keyCode])
		
	if(command) {
		command()
		commandStack.push(command)
	}
}

document.getElementById('replay').onclick = function() {
	let command
	while(command = commandStack.shift()) {
		command()
	}
}