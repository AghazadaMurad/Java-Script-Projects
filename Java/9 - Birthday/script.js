"use strict";

const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const modalEl = document.querySelector(".modal");
const closemodalEl = document.querySelector(".close-modal");
const messageEl = document.querySelector(".message");
const overlayEl = document.querySelector(".overlay");
const submitBtn = document.getElementById("submit");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[1]);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    dayEl.value < 32 &&
    dayEl.value > 0 &&
    monthEl.value > 0 &&
    monthEl.value < 13 &&
    yearEl.value > 1900 &&
    yearEl.value < 2024 &&
    !(monthEl.value == 2 && dayEl.value > 29)
  ) {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
    messageEl.innerText = `Your birthday is ${dayEl.value} ${
      months[+monthEl.value - 1]
    } ${yearEl.value}`;
  } else {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
    messageEl.innerText = "Please enter correct time";
  }
});

closemodalEl.addEventListener("click", (e) => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");

  // console.log("test");
});

overlayEl.addEventListener("click", (e) => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
  }
});
