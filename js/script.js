let playerScore = 0;
let cpuScore = 0;
let playerChoice = 0;
let cpuChoice = 0;
let choiceMain = `Default`;

function funcPlayerChoice() {
    playerChoice = prompt("1 = Rock, 2 = Paper, 3 = Scissors", 1);
}

function funcCPUChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
}

function funcGameStart() {
    funcPlayerChoice();
    funcCPUChoice();
    if (playerChoice == cpuChoice) {
        let cpuChoiceWord = `Default`;
        if (cpuChoice == 1) {
            cpuChoiceWord = `Rock`;
        }
        else if (cpuChoice == 2) {
            cpuChoiceWord = `Paper`;
        }
        else if (cpuChoice == 3) {
            cpuChoiceWord = `Scissors`;
        }
        alert(`Huh, you both chose ${cpuChoiceWord}. So, it's a draw!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 1 && cpuChoice == 2) {
        cpuScore += 1;
        alert(`Rock loses to Paper!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 1 && cpuChoice == 3) {
        playerScore +=1;
        alert(`Rock beats Scissors!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 2 && cpuChoice == 1) {
        playerScore +=1;
        alert(`Paper beats Rock!`)
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 2 && cpuChoice == 3) {
        cpuScore +=1;
        alert(`Paper loses to Scissors!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 3 && cpuChoice == 1) {
        cpuScore +=1;
        alert(`Scissors loses to Rock!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else if (playerChoice == 3 && cpuChoice == 2) {
        playerScore +=1;
        alert(`Scissors beats Paper!`);
        alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        rockPaperScissorsAgain();
    }
    else {
        alert(`Stick to the rules.`);
        funcGameStart(playerChoice, cpuChoice);
    }
}

function rockPaperScissors() {
    
    choiceMain = prompt(`Wanna play Rock, Paper, Scissors? \n Yes or No?`).toLowerCase();
    if (choiceMain == `yes` || choiceMain == `y`) {
        funcGameStart(playerChoice, cpuChoice);
    }
    else if (choiceMain == `no` || choiceMain == `n`) {
        alert(`Oh really? See you next time then.`);
    }
    else {
        alert(`That doesn't answer my question...`);
        rockPaperScissors();
    }
}

function rockPaperScissorsAgain() {
    choiceMain = prompt(`Wanna play again? \n Yes or No?`).toLowerCase();
    if (choiceMain == `yes` || choiceMain == `y`) {
        funcGameStart(playerChoice, cpuChoice);
    }
    else if (choiceMain == `no` || choiceMain == `n`) {
        if (playerScore < cpuScore) {
            alert(`Oh really? See you next time then, loser.`);
            alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        }
        else {
            alert(`Oh really? See you next time then.`);
            alert(`Score: Player: ${playerScore} || CPU: ${cpuScore}`);
        }

    }
    else {
        alert(`That doesn't answer my question...`);
        rockPaperScissorsAgain();
    }
}

rockPaperScissors();