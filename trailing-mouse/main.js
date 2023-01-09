import "./style.css";

const trailer = document.querySelector(".trailing-mouse");

window.onmousemove = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  trailer.style.transform = `translate(${x}px, ${y}px)`;
};
