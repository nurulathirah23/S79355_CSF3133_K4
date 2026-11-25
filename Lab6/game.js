// Game state variables
var gameStarted = false;
var wins = 0;
var losses = 0;
var draws = 0;
var roundCount = 0;
var results = [];

// Start the game after checking the player's name
function startGame() {
  var nameInput = document.getElementById("playerName").value;

  if (nameInput.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  gameStarted = true;
  document.getElementById("welcomeMsg").innerHTML = "Welcome, " + nameInput + "!";

  var now = new Date();
  document.getElementById("startTime").innerHTML = "Started on: " + now;
}


function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var index = Math.floor(Math.random() * 3);
  return choices[index];
}

// Play one round, update images, score, result colour, and history table
function playRound(playerChoice) {
  if (!gameStarted) {
    alert("Click Start Game first.");
    return;
  }

  var computerChoice = getComputerChoice();
  roundCount++;

  
  document.getElementById("playerImg").src = playerChoice + ".png";
  document.getElementById("computerImg").src = computerChoice + ".png";

  var outcome = "";
  var resultMessage = "";
  var resultColor = "";

  
  if (playerChoice === computerChoice) {
    outcome = "Draw";
    draws++;
    resultColor = "grey";
    resultMessage = "It is a draw! Both chose " + playerChoice + ".";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    outcome = "Win";
    wins++;
    resultColor = "green";
    resultMessage = "You win! " + playerChoice + " beats " + computerChoice + ".";
  } else {
    outcome = "Lose";
    losses++;
    resultColor = "red";
    resultMessage = "You lose! " + computerChoice + " beats " + playerChoice + ".";
  }

  // Record result 
  results.push(outcome);

  var resultEl = document.getElementById("result");
  resultEl.innerHTML = resultMessage;
  resultEl.style.color = resultColor;

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("draws").innerHTML = draws;


  var historyBody = document.getElementById("historyBody");
  historyBody.innerHTML +=
    "<tr>" +
      "<td>" + roundCount + "</td>" +
      "<td>" + playerChoice + "</td>" +
      "<td>" + computerChoice + "</td>" +
      "<td>" + outcome + "</td>" +
    "</tr>";
}

// Count wins 
function showSummary() {
  var totalRounds = results.length;

  if (totalRounds === 0) {
    document.getElementById("summaryText").innerHTML = "You played 0 rounds and won 0%.";
    return;
  }

  var winCount = 0;
  for (var i = 0; i < results.length; i++) {
    if (results[i] === "Win") {
      winCount++;
    }
  }

  var percentage = Math.round((winCount / totalRounds) * 100);
  document.getElementById("summaryText").innerHTML =
    "You played " + totalRounds + " rounds and won " + percentage + "%.";
}

// Reset all scores, summary, and history table rows
function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  roundCount = 0;
  results = [];

  document.getElementById("wins").innerHTML = "0";
  document.getElementById("losses").innerHTML = "0";
  document.getElementById("draws").innerHTML = "0";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.color = "";
  document.getElementById("summaryText").innerHTML = "";
  document.getElementById("historyBody").innerHTML = "";
}