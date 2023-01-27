import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="header">
      <h1>@haroldjeshua</h1>
      <p>Things that keeps me going and passionate about.</p>
    </div>
  );
}

export default App;
