function merge(target, ...sources) {
	for (let source of sources) {
		for (let key of Object.keys(source)) {
			if(!(key in target)) {
				target[key] = source[key]
			}
		}
	}
	return target
}

