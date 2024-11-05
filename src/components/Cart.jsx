import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import { getAllProduct } from "../utils";
import { NavLink } from "react-router-dom";
import { PiSlidersBold } from "react-icons/pi";

const Cart = () => {
    const [selectedGadgets, setSelectedGadgets] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const savedGadgets = localStorage.getItem("addedProduct");
        if (savedGadgets) {
            const gadgets = JSON.parse(savedGadgets);
            setSelectedGadgets(gadgets);
            calculateTotalCost(gadgets);
        }
    }, []);

    // Calculate total cost
    const calculateTotalCost = (gadgets) => {
        const total = gadgets.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total.toFixed(2));
    };

    // Remove item from cart
    const removeItem = (id) => {
        const products = getAllProduct();
        const remaining = products.filter(product => product.product_id !== id);
        localStorage.setItem('addedProduct', JSON.stringify(remaining));
        setSelectedGadgets(remaining);
        calculateTotalCost(remaining);
        toast.success('Successfully Removed!');
    };

    // Sort items by price
    const sortByPrice = () => {
        const sortedGadgets = [...selectedGadgets].sort((a, b) => a.price - b.price);
        setSelectedGadgets(sortedGadgets);
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-4">
                <div><h1 className="text-2xl font-bold mb-6">Cart</h1></div>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold">Total cost: ${totalCost}</h2>
                    <button onClick={sortByPrice} className="bg-gray-200 flex items-center gap-2 p-2 rounded-md font-medium text-gray-600 hover:bg-gray-300">
                       <span> Sort by Price</span> <PiSlidersBold></PiSlidersBold>
                    </button>
                    <NavLink to='/'>
                        <button className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700">
                            Purchase
                        </button>
                    </NavLink>

                </div>
            </div>

            {selectedGadgets.length > 0 ? (
                <div className="space-y-4">
                    {selectedGadgets.map((product) => (
                        <div key={product.product_id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div className="flex items-center">
                                <img src={product.product_image} alt={product.product_title} className="w-20 h-20 rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-lg font-bold">{product.product_title}</h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
                                </div>
                            </div>
                            <button onClick={() => removeItem(product.product_id)} className="text-red-500 hover:text-red-700">
                                <TiDeleteOutline size={24} />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 mt-6">No products in cart.</p>
            )}
        </div>
    );
};

export default Cart;
