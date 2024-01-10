// @ts-ignore
import { useState } from 'react'
import './App.css'
import Connexion from './components/Connexion'
import {
  RouterProvider,
  // @ts-ignore
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from './components/Home'
import Type_de_QCM from './components/Type_de_QCM';
import Demande_inscription from './components/Demande_inscription';
import Inscription from './components/Inscription';
import Send_email from './components/Send_email';
import Load_CV from './components/Load_CV';
import Results from './components/Results';
import Entreprises from './components/Entreprises';
import Entreprises_informatique1 from './components/Entreprises_informatique1';
import Entreprises_informatique2 from './components/Entreprises_informatique2';
import Entreprises_meca1 from './components/Entreprises_meca1';
import Entreprises_meca2 from './components/Entreprises_meca2';
import Entreprises_meca3 from './components/Entreprises_meca3';
import Entreprises_meca_fluides1 from './components/Entreprises_meca_fluides1';
import Entreprises_meca_fluides2 from './components/Entreprises_meca_fluides2';
import Entreprises_meca_fluides3 from './components/Entreprises_meca_fluides3';
import Entreprises_thermo1 from './components/Entreprises_thermo1';
import Entreprises_thermo2 from './components/Entreprises_thermo2';
import Entreprises_plasmas1 from './components/Entreprises_plasmas1';
import Entreprises_plasmas2 from './components/Entreprises_plasmas2';
import Entreprises_elec1 from './components/Entreprises_elec1';
import Entreprises_elec2 from './components/Entreprises_elec2';
import Entreprises_elec3 from './components/Entreprises_elec3';
import QCM_info from './components/QCM_info';

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
    },
    {
      path: "/send_email",
      element: <Send_email />,
    },
    {
      path: "/load_CV",
      element: <Load_CV />,
    },
    {
      path: "/results",
      element: <Results />,
    },
    {
      path: "/entreprises",
      element: <Entreprises />,
    },
    {
      path: "/entreprises_informatique1",
      element: <Entreprises_informatique1 />,
    },
    {
      path: "/entreprises_informatique2",
      element: <Entreprises_informatique2 />,
    },
    {
      path: "/entreprises_mecanique1",
      element: <Entreprises_meca1 />,
    },
    {
      path: "/entreprises_mecanique2",
      element: <Entreprises_meca2 />,
    },
    {
      path: "/entreprises_mecanique3",
      element: <Entreprises_meca3 />,
    },
    {
      path: "/entreprises_mecanique_fluides1",
      element: <Entreprises_meca_fluides1 />,
    },
    {
      path: "/entreprises_mecanique_fluides2",
      element: <Entreprises_meca_fluides2 />,
    },
    {
      path: "/entreprises_mecanique_fluides3",
      element: <Entreprises_meca_fluides3 />,
    },
    {
      path: "/entreprises_thermodynamique1",
      element: <Entreprises_thermo1 />,
    },
    {
      path: "/entreprises_thermodynamique2",
      element: <Entreprises_thermo2 />,
    },
    {
      path: "/entreprises_physique_des_plasmas1",
      element: <Entreprises_plasmas1 />,
    },
    {
      path: "/entreprises_physique_des_plasmas2",
      element: <Entreprises_plasmas2 />,
    },
    {
      path: "/entreprises_electronique1",
      element: <Entreprises_elec1 />,
    },
    {
      path: "/entreprises_electronique2",
      element: <Entreprises_elec2 />,
    },
    {
      path: "/entreprises_electronique3",
      element: <Entreprises_elec3 />,
    },
    {
      path: "/qcm_informatique",
      element: <QCM_info />,
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
