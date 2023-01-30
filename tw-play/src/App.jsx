import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Card from "./components/Card";
import CardPage from "./components/CardPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import { useState } from "react";

function App() {
  const [navHidden, setNavHidden] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-neutral-900/50 overflow-auto pb-16">
      <Nav />
      <Home />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/card/:id" element={<CardRoutes />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
