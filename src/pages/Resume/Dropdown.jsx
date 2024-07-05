/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";

const Dropdown = ({ tabsData, activeTabResume, setActiveTabResume }) => {
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
        className="flex w-full items-center justify-between rounded-lg bg-bgSecondary px-4 py-2 text-textPrimary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {tabsData.find((tab) => tab.key === activeTabResume)?.name}
        <ArrowDown2
          className={`ml-2 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 flex w-full flex-col gap-2 rounded-xl bg-bgSecondary py-2 shadow-lg">
          {tabsData.map((tab) => (
            <button
              key={tab.key}
              className={`mx-2 box-border block flex-1 rounded-lg px-4 py-2 text-left hover:bg-bgHover ${activeTabResume === tab.key ? "bg-bgActive" : ""}`}
              onClick={() => handleChangeTab(tab.key)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
