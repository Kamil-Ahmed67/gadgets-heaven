import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";

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
    const removeItem = (index) => {
        const updatedGadgets = selectedGadgets.filter((_, i) => i !== index);
        setSelectedGadgets(updatedGadgets);
        localStorage.setItem("addedProduct", JSON.stringify(updatedGadgets));
        calculateTotalCost(updatedGadgets);
    };

    // Sort items by price
    const sortByPrice = () => {
        const sortedGadgets = [...selectedGadgets].sort((a, b) => a.price - b.price);
        setSelectedGadgets(sortedGadgets);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Total cost: ${totalCost}</h2>
                <div className="flex gap-4">
                    <button onClick={sortByPrice} className="bg-gray-200 p-2 rounded-md font-medium text-gray-600 hover:bg-gray-300">
                        Sort by Price
                    </button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-700">
                        Purchase
                    </button>
                </div>
            </div>

            {selectedGadgets.length > 0 ? (
                <div className="space-y-4">
                    {selectedGadgets.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div className="flex items-center">
                                <img src={product.product_image} alt={product.product_title} className="w-20 h-20 rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-lg font-bold">{product.product_title}</h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
                                </div>
                            </div>
                            <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700">
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
