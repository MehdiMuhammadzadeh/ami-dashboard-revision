import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import MyNotes from "../components/myNotes/MyNotes";
import Tickets from "../components/tickets/Tickets";
import PatientDiary from "../components/patientDiary/PatientDiary";
import Statistics from "../components/statistics/Statistics";
const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/" element={<Layout />}>
        <Route path="users" element={<span>gkldfjgkldjgfkl</span>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-notes" element={<MyNotes />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="patient-diary" element={<PatientDiary />} />
        <Route path="statistics" element={<Statistics />} />

       </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Router;
