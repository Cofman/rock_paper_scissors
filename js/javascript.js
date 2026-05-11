let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?", "Rock");
    console.log(humanChoice);
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("Draw!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
