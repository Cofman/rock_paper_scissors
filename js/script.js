let playerScore = 0;
let cpuScore = 0;
let playerChoice = 0;
let cpuChoice = 0;
let choiceMain = `Default`;
const btn_yes = document.getElementById(`btn_yes`);
const btn_no = document.getElementById(`btn_no`);
const sec_2 = document.getElementById(`sec_2`);
const btn_rock = document.getElementById(`rock`);
const btn_paper = document.getElementById(`paper`);
const btn_scissors = document.getElementById(`scissors`);
const html_player_score = document.getElementById(`html_player_score`);
const html_cpu_score = document.getElementById(`html_cpu_score`);
const clickSound = new Audio ('./audio/click.wav');
const giggleSound = new Audio (`./audio/giggle.mp3`);
const sec_15 = document.getElementById(`sec_15`);
const body = document.getElementById(`body`);

function funcCPUChoice() {
    cpuChoice = Math.floor(Math.random() * 3) + 1;
}

function cpuWhiteOut() {
    html_cpu_score.classList.add(`white-out`);
    setTimeout(() => {
        html_cpu_score.classList.remove(`white-out`);
    }, 1500);
}

function playerWhiteOut() {
    html_player_score.classList.add(`white-out`);
    setTimeout(() => {
        html_player_score.classList.remove(`white-out`);
    }, 1500);
}

function clickSoundPlay() {
    clickSound.play();
    clickSound.currentTime = 0;
}

function displayScore() {
    sec_15.style.display = "flex";
    html_player_score.textContent = `Player: ${playerScore}`;
    html_cpu_score.textContent = `CPU: ${cpuScore}`;
}

function hideScore() {
    sec_15.style.display = "none";
}

function displayBtnYN() {
    btn_yes.style.display = "block";
    btn_no.style.display = "block";
}

function hideBtnYN() {
    btn_yes.style.display = "none";
    btn_no.style.display = "none";
}

function displayBtnRPS() {
    btn_rock.style.display = "block";
    btn_paper.style.display = "block";
    btn_scissors.style.display = "block";
}

function hideBtnRPS() {
    btn_rock.style.display = "none";
    btn_paper.style.display = "none";
    btn_scissors.style.display = "none";
}

function funcGameStart() {
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
        sec_2.textContent = `Huh, we both chose ${cpuChoiceWord}. It's a draw!`;
    }
    else if (playerChoice == 1 && cpuChoice == 2) {
        cpuScore += 1;
        sec_2.textContent = `Rock loses to Paper!`;
        cpuWhiteOut();
    }
    else if (playerChoice == 1 && cpuChoice == 3) {
        playerScore +=1;
        sec_2.textContent = `Rock beats Scissors!`;
        playerWhiteOut()
    }
    else if (playerChoice == 2 && cpuChoice == 1) {
        playerScore +=1;
        sec_2.textContent = `Paper beats Rock!`;
        playerWhiteOut()
    }
    else if (playerChoice == 2 && cpuChoice == 3) {
        cpuScore +=1;
        sec_2.textContent = `Paper loses to Scissors!`;
        cpuWhiteOut();
    }
    else if (playerChoice == 3 && cpuChoice == 1) {
        cpuScore +=1;
        sec_2.textContent = `Scissors loses to Rock!`;
        cpuWhiteOut();
    }
    else if (playerChoice == 3 && cpuChoice == 2) {
        playerScore +=1;
        sec_2.textContent = `Scissors beats Paper!`;
        playerWhiteOut()
    }
    updateScore();
}

function updateScore() {
    html_player_score.textContent = `Player: ${playerScore}`;
    html_cpu_score.textContent = `CPU: ${cpuScore}`;
}

function playAgain() {
    hideBtnRPS();
    setTimeout(() => {
        sec_2.textContent = "Wanna play again?";
        displayBtnYN();
    }, 2000);
}

function exit() {
    setTimeout(() => {
        body.style.display = "none";
    }, 2000);
}

btn_yes.addEventListener(`click`, () => {
    sec_2.textContent = "What is your choice?"
    hideBtnYN();
    displayBtnRPS();
    clickSoundPlay();
    displayScore();
})

btn_no.addEventListener(`click`, () => {
    if (playerScore < cpuScore) {
        sec_2.textContent = "Oh really? See you next time then, loser"
        hideBtnYN();
        giggleSound.play();
    }
    else {
        sec_2.textContent = "Oh really? See you next time then"
        hideBtnYN();
        clickSoundPlay();
    }
    exit();
})

btn_rock.addEventListener(`click`, () => {
    playerChoice = 1;
    funcGameStart();
    clickSoundPlay();
    playAgain();
})

btn_paper.addEventListener(`click`, () => {
    playerChoice = 2;
    funcGameStart();
    clickSoundPlay();
    playAgain();
})

btn_scissors.addEventListener(`click`, () => {
    playerChoice = 3;
    funcGameStart();
    clickSoundPlay();
    playAgain();
})