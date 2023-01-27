import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
