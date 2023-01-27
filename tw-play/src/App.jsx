import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-neutral-900/50">
      <Header />
      <Route path="/card/:id" component={Cards} />
    </div>
  );
}

export default App;
