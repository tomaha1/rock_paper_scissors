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

function playRound() {
    getComputerChoice();
    console.log(computerSelection);
    user = this.id; //zastanowic sie jak jeszcze mozna uzyskac button.id
    console.log(user);
    if (user === computerSelection) {
        document.getElementById("result").innerText = "It is a tie!";
        round +=1;
    }   else if (user === "paper" && computerSelection === "rock") {
        user_score +=1;
        round +=1;
        document.getElementById("result").innerText = "You won. Paper beats rock!";
    }   else if (user === "rock" && computerSelection === "scissors") {
        user_score +=1;
        round +=1;
        document.getElementById("result").innerText = "You won. Rock beats scissors!";
    }   else if (user === "scissors" && computerSelection === "paper") {
        user_score +=1;
        round +=1;
        document.getElementById("result").innerText = "You won. Scissors beat paper!";
    }   else if (user === "scissors" && computerSelection === "rock") {
        comp_score += 1;
        round +=1;
        document.getElementById("result").innerText = "You lost. Rock beats scissors!";
    }   else if (user === "rock" && computerSelection === "paper") {
        comp_score += 1;
        round +=1;
        document.getElementById("result").innerText = "You lost. Paper beats rock!";
    }   else if (user === "paper" && computerSelection === "scissors") {
        comp_score += 1;
        round +=1;
        document.getElementById("result").innerText = "You lost. Scissors beat paper!";
    }
    showResults();
};

function showResults() {
    document.getElementById("score").innerHTML = `Round ${round} results user: ${user_score} computer: ${comp_score}.`;
    if (comp_score === 5 || user_score === 5) {
        if (comp_score > user_score) {
            document.getElementById("score").innerText = `Computer won ${comp_score} to ${user_score}.`;
        } else if (comp_score < user_score) {
            document.getElementById("score").innerText = `You won ${user_score} to ${comp_score}.`;
        } else {
            document.getElementById("score").innerText = "It is a tie!";
        }
        user_score = 0;
        comp_score = 0;
        round = 0;
    }
};

let round = 0;
let user_score = 0;
let comp_score = 0;

let button = document.getElementsByTagName("button");

for (let i=0; i < button.length; i++) {
    button[i].addEventListener('click', playRound);
};