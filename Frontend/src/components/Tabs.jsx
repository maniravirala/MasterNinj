/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Tabs = ({
  tabs,
  variant = "underline",
  type = "full",
  selectedTab,
  setSelectedTab,
}) => {
  // tabs: ['all', 'documents', 'ebook', 'note', 'video', 'slide']
  // variant: 'underline' | 'pills'
  // type: 'full' | 'center' | 'left' | 'right'

  const tabsRef = useRef([]);

  useEffect(() => {
    const selectedTabRef = tabsRef.current.find(
      (tabRef) => tabRef && tabRef.getAttribute("data-tab") === selectedTab,
    );
    if (selectedTabRef) {
      selectedTabRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [selectedTab]);

  variant = !variant ? "underline" : variant;
  type = !type ? "full" : type;

  if (!tabs || tabs.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg">No tabs found.</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div
        className={`flex ${type === "full" && "justify-center"} ${type === "center" && "justify-center"} ${type === "left" && "justify-start"} ${type === "right" && "justify-end"} `}
      >
        <div
          className={`mx-4 ${type === "full" ? "w-full" : "w-auto"} ${variant === "underline" ? "border-b border-borderPrimary" : ""}`}
        >
          <nav
            className={`hideScrollbar relative -mb-[1px] flex space-x-4 overflow-x-auto ${variant === "pills" ? "rounded-lg bg-bgSecondary" : ""}`}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                ref={(el) => (tabsRef.current[index] = el)}
                data-tab={tab}
                onClick={() => setSelectedTab(tab)}
                className={`relative flex-1 whitespace-nowrap px-1 pb-3 text-sm font-medium ${
                  selectedTab === tab
                    ? "text-brand-700"
                    : "text-gray-500 hover:text-gray-700"
                } ${variant === "pills" ? "py-3" : "py-2"} `}
              >
                <span className="relative z-10 px-4 py-2 capitalize">
                  {tab}
                </span>
                {selectedTab === tab && variant === "underline" && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 mx-4 h-1 rounded-t-lg bg-brand-600"
                    layoutId="underline"
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                {selectedTab === tab && variant === "pills" && (
                  <motion.div
                    className="absolute bottom-1 left-1 right-1 top-1 rounded-lg bg-gray-300 dark:bg-gray-400"
                    layoutId="underline"
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
