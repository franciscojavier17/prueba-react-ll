import './index.css'

import UserContextProvider from "./context/UserContext"
import OperationsContextProvider from "./context/OperationsContext";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <OperationsContextProvider>
          <App />
        </OperationsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)