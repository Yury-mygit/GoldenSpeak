import About from '../pages/about/About';
import Home from '../pages/home/Home';

import {
    // createBrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import TasksPage from '../pages/tasks/TasksPage';
import News from '../pages/news/News';
import Articles from '../pages/articles/Articles';
import Contacts from '../pages/contacts/PageContacts';
import Club from '../pages/club/Club';
import Pay from '../pages/pay/Pay';
import Root from './Root';
import Page404 from '../pages/404/Page404';
import {LinkList} from '../App/App'



let pats = [
    
  {path:"/news", element:<News/>,errorElement:<div>Error 404</div>, id:1},
  // {path:"/articles", element:<Articles/>,errorElement:<div>Error 404</div>, id:2},
  // {path:"/pay", element:<Pay/>,errorElement:<div>Error 404</div>,id:3},
  // {path:"/task", element:<Pay/>,errorElement:<div>Error 404</div>,id:3},
  // {path:"/about", element:<About/>,errorElement:<div>Error 404</div>,id:3},
]

// let List = LinkList || pats

// console.log(List)



// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         {/* <Route path="/home" element = {<Home/>} key='222'/> */}
//         {pats.map((item)=>{
//             return <Route path={item.path} element={item.element} key={item.id}/>
//         })}
//       </Route>
//     )
//   );

// export default router