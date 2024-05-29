import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurShop from "../Pages/OurShop/OurShop";
import Menu from "../Pages/Menu/Menu";
import Login from './../Pages/Login/Login';
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Private/PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/UserDashBoard/Cart";
import AllUsers from "../Pages/UserDashBoard/AllUsers/AllUsers";
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
            element:<PrivateRoute>
              <Menu/>
            </PrivateRoute>
        },{
          path:'/login',
          element:<Login/>
        },{
          path:'/signUp',
          element:<SignUp/>
        }
        
    ]
  
  },{
    path:'dashboard',
    element:<PrivateRoute>
      <DashBoard/>
    </PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      },
      //admin routes
      {
        path:'allUsers',
        element:<AllUsers/>
      }
    ]
  }
]);

export default router;
