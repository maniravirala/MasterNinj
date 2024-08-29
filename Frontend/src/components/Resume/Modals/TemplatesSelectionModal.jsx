/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const TemplatesSelectionModal = ({
  tabsData,
  modalOpen,
  setModalOpen,
  setSelectedTemplate,
}) => {
  const [isOpen, setIsOpen] = useState(modalOpen==='templates');

  const handleOpen = () => {
    setIsOpen(true);
    setModalOpen('templates');
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalOpen('');
  };

  return (
    <>
      <Card
        isOpen={isOpen}
        handleClose={handleClose} 
      >
        <h1 className="text-2xl font-medium">Select Template</h1>
        <div className="mt-4 flex flex-col gap-4">
          {tabsData.map((tab) => (
            <motion.div
              key={tab.label}
              className="flex cursor-pointer items-center gap-4 rounded-lg bg-bgSecondary p-4 hover:bg-bgHover"
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
      <button
        className="rounded-lg bg-brand-500 px-3 py-2 text-white dark:bg-brand-700"
        onClick={handleOpen}
      >
        Select Template
        {/* {selectedTemplate} */}
      </button>
    </>
  );
};

export default TemplatesSelectionModal;
