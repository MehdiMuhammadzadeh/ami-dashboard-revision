import { Box, Collapse, Grid, List, ListItem } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../nav/Header";
import { useState } from "react";
import { GridTemp } from "../GridTemp";
const Dashboard = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        component="header"
        sx={{ background: "#ccc", position: "sticky", top: 0 }}
      >
        <Box component="img" />
        <Box component="nav">
          <List
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
              "& li": {
                width: "fit-content",
              },
              "& li:hover": {
                color: "primary.main",
              },
            }}
          >
            <ListItem
              onClick={() => setIsSideNavOpen(true)}
              sx={{ display: { xs: "block", md: "hidden" } }}
            >
              Open Side
            </ListItem>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/salam">Salam</Link>
            </ListItem>
            <ListItem>
              <Link to="/bye">Bye</Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Grid container flex={1} position="relative" overflow="auto">
        <Grid
          item
          xs={10}
          sm={4}
          md={2}
          component="aside"
          bgcolor="#332244"
          sx={{
            transition: "0.3s",
            position: { xs: "fixed", md: "sticky" },
            left: 0,
            top: 0,
            height: "100%",
            transform: {
              xs: isSideNavOpen ? "translateX(0%)" : "translateX(-100%)",
              md: "translateX(0%)",
            },
          }}
        >
          <Box
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setIsSideNavOpen(false)}
          >
            Close Side
          </Box>
          <List disablePadding>
            <ListItem>Dashbaord</ListItem>
            <ListItem
              position="relative"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",

                // "&:hover": {
                //   ul: {
                //     display: "block",
                //   },
                // },
              }}
            >
              <Box
                component="span"
                width="100%"
                cursor="pointer"
                // onMouseOver={() => setIsNavActive(true)}
                // onMouseOut={() => setIsNavActive(false)}
                onClick={() => setIsNavActive(!isNavActive)}
              >
                News
              </Box>
              <Collapse in={isNavActive}>
                <List
                  sx={
                    {
                      // position: "absolute",
                      // top: 0,
                      // border: "2px solid blue",
                      // left: "100%",
                    }
                  }
                >
                  <ListItem>
                    <Link to="/salam">News List</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/bye">Create News</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/">Update News</Link>
                  </ListItem>
                </List>
              </Collapse>
            </ListItem>
            <ListItem>Dashbaord</ListItem>
            <ListItem>Dashbaord</ListItem>
            <ListItem>Dashbaord</ListItem>
            <ListItem>Dashbaord</ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={10} p="1rem" component="main">
          <Outlet />
                  <GridTemp />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
