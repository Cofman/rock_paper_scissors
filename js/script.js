let playerScore = 0;
let cpuScore = 0;
let playerChoice = 0;
let cpuChoice = 0;

function funcPlayerChoice() {
    playerChoice = prompt("1 = Rock, 2 = Paper, 3 = Scissors");
}

function funcCPUChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
}

function funcGameStart() {
    funcPlayerChoice();
    funcCPUChoice();
    if (playerChoice == cpuChoice) {
        alert(`Huh, you both chose ${cpuChoice}. So, it's a draw!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 1 && cpuChoice == 2) {
        cpuScore += 1;
        alert(`Rock loses to Paper!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 1 && cpuChoice == 3) {
        playerScore +=1;
        alert(`Rock beats Scissors!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 2 && cpuChoice == 1) {
        playerScore +=1;
        alert(`Paper beats Rock!`)
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 2 && cpuChoice == 3) {
        cpuScore +=1;
        alert(`Paper loses to Scissors!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 3 && cpuChoice == 1) {
        cpuScore +=1;
        alert(`Scissors loses to Rock!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
    else if (playerChoice == 3 && cpuChoice == 2) {
        playerScore +=1;
        alert(`Scissors beats Paper!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
    }
}

funcGameStart(playerChoice, cpuChoice);