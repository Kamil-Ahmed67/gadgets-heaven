import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCards from "../components/GadgetCards";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children:[
                    {
                        path:"/",
                        element:<GadgetCards></GadgetCards>,
                        loader:()=>fetch('../gadgets.json')
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
            }
        ]
    },
]);

export default router;