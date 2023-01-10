import "./style.css";

const canvas = document.querySelector(".canvas");

window.onmousemove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth;
  const yDecimal = mouseY / window.innerHeight;

  const xMax = canvas.offsetWidth - window.innerWidth;
  const yMax = canvas.offsetHeight - window.innerHeight;

  const panX = xMax * xDecimal * -1;
  const panY = yMax * yDecimal * -1;

  canvas.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 8000,
      easing: "ease-in",
      fill: "forwards",
    }
  );
};
