const button = document.querySelectorAll(".accordion");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let content = button[i].nextElementSibling;

    if (button[i].classList.contains("is-open")) {
      button[i].classList.remove("is-open");
      content.style.maxHeight = "0";
    } else {
      button[i].classList.add("is-open");
      content.style.maxHeight = "fit-content";
    }
  });
}
