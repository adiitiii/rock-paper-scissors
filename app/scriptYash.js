'use strict';

const playRound = function (playerChoice, computerChoice) {
    // Check for Rock✊ and Paper✋
    if (playerChoice === '✊' && computerChoice === '✋') {
        return [
            {
                winningMessage: 'You Lose! Paper beats Rock',
                winner: 'computer',
            },
        ];
    }
    if (playerChoice === '✋' && computerChoice === '✊') {
        return [
            {
                winningMessage: 'You Won! Paper beats Rock',
                winner: 'player',
            },
        ];
    }

    // Check for Rock✊ and Scissors✌
    if (playerChoice === '✊' && computerChoice === '✌') {
        return [
            {
                winningMessage: 'You Won! Rock beats Scissors',
                winner: 'player',
            },
        ];
    }
    if (playerChoice === '✌' && computerChoice === '✊') {
        return [
            {
                winningMessage: 'You Lose! Rock beats Scissors',
                winner: 'computer',
            },
        ];
    }

    // Check for Paper✋ and Scissors✌
    if (playerChoice === '✋' && computerChoice === '✌') {
        return [
            {
                winningMessage: 'You Lose! Scissors beats Paper',
                winner: 'computer',
            },
        ];
    }
    if (playerChoice === '✌' && computerChoice === '✋') {
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
};
//Declaring variables
let gameCount = 0;
let playerWinningCount = 0;
let computerWinningCount = 0;
const optionsPlayerHave = document.querySelectorAll('.option__box');
optionsPlayerHave.forEach((option) => {
    option.addEventListener('click', () => {
        const currentGameUpdate = document.querySelector('.updateMessage');
        const playerChoiceEl = document.getElementById('rps-output-player');
        const computerChoiceEl = document.getElementById('rps-output-computer');
        const playerScore = document.getElementById('score-player');
        const computerScore = document.getElementById('score-computer');
        const gameOverBox = document.querySelector('.game-over-box');
        const finalWinner = document.getElementById('final-winner');
        const playerChoice = option.getAttribute('id');
        const computerChoice = getComputerChoice();

        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        if (gameCount <= 5) {
            let [currentResults] = playSingleGame(playerChoice, computerChoice);
            let currentWinner = currentResults[0].winner;
            let currentWinningMessage = currentResults[0].winningMessage;

            // Only go in this statement if the winning message is NOT tied
            if (currentWinningMessage !== 'Game tied!') {
                currentGameUpdate.textContent = currentWinningMessage;
                currentGameUpdate.style.color = '#f8e700';
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

            if (gameCount === 5) {
                if (computerWinningCount > playerWinningCount) {
                    finalWinner.textContent = 'Sorry you Lose';
                    finalWinner.style.color = '#fa4f00';
                    gameOverBox.style.display = 'flex';
                } else {
                    finalWinner.textContent = 'Congrats you Won';
                    finalWinner.style.color = '#00fa85';
                    gameOverBox.style.display = 'flex';
                }
            }
        }
    });
});
