import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className={`navbar pb-3 ${location.pathname === "/" ? "bg-purple-600" : "bg-slate-100"} rounded-t-xl px-2 md:px-6`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </div>
                <a className={`text-base md:text-lg lg:text-xl  font-bold ${location.pathname==="/"?"text-white":"text-gray-900"}`}>Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex justify-between">
                <ul className="menu menu-horizontal px-1 gap-x-4">
                    <NavLink to="/" className={`text-sm hover:scale-105 font-semibold ${location.pathname==="/"?"text-white hover:text-gray-300":"text-black hover:text-purple-600"}`}>Home</NavLink>
                    <NavLink to="/dashboard" className={`text-sm hover:scale-105 font-semibold ${location.pathname==="/"?"text-white hover:text-gray-300":"text-black hover:text-purple-600"}`}>Dashboard</NavLink>
                    <NavLink to="/statistics" className={`text-sm hover:scale-105 font-semibold ${location.pathname==="/"?"text-white hover:text-gray-300":"text-black hover:text-purple-600"}`}>Statistics</NavLink>
                    <NavLink to="/contact" className={`text-sm hover:scale-105 font-semibold ${location.pathname==="/"?"text-white hover:text-gray-300":"text-black hover:text-purple-600"}`}>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-black space-x-2">
                <div className="relative w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink to="/dashboard">
                        <TiShoppingCart />
                    </NavLink>
                </div>
                <div className="w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink to="/dashboard">
                        <CiHeart />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Navbar
