"use strict";

// let playerName = prompt("Enter your Name: ");
let playerSelection = "";

function getComputerChoice() {
	const num = Math.trunc(Math.random() * 3);
	let computerSelection = "";

	if (num === 0) {
		computerSelection = "✊";
	} else if (num === 1) {
		computerSelection = "🤚";
	} else {
		computerSelection = "✌";
	}

	return computerSelection;
}

const computerSelection = getComputerChoice();

function getPLayerChoice(callback) {
	const rockOption = document.getElementById("rock-img");
	const paperOption = document.getElementById("paper-img");
	const scissorOption = document.getElementById("scissors-img");

	// If any image is clicked, set player selection and get computer selection
	rockOption.addEventListener("click", function () {
		playerSelection = "✊";
		document.getElementById("rps-output-player").textContent =
			playerSelection;
		const computerSelection = getComputerChoice(); // Get computer's choice
		document.getElementById("rps-output-computer").textContent =
			computerSelection;
		callback(playerSelection, computerSelection);
	});

	paperOption.addEventListener("click", function () {
		playerSelection = "✋";
		document.getElementById("rps-output-player").textContent =
			playerSelection;
		const computerSelection = getComputerChoice(); // Get computer's choice
		document.getElementById("rps-output-computer").textContent =
			computerSelection;
		callback(playerSelection, computerSelection);
	});

	scissorOption.addEventListener("click", function () {
		playerSelection = "✌";
		document.getElementById("rps-output-player").textContent =
			playerSelection;
		const computerSelection = getComputerChoice(); // Get computer's choice
		document.getElementById("rps-output-computer").textContent =
			computerSelection;
		callback(playerSelection, computerSelection);
	});
}

// Usage:
getPLayerChoice(function (playerSelection, computerSelection) {
	console.log("Player Selection:", playerSelection);
	console.log("Computer Selection:", computerSelection);
});

//Function playRound

function playRound(playerSelection, computerSelection) {
	// Check for Rock✊ and Paper✋
	if (playerSelection === "✊" && computerSelection === "✋") {
		console.log("hello");
		computerScore++;
		return [
			{
				winningMessage: "You Lose! Paper beats Rock",
				winner: "computer",
			},
		];
	} else if (playerSelection === "🤚" && computerSelection === "✊") {
		console.log("hello");
		playerScore++;
		return [
			{
				winningMessage: "You Won! Paper Beats Rock",
				winner: "player",
			},
		];
	}

	//Check for "✊" and "✌"
	else if (playerSelection === "✊" && computerSelection === "✌") {
		console.log("hello");
		playerScore++;
		return [
			{
				winningMessage: "You Won! Rock Beats Scissors",
				winner: "player",
			},
		];
	} else if (playerSelection === "✌" && computerSelection === "✊") {
		console.log("hello");
		computerScore++;
		return [
			{
				winningMessage: "You Lose! Rock Beats Scissors",
				winner: "computer",
			},
		];
	}

	//Check for "✌" and "🤚"
	else if (playerSelection === "✌" && computerSelection === "🤚") {
		console.log("hello");
		playerScore++;
		return [
			{
				winningMessage: "You Won! Scissors Beats Paper",
				winner: "player",
			},
		];
	} else if (playerSelection === "🤚" && computerSelection === "✌") {
		console.log("hello");
		computerScore++;
		return [
			{
				winningMessage: "You Lose! Scissors Beats Paper",
				winner: "computer",
			},
		];
	}

	//If both have same signs
	else {
		return [
			{
				winningMessage: "Game Tied!",
				winner: "tied",
			},
		];
	}
}

const playGame = playRound(playerSelection, computerSelection);
console.log(playGame);

/*
getComputerChoice();
playRound(playerSelection, computerSelection);

let computerScore = 0;
let playerScore = 0;

// const playerNameEl = document.getElementById("player-name");

// if (playerName === " ") {
// 	document.querySelector("#player-name").textContent = "You";
// } else {
// 	document.querySelector("#player-name").textContent = playerName;
// }


const optionPlayerHave = document.querySelector(".rps");

rockOption.addEventListener("click", function () {
	playRound(rockOption, computerSelection);
});

paperOption.addEventListener("click", function () {
	playRound(paperOption, computerSelection);
});

scissorOption.addEventListener("click", function () {
	playRound(rockOption, computerSelection);
});
*/
