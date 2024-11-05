import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, useLoaderData, useOutletContext, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { proId } = useParams();
    const allGadgetData = useLoaderData();
    const [gadget, setGadget] = useState({});
    const { addToCart } = useOutletContext(); //add to the icon purpose
    useEffect(() => {
        const singleGadgetData = allGadgetData.find(item => item.product_id == proId);
        setGadget(singleGadgetData);
    }, [allGadgetData, proId]);

    const {product_id, product_image, product_title, price, description, Specification, availability, rating } = gadget;

    return (
        <div className="relative">
            <div className="bg-purple-600  pb-10">
                <div className="text-center pt-8 lg:pt-10 px-8 md:px-16 lg:px-28 pb-8 lg:pb-16">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-tight mb-4">
                        Product Details
                    </h1>
                    <p className="w-3/4 mx-auto text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed mb-28">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="absolute inset-x-0 top-36 md:-bottom-64 lg:-bottom-72 flex justify-center">
                <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-white border-2 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2">
                        <img className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover p-2 rounded-2xl" src={product_image} alt={product_title} />
                    </div>
                    {/* Product Details */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold">{product_title}</h3>
                        <p className="text-xl font-semibold text-gray-700">Price: ${price}</p>
                        <p className={`text-sm font-medium ${availability ? "text-green-600" : "text-red-600"}`}>
                            {availability ? "In Stock" : "Out of Stock"}
                        </p>
                        <p className="text-gray-600">{description}</p>
                        <div>
                            <h4 className="font-semibold">Specification:</h4>
                            <ul className="list-decimal ml-5 space-y-1">
                                {Specification?.map((item, index) => (
                                    <li key={index} className="text-gray-600">{item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Rating */}
                        <div className="flex items-center">
                            <div className="rating mr-3">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                           <div> <p className="text-gray-600 font-medium">{rating}</p></div>
                        </div>
                        {/* Add to Cart Button */}
                        <div className="flex gap-4 items-center">
                            <div>
                                <NavLink to={`/cart/${product_id}`}>
                                <button onClick={addToCart} className="bg-purple-600 text-white py-2 px-4 rounded-3xl font-semibold hover:bg-purple-700 flex items-center space-x-2">
                                    <span className="flex items-center gap-2 ">Add To Cart<TiShoppingCart className="text-xl"></TiShoppingCart></span> 
                                </button>
                                </NavLink>
                            </div>
                            <div className="border-2 border-gray-400  rounded-full p-2">
                                <NavLink>
                                    <CiHeart className="text-xl semibold"></CiHeart>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
