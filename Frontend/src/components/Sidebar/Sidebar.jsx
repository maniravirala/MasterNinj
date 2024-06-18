import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight2,
  ArrowLeft2,
  Menu,
  Notepad,
  Messages3,
  Calendar,
  Setting,
  Notification,
  SearchNormal1,
  Profile2User,
  Bill,
  ProfileCircle,
  TicketStar,
} from "iconsax-react";
import { Logo } from "../../assets";
import Divider from "../Divider";
import User from "./User";
import Input from "../Input";
import { useLocalStorage } from "../../hooks";
import AnnouncementCard from "../AnnouncementCard";
import NavigationMenu from "./NavigationMenu";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useLocalStorage("isExpanded", true);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navLinks = [
    { name: "Dashboard", icon: <Menu size={24} />, path: "/dashboard" },
    { name: "Tracks", icon: <Notepad size={24} />, path: "/tracks" },
    { name: "Chat", icon: <Messages3 size={24} />, path: "/chat" },
    { name: "Calendar", icon: <Calendar size={24} />, path: "/calendar" },
    {
      name: "Settings",
      icon: <Setting size={24} />,
      path: "/settings",
      children: [
        { name: "Profile", path: "/profile", icon: <Profile2User size={24} /> },
        { name: "Account", path: "/account", icon: <ProfileCircle size={24} /> },
        { name: "Billing", path: "/billing", icon: <Bill size={24} /> },
      ],
    },
    { name: "Notifications", icon: <Notification size={24} />, path: "/notifications" },
    { name: "Test", icon: <TicketStar size={24} />, path: "/test" },
  ];

  return (
    <div className="flex h-screen ">
      <aside
        className={`h-screen bg-bgPrimary relative  ${isExpanded ? "w-64 p-4" : "w-16 p-3"
          } transition-all`}
        aria-label="Sidebar"
      >
        {/* Absolute Expand Collapse */}
        <div className="absolute top-[50%] -right-1 z-10 cursor-pointer">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="focus:outline-none"
            aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isExpanded ? <ArrowLeft2 size={24} /> : <ArrowRight2 size={24} />}
          </button>
        </div>

        <nav className="h-full flex flex-col gap-4">
          {/* Logo Top */}
          <div className="flex justify-between items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Logo" />
                {isExpanded && (
                  <h1 className="text-xl font-medium">StudioSync</h1>
                )}
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="">
            {isExpanded ? (
              <Input
                value={search}
                placeholder="Search"
                iconBefore={<SearchNormal1 size={20} />}
                onChange={(e) => setSearch(e.target.value)}
              />
            ) : (
              <div
                className="flex items-center p-2 rounded-lg bg-bgSecondary cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Expand to search"
              >
                <SearchNormal1 size={24} />
              </div>
            )}
          </div>

          {/*  Middle */}
          <NavigationMenu navLinks={navLinks} activeLink={activeLink} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          {/* Bottom */}
          <div className="flex flex-col gap-4 mt-auto">
            {/* Announcements */}
            {isExpanded && (
              <AnnouncementCard title="New Update Available">
                <p className="text-sm">
                  A new update is available. Please update your app to the latest version.
                </p>
              </AnnouncementCard>
            )}

            <Divider />

            {/* Profile */}
            <div className="flex items-center justify-between">
              {isExpanded ? (
                <User />
              ) : (
                <div className="flex-1 truncate">
                  <User avatar />
                </div>
              )}
            </div>
          </div>
        </nav>
      </aside>
      <div className="h-screen w-[2px] mr-4 bg-borderPrimary opacity-30"></div>
    </div>
  );
};

export default Sidebar;
