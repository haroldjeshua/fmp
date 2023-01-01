import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalText text={text} />
        <ModalButton onClick={handleClose} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = ({ text }) => {
  <div className="modal-text">
    <h3>text</h3>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem
      iure praesentium error eligendi. Exercitationem dolores eligendi in
      blanditiis, itaque ratione omnis.
    </h5>
  </div>;
};

const ModalButton = ({ onClick, label }) => {
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.125 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>;
};

export default Modal;
