/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const TemplatesSelectionModal = ({ tabsData, selectedTemplate, setSelectedTemplate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }

    return (
        <>
            <Card isOpen={isOpen} handleClose={handleClose} handleBackgroundClick={handleBackgroundClick} >
                <h1 className="text-2xl font-medium">Select Template</h1>
                <div className="flex flex-col gap-4 mt-4">
                    {tabsData.map((tab) => (
                        <motion.div
                            key={tab.label}
                            className="flex items-center gap-4 cursor-pointer p-4 bg-bgSecondary hover:bg-bgHover rounded-lg"
                            onClick={() => {
                                setSelectedTemplate(tab.label);
                                handleClose();
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab.label}

                        </motion.div>
                    ))}
                </div>
            </Card>
            <button className="bg-brand-500 dark:bg-brand-700 text-white rounded-lg px-3 py-2" onClick={handleOpen}>
                Select Template
                {/* {selectedTemplate} */}
            </button>
        </>
    );
}

export default TemplatesSelectionModal;
