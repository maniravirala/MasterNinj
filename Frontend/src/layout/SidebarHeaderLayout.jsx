import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const SidebarHeaderLayout = ({ children }) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-y-auto">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />

            </div>
        </div>
    );
}

SidebarHeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default SidebarHeaderLayout;

