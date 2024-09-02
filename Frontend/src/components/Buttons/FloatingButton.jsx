import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useHover } from "@uidotdev/usehooks";

const FloatingButton = ({ icon, onClick, styles, label, direction='bottom-right' }) => {
  const [ref, hovering] = useHover();

  const directionStyles = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  };

  styles = styles + ' ' + directionStyles[direction];



  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1, type: "tween" }}
      layout
      ref={ref}
      onClick={onClick}
      className={`fixed z-10 flex items-center rounded-full bg-bgBrand hover:bg-brand-700 active:bg-bgBrand text-white p-4 shadow-lg focus:outline-none ${styles}`}
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

export default FloatingButton;
