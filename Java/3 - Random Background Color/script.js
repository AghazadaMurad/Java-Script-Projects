const button = document.getElementById("btn");

const body = document.body;

button.addEventListener("click", () => {
  let randR = Math.floor(Math.random() * 256);
  let randG = Math.floor(Math.random() * 256);
  let randB = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
});
