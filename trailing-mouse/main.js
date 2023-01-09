import "./style.css";

const trailer = document.querySelector(".trailing-mouse");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  // trailer.style.transform = `translate(${x}px, ${y}px)`;

  // web animation api
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 400,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = interactable !== null;

  animateTrailer(e, interacting);
};
