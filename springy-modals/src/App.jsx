import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import { framerLogger } from "./stateLogger";

function App() {
  // Modal state
  const { modalOpen, close, open } = useModal;

  // Modal Type
  const [modalType, setModalType] = useState("dropIn");
  const handleType = (e) => setModalType(e.target.value);

  return (
    <>
      <motion.main>
        <Header />
        <SubHeader text="Animated Modals" />

        <motion.select className="input" onChange={handleType}>
          <option value="dropIn">Drop In</option>
          <option value="flip">Flip</option>
          <option value="newspaper">Newspaper</option>
          <option value="badSuspension">Bad Suspension</option>
          <option value="gifYouUp">Gif you ip</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="save-button"
          onClick={open}
        >
          Open Modal
        </motion.button>
      </motion.main>

      <ModalContainer>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            text={modalType}
            type={modalType}
            handleClose={close}
          />
        )}
      </ModalContainer>
    </>
  );
}

const Header = () => (
  <motion.h1>
    Modal Animation w/ <span className="light-blue">React</span> +{" "}
    <span className="pink">Framer Motion</span>
  </motion.h1>
);

const SubHeader = ({ text }) => (
  <motion.h2 className="sub-header">{text}</motion.h2>
);

const ModalContainer = ({ children, label }) => (
  <AnimatePresence
    // Disable any initial animations on children that are present when the component is first rendered
    initial={false}
    // Only render one comp at a time. The exiting component will finish its exit animation before component is rendered
    mode="wait"
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => framerLogger(label)}
  >
    {children}
  </AnimatePresence>
);

export default App;
