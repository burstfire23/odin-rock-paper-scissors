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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;

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
            tie++;
        }

        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

        console.log(resultString);

    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore){
        console.log(`You win! The score after five rounds was ${humanScore}-${computerScore}-${tie}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! The score after five rounds was ${computerScore}-${humanScore}-${tie}`);
    } else {
        console.log("It's a tie!");
    }
}

playGame();


