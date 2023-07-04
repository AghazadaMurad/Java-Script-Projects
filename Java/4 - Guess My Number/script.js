"use strict";

const numOfGuess = document.querySelector("#numberOfGuess");
const score = document.querySelector("#score");
const input = document.querySelector("input");
const button = document.querySelector("button");
const tryAgain = document.querySelector("#try-again");

let randomNumber = Math.floor(Math.random() * 50);
let numGuess = 0;
let scoreBorad = 20;

console.log(randomNumber);

button.addEventListener("click", () => {
  numGuess++;
  numOfGuess.innerText = numGuess;

  scoreBorad--;
  score.innerText = scoreBorad;

  if (randomNumber === +input.value) {
    tryAgain.innerText = "You Won";
    tryAgain.style.color = "green";
  } else if (randomNumber < +input.value) {
    tryAgain.innerText = "Too High!";
    tryAgain.style.color = "Red";
  } else {
    tryAgain.innerText = "Too Low!";
    tryAgain.style.color = "Red";
  }
  if (scoreBorad == 0) {
    alert(`You Lost Number Was ${randomNumber}`);
  }
});
