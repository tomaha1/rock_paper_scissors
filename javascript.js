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
        user_score +=1;
        return "You won. Paper beats rock!";
    }   else if (user === "rock" && computer === "scissors") {
        user_score +=1;
        return "You won. Rock beats scissors!";
    }   else if (user === "scissors" && computer === "paper") {
        user_score +=1;
        return "You won. Scissors beat paper!";
    }   else if (user === "scissors" && computer === "rock") {
        comp_score += 1;
        return "You lost. Rock beats scissors!";
    }   else if (user === "rock" && computer === "paper") {
        comp_score += 1;
        return "You lost. Paper beats rock!";
    }   else if (user === "paper" && computer === "scissors") {
        comp_score += 1;
        return "You lost. Scissors beat paper!";
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        getComputerChoice();
        console.log(playRound(selectionLowerCase, computerSelection));
        console.log(`Round ${i+1} results user: ${user_score} computer: ${comp_score}.`);
    }
    if (comp_score > user_score) {
        console.log(`Computer won ${comp_score} to ${user_score}.`);
    } else if (comp_score < user_score) {
        console.log(`You won ${user_score} to ${comp_score}.`)
    } else {
        console.log("It is a tie!");
    }
};

let user_score = 0;
let comp_score = 0;
game();