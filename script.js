const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

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

function playRound(player, computer) {
  if (player === computer) {
    return `You chose ${capitalizeFirstLetter(player)}. Computer chose ${capitalizeFirstLetter(computer)}. It's a tie!`;
  } else if (player === "rock" && computer === "scissors") {
    return `You chose ${capitalizeFirstLetter(player)}. Computer chose ${capitalizeFirstLetter(computer)}. Oh my god!! You win!`;
  }else if (player === "paper" && computer === "rock") {
    return `You chose ${capitalizeFirstLetter(player)}. Computer chose ${capitalizeFirstLetter(computer)}. Oh my god!! You win!`;
  }else if (player === "scissors" && computer === "paper") {
    return `You chose ${capitalizeFirstLetter(player)}. Computer chose ${capitalizeFirstLetter(computer)}. Oh my god!! You win!`;
  } else {
    return `You chose ${capitalizeFirstLetter(player)}. Computer chose ${capitalizeFirstLetter(computer)}. Oh no!, You lose!`
  }
}

console.log(playRound(playerSelection, computerSelection));
