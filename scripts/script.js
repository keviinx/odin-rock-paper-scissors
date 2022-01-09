// init player scores
let computerScore = 0;
let playerScore = 0;

const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const WINNING_SCORE = 5;

result.setAttribute('style', 'white-space: pre;');

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});

//so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        result.textContent = `It's a draw!. The score is ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result.textContent = `You Lose! Paper beats Rock. The score is ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result.textContent = `You Lose! Scissors beats Paper. The score is ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result.textContent = `You Lose! Rock beats Scissors. The score is ${playerScore} to ${computerScore}`
    } else {
        playerScore++;
        result.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. The score is ${playerScore} to ${computerScore}`;
    }

    if (playerScore === WINNING_SCORE) {
        result.textContent += "\r\nPlayer wins!";
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else if (computerScore === WINNING_SCORE) {
        result.textContent += "\r\nComputer wins!";
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else {
        // do nothing
    }
}