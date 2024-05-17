import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router}>
     
      {router}
    </RouterProvider>
  </HelmetProvider>
)
