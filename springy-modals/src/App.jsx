import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="save-button"
        onClick={() => null}
      >
        Open Modal
      </motion.button>
    </div>
  );
}

export default App;
