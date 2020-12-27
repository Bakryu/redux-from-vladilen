import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

let state = 10;

function render() {
  counter.textContent = state.toString();
}

addBtn.addEventListener("click", () => {
  state++, render();
});

subBtn.addEventListener("click", () => {
  state--, render();
});
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

asyncBtn.addEventListener("click", () => {
 
});

render();
