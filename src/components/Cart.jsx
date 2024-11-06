import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import { getAllProduct } from "../utils";
import modalImage from '../assets/Group.png'
import {useNavigate } from "react-router-dom";
import { PiSlidersBold } from "react-icons/pi";

const Cart = () => {
    const [selectedGadgets, setSelectedGadgets] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [displayTotalCost, setDisplayTotalCost] = useState(0); // New state for displaying total cost in modal
    const navigate = useNavigate();

    useEffect(() => {
        const savedGadgets = localStorage.getItem("addedProduct");
        if (savedGadgets) {
            const gadgets = JSON.parse(savedGadgets);
            setSelectedGadgets(gadgets);
            calculateTotalCost(gadgets);
        }
    }, []);

    const calculateTotalCost = (gadgets) => {
        const total = gadgets.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total.toFixed(2));
    };

    const removeItem = (id) => {
        const products = getAllProduct();
        const remaining = products.filter(product => product.product_id !== id);
        localStorage.setItem('addedProduct', JSON.stringify(remaining));
        setSelectedGadgets(remaining);
        calculateTotalCost(remaining);
        toast.success('Successfully Removed!');
    };

    const sortByPrice = () => {
        const sortedGadgets = [...selectedGadgets].sort((a, b) => a.price - b.price);
        setSelectedGadgets(sortedGadgets);
    };

    const handlePurchase = () => {
        setDisplayTotalCost(totalCost);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedGadgets([]); 
        setTotalCost(0); 
        localStorage.removeItem("addedProduct");
        navigate('/');
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div><h1 className="text-3xl font-bold mb-6">Cart</h1></div>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold">Total cost: ${totalCost}</h2>
                    <button onClick={sortByPrice} className="bg-white border-2 border-purple-600 text-lg rounded-xl flex items-center gap-2 p-2 font-medium text-purple-600 hover:bg-purple-100">
                        <span>Sort by Price</span> <PiSlidersBold className="text-purple-700" />
                    </button>
                    <button 
                        onClick={handlePurchase} 
                        disabled={selectedGadgets.length === 0} 
                        className={`${
                            selectedGadgets.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700'
                        } text-white text-lg px-4 py-2 rounded-xl font-semibold hover:bg-purple-600`}
                    >
                        Purchase
                    </button>
                </div>
            </div>

            {selectedGadgets.length > 0 ? (
                <div className="space-y-4">
                    {selectedGadgets.map((product) => (
                        <div key={product.product_id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div className="flex items-center">
                                <img src={product.product_image} alt={product.product_title} className="w-40 h-30 rounded-lg mr-4" />
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
            {/* Modal Section */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
                    <div className="flex flex-col items-center text-center">
                            <img src={modalImage} alt="Success Icon" className="h-14 w-16 mt-4 mb-4 text-white" />
                        <h2 className="text-2xl font-bold mb-2">Payment Successfully</h2>
                        <div className="divider"></div>
                        <p className="text-gray-600">Thanks for purchasing.<br />Total: ${displayTotalCost}</p>
                    </div>
                    <button onClick={handleCloseModal} className="mt-6 w-full bg-gray-200 py-2 rounded-2xl font-semibold text-gray-700 hover:text-purple-700 hover:bg-gray-300">
                        Close
                    </button>
                </div>
            </div>            
            )}
        </div>
    );
};

export default Cart;
