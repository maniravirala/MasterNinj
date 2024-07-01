/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Card = ({ isOpen, handleClose, handleBackgroundClick, children }) => {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black dark:bg-white dark:bg-opacity-20 bg-opacity-50 flex justify-center items-center"
                    onClick={handleBackgroundClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-bgPrimary p-8 rounded-lg relative"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                    >
                        <IoClose className="absolute top-3 right-3 cursor-pointer text-2xl" onClick={handleClose} />

                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Card;