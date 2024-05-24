import React from "react";
import ReactDOM from "react-dom/client";
import {  HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router}>
        {router}
        <Toaster />
      </RouterProvider>
      </HelmetProvider>
      
    </AuthProvider>
 
);
