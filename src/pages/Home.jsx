import Banner from "../components/Banner";
//import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
           <div className="px-8 mb-32">
           <Banner></Banner>
           </div>
           {/* <div className="mt-32">
            <Heading></Heading>
           </div> */}
        </div>
    );
};

export default Home;