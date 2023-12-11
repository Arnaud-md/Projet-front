import { useState } from 'react'
import './App.css'
import Connexion from './components/Connexion'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from './components/Home'
import Type_de_QCM from './components/Type_de_QCM';
import Demande_inscription from './components/Demande_inscription';
import Inscription from './components/Inscription';

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
    },
    {
      path: "/demande_inscription",
      element: <Demande_inscription />,
    },
    {
      path: "/inscription",
      element: <Inscription />,
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
