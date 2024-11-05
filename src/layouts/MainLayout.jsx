import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    const [cart, setCart] = useState([]);
    const addToCart=(item)=>{
        setCart((prevCart) => [...prevCart, item]);
    }
    return (
        <div className="bg-slate-100">
            {/* Navbar */}
            <div className="px-8 pt-4">
            <Navbar cartCount={cart.length}></Navbar>
            </div >
            {/* Dynamic Content */}
            <div className="min-h-[calc(100vh-232px)] ">
                <Outlet context={{ addToCart}}></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;
//className="min-h-[calc(500vh-300px)] "
//npm install react-hot-toast