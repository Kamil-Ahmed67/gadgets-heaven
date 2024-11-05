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
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 mt-4">
        <div className="w-full md:w-1/4 max-w-[192px]">
            <Categories></Categories>
        </div>
    
        <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gadgets.map(gadget => (
                    <GadgetCard key={gadget.product_id} gadget={gadget} />
                ))}
            </div>
        </div>
    </div>
    
    );
};

export default GadgetCards;
