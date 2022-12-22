function getComputerChoice() {
    let random_number = Math.floor(Math.random() * 3);
    switch(random_number) {
        case 0:
            return computerSelection = "rock"
            break;
        case 1:
            return computerSelection = "paper"
            break;
        case 2:
            return computerSelection = "scissors"
            break;
    }
};

function getPlayerChoice() {
    let selection;
    while (selection === undefined) {
        let selection = prompt("Choose rock, paper or scissors: ").toLowerCase();
        if (selection === "rock") {//||  || (selectionLowerCase === "scissors")) {
            return selectionLowerCase = "rock";
        } else if (selection === "paper") {
            return selectionLowerCase = "paper";
        } else if (selection === "scissors") {
            return selectionLowerCase = "scissors";
        }   else {
        console.log("Wrong word, try again.");
        }
    }
};

function playRound(user, computer) {
    if (user === computer) {
        return "It is a tie!";
    }   else if (user === "paper" && computer === "rock") {
        return "You won. Paper beats rock!";
    }   else if (user === "rock" && computer === "scissors") {
        return "You won. Rock beats scissors!";
    }   else if (user === "scissors" && computer === "paper") {
        return "You won. Scissors beat paper!"
    }   else if (user === "scissors" && computer === "rock") {
        return "You lost. Rock beats scissors!";
    }   else if (user === "rock" && computer === "paper") {
        return "You lost. Paper beats rock!";
    }   else if (user === "paper" && computer === "scissors") {
        return "You lost. Scissors beat paper!"
    }
}

console.log(getPlayerChoice());
console.log(getComputerChoice());
console.log(playRound(selectionLowerCase, computerSelection));