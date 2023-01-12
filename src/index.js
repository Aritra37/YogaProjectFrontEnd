import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import '../src/Components/Navbar/navbar.css';
import Hero from './Components/Hero/Hero';
import '../src/Components/Hero/Hero.css';
import Register from './Components/Register/Register.';
import '../src/Components/Register/Register.css';
import Batch from './Components/Batch/Batch';
import '../src/Components/Batch/Batch.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Hero/>
    </div>,
  },
  {
    path:"Register",
    element:<div>
      <Register/>
    </div>
  },
  {
    path:"Batch",
    element:<div>
      <Batch/>
    </div>
  }
]);

ReactDOM.render(
  <RouterProvider router={router}/>,
  document.getElementById("root")
);
