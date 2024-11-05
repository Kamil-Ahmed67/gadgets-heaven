import toast from "react-hot-toast";

// Get all products from local storage
const getAllProduct = () => {
    const all = localStorage.getItem('addedProduct');
    return all ? JSON.parse(all) : [];
};

// Add a product to local storage
const addSelectedProduct = (product) => {
    const products = getAllProduct();
    const isExist = products.find(item => item.product_id === product.product_id);

    if (isExist) {
        toast.error("Item already exists in the cart!");
        return;
    }

    products.push(product);
    localStorage.setItem("addedProduct", JSON.stringify(products));
    toast.success("Added to cart successfully!");
};

export { addSelectedProduct, getAllProduct };
