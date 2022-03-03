import React from "react";
import "./App.css";
import Router from "./pages/router/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminIndex from "./components/AdminIndex";
import Login from "./components/Login";
import SiderDemo from "./components/SiderDemo";

function App() {
  return (
    <div className="App">
      {/* <Router /> */}
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="index/*" element={<AdminIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
