import { useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [isActive, setIsActive] = useState({
        card: true,
        status: "card"
    });
    const handleIsActiveState = (status) => {
        if (status == "card") {
            setIsActive({
                card: true,
                status: "card"
            });
        } else {
            setIsActive({
                card: false,
                status: 'wish'
            });
        }
    };
    return (
        <div>
             <Helmet>
                <title>Dashboard - Gadget Heaven</title>
            </Helmet>
            {/* Dashboard Banner */}
            <div className="bg-purple-600 pb-12">
                <div className="text-center space-y-4">
                    <div className="pt-12">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">Dashboard</h2>
                    </div>
                    <div>
                        <p className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-center items-center gap-5 mt-6 mb-8">
                    <button
                        onClick={() => handleIsActiveState("card")}
                        className={`text-lg font-medium py-2 px-6 rounded-3xl w-36 border-2 ${isActive.card ? 'bg-white text-purple-600 border-purple-600' : 'bg-purple-600 text-white'
                            }`}>
                        Cart
                    </button>
                    <button
                        onClick={() => handleIsActiveState("wish")}
                        className={`text-lg font-medium py-2 px-6 rounded-3xl w-36 border-2 ${isActive.card ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border-purple-600'
                            }`}>
                        Wishlist
                    </button>
                </div>

            </div>
            <div>
                {isActive.card ?(
                        <Cart></Cart>
                    ):
                    (
                    <Wishlist></Wishlist>
                )     
                }
            </div>
        </div>
    );
};

export default Dashboard;