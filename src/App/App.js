import './App.css';

import { createContext, useContext, useState } from 'react';
import settings from "../general/settings";
import { useGetPageDataQuery } from '../API/pageAPI';
import Root from '../router/Root';


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  redirect,
  useNavigate, 
} from "react-router-dom";
// import ConditionalRender from './components/conditionsRender/ConditionalRender';
import PageRender from '../components/pageRender/PageRender';

const ThemeContext = createContext(null);

const server = settings.server

function App() {
  const {data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)

  const [modal,setModal] = useState(false)

  const routeronLoad = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<Root />} 
        // errorElement={<NavToMain />}
        errorElement={<div></div>}
      >
        <Route index element={<div>dsds</div>} key='222'/>

      </Route>
    )
  );

  if (isLoading) return (
    <ThemeContext.Provider value={{ modal, setModal}}>
    <RouterProvider router={routeronLoad } />
   </ThemeContext.Provider>
  
    )

  // console.log(data)

  const NavToMain = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
      navigate("/");
    },[])
    return (
      <div> 40404040404</div>
    )
  }
  
  // const router = RouterBrouser
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<Root />} 
        errorElement={<NavToMain />}
      >
        {data.map((item)=>{
            return <Route 
                      path={item.path} 
                      element={<PageRender data={item}/>} 
                      key={item.id}
                    />
        })}
      </Route>
    )
  );





  return (
    <ThemeContext.Provider value={{ modal, setModal}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}



export default App;
export {ThemeContext}