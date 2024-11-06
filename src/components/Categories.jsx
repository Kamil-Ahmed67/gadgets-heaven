import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            {/* Category Section */}
            <div className="px-4 py-5 border-2 rounded-xl bg-white">
                <div className="grid grid-cols-1 gap-y-4">
                    <div>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            All Product
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/Laptop" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            Laptops
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/Phone" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            Phones
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/Accessory" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            Accessories
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/Smart Watch" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            Smart Watches
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/MacBook" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            MacBook
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="/category/iPhone" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "flex justify-center items-center w-full bg-purple-500 text-white px-3 py-1.5 rounded-3xl" 
                                    : "flex justify-center items-center w-full bg-gray-200 text-gray-700 px-3 py-1.5 rounded-3xl"
                            }
                        >
                            iPhone
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
