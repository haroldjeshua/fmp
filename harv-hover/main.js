import "./style.css";

const pickLetters = (id) => {
  const element = document.querySelector(id);
  const text = element.innerText.split("");

  element.innerText = "";
  console.log(element);

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";
    span.innerText = letter;

    element.appendChild(span);
  });
};

// pickLetters("#word-hover");

const enhanceLinks = (ref) => {
  const elements = document.querySelectorAll(ref);

  elements.forEach((element) => {
    const text = element.innerText.split("");
    element.innerText = "";
    console.log(element);

    text.forEach((value, index) => {
      const outer = document.createElement("span");
      outer.className = "outer";

      const inner = document.createElement("span");
      inner.className = "inner";
      inner.style.animationDelay = "250ms";

      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = value;
      letter.style.animationDelay = `${index * 1000}ms`;

      inner.appendChild(letter);
      outer.appendChild(inner);
      element.appendChild(outer);
    });
  });

  console.log(elements);
};

enhanceLinks(".word.link");
