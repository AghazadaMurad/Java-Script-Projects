"use strict";

const images = ["beach", "building", "city", "mozaic", "sky"];
const sliderImage = document.querySelector(".slider-image");

const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let index = 0;

rightBtn.addEventListener("click", () => {
  if (index < images.length) {
    index++;
  }

  if (index === images.length) {
    index = 0;
  }

  // console.log(index);
  sliderImage.style.backgroundImage = `url(images/${images[index]}.jpg)`;
});

leftBtn.addEventListener("click", () => {
  console.log("test");

  if (index < images.length) {
    index--;
  }

  if (index === 0) {
    index = images.length;
  }
  sliderImage.style.backgroundImage = `url(images/${images[index]}.jpg)`;
});
