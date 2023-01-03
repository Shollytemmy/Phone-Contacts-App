import React from 'react'
import ReactDOM from 'react-dom/client'
// importing React-Router from 'react-router
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

/**bootstrap config */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <App />
    </BrowserRouter>
  
   
  
)
