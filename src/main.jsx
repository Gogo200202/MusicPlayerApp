import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../css/index.css'
import Footer from "./Ui/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App />
    <Footer />
   </React.StrictMode>
)
