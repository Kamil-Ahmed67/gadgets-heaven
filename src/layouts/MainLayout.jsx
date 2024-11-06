import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";  

const MainLayout = () => {
    return (
        <HelmetProvider>
            <div className="bg-slate-100">
                <Helmet>
                    <title>Gadget Heaven</title>
                </Helmet>
                {/* Navbar */}
                <div className="px-8 pt-4">
                    <Navbar />
                </div>
                {/* Dynamic Content */}
                <div className="min-h-[calc(120vh-232px)]">
                    <Outlet />
                </div>
                {/* Footer */}
                <Footer />
                <Toaster />
            </div>
        </HelmetProvider>
    );
};

export default MainLayout;
