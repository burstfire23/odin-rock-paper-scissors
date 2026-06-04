let humanScore = 0;
let computerScore = 0;
let tie = 0;
let gameOver = false;
let resultString = "";


function getComputerChoice(){
    random = Math.floor(Math.random() * 3);

    if (random == 0){
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

   
function playRound(humanChoice, computerChoice){
    if (gameOver) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "paper" && computerChoice == "rock") {
        resultString = `You win! ${humanChoice} beats ${computerChoice};`
        humanScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        resultString = `You lose! ${computerChoice} beats ${humanChoice};`
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultString = `You win! ${humanChoice} beats ${computerChoice};`
        humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        resultString = `You lose! ${computerChoice} beats ${humanChoice};`
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultString = `You win! ${humanChoice} beats ${computerChoice};`
        humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        resultString = `You lose! ${computerChoice} beats ${humanChoice};`
        computerScore++;
    } else {
        resultString = "It's a tie!";
        tie++;
    }

    displayResults(humanChoice, computerChoice);

}

const resultsDiv = document.querySelector(".results");


function displayResults(humanChoice, computerChoice) {
    const userChoice = document.createElement("div");
    userChoice.textContent = `Your choice: ${humanChoice}`;
    resultsDiv.appendChild(userChoice);

    const compChoice = document.createElement("div");
    compChoice.textContent = `Computer choice: ${computerChoice}`;
    resultsDiv.appendChild(compChoice);

    const result = document.createElement("div");
    result.textContent = resultString;
    resultsDiv.appendChild(result);

    const userScore = document.createElement("div");
    userScore.textContent = `You: ${humanScore}`;
    resultsDiv.appendChild(userScore);

    const compScore = document.createElement("div");
    compScore.textContent = `Computer: ${computerScore}`;
    resultsDiv.appendChild(compScore);

    const ties = document.createElement("div");
    ties.textContent = `Ties: ${tie}`;
    resultsDiv.appendChild(ties);

    if (humanScore == 5 || computerScore == 5) {
        gameOver = true;
        if (humanScore > computerScore){
            const winMsg = document.createElement("div");
            winMsg.textContent = `You win! The score after five rounds was ${humanScore}-${computerScore}-${tie}`;
            resultsDiv.appendChild(winMsg);
        } else if (humanScore < computerScore) {
            const loseMsg = document.createElement("div");
            loseMsg.textContent = `You lose! The score after five rounds was ${humanScore}-${computerScore}-${tie}`;
            resultsDiv.appendChild(loseMsg);
        } else {
            const tieMsg = document.createElement("div");
            tieMsg.textContent = "It's a tie!";
            resultsDiv.appendChild(tieMsg);
        }
    }

    const br = document.createElement("br");
    resultsDiv.appendChild(br);
}


const rockButton = document.querySelector(".rock-button");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperButton = document.querySelector(".paper-button");
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsButton = document.querySelector(".scissors-button");
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));


