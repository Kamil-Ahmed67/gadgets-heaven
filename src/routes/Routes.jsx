import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
import Categories from "../components/Categories";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../components/Cart";
import Contact from "../pages/Contact";
import Error from "../components/Error";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children:[
                    {
                        path:"/",
                        element:<GadgetCards></GadgetCards>,
                        loader:()=>fetch('../gadgets.json'),
                     },
                    {
                        path:"/category/:cat",
                        element:<GadgetCards></GadgetCards>,
                        loader:()=>fetch('../gadgets.json')
                    },
                    {
                        path:"/",
                        element:<Categories></Categories>,
                        loader:()=>fetch('../gadgets.json'),
                    }
                ]
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/gadget/:proId",
                element:<ProductDetails></ProductDetails>,
                loader:()=>fetch('../gadgets.json'),
            },
            {
                path: "/cart",
                element:<Cart></Cart>,
            },
            {
                path: "/contact",
                element:<Contact></Contact>,
            }
        ]
    },
]);

export default router;