import "./style.css";
import Typewriter from "./Typewriter";

const typewriter = new Typewriter(document.body, { loop: true });

typewriter
  .typeString("Hello World")
  .pauseFor(1000)
  .typeString("\n\nhi clouds")
  .deleteChars(5)
  .typeString("yoooo yoooo")
  .pauseFor(250)
  .deleteAll(10)
  .typeString("idk how this works")
  .pauseFor(1000)
  .typeString("\n\nme neither")
  .pauseFor(1000)
  .typeString("\n\nawit lods")
  .pauseFor(1000)
  .deleteAll(10)
  .start();
