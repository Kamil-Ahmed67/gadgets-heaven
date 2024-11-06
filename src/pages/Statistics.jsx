import { Helmet } from "react-helmet-async";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics-Gadget Heaven</title>
            </Helmet>
            <div className="bg-purple-600 pb-12">
                <div className="text-center space-y-4">
                    <div className="pt-12">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">Statistics</h2>
                    </div>
                    <div>
                        <p className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                
                </div>

            </div>
    );
};

export default Statistics;