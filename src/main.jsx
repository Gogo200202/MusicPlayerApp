import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../css/index.css'
import Footer from "./Ui/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <BrowserRouter>
    <App />
    <Footer />
    </BrowserRouter>
   </React.StrictMode>
)
