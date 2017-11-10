
var Letter = function(lttr){
	this.char = lttr;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = Letter;