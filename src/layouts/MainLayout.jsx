import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="bg-slate-100">
            {/* Navbar */}
            <div className="px-8 pt-4">
            <Navbar ></Navbar>
            </div >
            {/* Dynamic Content */}
            <div className="min-h-[calc(120vh-232px)] ">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;