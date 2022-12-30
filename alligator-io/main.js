import "./style.css";

const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");
const solartBtn = document.querySelector("#solar");
const body = document.body;

// Button handlers
lightBtn.addEventListener("click", () => {
  body.classList.replace("light", "dark");
});

darkBtn.addEventListener("click", () => {
  body.classList.replace("dark", "light");
});
