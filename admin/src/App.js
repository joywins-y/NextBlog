import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AdminIndex from "./components/AdminIndex";
import AdminLayout from "./components/AdminLayout";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="index/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
