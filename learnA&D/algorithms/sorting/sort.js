import Comparator from "../../utils/Comparator";

export default class Sort {
	constructor(originalCallbacks) {
		this.callbacks = Sort.initSortingCallbacks(originalCallbacks)
		this.Comparator = new Comparator(this.callbacks.compareCallback)
	}

	static initSortingCallbacks(originlaCallbacks) {
		const callbacks = originlaCallbacks || {}
		const stubCallback = () =>  {}

		callbacks.compareCllback = callbacks.compareCallback || undefined
		callbacks.visitingCallback = callbacks.visitingCallback || stubCallback
	
		return callbacks
	}

	sort() {
		throw new Error('sort method must be implemented')
	}
}