import HashTable from '../hash-table/HashTable'
export default class TrieNode {
	constructor(character, isCompleteWord = false) {
		//当前字典树节点的字母
		this.character = character
		//是否是一个完整的单词
		this.isCompleteWord = isCompleteWord
		//children子节点，新的哈希表
		this.children = new HashTable()
	}

	getChild(character) {
		//从children哈希表中获取指定字母
		return this.children.get(character)
	}

	addChild(character, isCompleteWord = false) {
		//给当前节点添加新的子节点
		if(!this.children.has(character)) {
			//如果children哈希表属性里没有这个字母，就用哈希表的set方法添加
			//key是字母，value是这个字母新建的字典树节点
			this.children.set(character, new TrieNode(character, isCompleteWord))
		}

		//如果children哈希表中已经有这个字母，获取到这个字典树节点
		const childNode = this.children.get(character)

		//更新它的isCompleteWord属性
		childrenNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord
		//返回这个新字典树节点
		return childNode
	}

	//删除当前节点指定字母的子节点
	removeChild(character) {
		//从children哈希表中获取指定字母的子节点
		const childNode = this.getChild(character)
		//删除的前提条件
		//1.childNode不是children
		//2.childNode.isCompleteWord === false
		if(
			childNode
			&& !childNode.isCompleteWord
			&& !childNode.hasChildren()
		) {
			//如果存在childNode, 并且childNode不是完整单词，并且childNode没有子节点
			this.children.delete(character)
		}
		return this
	}

	//判断当前字典表节点有没有指定字母的子节点
	hasChild(character) {
		return this.children.has(character)
	}

	//判断当前字典表节点有没有子节点
	hasChildren() {
		return this.children.getKeys().length !== 0;
	}

	//返回当前字典表节点的所有子节点的字母组成的数组
	suggestChildren() {
		return [...this.children.getKeys()]
	}

	toString() {
		//当前字典表节点的所有子节点的字母的数组的字符串形式
		let childrenAsString = this.suggestChildren().toString()
		childrenAsString = childrenAsString? `:${childrenAsString}`: ''
		//当前字典表节点是否是完整单词属性的字符串值
		const isCompleteString = this.isCompleteWord? '*': ''
		return `${this.character}${isCompleteString}${childrenAsString}`
		//返回当前字典表节点的字母，是否是完整单词字符串值，和所有子节点字母值连起来的字符串
	}
}