import { Outlet} from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
const Home = () => {
    return (
        <div>
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