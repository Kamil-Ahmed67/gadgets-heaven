import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartCount }) => {
    return (
        <div className="navbar bg-purple-600 rounded-t-xl px-2 md:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <a className="text-base md:text-lg lg:text-xl text-white font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex justify-between">
                <ul className="menu menu-horizontal px-1 gap-x-4">
                    <NavLink to="/" className="text-sm text-white hover:text-gray-300 hover:scale-105">Home</NavLink>
                    <NavLink to="/dashboard" className="text-sm text-white hover:text-gray-300 hover:scale-105">Dashboard</NavLink>
                    <NavLink to="/statistics" className="text-sm text-white hover:text-gray-300 hover:scale-105">Statistics</NavLink>
                    <NavLink to="/extra" className="text-sm text-white hover:text-gray-300 hover:scale-105">Extra</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-black space-x-2">
                <div className="relative w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink to="/dashboard">
                        <TiShoppingCart />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1 ">{cartCount}</span>
                        )}
                    </NavLink>
                </div>
                <div className="w-10 h-10 p-2 bg-white rounded-full text-lg font-semibold flex items-center justify-center">
                    <NavLink>
                        <CiHeart />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes={
    cartCount:PropTypes.object.isRequired
}
export default Navbar
