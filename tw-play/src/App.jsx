import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardRoutes from "./routes/CardRoutes";
import Nav from "./components/Nav";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [navHidden, setNavHidden] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center bg-neutral-900/50 overflow-auto pt-12 pb-16">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/*" element={<CardRoutes />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <footer className="fixed bottom-0 mt-auto self-center z-[2]">
        <h5>✲ Made by Harv.</h5>
      </footer>
    </div>
  );
}

export default App;
