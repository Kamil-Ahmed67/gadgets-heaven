const Footer = () => {
    return (
        <footer className="bg-white p-10">
            <div className="px-10 md:px-28 pt-8">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h3 className="text-2xl md:text-3xl text-center font-bold text-gray-900">Gadget Heaven</h3>
                    <p className="text-sm md:text-base text-center text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="divider"></div>
                <div className="md:flex space-y-4 justify-between mt-10 ">
                    {/* Column-1 */}
                    <div className="flex flex-col">
                        <h6 className="text-base md:text-lg font-bold text-gray-900 text-center">Services</h6>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Product Support</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Order Tracking</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Shipping & Delivery</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Returns</a>
                    </div>
                    {/* Column-2 */}
                    <div className="flex flex-col">
                        <h6 className="text-base md:text-lg font-bold text-gray-900  text-center">Company</h6>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">About us</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Career</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Contact</a>
                    </div>
                    {/* Column-3 */}
                    <div className="flex flex-col">
                        <h6 className="text-base md:text-lg font-bold text-gray-900 text-center">Legal</h6>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Terms of Service</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Privacy policy</a>
                        <a className="link link-hover text-sm md:text-lg text-gray-600 text-center">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;