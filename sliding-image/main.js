import "./style.css";

const track = document.querySelector(".image-track");

const handleMouseOnDown = (e) =>
  (track.CDATA_SECTION_NODE.mouseDownAt = e.clientX);

const handleMouseOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleMouseOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxMouseDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxMouseDelta) * 100;
  const nextPercentage = Math.max(Math.min(50, 0), -100);

  track.dataset.percentage = nextPercentage;
};
