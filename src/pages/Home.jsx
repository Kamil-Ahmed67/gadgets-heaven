import { Helmet } from "react-helmet-async";  // Import Helmet for setting the title
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven - Home</title>
            </Helmet>

            {/* Banner Section */}
            <div className="px-8 mb-32">
                <Banner></Banner>
            </div>

            <div>
                <Heading></Heading>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;
