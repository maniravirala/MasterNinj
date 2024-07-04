/* eslint-disable react/prop-types */
import { useDocumentTitle } from '@custom-react-hooks/all';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer";

const SidebarHeaderLayout = ({ children, ...props }) => {
  const title = props.title || "Master Ninja";
  useDocumentTitle(title);
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
        {props.footer && <Footer />}
      </div>
    </div>
  );
};

export default SidebarHeaderLayout;
