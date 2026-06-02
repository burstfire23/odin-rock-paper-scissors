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



