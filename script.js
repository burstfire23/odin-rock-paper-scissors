let humanScore = 0;
let computerScore = 0;
let tie = 0;
let gameOver = false;


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
    resultString = ""

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

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    console.log(resultString);

    console.log(`You: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
    console.log(`Ties: ${tie}`)

    if (humanScore == 5 || computerScore == 5) {
        gameOver = true;
        if (humanScore > computerScore){
            console.log(`You win! The score after five rounds was ${humanScore}-${computerScore}-${tie}`);
        } else if (humanScore < computerScore) {
            console.log(`You lose! The score after five rounds was ${humanScore}-${computerScore}-${tie}`);
        } else {
            console.log("It's a tie!");
        }
    }

}


const rockButton = document.querySelector(".rock-button");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperButton = document.querySelector(".paper-button");
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsButton = document.querySelector(".scissors-button");
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));


