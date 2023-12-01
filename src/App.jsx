import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import SidePanel from "./Ui/sidePanel";
function App() {
  return (
    <BrowserRouter>
      <SidePanel />
    </BrowserRouter>
  );
}

export default App;
