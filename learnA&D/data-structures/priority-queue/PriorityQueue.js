import MinHeap from "../heap/MinHeap";
import Comparator from "../../utils/Comparator";

export default class PriortyQueue extends MinHeap {
	constructor() {
		//继承最小堆类
		super()	
		//优先队列
		this.priorities = new Map()
		//对具有优先级的堆元素使用自定义比较器
		//而不是考虑元素值
		this.compare = new Comparator(this.comparePriority.bind(this))
	}

	//往优先级队列添加元素
	add(item, priority = 0) {
		this.priorities.set(item, priority)
		super.add(item)
		return this
	}

	//item: 我们要移除的
	//customFindingComparator:用于查找要删除的项的自定义函数
	remove(item, customFindingComparator) {
		super.remove(item, customFindingComparator)
		this.priorities.delete(item)
		return this
	}

	//item： 我们将重新确定优先顺序的项目
	//新的项目优先级
	changePriority(item, priority) {
		this.remove(item, new Comparator(this.compareValue))
		this.add(item, priority)
		return this
	}

	//通过值查找项目
	findByValue(item) {
		return this.find(item, new Comparator(this.compareValue))
	}

	hasValue(item) {
		return this.findByValue(item).length > 0
	}

	//比较两项的优先级
	comparePriority(a, b) {
		if(this.priorities.get(a) === this.priorities.get(b)) {
			return 0
		}
		return this.priorities.get(a) < this.priorities.get(b)? -1:1
	}

	compareValue(a, b) {
		if(a === b) {
			return 0
		}
		return a < b? -1 : 1
	}
}