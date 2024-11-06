import { FaArrowRight } from 'react-icons/fa';
import slider from '../assets/slider.jpg';
import support from '../assets/Product-consulting works.jpg'
import delivery from '../assets/fast-delivery-graphic-768x516.png'
import customer from '../assets/Support-scaled.jpg'
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us-Gadget Heaven</title>
            </Helmet>
            {/* Dashboard Banner */}
            <div>
                <div className="relative">
                    <img className="w-full" src={slider} alt="slider" />
                    <div className="absolute top-1/4 left-8 lg:left-12 text-left">
                        <h2 className="text-xl md:text-3xl lg:text-8xl text-white font-bold leading-tight mb-4">
                            Gadget Heaven
                        </h2>
                        <p className="text-white text-sm md:text-base lg:text-lg mb-4">
                            Discover the latest tech gadgets that redefine innovation and elevate your digital lifestyle.
                        </p>
                        <button className="bg-gray-100 flex gap-2 items-center text-gray-800 py-2 px-12 rounded-3xl font-semibold hover:bg-gray-300">
                            <FaArrowRight className='text-lg' />Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white pb-8">
                <div className="text-center space-y-4">
                    <div className="pt-12">
                        <h2 className="text-xl md:text-3xl lg:text-5xl text-gray-900 font-bold leading-tight">Our Services</h2>
                    </div>
                    <div>
                        <p className="text-gray-500 w-3/4 mx-auto text-xs md:text-sm lg:text-sm leading-relaxed">
                            At Gadget Heaven, we offer a wide range of cutting-edge tech products to meet the needs of every tech enthusiast.
                             Whether you are looking for the latest smartphones, laptops, smartwatches, or accessories, we provide high-quality gadgets from top brands at competitive prices.
                              Our expert team is always ready to assist with personalized recommendations, ensuring that you get the best device suited for your lifestyle. 
                              We also offer exceptional customer service, easy returns, and fast shipping, so you can enjoy your new tech as soon as possible. 
                              Explore our collection today and elevate your tech experience with Gadget Heaven.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Services Cards Section */}
            <div className="bg-white pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-52 object-cover" src={support} alt="Service 1" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Product Consultation</h3>
                            <p className="text-gray-600 mb-4">
                                Get expert advice on selecting the best gadgets suited for your needs. Our team offers personalized product recommendations to help you make the right choice.
                            </p>
                            <button className="text-purple-600 hover:underline">Learn More</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-52 object-cover" src={delivery } alt="Service 2" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 mb-4">
                                Enjoy fast and reliable delivery for all your tech purchases. We ensure your gadgets reach you in the shortest time possible with secure packaging.
                            </p>
                            <button className="text-purple-600 hover:underline">Learn More</button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-52 object-cover" src={customer} alt="Service 3" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Customer Support</h3>
                            <p className="text-gray-600 mb-4">
                                Our dedicated support team is available to assist you with any questions or issues. From setup to troubleshooting, we are here to help.
                            </p>
                            <button className="text-purple-600 hover:underline">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
