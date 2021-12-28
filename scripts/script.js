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
        computerWinRound();
        return `You Lose! Paper beats Rock. The score is ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWinRound();
        return `You Lose! Scissors beats Paper. The score is ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWinRound();
        return `You Lose! Rock beats Scissors. The score is ${playerScore} to ${computerScore}`
    } else {
        playerWinRound();
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. The score is ${playerScore} to ${computerScore}`;
    }
}

//Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
    let playerSelection, computerSelection;
    // loops until one player hits 3 points
    while (playerScore < 3 && computerScore < 3) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }

}

// function to get player input
function playerPlay() {
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
    return playerSelection;
}

// increment player score
function playerWinRound() {
    playerScore++;
}

// increment computer score
function computerWinRound() {
    computerScore++;
}

// init player scores
let computerScore = 0;
let playerScore = 0;
game();