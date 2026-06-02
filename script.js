let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    return prompt("Choose rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice){
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
    }

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    console.log(resultString);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
console.log(`User: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

