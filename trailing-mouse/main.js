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

const getTrailerClass = (type) => {
  switch (type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right-from-square";
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = interactable !== null;
  const icon = document.querySelector(".trailing-icon");

  animateTrailer(e, interacting);

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
};
