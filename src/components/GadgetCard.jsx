const GadgetCard = ({ gadget }) => {
    const{product_title,product_image,price}=gadget;
    return (
        <div className="card transition hover:scale-105 overflow-hidden  bg-base-100 shadow-xl lg:max-w-xs">
            <figure>
                <img className="w-full h-[200px] p-5 rounded-3xl"
                    src={product_image}
                    alt="Gadgets" />
            </figure>
            <div className="card-body">
                <h2 className="text-base lg:text-lg font-semibold lg:font-bold text-gray-900">{product_title}</h2>
                <p className="text">Price:{price}k</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetCard;