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

const rockOption = document.getElementById('✊');
const paperOption = document.getElementById('🤚');
const scissorOption = document.getElementById('✌');
const playerChoiceEl = document.getElementById('rps-output-player');

rockOption.addEventListener('click', function () {
    console.log('Rock option clicked');
    playRound('✊', computerSelection);
    playerSelection = '✊';
    playerChoiceEl.textContent = playerSelection;
    return playerSelection;
});

paperOption.addEventListener('click', function () {
    console.log('Paper option clicked');
    playRound('🤚', computerSelection);
    playerSelection = '🤚';
    playerChoiceEl.textContent = playerSelection;
    return playerSelection;
});

scissorOption.addEventListener('click', function () {
    console.log('Scissors option clicked');
    playRound('✌', computerSelection);
    playerSelection = '✌';
    playerChoiceEl.textContent = playerSelection;
    return playerSelection;
});

const playRound = function (playerSelection, computerSelection) {
    if (playing) {
        // Check for Rock✊ and Paper✋
        if (playerSelection === '✊' && computerSelection === '✋') {
            return [
                {
                    winningMessage: 'You Lose! Paper beats Rock',
                    winner: 'computer',
                },
            ];
        } else if (playerSelection === '✋' && computerSelection === '✊') {
            return [
                {
                    winningMessage: 'You Won! Paper beats Rock',
                    winner: 'player',
                },
            ];
        }

        // Check for Rock✊ and Scissors✌
        else if (playerSelection === '✊' && computerSelection === '✌') {
            return [
                {
                    winningMessage: 'You Won! Rock beats Scissors',
                    winner: 'player',
                },
            ];
        } else if (playerSelection === '✌' && computerSelection === '✊') {
            return [
                {
                    winningMessage: 'You Lose! Rock beats Scissors',
                    winner: 'computer',
                },
            ];
        }

        // Check for Paper✋ and Scissors✌
        else if (playerSelection === '✋' && computerSelection === '✌') {
            return [
                {
                    winningMessage: 'You Lose! Scissors beats Paper',
                    winner: 'computer',
                },
            ];
        } else if (playerSelection === '✌' && computerSelection === '✋') {
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
const optionsPlayerHave = document.querySelectorAll('.option__box');
optionsPlayerHave.forEach((option) => {
    option.addEventListener('click', () => {
        const computerChoiceEl = document.getElementById('rps-output-computer');
        const computerSelection = getComputerChoice();
        const currentGameUpdate = document.querySelectorAll('.updateMessage');
        const playerScore = document.getElementById('score-player');
        const computerScore = document.getElementById('score-computer');

        computerChoiceEl.textContent = computerSelection;

        if (gameCount <= 5) {
            let [currentResults] = playRound(
                playerSelection,
                computerSelection
            );
            let currentWinner = currentResults.winner;
            let currentWinningMessage = currentResults.winningMessage;

            // Only go in this statement if the winning message is NOT tied
            if (currentWinningMessage !== 'Game tied!') {
                currentGameUpdate.textContent = currentWinningMessage;
                currentGameUpdate.style.color = '#f8e700';
                console.log('Current winner:', currentWinner); // Add this line to check the currentWinner

                if (currentWinner === 'player') {
                    playerWinningCount++;
                    playerScore.textContent = playerWinningCount;
                } else if (currentWinner === 'computer') {
                    computerWinningCount++;
                    computerScore.textContent = computerWinningCount;
                }

                // Incrementing the game count with 1
                gameCount++;
            }
            // If game is tied go in this statement
            else {
                currentGameUpdate.textContent = currentWinningMessage;
                // currentGameUpdate.style.color = '#fa4f00';
            }
        }
    });
});

// const playerNameEl = document.getElementById("player-name");

// if (playerName === " ") {
// 	document.querySelector("#player-name").textContent = "You";
// } else {
// 	document.querySelector("#player-name").textContent = playerName;
// }
