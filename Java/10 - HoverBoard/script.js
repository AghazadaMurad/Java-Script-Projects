"use strict";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const container = document.getElementById("container");
let content = "";

for (let i = 0; i < 500; i++) {
  content += `<div class="square"></div>`;
}

container.innerHTML = content;

let squareEl = document.querySelectorAll(".square");

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const addColor = (el) => {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (el) => {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < squareEl.length; i++) {
  squareEl[i].addEventListener("mouseenter", () => addColor(squareEl[i]));
  squareEl[i].addEventListener("mouseleave", () => removeColor(squareEl[i]));
}
