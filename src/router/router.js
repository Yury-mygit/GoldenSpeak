import About from '../pages/about/About';
import Home from '../pages/home/Home';

import {
    createBrowserRouter,
  } from "react-router-dom";
import TasksPage from '../pages/tasks/TasksPage';
import News from '../pages/news/News';
import Articles from '../pages/articles/Articles';
import Contacts from '../pages/contacts/PageContacts';
import Club from '../pages/club/Club';
import Pay from '../pages/pay/Pay';
import Root from './Root';
import Page404 from '../pages/404/Page404';


  const RouterBrouser = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Page404/>,
        children:[
           
            {
                path: "/news",
                element: <News/>,
                errorElement: <div>Error 404</div>
            },
            {
                path: "/articles",
                element: <Articles/>,
                errorElement: <div>Error 404</div>
            },
            {
                path: "/pay",
                element: <Pay/>,
                errorElement: <div>Error 404</div>
            },
            {
                path: "/contacts",
                element: <Contacts/>,
                errorElement: <div>Error 404</div>
            },
              
            {
                path: "/tasks",
                element: <TasksPage/>,
                errorElement: <div>Error 404</div>
            },
        ]
    },
    
    
         
    
  ]);

  export default RouterBrouser