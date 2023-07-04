"use strict";

const color = document.getElementById("color");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const newColor = () => {
  color.innerText = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value}`;
};

red.addEventListener("input", () => {
  newColor();
});
green.addEventListener("input", () => {
  newColor();
});
blue.addEventListener("input", () => {
  newColor();
});
