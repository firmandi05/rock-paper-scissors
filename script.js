const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

function getComputerChoice() {
  const pick = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * pick.length);
  const getChoice = pick.at(randomNumber);

  return getChoice.toLowerCase();
}

function getPlayerChoice() {
  let playerPick = prompt(`Choose between Rock, Paper, Or Scissors :`, "");

  // check if prompt is close or empty
  while (playerPick === null || playerPick.trim() === "") {
    alert("Please pick Rock, Paper, or Scissors");

    return getPlayerChoice();
  }

  // Make playerPick lowercase
  let lowerCasePlayerPick = playerPick.toLowerCase();

  // check if prompt is not Rock, Paper, or Scissors
  const validChoice = ["rock", "paper", "scissors"];
  while (!validChoice.includes(lowerCasePlayerPick)) {
    alert("Please enter Rock, Paper, or Scissors");

    return getPlayerChoice();
  }

  return playerPick.toLowerCase();
}

function playGame() {
  let gamePlayed = 0;
  let playerRoundWin = 0;
  let computerRoundWin = 0;
  

  let playRound = (playerSelection, computerSelection) => {
    let roundWinner;

    if (playerSelection === computerSelection) {
      return (roundWinner = null);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return (roundWinner = "player");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return (roundWinner = "player");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return (roundWinner = "player");
    } else {
      return (roundWinner = "computer");
    }
  };

  while (gamePlayed < 5) {
    gamePlayed++;

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    switch (roundResult) {
      case "player":
        console.log(`You ${capitalizeFirstLetter(playerSelection)} vs Computer ${capitalizeFirstLetter(computerSelection)}`)
        console.log("Yay!, You Win!");
        playerRoundWin++;
        console.log(
          `game ${gamePlayed} of 5. You ${playerRoundWin}, Computer ${computerRoundWin}`
        );
        break;
      case "computer":
        console.log(`You ${capitalizeFirstLetter(playerSelection)} vs Computer ${capitalizeFirstLetter(computerSelection)}`)
        console.log("Oh no!, You lose :(");
        computerRoundWin++;
        console.log(
          `game ${gamePlayed} of 5. You ${playerRoundWin}, Computer ${computerRoundWin}`
        );
        break;
      case null:
        console.log(`You ${capitalizeFirstLetter(playerSelection)} vs Computer ${capitalizeFirstLetter(computerSelection)}`)
        console.log(`Opps!, It's a tie!`);
        console.log(
          `game ${gamePlayed} of 5. You ${playerRoundWin}, Computer ${computerRoundWin}`
        );
        break;
    }
    
  }

  let winner;

  if (playerRoundWin === computerRoundWin) {
    return (winner = `it's a Tie!, You put a good fight!`);
  } else if (playerRoundWin < computerRoundWin) {
    return (winner = `Oh nooo!, You lose against Computer!`);
  } else if (playerRoundWin > computerRoundWin) {
    return (winner = `Oh my god!, You Win Against Computer!`);
  }
}

console.log(playGame());
