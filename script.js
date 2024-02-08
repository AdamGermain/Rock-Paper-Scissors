// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(choice, image) {
  if (image == "images/rock.png") {
    document.getElementById(choice).src = image;
  } else if (image == "images/paper.png") {
    document.getElementById(choice).src = image;
  } else if (image == "images/scissors.png") {
    document.getElementById(choice).src = image;
  }
}

function getCompChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    document.getElementById("computer-choice").src = "images/rock.png";
    return "Rock";
  } else if (choice == 1) {
    document.getElementById("computer-choice").src = "images/paper.png";
    return "Paper";
  } else if (choice == 2) {
    document.getElementById("computer-choice").src = "images/scissors.png";
    return "Scissors";
  }
}

function getResult(player, comp) {
  if (player == "rock") {
    if (comp == "Rock") return "Tie";
    if (comp == "Paper") return "Computer";
    if (comp == "Scissors") return "Player";
  } else if (player == "paper") {
    if (comp == "Rock") return "Player";
    if (comp == "Paper") return "Tie";
    if (comp == "Scissors") return "Computer";
  } else if (player == "scissors") {
    if (comp == "Rock") return "Computer";
    if (comp == "Paper") return "Player";
    if (comp == "Scissors") return "Tie";
  }
}

function showResult(winner) {
  if (winner != "Tie")
    buttonsArea.innerHTML = "Congratulations to the winner: " + winner + "!";
  if (winner == "Tie") buttonsArea.innerHTML = "It was a tie!";
}

function updateScore(winner) {
  if (winner == "Player") {
    pScore++;
    playerScoreEl.innerHTML = pScore;
  }
  if (winner == "Computer") {
    cScore++;
    computerScoreEl.innerHTML = cScore;
  }
}
