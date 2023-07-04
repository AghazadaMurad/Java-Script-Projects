"use strict";

const inputEl = document.querySelector("input");
const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   if (button.classList.contains("fa-eye")) {
//     button.classList.add("fa-eye-slash");
//     button.classList.remove("fa-eye");
//   } else {
//     button.classList.remove("fa-eye-slash");
//     button.classList.add("fa-eye");
//   }
// });

button.addEventListener("click", () => {
  if (inputEl.type === "password") {
    inputEl.type = "text";
    button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    inputEl.type = "password";
    button.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
});
