import { useState } from "react";
import NavigationMenu from "./Sidebar/NavigationMenu";
import { HambergerMenu, CloseCircle, Notification } from "iconsax-react";
import { useMeasure } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../assets";
import User from './Sidebar/User';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ ref, { height } ] = useMeasure();

  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav ref={ref} className="flex items-center justify-between p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-gray-900 focus:outline-none dark:text-gray-100"
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
            <div className="h-10 w-10 rounded-full bg-gray-300">
              <User avatar />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: 0 }}
              exit={{ left: "-100%" }}
              transition={{ duration: 0.4, type: "tween" }}
              className="absolute z-20 h-full w-full bg-white px-5 dark:bg-gray-800"
              style={{ top: height }}
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
