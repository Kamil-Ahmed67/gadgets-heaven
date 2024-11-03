import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="px-8 py-2">
            <Navbar></Navbar>
            </div >
            {/* Dynamic Content */}
            <div className="min-h-[calc(100vh-300px)] ">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;