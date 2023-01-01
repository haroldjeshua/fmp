import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Open Modal
      </motion.button>

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
}

export default App;
