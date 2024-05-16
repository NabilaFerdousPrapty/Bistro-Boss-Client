import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurShop from "../Pages/OurShop/OurShop";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            path: "/",
            element:<Home/>
        },{
            path:'/contact',
            element:<ContactUs/>
        },{
            path:'/shop',
            element:<OurShop/>
        }
        
    ]
  
  },
]);

export default router;
