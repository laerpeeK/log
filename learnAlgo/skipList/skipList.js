const MAX_LEVEL = 16 //跳表索引的最大级数
class Node {
	data = -1  //每个节点的数据
	maxLevel = 0 //当前节点处于整个跳表索引的级数
	refer = new Array(MAX_LEVEL) //存放多个索引, p.refer[level]表示L级索引上P节点的下一个节点；p.refer[level-1]表示的是p节点下面的1级索引的节点
}


class SkipList {
	levelCount = 1 //当前跳转索引的总级数
	head = new Node() //Node实例，指向整个链表的开始

	//在跳表里面插入数据时，随机生成索引的级数
	static randomLevel() { 
		let level = 1
		for (let i = 1; i < MAX_LEVEL; i++) {
			if (Math.random() < 0.5) {
				level++
			}
		}
		return level
	}

	//Ologn
	insert(value) {
		const level = SkipList.randomLevel()
		const newNode = new Node()
		newNode.data = value
		newNode.maxLevel = level
		const update = new Array(level).fill(new Node())
		let p = this.head
		for (let i = level - 1; i >= 0; i--) {
			while (p.refer[i] !== undefined && p.refer[i].data < value) {
				p = p.refer[i]
			}
			update[i] = p  // update[i].refer[i].data >= newNode.data && update[i].data < newNode.data
		}

		for (let i = 0; i < level; i++) {
			newNode.refer[i] = update[i].refer[i]
			update[i].refer[i] = newNode
		}
		if (this.levelCount < level) {
			this.levelCount = level
		}
	}


	//Om*logn  m:每一级索引最多需要遍历的结点
	find(value) {
		if (!value) return null
		let p = this.head
		for (let i = this.levelCout - 1; i >= 0; i--) {
			while (p.refer[i] !== undefined && p.refer[i].data < value) {
				p = p.refer[i]
			}
		}

		if (p.refer[0] !== undefined && p.refer[0].data === value) {
			return p.refer[0]
		}
		return null
	}

	//Ologn
	remove(value) {
		let _node
		let p = this.head
		const update = new Array(new Node())
		for (let i = this.levelCount-1; i>=0; i--) {
			while (p.refer[i] !== undefined && p.refer[i].data < value) {
				p = p.refer[i]
			}
			update[i] = p
		}

		if(p.refer[0] !== undefined && p.refer[0].data === value) {
			_node = p.refer[0]
			for (let i = 0; i <= this.levelCount - 1; i++) {
				if (update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
					update[i].refer[i] = update[i].refer[i].refer[i]
				}
			}
			return _node
		}
		return null
	}

	printAll() {
		let p = this.head
		while (p.refer[0] !== undefined) {
			console.log(p.refer[0].data)
			p = p.refer[0]
		}
	}
}	