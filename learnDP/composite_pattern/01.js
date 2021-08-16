const MacroCommand = function() {
	return {
		commandsList: [],
		add(command) {
			this.commandsList.push(command)
		},
		//每当对最上层的对象进行一次请求时，实际上是在对整个树进行深度优先的搜索。
		execute() {
			for(let i = 0, command; command = this.commandsList[i++];) {
				command.execute()
			}
		}
	}
}
//叶子节点无子节点
const openAcCommand = {
	execute() {
		console.log('打开空调')
	}
}
const openTvCommand = {
	execute() {
		console.log('打开电视')
	}
}
const openSoundCommand = {
	execute() {
		console.log('打开音响')
	}
}
const closeDoorCommand = {
	execute() {
		console.log('关门')
	}
}
const openPcCommand = {
	execute() {
		console.log('开电脑')
	}
}

const macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)
const macroCommand2 = MacroCommand()
macroCommand2.add(openSoundCommand)
macroCommand2.add(closeDoorCommand)
macroCommand2.add(openPcCommand)
const macroCommand = MacroCommand()
macroCommand.add(openAcCommand)
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)

macroCommand.execute()