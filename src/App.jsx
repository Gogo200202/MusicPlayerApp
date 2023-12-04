import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Footer from "./Ui/Footer";
import SidePanel from "./Ui/SidePanel";
import Home from "./Pages/Home"
function App() {
  
  return (
    <>
      <SidePanel />
      <Footer />
     </>
  );
}

export default App;
