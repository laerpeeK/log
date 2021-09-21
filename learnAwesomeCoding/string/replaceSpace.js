function replaceSpace(str) {
	return str.split(' ').join('%20')
}

function replaceSpace2(str) {
	return str.replace(/\s/g, '%20')	
}

//多个空格
function replaceSpace3(str) {
	return str.replace(/\s+/g, '%20')
}