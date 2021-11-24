let resultString = "";
let victories = 0;

function computerSelection() {
    var x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (x == 1) {
        return "rock";
    } else if (x == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerSelection() {
    let choice = prompt("Please choose your weapon: rock-paper-scissors")
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt("Oops, we may have gotten a typo. Please choose a valid weapon weapon: rock-paper-scissors")
    }
    return choice.toLowerCase();
}

function playRound() {
    let ps = playerSelection();
    let cs = computerSelection();
    if (ps == "rock" && cs == "rock") {
        resultString += ("You picked rock and computer picked rock so you tied. \n");
    } else if (ps == "rock" && cs == "paper") {
        resultString += ("You picked rock and computer picked paper so you lost. \n");
    } else if (ps == "rock" && cs == "scissors") {
        victories += 1;
        resultString += ("You picked rock and computer picked scissors so you won. \n");
    } else if (ps == "paper" && cs == "rock") {
        victories += 1;
        resultString += ("You picked paper and computer picked rock so you won. \n");
    } else if (ps == "paper" && cs == "paper") {
        resultString += ("You picked paper and computer picked paper so you tied. \n");
    } else if (ps == "paper" && cs == "scissors") {
        resultString += ("You picked paper and computer picked scissors so you lost. \n");
    } else if (ps == "scissors" && cs == "rock") {
        resultString += ("You picked scissors and computer picked rock so you lost. \n");
    } else if (ps == "scissors" && cs == "paper") {
        victories += 1;
        resultString += n("You picked scissors and computer picked paper so you won. \n");
    } else if (ps == "scissors" && cs == "scissors") {
        resultString += ("You picked scissors and computer picked scissors so you tied. \n");
    }
    return "result not valid"
}

for (var i = 0; i < 5; i++) {
    playRound();
}
if (victories > 3) {
    console.log("You win with " + victories + " victories.\n" + "Results of games: \n" + resultString);
    window.alert("You win with " + victories + " victories.\n" + "Results of games: \n" + resultString)
} else {
    console.log("You lose with only " + victories + " victories.\n" + "Results of games: \n" + resultString);
    window.alert("You lose with only " + victories + " victories.\n" + "Results of games: \n" + resultString);
}

console.log(victories);