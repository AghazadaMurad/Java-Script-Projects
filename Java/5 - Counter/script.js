"use strict";

const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const counter = document.querySelector("#counter");
const reset = document.querySelector(".reset");

let number = 0;

const chek = () => {
  if (number > 0) {
    counter.style.color = "green";
  }

  if (number == 0) {
    counter.style.color = "white";
  }

  if (number < 0) {
    counter.style.color = "red";
  }
  counter.innerText = number;
};

decrease.addEventListener("click", () => {
  number--;
  chek();
});

increase.addEventListener("click", () => {
  number++;
  chek();
});
reset.addEventListener("click", () => {
  number = 0;
  chek();
});
