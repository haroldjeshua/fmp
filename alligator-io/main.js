import "./style.css";

const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");
const solartBtn = document.querySelector("#solar");
const body = document.body;

// Apply theme on reload
const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Button handlers
lightBtn.addEventListener("click", () => {
  body.classList.replace("dark", "light");

  localStorage.setItem("theme", "light");
});

darkBtn.addEventListener("click", () => {
  body.classList.replace("light", "dark");

  localStorage.setItem("theme", "dark");
});

solartBtn.addEventListener("click", () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solartBtn.getElementsByClassName.cssText = `
      --bg-solar: var(--yellow)
    `;

    solartBtn.innerText = "solarize";
    localStorage.removeItem("isSolar");
  } else {
    solartBtn.style.cssText = `
      --bg-solar: white;
    `;

    body.classList.add("solar");
    solartBtn.innerText = "normalize";

    localStorage.setItem("isSolar", true);
  }
});
