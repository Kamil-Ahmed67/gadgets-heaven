import toast from "react-hot-toast";
//get product from local storage
const getAllProduct = () => {
    const all = localStorage.getItem('addedProduct')
  
    if (all) {
      const products = JSON.parse(all)
      return products
    } else {
      return []
    }
  }

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
//get product from local storage
const getAllWishedProduct = () => {
    const all = localStorage.getItem('wishedProduct')
  
    if (all) {
      const wishedProducts = JSON.parse(all)
      return wishedProducts
    } else {
      return []
    }
  }
  // Add a wished  product to local storage
const addWishedProduct = (product) => {
    const wishedProducts = getAllWishedProduct();
    const isExist = wishedProducts.find(item => item.product_id === product.product_id);

    if (isExist) {
        toast.error("Item already exists in the cart!");
        return;
    }

    wishedProducts.push(product);
    localStorage.setItem("wishedProduct", JSON.stringify(wishedProducts));
    toast.success("Your item added to Wishlist!");
};
export { addSelectedProduct, getAllProduct,getAllWishedProduct,addWishedProduct};
