/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";

const Dropdown = ({ tabsData, activeTabResume, setActiveTabResume}) => {
  // tabsData = [{ key: "key1", name: "name1" }, { key: "key2", name: "name2" }]
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChangeTab = (tabKey) => {
    setActiveTabResume(tabKey);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex w-full items-center flex-row-reverse justify-between rounded-lg bg-bgSecondary px-4 py-2 text-textPrimary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowDown2
          className={`ml-2 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
        {tabsData.find((tab) => tab.key === activeTabResume)?.name || "Please Set Default Tab Name"}
      </button>

      {isOpen && (
        <motion.div
          className="absolute z-50 mt-2 flex flex-col gap-2 rounded-xl bg-bgSecondary py-2 shadow-lg"
        >
          {tabsData.map((tab, index) => (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.1, delay: index * 0.05 }}
              key={tab.key}
              className={`mx-2 truncate flex-1 rounded-lg px-4 py-2 text-left hover:bg-bgHover ${activeTabResume === tab.key ? "bg-bgActive" : ""}`}
              onClick={() => handleChangeTab(tab.key)}
            >
              {tab.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
