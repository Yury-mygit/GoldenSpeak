import './App.css';

import { createContext, useContext, useState } from 'react';
import settings from "../general/settings";
import { useGetPageDataQuery } from '../API/pageAPI';
import Root from './Root/Root';


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
import PageRender from './Root/PageRender/PageRender';
import ErrorPage from '../pages/errorPage/ErrorPage';
import PersonalArea from '../pages/PersonalArea/PersonalArea';
import LoadingPage from '../pages/loadingPage/LoadingPage';

const ThemeContext = createContext(null);

const server = settings.server

function App() {
  const {data, isError, isLoading, isFetching } = useGetPageDataQuery ()

  const [modal,setModal] = useState(false)

  const routeronLoad = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<LoadingPage/>} 
        // errorElement={<NavToMain />}
        errorElement={<ErrorPage/>}
        // errorElement={<LoadingPage/>}
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
        <Route 
                      path="personal-area" 
                      element={<PersonalArea />} 
                      key={'1000'}
                    />
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
