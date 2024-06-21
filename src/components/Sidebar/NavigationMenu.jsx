/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScrollShadow } from "@nextui-org/react";
import {
  ArrowDown2,
  Book1,
  Calculator,
  Calendar,
  Category2,
  Menu,
  Messages3,
  Notepad,
  Notification,
  Profile2User,
  ProfileCircle,
  Setting,
  Task,
  TicketStar,
} from "iconsax-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Dashboard", icon: <Menu size={24} />, path: "/" },
  { name: "Library", icon: <Book1 size={24} />, path: "/study-resources" },
  { name: "Resume", icon: <Notepad size={24} />, path: "/resume-builder" },
  { name: "Projects", icon: <Category2 size={24} />, path: "/projects" },
  { name: "Tasks", icon: <Task size={24} />, path: "/tasks" },
  { name: "Calculator", icon: <Calculator size={24} />, path: "/grade-calculator" },
  { name: "Chat", icon: <Messages3 size={24} />, path: "/chat" },
  { name: "Calendar", icon: <Calendar size={24} />, path: "/calendar" },
  { name: "Notifications", icon: <Notification size={24} />, path: "/notifications" },
  {
    name: "Settings",
    icon: <Setting size={24} />,
    path: "/settings",
    children: [
      { name: "Profile", path: "/profile", icon: <Profile2User size={24} /> },
      { name: "Account", path: "/account", icon: <ProfileCircle size={24} /> },
    ],
  },
  { name: "Test", icon: <TicketStar size={24} />, path: "/test" },
];

const NavigationMenu = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isOpened, setIsOpened] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden">
      <ScrollShadow hideScrollBar size={80}>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden">
          {navLinks.map((link, index) =>
            link.children ? (
              <div key={link.name}>
                <button
                  className={`flex w-full items-center gap-4 rounded-lg border-0 p-2 focus:outline-none ${activeLink === link.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                  onClick={() => {
                    setIsOpened(isOpened === link.path ? "" : link.path);
                    setIsExpanded(true);
                  }}
                >
                  {link.icon}
                  {isExpanded && <span>{link.name}</span>}
                  {isExpanded && (
                    <ArrowDown2
                      size={20}
                      className={`ml-auto ${isOpened === link.path ? "rotate-180 transform" : ""}`}
                    />
                  )}
                </button>

                {link.children && isOpened === link.path && isExpanded && (
                  <div className="ml-8 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        to={child.path}
                        key={child.name}
                        className={`flex items-center gap-4 rounded-lg p-2 ${activeLink === child.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                      >
                        {child.icon}
                        {isExpanded && <span>{child.name}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ x: -120 }}
                animate={{ x: 0 }}
                exit={{ x: -120 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 10, delay: index * 0.1 }}
                key={link.name}
              >
                <Link
                  to={link.path}
                  key={link.name}
                  className={`flex items-center gap-4 rounded-lg p-2 ${activeLink === link.path ? "bg-bgActive" : "hover:bg-bgHover"}`}
                >
                  {link.icon}
                  {isExpanded && <span>{link.name}</span>}
                </Link>
              </motion.div>
            ),
          )
          }
        </div>
      </ScrollShadow>
    </div>
  );
};

export default NavigationMenu;
