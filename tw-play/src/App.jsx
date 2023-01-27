import { BrowserRouter, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-neutral-900/50">
      <Header />
      <BrowserRouter>
        <Cards />
        <Route path="/card/:id" component={Cards} />
      </BrowserRouter>
    </div>
  );
}

export default App;
