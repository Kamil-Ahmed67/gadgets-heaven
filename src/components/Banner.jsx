import { NavLink } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <div className=" bg-purple-600 rounded-b-xl">
                <div className="text-center pt-8 lg:pt-16 px-8 md:px-16 lg:px-28 pb-8 lg:pb-16">
                    <div className="mb-4 lg:mb-6">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                    <div className='mb-14 md:mb-18 lg:mb-52'>
                        <NavLink to='/dashboard'>
                            <a className="btn bg-white text-purple-600 px-4 lg:px-8 lg:py-2 text-sm md:text-lg lg:text-xl rounded-full transition duration-300">
                                Shop Now
                            </a>
                        </NavLink>
                    </div>
                </div>
                <div className='absolute  inset-x-0 -bottom-36 md:-bottom-64 lg:-bottom-80 flex justify-center'>
                    <div className="w-11/12 md:w-3/4 lg:w-2/3 backdrop-blur-xl border-2 p-2 rounded-xl overflow-hidden">
                        <img className='w-full h-[200px] md:h-[300px] lg:h-[500px] rounded-2xl p-2' src={bannerImg} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;