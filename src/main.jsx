import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navigation from './components/Navigation.jsx';
import Kontakt from './pages/Kontakt.jsx';
import AluminijumskeOgradeIKapije from './pages/AluminijumskeOgradeIKapije.jsx';
import UpravljanjeZgradama from './pages/UpravljanjeZgradama.jsx';
import OdrzavanjeZgrade from './pages/OdrzavanjeZgrade.jsx';
import KnaufMoler from './pages/KnaufIMoler.jsx';




const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />
  },
  {
    path: "/galerija/aluminijumske-kapije-i-ograde/",
    element: <AluminijumskeOgradeIKapije />
  },
  {
    path: "/upravljanje-zgradama/",
    element: <UpravljanjeZgradama />
  },
  {
    path:"/odrzavanje-zgrade/",
    element: <OdrzavanjeZgrade />
  },
  {
    path:"/galerija/knauf-i-molerski-radovi/",
    element: <KnaufMoler />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {router} />
  
)
