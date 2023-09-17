'use strict';

// let playerName = prompt("Enter your Name: ");

let playerSelection = '';
let playing = true;

function getComputerChoice() {
    if (playing) {
        const num = Math.trunc(Math.random() * 3);
        let computerSelection = '';

        if (num === 0) {
            computerSelection = '✊';
        } else if (num === 1) {
            computerSelection = '🤚';
        } else {
            computerSelection = '✌';
        }

        return computerSelection;
    }
}

const computerSelection = getComputerChoice();
// //Function playRound

const playRound = function (playerChoice, computerChoice) {
    if (playing) {
        // Check for Rock✊ and Paper✋
        if (playerChoice === '✊' && computerChoice === '✋') {
            return [
                {
                    winningMessage: 'You Lose! Paper beats Rock',
                    winner: 'computer',
                },
            ];
        } else if (playerChoice === '✋' && computerChoice === '✊') {
            return [
                {
                    winningMessage: 'You Won! Paper beats Rock',
                    winner: 'player',
                },
            ];
        }

        // Check for Rock✊ and Scissors✌
        else if (playerChoice === '✊' && computerChoice === '✌') {
            return [
                {
                    winningMessage: 'You Won! Rock beats Scissors',
                    winner: 'player',
                },
            ];
        } else if (playerChoice === '✌' && computerChoice === '✊') {
            return [
                {
                    winningMessage: 'You Lose! Rock beats Scissors',
                    winner: 'computer',
                },
            ];
        }

        // Check for Paper✋ and Scissors✌
        else if (playerChoice === '✋' && computerChoice === '✌') {
            return [
                {
                    winningMessage: 'You Lose! Scissors beats Paper',
                    winner: 'computer',
                },
            ];
        } else if (playerChoice === '✌' && computerChoice === '✋') {
            return [
                {
                    winningMessage: 'You Won! Scissors beats Paper',
                    winner: 'player',
                },
            ];
        }

        // If both have same signs
        else {
            return [
                {
                    winningMessage: 'Game tied!',
                    winner: 'tied',
                },
            ];
        }
    }
};

let gameCount = 0;
let playerWinningCount = 0;
let computerWinningCount = 0;
const optionsPlayerHave = document.querySelectorAll('.options__box');
optionsPlayerHave.forEach((option) => {
    option.addEventListener('click', () => {
        const computerChoiceEl = document.getElementById('rps-output-computer');
        const computerSelection = getComputerChoice();
        const currentGameUpdate = document.querySelectorAll('.updateMessage');
        const currentPlayerScore = document.getElementById('score-player');
        const currentComputerScore = document.getElementById('score-computer');

        computerChoiceEl.textContent = computerSelection;

        //Incrementing gameCount by 1
        gameCount++;

        if (gameCount <= 5) {
            let [currentResults] = playRound(
                playerSelection,
                computerSelection
            );
            let currentWinner = currentResults.winner;
            let currentWinningMessage = currentResults.winningMessage;

            if (currentWinningMessage !== 'Game Tied!') {
                currentGameUpdate.textContent = currentWinningMessage;
                currentGameUpdate.style.backgroundColor = '#f8e700;';
                currentGameUpdate.style.Color = '#fff;';
                if (currentWinner === 'player') {
                    playerWinningCount++;
                    currentPlayerScore.textContent = playerWinningCount;
                } else if (currentWinner === 'computer') {
                    computerWinningCount++;
                    currentComputerScore.textContent = computerWinningCount;
                }
            } else {
                currentGameUpdate.textContent = currentWinningMessage;
            }
        } else {
            if (playerWinningCount > computerWinningCount) {
                currentGameUpdate.textContent = 'GAME OVER! Congrats you won.';
                currentGameUpdate.style.playing = false;
            }
        }
    });
});

const rockOption = document.getElementById('✊');
const paperOption = document.getElementById('🤚');
const scissorOption = document.getElementById('✌');
const playerChoiceEl = document.getElementById('rps-output-player');

rockOption.addEventListener('click', function () {
    playRound('✊', computerSelection);
    playerSelection = '✊';
    console.log(playerSelection);
    playerChoiceEl.textContent = playerSelection;
});

paperOption.addEventListener('click', function () {
    playRound('🤚', computerSelection);
    playerSelection = '🤚';
    console.log(playerSelection);
    playerChoiceEl.textContent = playerSelection;
});

scissorOption.addEventListener('click', function () {
    playRound('✌', computerSelection);
    playerSelection = '✌';
    console.log(playerSelection);
    playerChoiceEl.textContent = playerSelection;
});

// const playerNameEl = document.getElementById("player-name");

// if (playerName === " ") {
// 	document.querySelector("#player-name").textContent = "You";
// } else {
// 	document.querySelector("#player-name").textContent = playerName;
// }
