
var Letter = require("./letter.js");

function Word(current) {
	this.current = current;
	this.letters = [];
	this.found = false;

	this.getLetter = function() {
		for (var i=0; i < this.current.length; i++) {
			this.letters.push(new Letter(this.current[i]));
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].charac == guessLet){
				this.letters[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.letters.length; i++){
			string += this.letters[i].letterRender();
		}
		return string;
	};
};

module.exports = Word;