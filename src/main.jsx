import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ProjectPage} from "./ProjectPage.jsx";
import {Contact} from "./Contact.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/*  <ProjectPage />*/}
    {/*  <Contact/>*/}
  </React.StrictMode>,
)
