const Model = function(sex) {
	this.sex = sex
}

Model.prototype.takePhoto = function() {
	console.log('sex= '+ this.sex + 'underwear=' + this.underwear)
}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for(let i = 1; i <= 50; i++) {
	maleModel.underwear = 'underwear' + i
	maleModel.takePhoto()
}

for(let j = 1; j <= 50; j++) {
	femaleModel.underwear = 'underwear' + j
	femaleModel.takePhoto()
}

