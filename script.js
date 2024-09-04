"use strict";

// This JavaScript code generates a random integer between 1 and 20 (inclusive) and assigns it
//to the variable secretNumber.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess); // e.g. 20 'number'

	// When there is no input
	if (!guess) {
		displayMessage("⛔️ No number!");

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number!");
		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		// This logic can be placed only here, because when a play guessed the number
		// we are able to check if the amount of scores is greater than a high score.
		// If yes we have to assign a score value to a high score variable and later
		// change its value using textContent method provided by JS.

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
			displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
		}
	}
});

// In this section we have to restore all the default styles we set for our app, like in the beginning.

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
