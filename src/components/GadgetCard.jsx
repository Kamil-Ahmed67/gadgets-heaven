import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
    const { product_id, product_title, product_image, price } = gadget;
    return (
        <div className="card transition hover:scale-105 overflow-hidden bg-base-100 shadow-xl w-full">
            <figure>
                <img className="w-full h-[280px] md:h-[220px] p-5 rounded-3xl" src={product_image} alt="Gadgets" />
            </figure>
            <div className="card-body">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold lg:font-bold text-gray-900">{product_title}</h2>
                <p className="text-sm md:text-base text-gray-600">Price: {price}$</p>
                <div className="card-actions justify-start">
                    <NavLink to={`/gadget/${product_id}`}>
                        <button className="btn bg-white text-purple-600 border-2 border-purple-600 rounded-3xl hover:text-purple-600 text-xs md:text-sm lg:text-base">
                            View Details
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>

    );
};
GadgetCard.propTypes = {
    gadget: PropTypes.object.isRequired,
}
export default GadgetCard;