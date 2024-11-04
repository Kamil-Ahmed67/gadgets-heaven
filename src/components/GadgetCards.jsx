import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard";
import Categories from "./Categories";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const allData = useLoaderData();  
    const { cat } = useParams();      
    const [gadgets, setGadgets] = useState([]); 
    useEffect(() => {
        if(cat){
         const filteredByCategory = allData.filter(
             gadget => gadget.category === cat);
             setGadgets(filteredByCategory);
        }
        else{
         setGadgets(allData.slice(0,6));
        }
     }, [cat, allData]);

    return (
        <div className="flex flex-col md:flex-row sm:items-center gap-6 px-8 mt-8">
            {/* Categories*/}
            <div className="w-1/4 max-w-[192px]">
                <Categories />
            </div>

            {/* Gadgets Cards*/}
            <div className="w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gadgets.map(gadget => (
                        <GadgetCard key={gadget.product_id} gadget={gadget} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GadgetCards;
