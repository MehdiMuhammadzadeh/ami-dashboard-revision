import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ForgetPassword from "../pages/ForgetPassword";
import Layout from "../components/admin/Layout";
import Header from "../components/nav/Header";
import Dashboard from "../components/dashboard/Dashboard";
import { GridTemp } from "../components/GridTemp";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin Routes */}
       

        {/* <Route path="/" element={<App />}>
          <Route path="" element={<GridTemp />} />
          <Route path="/salam" element={<h1>Salam</h1>} />
          <Route path="/bye" element={<h1>Bye</h1>} />
        </Route> */}
      
        <Route path="/" element={<Layout />}>
        <Route path="" element={<GridTemp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
