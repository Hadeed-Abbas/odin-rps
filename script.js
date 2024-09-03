let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let selection = document.querySelector("#selection");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

const values = ["rock", "paper", "scissor"];
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  return values[num];
}

rock.addEventListener("click", () => {
  if (humanScore < 5 && computerScore < 5) {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayScore();
  }
});

paper.addEventListener("click", () => {
  if (humanScore < 5 && computerScore < 5) {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayScore();
  }
});

scissor.addEventListener("click", () => {
  if (humanScore < 5 && computerScore < 5) {
    humanChoice = "scissor";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayScore();
  }
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    selection.innerText = `You Selected: ${humanChoice} \nComputer Selected: ${computerChoice}`;

    result.innerText = "It is a draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    selection.innerText = `You Selected: ${humanChoice} \nComputer Selected: ${computerChoice}`;

    result.innerText = "Human beat Computer!";
  } else {
    computerScore++;
    selection.innerText = `You Selected: ${humanChoice} \nComputer Selected: ${computerChoice}`;

    result.innerText = "Computer beat you!";
  }
}

function displayScore() {
  score.innerText = `Your Score: ${humanScore} Computer Score: ${computerScore}`;

  if (humanScore === 5) {
    result.innerText = "You Won! Game Over.";
    disableButtons();
  } else if (computerScore === 5) {
    result.innerText = "Computer Won! Game Over.";
    disableButtons();
  }
}

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}
