const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoise();
    getResult();
  })
);
function generateComputerChoise() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "камень";
  }
  if (randomNumber === 2) {
    computerChoice = "бумага";
  }
  if (randomNumber === 3) {
    computerChoice = "ножницы";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "это ничья!";
  }
  if (computerChoice === "камень" && userChoice === "бумага") {
    result = "ты выиграл!";
  }
  if (computerChoice === "камень" && userChoice === "ножницы") {
    result = "ты проиграл!";
  }
  if (computerChoice === "бумага" && userChoice === "камень") {
    result = "ты проиграл!";
  }
  if (computerChoice === "бумага" && userChoice === "ножницы") {
    result = "ты выиграл!";
  }
  if (computerChoice === "ножницы" && userChoice === "камень") {
    result = "ты выиграл!";
  }
  if (computerChoice === "ножницы" && userChoice === "бумага") {
    result = "ты проиграл!";
  }
  resultDisplay.innerHTML = result;
}
