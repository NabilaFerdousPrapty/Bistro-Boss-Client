import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurShop from "../Pages/OurShop/OurShop";
import Menu from "../Pages/Menu/Menu";
import Dashboard from "../Pages/DASHBOARD/Dashboard";
import Login from './../Pages/Login/Login';
import SignUp from "../Pages/SignUp/SignUp";
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
            path:'/shop/:category',
            element:<OurShop/>
        },{
            path:'/menu',
            element:<Menu/>
        },{
          path:'/dashboard',
          element: <Dashboard/>
        },{
          path:'/login',
          element:<Login/>
        },{
          path:'/signup',
          element:<SignUp/>
        }
        
    ]
  
  },
]);

export default router;
