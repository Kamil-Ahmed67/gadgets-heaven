import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
    const [chosenProduct, setChosenProduct] = useState([]);
    useEffect(() => {
        fetch('gadgets.json')
          .then(response => response.json())
          .then(data => setChosenProduct(data))
      }, [])
    // Function to add a product to the cart
    const addSelectedProduct = (product) => {
        setChosenProduct((prevProducts) => [...prevProducts, product]);
    };
    return (
        <div>
             <Outlet context={{ chosenProduct, addSelectedProduct }} />
        </div>
    );
};

export default App;