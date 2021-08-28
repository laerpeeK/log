//玩家
function Player(name, teamColor) {
	this.name = name //角色名字
	this.teamColor = teamColor //队伍颜色
	this.state = 'alive' //玩家生存状态
}

Player.prototype.win = function() {
	console.log(this.name + ' won ')
}

Player.prototype.lose = function() {
	console.log(this.name + ' lose ')
}

Player.prototype.die = function() {
	this.state = 'dead'
	//给中介者发送消息，玩家死亡
	playerDirector.reciveMessage('playerDead', this) 
}	

Player.prototype.remove = function() {
	//给中介者发送消息，移除一个玩家
	playerDirector.reciveMessage('removePlayer', this)
}


Player.prototype.changeTeam = function() {
	//给中介者发送消息，玩家换队
	playerDirector.reciveMessage('changeTeam', this, color)
}

//创造玩家的工厂函数
const playerFactory = function(name, teamColor) {
	let newPlayer = new Player(name, teamColor)
	//给中介者发送消息，新增玩家
	playerDirector.reciveMessage('addPlayer', newPlayer)

	return newPlayer
}


//中介者
const playerDirector = (function() {
	const players = {} //保存所有玩家
	const operations = {} //中介者可以执行的操作

	//新增一个玩家
	operations.addPlayer = function(player) {
		let teamColor = player.teamColor //玩家队伍颜色
		players[teamColor] = players[teamColor] || [] 
		players[teamColor].push(player)
	}

	//移除一个玩家
	operations.removePlayer = function(player) {
		let teamColor = player.teamColor
		let teamPlayers = players[teamColor] || []
		for(let i = teamPlayers.length - 1; i >= 0; i--) {
			if(teamPlayers[i] === player) {
				teamPlayers.splice(i,1)
			}
		}
	}

	operations.changeTeam = function(player, newTeamColor) {
		operations.removePlayer(player)
		player.teamColor = newTeamColor
		operations.addPlayer(player)
	}

	operations.playerDead = function(player) {
		let teamColor = player.teamColor
		let teamPlayers = players[teamColor]
		let all_dead = true

		for(let i = 0, player; player = teamPlayers[i++];) {
			if(player.state !== 'dead') {
				all_dead = false
				break
			}
		}

		if(all_dead === true) {
			for(let i = 0, player; player = teamPlayers[i++];) {
				player.lose()
			}

			for(let color in players) {
				if(color !== teamColor) {
					let teamPlayers = players[color]
					for(let i = 0, player; player = teamPlayers[i++];) {
						player.win()
					}
				}
			}
		}
	}

	//中介者接收消息
	const reciveMessage = function() {
		const message = Array.prototype.shift.call(arguments)//第一个参数，为消息名称
		operations[message].apply(this, arguments)
	}

	return {
		reciveMessage
	}
})()