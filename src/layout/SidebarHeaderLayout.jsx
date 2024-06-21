import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const SidebarHeaderLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="block sm:hidden">
          <Header />
        </div>
        <main className="flex-1 px-5">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

SidebarHeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarHeaderLayout;
