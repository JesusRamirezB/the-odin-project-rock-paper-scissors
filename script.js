let resultString;
let resultNumber;
function computerSelection (){
    var x = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (x == 1) {
        return "rock";
    } 
    else if (x == 2) {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playerSelection(){
    var choice = prompt("Please choose your weapon: rock-paper-scissors")
    return choice.toLowerCase;
}

function playRound(){
    if (playerSelection() == "rock" && computerSelection() == "rock") {
        
    }

}

console.log(playerSelection());