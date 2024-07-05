import React, { useImperativeHandle, forwardRef } from "react";
import { motion } from "framer-motion";

const Toggle = forwardRef(({ checked, onChange }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => onChange(!checked),
  }));

  return (
    <motion.div
      className={`flex h-6 w-12 cursor-pointer rounded-full p-1 ${checked ? "justify-end" : "justify-start"}`}
      onClick={() => onChange(!checked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ backgroundColor: checked ? "#47CD89" : "#F97066" }}
    >
      <motion.div
        className="h-4 w-4 rounded-full bg-white"
        layout
        transition={spring}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />
    </motion.div>
  );
});

export default Toggle;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
