import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
const Home = () => {
    // const catData=useLoaderData();
    return (
        <div>
            {/* Banner Section */}
            <div className="px-8 mb-32">
                <Banner></Banner>
            </div>
            <div className="mt-32">
                <Heading></Heading>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;