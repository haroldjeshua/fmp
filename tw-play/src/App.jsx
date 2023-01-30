import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Home from "./pages/Home";
import "./App.css";
import CardRoutes from "./pages/CardRoutes";

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
    </div>
  );
}

export default App;
