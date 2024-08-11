import React from "react";
import { motion } from "framer-motion";

const PageParent = ({ children, ...props }) => {
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={animationVariants}
      className={`${props.className}`}
    >
      {props.title && <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>}
      {children}
    </motion.div>
  );
};

export default PageParent;
