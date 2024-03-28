// P1 = Player, P2 = Computer

const username = prompt("What would you like to be called?");

let wins = 0;
let loses = 0;

document.getElementById('player1').textContent = `${username}: `

function playGame(choicesIndex) {

    const choices = ["rock", "paper", "scissors"];
    const result = document.getElementById('result');
    let resultDisplayP1 = document.getElementById('player1');
    let resultDisplayP2 = document.getElementById('player2');

    const player2Choice = choices[Math.floor(Math.random() * choices.length)];
    const player1Choice = choices[choicesIndex];

    resultDisplayP1.textContent = `${username}: ${choices[choicesIndex]}`;
    resultDisplayP2.textContent =  `Computer: ${player2Choice}`;

    if (player1Choice === player2Choice) {
        result.textContent = "It's a tie!";
        result.style.color = "yellow";
    } else if (player1Choice === "rock" && player2Choice === "scissors") {
        result.textContent = "You win!";
        result.style.color = "green";

        wins++;
    } else if (player1Choice === "paper" && player2Choice === "rock") {
        result.textContent = "You win!";
        result.style.color = "green";

        wins++;
    } else if (player1Choice === "scissors" && player2Choice === "paper") {
        result.textContent = "You win!";
        result.style.color = "green";

        wins++;
    } else {
        result.textContent = "You lose!";
        result.style.color = "red";

        loses++;
    }

    document.getElementById('resetScore').onclick = () => {
        wins = 0;
        loses = 0;

        document.getElementById('wins').textContent = `Wins: ${wins}`;
        document.getElementById('loses').textContent = `Loses: ${loses}`;
    };

    document.getElementById('wins').textContent = `Wins: ${wins}`;
    document.getElementById('loses').textContent = `Loses: ${loses}`;
}