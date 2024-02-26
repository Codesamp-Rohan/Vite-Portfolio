import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppScroll from './App.jsx'
import './index.css'
// import {ProjectPage} from "./ProjectPage.jsx";
// import {Contact} from "./Contact.jsx";
import {Sibiro} from "./ProjectPages/cosmetics.jsx";
import {MouseFollower} from "./MouseFollower.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MouseFollower />
      {/*<AppScroll />*/}
      <Sibiro />
    {/*<App />*/}
    {/*  <ProjectPage />*/}
    {/*  <Contact/>*/}
  </React.StrictMode>
)
