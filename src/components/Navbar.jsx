import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-purple-600 rounded-t-xl px-2 md:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink><a href="">Home</a></NavLink>
                        <NavLink><a href="">Statistics</a></NavLink>
                        <NavLink><a href="">Dashboard</a></NavLink>
                    </ul>
                </div>
                <a className="text-base md:text-lg lg:text-xl text-white font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex justify-between">
                <ul className="menu menu-horizontal px-1 gap-x-4">
                    <NavLink to="/" className="text-sm text-white hover:text-gray-300 hover:scale-105"><a href="">Home</a></NavLink>
                    <NavLink to="/statistics" className="text-sm text-white hover:text-gray-300 hover:scale-105"><a href="">Statistics</a></NavLink>
                    <NavLink to="/dashboard" className="text-sm text-white hover:text-gray-300 hover:scale-105"><a href="">Dashboard</a></NavLink>
                    <NavLink to="/extra" className="text-sm text-white hover:text-gray-300 hover:scale-105"><a href="">Extra</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end text-black space-x-2">
                <div className="w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink>
                        <TiShoppingCart></TiShoppingCart>
                        </NavLink>
                </div>
                <div className="w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink>
                        <CiHeart></CiHeart>
                        </NavLink> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;