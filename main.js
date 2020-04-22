// Caching the DOM

const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_h3 = document.getElementById("message");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

//  Setting up a function for the computer that will use
// math.random and math.floor to loop through an array with the 3 options and return 1 value
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Setting up a function which takes an argument when called for the userChoice
function game(userChoice) {
  const computerChoice = getComputerChoice(); //computerChoice taken from the getComputerChoice function

  //Setting up the conditions (if else statements)
  if (userChoice === computerChoice) {
    result_h3.innerHTML =
      userChoice.charAt(0).toUpperCase() +
      userChoice.slice(1) +
      " and " +
      computerChoice +
      " are both the same. It's a draw.";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result_h3.innerHTML =
      userChoice.charAt(0).toUpperCase() +
      userChoice.slice(1) +
      " beats " +
      computerChoice +
      ". You win.";
    userWin(); //calling the win function
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result_h3.innerHTML =
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1) +
      " beats " +
      userChoice +
      ". You lose.";
    computerWin(); //calling the win function
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    result_h3.innerHTML =
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1) +
      " beats " +
      userChoice +
      ". You lose.";
    computerWin(); //calling the win function
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result_h3.innerHTML =
      userChoice.charAt(0).toUpperCase() +
      userChoice.slice(1) +
      " beats " +
      computerChoice +
      ". You win.";
    userWin(); //calling the win function
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    result_h3.innerHTML =
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1) +
      " beats " +
      userChoice +
      ". You lose.";
    computerWin(); //calling the win function
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result_h3.innerHTML =
      userChoice.charAt(0).toUpperCase() +
      userChoice.slice(1) +
      " beats " +
      computerChoice +
      ". You win.";
    userWin(); //calling the win function
  }
}

// Adding an eventlistener to the 'choice' html elements
// and then passing the value of that element
// to the game function we created earlier by giving it the argument we want

rock_div.addEventListener("click", function () {
  game("rock");
});

paper_div.addEventListener("click", function () {
  game("paper");
});

scissors_div.addEventListener("click", function () {
  game("scissors");
});

// Function for adding score each win
function userWin() {
  userScore++;
  userScore_span.innerHTML = userScore;
}
// Function for adding score each win
function computerWin() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
}

//Function for resetting the game
function resetGame() {
  computerScore = 0;
  userScore = 0;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_h3.innerHTML = "Good luck!";
}
