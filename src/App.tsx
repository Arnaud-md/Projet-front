import { useState } from 'react'
import './App.css'
import Connexion from './Connexion'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from './Home'
import Type_de_QCM from './Type_de_QCM';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/type_de_qcm",
      element: <Type_de_QCM />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
