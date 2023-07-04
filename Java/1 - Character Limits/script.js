"use strict";

const textEl = document.getElementById("text");
const charactersEl = document.querySelector(".characters");
const currentEl = document.getElementById("current");

textEl.addEventListener("keyup", () => {
  if (textEl.value.length > 0) {
    charactersEl.classList.add("active");
    currentEl.innerText = textEl.value.length;
  } else {
    charactersEl.classList.remove("active");
  }

  if (textEl.value.length > 10) {
    charactersEl.style.color = "red";
    textEl.style.color = "red";
    textEl.style.borderColor = "red";
  } else {
    charactersEl.style.color = "black";
    textEl.style.color = "black";
    textEl.style.borderColor = "black";
  }
});
