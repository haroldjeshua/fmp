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
    <div className="flex flex-col w-full h-full bg-neutral-900/50 overflow-auto pb-16">
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
