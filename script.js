let gamePlayed;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let winner;

for (gamePlayed = 0; gamePlayed < 5; gamePlayed++) {
    playRound();
}

if (playerScore == computerScore) {
    alert("DRAWWWWWWW!");
} else if (playerScore > computerScore) {
    alert("You WIN !!!!!!")
} else {
    alert("You LOSEEEEEE!!!!!")
}

function playRound() {
    playerSelection = prompt("Choose between Rock, Paper, or Scissors ...", "").toLowerCase();
    computerSelection = getComputerChoice();

    checkWinner(playerSelection, computerSelection);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == `rock` && computerSelection == `scissors`) {
        win(playerSelection, computerSelection)
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        win(playerSelection, computerSelection);
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        win(playerSelection, computerSelection);
    } else if (playerSelection == computerSelection) {
        draw(playerSelection, computerSelection);
    } else {
        lose(playerSelection, computerSelection);
    }
}

function win(playerSelection, computerSelection) {
    playerScore++;
    alert(`You chose ${playerSelection} and computer chose ${computerSelection}. You win !. The current score is you ${playerScore} and computer ${computerScore}.`)
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    alert(`You chose ${playerSelection} and computer chose ${computerSelection}. You lose !. The current score is you ${playerScore} and computer ${computerScore}.`)
}

function draw(playerSelection, computerSelection) {
    alert(`You chose ${playerSelection} and computer chose ${computerSelection}. DRAW !. The current score is you ${playerScore} and computer ${computerScore}.`)
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}