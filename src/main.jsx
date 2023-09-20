import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";

import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import MainLayout from "./main-layout/MainLayout";
import Home from "./components/Home/Home";

const myProject = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/contacts',
        element:<Contact></Contact>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/home',
        element:<Home></Home>
      }
    ]
    
  }
    
      
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myProject}></RouterProvider>
  </React.StrictMode>
);
