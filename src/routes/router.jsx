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
import AddItems from "../Pages/UserDashBoard/AddItems/AddItems";
import AdminRoute from "./Admin/AdminRoute";
import ManageItems from "../Pages/UserDashBoard/ManageItems/ManageItems";
import UpdateAnItem from "../Pages/UserDashBoard/UpdateAnItem/UpdateAnItem";
import Payment from "../Pages/UserDashBoard/Payment/Payment";
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
      //user routes
      {
        path:'cart',
        element:<Cart/>
      },{

        path:'payment',
        element:<Payment/>
      },
      //admin routes
      {
        path:'allUsers',
        element:<AdminRoute>
          <AllUsers/>
        </AdminRoute>
      },{
        path:'addItems',
        element:<AdminRoute>
          <AddItems/>
        </AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute>
          <ManageItems/>
        </AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute>
          <UpdateAnItem />
        </AdminRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`)
      }
    ]
  }
]);

export default router;
