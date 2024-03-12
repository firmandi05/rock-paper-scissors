// const capitalizeFirstLetter = (string) =>
//   string.charAt(0).toUpperCase() + string.slice(1);
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let CreateResultControl = true;
let createResultAnnouncementControl = true;

let playerScoreNode = document.querySelector("div.score p.player");
let compScoreNode = document.querySelector("div.score p.computer");
playerScoreNode.textContent = "";
compScoreNode.textContent = "";

function getComputerChoice() {
  const pick = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * pick.length);
  const getChoice = pick.at(randomNumber);

  return getChoice.toLowerCase();
}

function getPlayerChoice() {
  let rock = document.querySelector("button.rock");
  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  let paper = document.querySelector("button.paper");
  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  let scissors = document.querySelector("button.scissors");
  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
}

function CreateResultDiv() {
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("vs");
  document.body.appendChild(resultContainer);

  const playerContainer = document.createElement("div");
  playerContainer.classList.add("player");
  resultContainer.appendChild(playerContainer);

  const playerName = document.createElement("p");
  playerName.textContent = "You";
  playerContainer.appendChild(playerName);

  const playerPick = document.createElement("p");
  playerPick.classList.add("player");
  playerContainer.appendChild(playerPick);

  const playerIcon = document.createElement("i");
  playerIcon.classList.add("player");
  playerPick.appendChild(playerIcon);

  const h2 = document.createElement("h2");
  h2.textContent = "VS";
  resultContainer.appendChild(h2);

  const compContainer = document.createElement("div");
  compContainer.classList.add("comp");
  resultContainer.appendChild(compContainer);

  const compName = document.createElement("p");
  compName.textContent = "Comp";
  compContainer.appendChild(compName);

  const compPick = document.createElement("p");
  compPick.classList.add("comp");
  compContainer.appendChild(compPick);

  const compIcon = document.createElement("i");
  compIcon.classList.add("comp");
  compPick.appendChild(compIcon);
}

function createIconPick() {
  const createElement = document.createElement("i");
  createElement.classList.add("");
}

function createResultAnnouncement() {
  const createElement = document.createElement("h1");
  createElement.classList.add("result");
  document.body.appendChild(createElement);
}

function addScore(node) {
  let currentValue = parseInt(node.textContent.trim() || 0, 10);
  node.textContent = currentValue + 1;
}

function determineWinner() {

  const resultAnnouncement = document.querySelector("h1.result");

  const playerValue = parseInt(playerScoreNode.textContent);
  const compValue = parseInt(compScoreNode.textContent)

  if (playerValue === 5 ) {
    resultAnnouncement.textContent = 'Player WIN!!'

    document.body.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
  }, true);
  
  }

  if (compValue === 5 ) {
    resultAnnouncement.textContent = 'Computer WIN!!'

    document.body.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
  }, true);
  
  }
}

function playRound(player, computer) {
  if (CreateResultControl) {
    CreateResultDiv();
    CreateResultControl = false;
  }
  if (createResultAnnouncementControl) {
    createResultAnnouncement();
    createResultAnnouncementControl = false;
  }

  const playerPick = document.querySelector("i.player");
  const compPick = document.querySelector("i.comp");
  const resultAnnouncement = document.querySelector("h1.result");

  playerPick.className = "player";
  compPick.className = "comp";

  const pick = {
    rock: (user) => {
      user.classList.add("fa-solid", "fa-hand-back-fist", "fa-2xl");
    },
    paper: (user) => {
      user.classList.add("fa-solid", "fa-hand", "fa-2xl");
    },
    scissors: (user) => {
      user.classList.add(
        "fa-solid",
        "fa-hand-scissors",
        "fa-rotate-90",
        "fa-2xl"
      );
    },
  };

  if (player === computer) {
    pick[player](playerPick);
    pick[computer](compPick);
    resultAnnouncement.textContent = `It's a Tie!`;
  } else if (player === "rock" && computer === "scissors") {
    addScore(playerScoreNode);
    pick[player](playerPick);
    pick[computer](compPick);
    resultAnnouncement.textContent = `You Win!`;
  } else if (player === "paper" && computer === "rock") {
    addScore(playerScoreNode);
    pick[player](playerPick);
    pick[computer](compPick);
    resultAnnouncement.textContent = `You Win!`;
  } else if (player === "scissors" && computer === "paper") {
    addScore(playerScoreNode);

    pick[player](playerPick);
    pick[computer](compPick);
    resultAnnouncement.textContent = `You Win!`;
  } else {
    addScore(compScoreNode);

    pick[player](playerPick);
    pick[computer](compPick);
    resultAnnouncement.textContent = `Comp Win!`;
  }

  determineWinner();

}
