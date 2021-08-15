let closeDoorCommand = {
	execute() {
		console.lo('关门')
	}
}

let openPcCommand = {
	execute() {
		console.log('开电脑')
	}
}

let openQQCommand = {
	execute() {
		console.log('登录QQ')
	}
}

const MacroCommand = function() {
	return {
		commandsList: [],
		add(command) {
			this.commandsList.push(command)
		},
		execute() {
			for(let i = 0, command; command = this.commandsList[i++];) {
				command.execute()
			}
		}
	}
}