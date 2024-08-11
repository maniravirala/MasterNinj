import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";

const FloatingButton = ({ icon, onClick, styles, label }) => {
  const [ref, hovering] = useHover();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1, type: "tween" }}
      layout
      ref={ref}
      onClick={onClick}
      className={`fixed bottom-4 right-4 z-10 flex items-center rounded-full bg-bgBrand hover:bg-brand-700 active:bg-bgBrand text-white p-4 shadow-lg focus:outline-none ${styles}`}
    >
      {icon}
      <AnimatePresence>
        {label && hovering && (
          <motion.div
            initial={{ opacity: 0, x: 10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 10, y: -10 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="ml-2"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

FloatingButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
  label: PropTypes.string,
};

FloatingButton.defaultProps = {
  styles: "",
};

export default FloatingButton;
