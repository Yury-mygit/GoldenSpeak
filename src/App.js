import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

         

import RouterBrouser from './router/router';

const router = RouterBrouser

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
