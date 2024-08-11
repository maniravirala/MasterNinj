import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { Link } from "react-router-dom";

export default function App({ avatar }) {
  const { theme, toggleTheme } = useDarkMode();

  const profile = () => {
    if (avatar) {
      return (
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          alt="User"
        />
      );
    }
    return (
      <User
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        }}
        className="cursor-pointer transition-transform"
        description="Editor"
        name="Ravirala Mani"
      />
    );
  };

  const DropdownCode = () => {
    return (
      <div className="flex w-full flex-1 items-center gap-4">
        <Dropdown placement="bottom-start" className="bg-bgSecondary text-textPrimary">
          <DropdownTrigger>{profile()}</DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" color="primary">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@tonyreichert</p>
            </DropdownItem>
            <DropdownItem key="theme" onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
            <DropdownItem key="login" color="success">
              <Link to="/login">
              Log In
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  };

  if (avatar) return <DropdownCode />;

  return <DropdownCode />;
}

App.propTypes = {
  avatar: PropTypes.bool,
};
