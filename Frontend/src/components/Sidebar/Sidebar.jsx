/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight2, ArrowLeft2, SearchNormal1 } from "iconsax-react";
import { Logo } from "../../assets";
import Divider from "../Divider";
import User from "./User";
import Input from "../Input";
import { useLocalStorage } from "../../hooks";
import AnnouncementCard from "../AnnouncementCard";
import NavigationMenu from "./NavigationMenu";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useLocalStorage("isExpanded", true);

  return (
    <div className="flex h-screen">
      <aside
        className={`relative h-screen bg-bgPrimary ${isExpanded ? "w-64 p-4" : "w-16 p-3"} transition-all`}
        aria-label="Sidebar"
      >
        {/* Absolute Expand Collapse */}
        <div className="hidden sm:block">
          <ExpandMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>

        <nav className="flex h-full flex-col gap-4">
          {/* Logo Top */}
          <BrandTop isExpanded={isExpanded} />

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
                className="flex cursor-pointer items-center rounded-lg bg-bgSecondary p-2"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Expand to search"
              >
                <SearchNormal1 size={24} />
              </div>
            )}
          </div>

          {/*  Middle */}
          <NavigationMenu
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />

          {/* Bottom */}
          <div className="mt-auto flex flex-col gap-4">
            {/* Announcements */}
            {isExpanded && (
              <AnnouncementCard title="New Update Available">
                <p className="text-sm">
                  A new update is available. Please update your app to the
                  latest version.
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

      {/* <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setIsMobileOpen(false)} /> */}
      <div className="h-screen w-[2px] bg-borderPrimary opacity-30" />
    </div>
  );
};

const BrandTop = ({ isExpanded }) => {
  return (
    <div className="relative flex items-center justify-between gap-2">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" />
          {isExpanded && <h1 className="text-xl font-medium">MasterNinja</h1>}
        </div>
      </Link>
    </div>
  );
};

const ExpandMenu = ({ isExpanded, setIsExpanded }) => {
  return (
    <div className="absolute -right-1 top-[50%] z-10 translate-y-[-50%] cursor-pointer">
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        className="focus:outline-none"
        aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
      >
        {isExpanded ? <ArrowLeft2 size={24} /> : <ArrowRight2 size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
