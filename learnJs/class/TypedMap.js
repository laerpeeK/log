class TypedMap extends Map {
	/* Map检查key value 类型的子类 */
	constructor(keyType, valueType, entries) {
		if(entries) {
			for (let [k, v] of entries) {
				if(typeof k !== keyType || typeof v !== valueType) {
					throw new TypeError(`Wrong type for entry [${k}, ${v}]`)
				}
			}
		}

		//通过super传给父类的构造函数
		super(entries)

		this.keyType = keyType
		this.valueType = valueType
	}

	set(key, value) {
		if (this.keyType && typeof key !== this.keyType) {
			throw new TypeError(`${key} is not of type ${this.keyType}`)
		}
		if (this.valueType && typeof value !== this.valueType) {
			throw new TypeError(`${value} is not of type ${this.valueType}`)
		}

		return super.set(key,value)
	}
}