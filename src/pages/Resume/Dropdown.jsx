/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from "react";
import { ArrowDown2 } from "iconsax-react";

const Dropdown = ({ tabsData, activeTabResume, setActiveTabResume }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleChangeTab = (tabKey) => {
        setActiveTabResume(tabKey);
        setIsOpen(false);
    }

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
                className="bg-bgSecondary text-textPrimary px-4 py-2 rounded-lg flex items-center justify-between w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                {tabsData.find((tab) => tab.key === activeTabResume)?.name}
                <ArrowDown2 className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 flex flex-col gap-2 py-2">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.key}
                            className={`block box-border flex-1 text-left px-4 py-2 rounded-lg mx-2 hover:bg-bgHover ${activeTabResume === tab.key ? 'bg-bgActive' : ''}`}
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