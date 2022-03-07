import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import AdminIndex from "../../components/AdminIndex";
import Login from "../../components/Login";
// import SiderDemo from '../../components/SiderDemo';

const Index = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/login/" exact component={Login} />
    //     <Route path="/index/" exact component={AdminIndex} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="index/*" element={<AdminIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
