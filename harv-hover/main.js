import "./style.css";

const rand = (min, max) => {
  Math.floor(Math.random() * (max - min + 1)) + min;
};

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
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;

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
