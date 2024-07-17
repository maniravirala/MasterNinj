/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useClickAway } from "@uidotdev/usehooks";

const Modal = ({ isOpen, onClose, children }) => {

    const handleBackgroundClick = useClickAway(() => {
        onClose();
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="hideScrollbar fixed inset-0 z-10 w-screen overflow-y-auto"
                    >
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <motion.div
                                ref={handleBackgroundClick}
                                className="relative transform overflow-hidden overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                                <div
                                    className="absolute -right-3 -top-3 z-[100] bg-white p-4 pl-1 pb-1 cursor-pointer text-2xl rounded-full shadow-md hover:shadow-lg"
                                    onClick={onClose}
                                    >
                                    <IoClose />
                                </div>
                                <div className="bg-white px-4 pb-4 pt-5 sm:pt-8 sm:p-6 sm:pb-4">
                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // className="fixed inset-0 z-50 bg-charcoal bg-opacity-50 flex items-center justify-center overflow-auto"
                        className="fixed top-0 start-0 z-[80] bg-charcoal bg-opacity-50 flex items-center justify-center overflow-y-auto"
                    >
                        <motion.div
                            ref={handleBackgroundClick}
                            className="relative top-0 bottom-0 rounded-lg bg-bgPrimary md:m-4 m-4 p-8 overflow-auto"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                        >
                            <IoClose
                                className="absolute right-3 top-3 cursor-pointer text-2xl"
                                onClick={onClose}
                            />

                            {children}
                        </motion.div>
                    </motion.div> */}
                </div>
            )
            }
        </AnimatePresence >
    );
};

export default Modal;
