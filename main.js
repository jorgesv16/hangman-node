var Word = require("./word.js");
var inquirer = require("inquirer");

var question =   {
	type: 'input',
	name: 'letter',
	message: 'Guess a letter',
	validate: function(value) {
		if (isNaN(value) === true && value.length === 1) {
			return true;
		}
		return 'Please enter a valid phone number';
	}
};

var wordBank = ['hersheys', 'almondjoy', 'reeses', 'snickers', 'milkyway', 'kitkat', 'twix'];
var wordsWon = 0;
var guessesRemaining = 10;
var currentWrd = null;

function ask(question) {
	inquirer.prompt([question]).then(function (answer) {
	    //return answer.letter;

	    var manyGuessed = currentWrd.checkLetter(answer.letter);

		if(manyGuessed === 0) {
			console.log("WRONG");
			guessesRemaining--;
			
		} else {
			console.log("CORRECT");
			if(currentWrd.findWord()){
				console.log("You won!");
				console.log("-------------------");
				return;
			}
		}

		console.log("Guesses remaining: " + guessesRemaining);
		console.log("-------------------");
		if((guessesRemaining > 0) && (currentWrd.found == false)){
			ask(question);
		}
		else if(guessesRemaining === 0){
			console.log("Game over. Correct Word ", currentWrd.current);
		} else {
			console.log(currentWrd.wordRender());
		}

	});
}

function startGame(wrd) {
	resetGuesses();
	currentWrd = new Word(wordBank[Math.floor(Math.random()* wordBank.length)]);
	currentWrd.getLetter();
	ask(question);
}

function resetGuesses() {
	guessesRemaining = 10;
}

// promptUser: function(){
// 	var self = this;
// 	prompt.get(['guessLet'], function(err, result){
// 		console.log("You guessed: " + result.guessLet);
// 		var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

// 		if(manyGuessed ==0) {
// 			console.log("WRONG");
// 			self.guessesRemaining--;
			
// 		} else {
// 			console.log("CORRECT");
// 				if(self.currentWrd.findWord()){
// 					console.log("You won!");
// 					console.log("-------------------");
// 					return;
// 				}
// 		}

// 		console.log("Guesses remaining: " + self.guessesRemaining);
// 		console.log("-------------------");
// 		if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
// 			self.promptUser();
// 		}
// 		else if(self.guessesRemaining ==0){
// 			console.log("Game over. Correct Word ", self.currentWrd.target);
// 		} else {
// 			console.log(self.currentWrd.wordRender());
// 		}
// 	});
// }

startGame();

