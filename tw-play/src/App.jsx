import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Card from "./components/Card";
import CardPage from "./components/CardPage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-neutral-900/50 overflow-auto pb-16">
      <Nav />
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/card/:id" element={Card} />
      </Routes>
    </div>
  );
}

export default App;
