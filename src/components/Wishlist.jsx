import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { addSelectedProduct, getAllWishedProduct } from "../utils";
import toast from "react-hot-toast";

const Wishlist = () => {
    const [selectedGadgets, setSelectedGadgets] = useState([]);

    useEffect(() => {
        const savedGadgets = localStorage.getItem("wishedProduct");
        if (savedGadgets) {
            const gadgets = JSON.parse(savedGadgets);
            setSelectedGadgets(gadgets);
        }
    }, []);
    //Adding a product
    const handleAddToCart = (product) => {
        addSelectedProduct(product);
    };
    // Removing item from cart
    const removeProduct = (id) => {
        const products = getAllWishedProduct();
        const remaining = products.filter(product => product.product_id !== id);
        localStorage.setItem('wishedProduct', JSON.stringify(remaining));
        setSelectedGadgets(remaining);
        toast.error('Item removed from wishlist');
    };
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
            {selectedGadgets.length > 0 ? (
                <div className="space-y-4">
                    {selectedGadgets.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 shadow-sm">
                            <div className="flex items-center">
                                <img
                                    src={product.product_image || "placeholder.png"}
                                    alt={product.product_title}
                                    className="w-50 h-40 rounded-lg mr-4"
                                />
                                <div className="space-y-2">
                                   <div>
                                   <h3 className="text-lg font-bold mb-4">{product.product_title}</h3>
                                   </div>
                                    <p className="text-sm text-gray-500"><strong>Description:</strong> {product.description}</p>
                                    <p className="text-gray-700 font-semibold"><strong>Price:</strong> ${product.price}</p>
                                    <button
                                         onClick={() => handleAddToCart(product)}
                                        className="bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 mt-2"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => removeProduct(product.product_id)}
                                className="text-red-500 hover:text-red-700 flex justify-end"
                            >
                                <TiDeleteOutline size={30} />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 mt-6">No products in Wishlist.</p>
            )}
        </div>
    );
};

export default Wishlist;