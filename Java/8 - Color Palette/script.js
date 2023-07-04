"use strict";

const color = document.querySelectorAll(".color");

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("mouseover", (event) => {
    event.target.classList.add("active");
  });
  color[i].addEventListener("mouseleave", (event) => {
    event.target.classList.remove("active");
  });
}
