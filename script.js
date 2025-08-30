let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) return "Rock";
    else if (computerChoice == 2) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    return prompt("ROCK | PAPER | SCISSORS");
}

function playRound(humanChoice, computerChoice) {
    if((humanChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') ||
       (humanChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') ||
       (humanChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper')){
        humanScore++;
        alert(`Human won! ${humanChoice} beats ${computerChoice}!`);
    }
    else if(humanChoice.toLowerCase() == computerChoice.toLowerCase())
        alert("Draw!");
    else {
        computerScore++;
        alert(`Computer won! ${computerChoice} beats ${humanChoice}!`);
    }
}

function playGame() {
    for(let round = 1; round <= 5; round++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore) alert("HUMAN WON!!!");
    else if(humanScore < computerScore) alert("COMPUTER WON!!!");
    else alert("NOBODY WON!!!");
}

playGame();