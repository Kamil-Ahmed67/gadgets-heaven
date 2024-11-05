import { NavLink} from "react-router-dom";
const Categories = () => {
    return (
        <div>
            {/* Category Section */}
            <div className="px-4 py-5 border-2 rounded-xl bg-white">
                <div className="grid grid-cols-1 gap-y-4 gap-2 md:grid-cols-2 lg:grid-cols-1">
                    <div>
                        <NavLink to="/">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">All Product</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/category/Laptop">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Laptops</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={`/category/Phone`}>
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Phones</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/category/Accessory">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Accessories</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/category/Smart Watch">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Smart Watches</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/category/MacBook">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">MacBook</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/category/iPhone">
                            <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">iPhone</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Categories;
// import { NavLink } from "react-router-dom";

// const Categories = ({allData}) => {
//   return (
//         <div>
//             {/* Category Section */}
//             <div className="px-4 py-5 border-2 rounded-xl bg-white">
//                 <div className="grid grid-cols-1 gap-y-4 gap-2 md:grid-cols-2 lg:grid-cols-1">
//                     {/* All Products Button */}
//                     <div>
//                         <NavLink to="/">
//                             <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">
//                                 All Products
//                             </button>
//                         </NavLink>
//                     </div>

//                     {/* Dynamic Category Buttons */}
//                     {allData.map(category => (
//                         <div key={category}>
//                             <NavLink to={`/category/${category}`}>
//                                 <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">
//                                     {category}
//                                 </button>
//                             </NavLink>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Categories;
