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
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
}

let playerInput = window.prompt(`Enter "Rock", "Paper" or "Scissors": `);
let playerSelection = playerInput.toLowerCase();
// user input validation
while (true) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        break;
    } else {
        playerInput = window.prompt(`Invalid input. Enter "Rock", "Paper" or "Scissors": `);
        playerSelection = playerInput.toLowerCase();
    }
}

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));