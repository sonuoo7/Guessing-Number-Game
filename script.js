let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./music.wav");
const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess)
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

// reload the game
const newGameBegin = () => {
  audio.play();
  window.location.reload();
};

// start new game

const startNewGame = () => {
  audio.play();
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

// main logic of app

const compareGuess = () => {
  audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // check the value low or high

  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is high 😬";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is low 😏";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "Hurrah! You won the Game 😎";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `OOPs!! you Loose, correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `OOPs! you Loose, correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "Hurrah! You won the Game 😎";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
