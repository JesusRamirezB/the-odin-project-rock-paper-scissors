let resultString = "";
let victories = 0;
let playerSel = document.querySelectorAll('.option')
const campoResultados = document.getElementById('resultados');
let score = document.getElementById('score');
let gameRounds = 0;

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

/*
function playerSelection() {
    let choice = prompt("Please choose your weapon: rock-paper-scissors")
    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt("Oops, we may have gotten a typo. Please choose a valid weapon weapon: rock-paper-scissors")
    }
    return choice.toLowerCase();
}
*/

function playRound(ps) {
    let cs = computerSelection();
    gameRounds += 1;
    if (ps == "rock" && cs == "rock") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Piedra vs Piedra, empate.</p><br>
        `);

    } else if (ps == "rock" && cs == "paper") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Piedra vs Papel, pierdes.</p><br>
        `)
    } else if (ps == "rock" && cs == "scissors") {
        victories += 1;
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Piedra vs Tijeras, ganas</p><br>
        `)
    } else if (ps == "paper" && cs == "rock") {
        victories += 1;
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Papel vs Piedra, ganas.</p><br>
        `)
    } else if (ps == "paper" && cs == "paper") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Papel vs Papel, empate.</p><br>
        `)
    } else if (ps == "paper" && cs == "scissors") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Papel vs Tijeras, pierdes.</p><br>
        `)
    } else if (ps == "scissors" && cs == "rock") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Tijeras vs Piedra, pierdes.</p><br>
        `)
    } else if (ps == "scissors" && cs == "paper") {
        victories += 1;
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Tijeras vs Papel, ganas.</p><br>
        `)
    } else if (ps == "scissors" && cs == "scissors") {
        campoResultados.innerHTML += (`
            <p>Round ${gameRounds}: Tijeras vs Tijeras, empate.</p><br>
        `)
    }
    return "result not valid"
}

playerSel.forEach(element => {
    element.addEventListener('click', async(e) => {
        //await console.log(element.value);
        if (gameRounds < 5) {
            await playRound(element.value);
            score.innerText = (`
                Has ganado ${victories} veces de 5.
            `);
        } else {
            gameRounds = 0;
            victories = 0;
            campoResultados.innerHTML = (`
                <h3>Aqui se mostraran los resultados, empieza a jugar seleccionando una de las armas anteriores y prueba tu suerte contra un computadora!</h3><br>
            `);
            score.innerText = (`
                Comienza un nuevo juego
            `);
        }
    });
});


//console.log(victories);