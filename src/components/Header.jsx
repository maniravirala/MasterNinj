import { useState } from "react";
import NavigationMenu from "./Sidebar/NavigationMenu";
import { HambergerMenu, CloseCircle, Notification } from "iconsax-react";
import { useElementSize } from "@custom-react-hooks/all";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../assets";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [setRef, size] = useElementSize();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav ref={setRef} className="flex items-center justify-between p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-gray-900 dark:text-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <CloseCircle size="24" />
                ) : (
                  <HambergerMenu size="24" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" />
              <h1 className="text-xl font-medium">MasterNinja</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2">
              <Notification size="24" />
            </button>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: 0 }}
              exit={{ left: '-100%' }}
              transition={{ duration: 0.4, type: 'tween' }}
              className="absolute w-full h-full px-5 bg-white dark:bg-gray-800 z-20"
              style={{ top: size.height }}
            >
              <NavigationMenu isExpanded={isMobileMenuOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
