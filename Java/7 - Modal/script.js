"use strict";

const button = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

let modalOpen = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
let modalClose = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < button.length - 1; i++) {
  button[i].addEventListener("click", () => {
    modalOpen();
  });
}

button[button.length - 1].addEventListener("click", () => {
  modalClose();
});

overlay.addEventListener("click", () => {
  modalClose();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    modalClose();
  }
});
