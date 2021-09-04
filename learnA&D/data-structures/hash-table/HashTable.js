import LinkedList from '../linked-list/data-structure/linkedList'

//哈希表：可以根据一个Key值来直接访问数据，因此查找速度快
//数组+散列函数
//对于哈希表，它经常存放的是一些键值对的数据
//处理哈希冲突：开放寻址法，拉链法
//影响冲突数量
const defaultHashTableSize = 32
export default class HashTable {
	constructor(hashTableSize = defaultHashTableSize) {
		//用空列表补充buckets,每一个node对应一个{key, value}
		this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())
		//key: keyHash
		this.keys = {}
	}

	//将key值转换为哈希数
	hash(key) {
		const hash = Array.from(key).reduce(
			(hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0))
		)

		//key的字符转Unicode编码除以31
		return hash % this.buckets.length
	}

	//设置key跟value
	set(key, value) {
		const keyHash = this.hash(key)
		this.keys[key] = keyHash  //key equalTo  keyHash
		const bucketLinkedList = this.buckets[keyHash] //LinkedList
		const node = bucketLinkedList.find({callback: (nodeValue) => nodeValue.key === key})
		
		
		if(!node) {
			bucketLinkedList.append({key, value}) //linkedListNode key:value
		} else {
			node.value.value = value
		}
	}

	delete(key) {
		const keyHash = this.hash(key)
		delete this.keys[key]
		const bucketLinkedList = this.buckets[keyHash]
		const node = bucketLinkedList.find({callback: (nodevalue) => {
			return nodeValue.key === key
		}})
		if(node) {
			return bucketLinkedList.delete(node.value)
		}
		return null
	}
	
	get(key) {
		const bucketLinkedList = this.buckets[this.hash[key]]
		const node = bucketLinkedList.find({callback: (nodeValue) => {
			return nodeValue.key === key
		}})
		return node? node.value.value : undefined
	}

	has(key) {
		return Object.hasOwnProperty.call(this.keys, key)
	}

	getKeys() {
		return Object.keys(this.keys)
	}

	getValues() {
		return this.buckets.reduece((values, bucket) => {
			const bucketValues = bucket.toArray().map((linkedListNode) => {
				return linkedListNode.value.value
			})
			return values.concat(bucketValues)
		}, [])
	}
}

