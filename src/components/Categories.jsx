import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            {/* Category Section */}
            <div className="px-4 py-3 border-2 rounded-xl bg-white">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-2">
                    <NavLink to="/">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">All Product</button>
                    </NavLink>
                    <NavLink to="/category/Laptop">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Laptops</button>
                    </NavLink>
                    <NavLink to="/category/Phone">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Phones</button>
                    </NavLink>
                    <NavLink to="/category/Accessory">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Accessories</button>
                    </NavLink>
                    <NavLink to="/category/Smart Watch">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Smart Watches</button>
                    </NavLink>
                    <NavLink to="/category/MacBook">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">MacBook</button>
                    </NavLink>
                    <NavLink to="/category/iPhone">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">iPhone</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Categories;

