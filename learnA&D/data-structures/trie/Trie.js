import TrieNode from "./TrieNode";

//根节点不包含可用字符，存一个*
const HEAD_CHARACTER = '*'

export default class Trie {
	constructor() {
		//头指针指向根节点，是一个不存可用字符的节点
		this.head = new TrieNode(HEAD_CHARACTER)
	}

	//往字典树里添加一个单词
	addWord(word) {
		//将单词转变为一个数组，数组的每个元素都是word的一个字符
		const characters = Array.from(word)
		let currentNode = this.head
		//循环单词的长度，如果循环到单词的最后一个字符，isComplete属性为true,否则为false	
		for(let charIndex = 0; charIndex < characters.length; charIndex +=1) {
			const isComplete = charIndex === characters.length -1;
			//为当前节点添加子节点，并将子节点赋值为当前节点，然后继续循环添加下一个字母
			currentNode = currentNode.addChild(characters[charIndex], isComplete)
		}
		
		return this
	}

	deleteWord(word) {
		//深度遍历
		const  depthFirstDelete = (currentNode, charIndex = 0) => {
			if(charIndex >= word.length) {
				return
			}
			
			//当前要删除的字母
			const character = word[charIndex]
			//获取起始节点的子节点，对应要删除的当前字母字母
			const nextNode = currentNode.getChild(charater)
			
			//如果没有子节点，说明字典树中没有这个单词，返回
			if(nextNode == null) {
				return
			}
			//Go deeper
			//递归调用，再继续寻找下一个字母对应的深层节点
			depthFirstDelete(nextNode, charIndex + 1)
			
			//如果找到了单词的最后一个字母，取消标记最后一个字母的isCompleteWord标记
			if(charIndex === (word.length -1)) {
				nextNode.isCompleteWord = false
			}
			
			//从倒数第二个节点开始删除，递归删除
			currentNode.removeChild(character)
		}

		//从根节点开始深度删除程序
		depthFirstDelete(this.head)
		return this
	}

	
	suggestNextCharacters(word) {
		//获取单词对应的最后一个节点
		const lastCharacter = this.getLastCharacterNode(word)

		//如果没有单词对应的最后一个节点，返回Null
		if(!lastCharacter) {
			return null
		}

		//获取当前单词最后一个字母对应节点的所有子节点的数组，也就是建议的下一个字母
		return lastCharacter.suggestChildren()
	}

	//判断字典树中是否存在某个单词
	doesWordExist(word) {
		//获取到这个单词最后一个节点
		const lastCharacter = this.getLastCharacterNode(word)
		//如果有最后一个节点，并且isCompleteWord为true
		return !!lastCharacter && lastCharacter.isCompleteWord
	}

	//获取一个单词的最后一个字母节点
	getLastCaracterNode(word) {
		//将单词转变为一个数组，数组的每个元素都是字符串的一个字符
		const characters = Array.from(word)
		//当前节点从根节点开始
		let currentNode = this.head

		for(let charIndex = 0; charIndex < characters.length; charIndex += 1) {
			//循环单词数组，开始从根节点开始寻找
			if(!currentNode.hasChild(characters[charIndex])) {
				//如果当前节点没有对应的单词的下一个字母的节点，说明字典树里没有这个单词，返回Null
				return null
			}
			//如果有就继续找，直到找到最后一个字母对应的节点
			currentNode = currentNode.getChild(characters[charIndex])
		}
		return currentNode
	}
}