import "./style.css";

const pickLetters = (id) => {
  const element = document.querySelector(id);
  const text = element.innerText.split("");

  console.log(element);

  element.innerText = "";

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";
    span.innerText = letter;

    element.appendChild(span);
  });
};

pickLetters("#word-hover");
