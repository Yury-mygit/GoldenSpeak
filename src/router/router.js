import About from '../pages/about/About';
import Home from '../pages/home/Home';

import {
    createBrowserRouter,
  } from "react-router-dom";

  const RouterBrouser = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <div>Error 404</div>,
      
    },
    {
        path: "/about/",
        element: <About/>,
        errorElement: <div>Error 404 1</div>
    },
    {
        path: "/news/",
        element: <About/>,
        errorElement: <div>Error 404</div>
    },
    {
        path: "/articles/",
        element: <About/>,
        errorElement: <div>Error 404</div>
    },
    {
        path: "/pay/",
        element: <About/>,
        errorElement: <div>Error 404</div>
    },
    {
        path: "/contacts/",
        element: <About/>,
        errorElement: <div>Error 404</div>
    },
    {
        path: "/club/",
        element: <About/>,
        errorElement: <div>Error 404</div>
    },     
    
  ]);

  export default RouterBrouser