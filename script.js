// Inspireret af opgaven gæt et tal 
// Kilde: https://github.com/maat001kea/Gaet_Et_Tal
// Inspireret af GeeksforGeeks artikel om Rock, Paper, Scissors-spil
// Kilde: https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/


// Vent på at hele siden er indlæst
window.onload = function() {

  // Vælg HTML-elementer
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const loseText = document.getElementById("lose");
  const winText = document.getElementById("win");
  const drawText = document.getElementById("draw");
  const buttons = document.querySelectorAll("#buttons button");

  // Mulige valg i spillet
  const choices = ["rock", "paper", "scissors"];

  // Funktion til at få et tilfældigt valg til computeren
  function getRandomChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
  }

  // Funktion til at afgøre spillets resultat
  function getResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) return "draw"; // Uafgjort
      if (
          (playerChoice === "rock" && computerChoice === "scissors") || // Sten slår saks
          (playerChoice === "paper" && computerChoice === "rock") || // Papir slår sten
          (playerChoice === "scissors" && computerChoice === "paper") // Saks slår papir
      ) {
          return "win"; // Spilleren vinder
      }
      return "lose"; // Spilleren taber
  }

  // Funktion til at skjule resultatteksterne
  function resetTextMessages() {
      loseText.classList.add("hidden");
      winText.classList.add("hidden");
      drawText.classList.add("hidden");
  }

  // Funktion til at starte spillet
  function playGame(playerChoice) {
      // Få et valg for computeren
      const computerChoice = getRandomChoice();

      // Nulstil tidligere beskeder
      resetTextMessages();

      // Opdater spillerens og computerens håndbillede med det samme
      player1.className = `player ${playerChoice}`;
      player2.className = `player ${computerChoice}`;

      // Vis resultat
      const result = getResult(playerChoice, computerChoice);
      if (result === "win") {
          winText.classList.remove("hidden");
      } else if (result === "lose") {
          loseText.classList.remove("hidden");
      } else {
          drawText.classList.remove("hidden");
      }
  }

  // Tilføj event listeners til knapperne
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const playerChoice = button.classList[0]; // Find ud af, hvilken knap der blev klikket
          playGame(playerChoice);
      });
  });
};
