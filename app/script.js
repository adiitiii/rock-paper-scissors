'use strict';

let playing = true;

const getComputerChoice = function () {
    const randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';
    switch (randNum) {
        case 1:
            computerChoice = '✊';
            break;
        case 2:
            computerChoice = '✋';
            break;
        case 3:
            computerChoice = '✌';
            break;
    }

    return computerChoice;
};

let playerWinningCount = 0;
let computerWinningCount = 0;
const playRound = function (playerChoice, computerChoice) {
    //If both have same signs
    if (playerChoice === computerChoice) {
        return [
            {
                winningMessage: 'Game tied!',
                winner: 'tied',
            },
        ];
    }

    //Check for when player beats computer
    else if (
        (playerChoice === '✋' && computerChoice === '✊') ||
        (playerChoice === '✊' && computerChoice === '✌') ||
        (playerChoice === '✌' && computerChoice === '✋')
    ) {
        return [
            {
                winningMessage: `You Won! ${playerChoice} beats ${computerChoice}`,
                winner: 'player',
            },
        ];
    }

    // Check for when computer beats player
    else if (
        (playerChoice === '✊' && computerChoice === '✋') ||
        (playerChoice === '✌' && computerChoice === '✊') ||
        (playerChoice === '✋' && computerChoice === '✌')
    ) {
        return [
            {
                winningMessage: `You Lose! ${computerChoice} beats ${playerChoice}`,
                winner: 'computer',
            },
        ];
    }
};

const rock = document.querySelector('.option-rock');
const paper = document.querySelector('.option-paper');
const scissor = document.querySelector('.option-scissor');
let gameCount = 0;

rock.addEventListener('click', function () {
    if (playing) {
        //Declaring variables
        const playerChoice = rock.getAttribute('id');
        const computerChoice = getComputerChoice();
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const updateMessage = document.querySelector('.update-message');
        const updateWinner = document.querySelector('.update-winner');
        const playerScore = document.getElementById('player-score');
        const computerScore = document.getElementById('computer-score');
        const gameOverBox = document.querySelector('.game-over-box');
        const finalWinner = document.getElementById('final-winner');
        //printing values
        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        //applying conditionals

        if (gameCount <= 5) {
            //results
            let currentResults = playRound(playerChoice, computerChoice);
            let currentWinningMessage = currentResults[0].winningMessage;
            let currentWinner = currentResults[0].winner;

            //If game is tied, go into this statement
            if (currentWinningMessage === 'tied') {
                console.log('tied');
                updateMessage.textContent = currentWinningMessage;
            }

            //If game is not tied, go into this statement
            if (currentWinningMessage !== 'tied') {
                updateMessage.textContent = currentWinningMessage;
                updateWinner.style.fontSize = '3rem';
                updateMessage.style.color = '#36cdba';
                if (currentWinner === 'computer') {
                    computerWinningCount++;
                    console.log('computer score:', computerWinningCount);
                    computerScore.textContent = computerWinningCount;
                } else if (currentWinner === 'player') {
                    playerWinningCount++;
                    console.log('player score:', playerWinningCount);
                    playerScore.textContent = playerWinningCount;
                }

                // Incrementing the game count with 1
                gameCount++;
                console.log('count:', gameCount);
            }
        } else if (gameCount === 5) {
            playing = false;
            if (playing) {
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
    }
});

paper.addEventListener('click', function () {
    if (playing) {
        const playerChoice = paper.getAttribute('id');
        const computerChoice = getComputerChoice();
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const updateMessage = document.querySelector('.update-message');
        const updateWinner = document.querySelector('.update-winner');
        const playerScore = document.getElementById('player-score');
        const computerScore = document.getElementById('computer-score');
        const gameOverBox = document.querySelector('.game-over-box');
        const finalWinner = document.getElementById('final-winner');

        //printing values
        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        if (gameCount <= 5) {
            //results
            let currentResults = playRound(playerChoice, computerChoice);
            let currentWinningMessage = currentResults[0].winningMessage;
            let currentWinner = currentResults[0].winner;

            //If game is tied, go into this statement
            if (currentWinningMessage === 'tied') {
                console.log('tied');
                updateMessage.textContent = currentWinningMessage;
            }

            //If game is not tied, go into this statement
            if (currentWinningMessage !== 'tied') {
                updateMessage.textContent = currentWinningMessage;
                updateWinner.style.fontSize = '3rem';
                updateMessage.style.color = '#36cdba';
                if (currentWinner === 'computer') {
                    computerWinningCount++;
                    console.log('computer score:', computerWinningCount);
                    computerScore.textContent = computerWinningCount;
                } else if (currentWinner === 'player') {
                    playerWinningCount++;
                    console.log('player score:', playerWinningCount);
                    playerScore.textContent = playerWinningCount;
                }

                // Incrementing the game count with 1
                gameCount++;
                console.log('count:', gameCount);
            }
        } else if (gameCount === 5) {
            playing = false;
            if (playing) {
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
    }
});

scissor.addEventListener('click', function () {
    if (playing) {
        const playerChoice = scissor.getAttribute('id');
        const computerChoice = getComputerChoice();
        const playerChoiceEl = document.getElementById('player-choice');
        const computerChoiceEl = document.getElementById('computer-choice');
        const updateMessage = document.querySelector('.update-message');
        const updateWinner = document.querySelector('.update-winner');
        const playerScore = document.getElementById('player-score');
        const computerScore = document.getElementById('computer-score');
        const gameOverBox = document.querySelector('.game-over-box');
        const finalWinner = document.getElementById('final-winner');
        //printing values
        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        if (gameCount <= 5) {
            //results
            let currentResults = playRound(playerChoice, computerChoice);
            let currentWinningMessage = currentResults[0].winningMessage;
            let currentWinner = currentResults[0].winner;

            //If game is tied, go into this statement
            if (currentWinningMessage === 'tied') {
                console.log('tied');
                updateMessage.textContent = currentWinningMessage;
            }

            //If game is not tied, go into this statement
            if (currentWinningMessage !== 'tied') {
                updateMessage.textContent = currentWinningMessage;
                updateWinner.style.fontSize = '3rem';
                updateMessage.style.color = '#36cdba';
                if (currentWinner === 'computer') {
                    computerWinningCount++;
                    console.log('computer score:', computerWinningCount);
                    computerScore.textContent = computerWinningCount;
                } else if (currentWinner === 'player') {
                    playerWinningCount++;
                    console.log('player score:', playerWinningCount);
                    playerScore.textContent = playerWinningCount;
                }

                // Incrementing the game count with 1
                gameCount++;
                console.log('count:', gameCount);
            }
        } else if (gameCount === 5) {
            playing = false;
            if (playing) {
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
    }
});
