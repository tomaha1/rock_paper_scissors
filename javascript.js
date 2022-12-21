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
    let selectionLowerCase;
    while (selectionLowerCase === undefined) {
    let selection = prompt("Choose rock, paper or scissors: ");
    let selectionLowerCase = selection.toLowerCase();
    if (selectionLowerCase === "rock" || selectionLowerCase === "paper" || selectionLowerCase === "scissors") {
        return selectionLowerCase;
        } else {
        console.log("Wrong word, try again.");
        }
    }
};

console.log(getPlayerChoice());
console.log(getComputerChoice());