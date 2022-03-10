import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import ArticleList from './pages/article/index';
import AddArticle from './pages/article/AddArticle';
import Login from './components/Login';
import Welcome from './pages/welcom/index';
import './App.css';
import { useParams } from 'react-router';

function App(props) {
  console.log(props);
  const { id } = useParams();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/article/list" element={<ArticleList />} />
            <Route path="/article/add" element={<AddArticle />} />
            <Route path="/article/update/:id" element={<AddArticle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Invoices from "./Invoices";
// import Layout from "./Layout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="invoices" element={<Invoices />} />
//           <Route path="dashboard" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
