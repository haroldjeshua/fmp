import "./style.css";

const track = document.querySelector(".image-track");

const handleMouseOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleMouseOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleMouseOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxMouseDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxMouseDelta) * -100;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage;
  console.log("next%: " + nextPercentageUnconstrained);
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 0),
    -100
  );

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.querySelectorAll(".image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

console.log(image);

window.onmousedown = (e) => handleMouseOnDown(e);

window.ontouchstart = (e) => handleMouseOnDown(e.touches[0]);

window.onmouseup = (e) => handleMouseOnUp(e);

window.ontouchend = (e) => handleMouseOnUp(e.touches[0]);

window.onmousemove = (e) => handleMouseOnMove(e);

window.ontouchmove = (e) => (handleMouseOnMove = e.touches[0]);
