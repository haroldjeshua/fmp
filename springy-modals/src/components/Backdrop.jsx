import { motion } from "framer-motion";
import { useEffect } from "react";
import { stateLogger } from "../stateLogger";

const Backdrop = ({ children, onClick }) => {
  // Log state
  useEffect(() => {
    stateLogger("Backdrop", true);
    return () => stateLogger("Backdrop", false);
  }, []);

  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
