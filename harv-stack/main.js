import "./style.css";

document.querySelector(".cards, .card-wrapper").onmousemove = (e) => {
  for (const card of document.querySelectorAll(".card")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
