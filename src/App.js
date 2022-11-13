import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RouterBrouser from './router/router';

const router = RouterBrouser

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
