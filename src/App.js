import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import { createContext, useContext, useState } from 'react';
import RouterBrouser from './router/router';
import settings from './settings';

const ThemeContext = createContext(null);

const router = RouterBrouser

// console.log(settings.server)
const server = settings.server

function App() {

  const [data, setData] = useState(0)
  const [modal,setModal] = useState(false)

  return (
    <ThemeContext.Provider value={{data, setData, modal, setModal}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export {ThemeContext}
export default App;
