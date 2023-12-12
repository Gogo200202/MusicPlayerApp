import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import Footer from "./Ui/Footer";
import SidePanel from "./Ui/SidePanel";
import Home from "./Pages/Home"


function App() {
  // to not reload footer every time
  const footer = React.useMemo( () => <Footer/>, [] );
  return (
    <>
      <SidePanel />
      {footer}
     </>
  );
}

export default App;
