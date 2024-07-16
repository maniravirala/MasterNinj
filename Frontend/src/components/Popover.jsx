import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Popover = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (children.length !== 2) {
            console.error("Popover component must have exactly 2 children.");
            return;
        }
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative">
            <div
                onClick={handleToggle}
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
            >
                {children[0]}
            </div>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={handleToggle}
                        onMouseLeave={handleToggle}
                    >
                        {children[1]}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

const PopoverButton = ({ children, className }) => {
    return (
        <button className={`${className}`}>
            {children}
        </button>
    );
}

const PopoverPanel = ({ children, className }) => {
    return (
        <div className={`${className} absolute z-50 bg-bgPrimary border border-borderPrimary shadow-md rounded-lg p-2`}>
            {children}
        </div>
    );
}

export { Popover, PopoverButton, PopoverPanel };
