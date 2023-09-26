'use strict';

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

rock.addEventListener('click', function () {
    const playerChoice = rock.getAttribute('id');
    const computerChoice = getComputerChoice();
    const playerChoiceEl = document.getElementById('player-choice');
    const computerChoiceEl = document.getElementById('computer-choice');

    playerChoiceEl.textContent = playerChoice;
    computerChoiceEl.textContent = computerChoice;

    let [currentResults] = playRound(playerChoice, computerChoice);
    let currentWinningMessage = currentResults.winningMessage;
    let currentWinner = currentResults.winner;

    console.log('playRound script loaded');
    console.log('Winner is:', currentWinner);
    console.log('Message is:', currentWinningMessage);
});

paper.addEventListener('click', function () {
    const playerChoice = paper.getAttribute('id');
    const computerChoice = getComputerChoice();
    const playerChoiceEl = document.getElementById('player-choice');
    const computerChoiceEl = document.getElementById('computer-choice');

    playerChoiceEl.textContent = playerChoice;
    computerChoiceEl.textContent = computerChoice;

    let [currentResults] = playRound(playerChoice, computerChoice);
    let currentWinningMessage = currentResults.winningMessage;
    let currentWinner = currentResults.winner;

    console.log('playRound script loaded');
    console.log('Winner is:', currentWinner);
    console.log('Message is:', currentWinningMessage);
});

scissor.addEventListener('click', function () {
    const playerChoice = scissor.getAttribute('id');
    const computerChoice = getComputerChoice();
    const playerChoiceEl = document.getElementById('player-choice');
    const computerChoiceEl = document.getElementById('computer-choice');

    playerChoiceEl.textContent = playerChoice;
    computerChoiceEl.textContent = computerChoice;

    let [currentResults] = playRound(playerChoice, computerChoice);
    let currentWinningMessage = currentResults.winningMessage;
    let currentWinner = currentResults.winner;

    console.log('playRound script loaded');
    console.log('Winner is:', currentWinner);
    console.log('Message is:', currentWinningMessage);
});
