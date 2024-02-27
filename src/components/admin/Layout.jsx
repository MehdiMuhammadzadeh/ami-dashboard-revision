import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
// import Wrapper from '../wrapper/Wrapper'

const Layout = ({ children }) => {
  return (
    <>
      <Outlet />
      {children}
    </>
  );
};

export default Layout;
