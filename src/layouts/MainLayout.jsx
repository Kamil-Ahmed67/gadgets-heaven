import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="px-8 pt-4">
            <Navbar></Navbar>
            </div >
            {/* Dynamic Content */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
//className="min-h-[calc(500vh-300px)] "