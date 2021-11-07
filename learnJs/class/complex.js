class Complex {
	#r = 0;
	#i = 0;

	constructor(real, imaginary) {
		this.r = real;
		this.i = imaginary;
	}

	plus(that) {
		return new Complex(this.r+thar.r, this.i + that.i)
	}

	times(that) {
		return new Complex(this.r * that.r - this.i * that.i,
											 this.r * that.i + this.i *that.r)
	}

	static sum(c, d) {
		return c.plus(d)
	}

	static product(c, d) {
		return c.times(d)
	}

	get real() {
		return this.r
	}

	get imaginary() {
		return this.i
	}

	get magnitude() {
		return Math.hypot(this.r, this.i)
	}

	toString() {
		return `${this.r}, ${this.i}`
	}

	equals(that) {
		return that instanceof Complex && 
			this.r === that.r &&
			this.i === that.i
	}
}

Complex.ZERO = new Complex(0,0)
Complex.ONE = new Complex(1, 0)
complex.I = new Complex(0,1)

