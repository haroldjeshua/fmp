import "./style.css";

const trailer = document.querySelector(".trailing-mouse");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  // trailer.style.transform = `translate(${x}px, ${y}px)`;

  // web animation api
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 400,
    fill: "forwards",
  });
};
