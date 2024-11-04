import { useLoaderData } from "react-router-dom";
import GadgetCard from "./GadgetCard";

const GadgetCards = () => {
    const allData=useLoaderData();
    return (
        <div className="flex flex-col md:flex-row gap-6 px-8 mt-8">
            {/* Category */}
            <div className="w-1/4 max-w-[192px]">
                <div className="px-4 py-3 border-2 rounded-xl">
                    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 justify-center space-y-4 items-center gap-2">
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">All Product</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Laptops</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Phones</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Accessories</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">Smart Watches</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">MacBook</button>
                        <button className="w-full bg-gray-200 px-3 py-1.5 rounded-3xl text-left">iPhone</button>
                    </div>
                </div>
            </div>


            {/* Cards */}
            <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 ">
              {
                allData.map(gadget=><GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>)
              }
            </div>
            <div>

            </div>
            </div>
        </div>
    );
};

export default GadgetCards;