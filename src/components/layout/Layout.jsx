import Header from "../nav/Header";
import { Outlet, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, Grid } from "@mui/material";
import { StyledText } from "../text/Text.styles";
import Image from "../avatar/Image";
import { StyledNavLink } from "../navLink/NavLink.styles";
import {COLORS} from '../../styles/colors'
const drawerWidth = 250;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isNavActive, setIsNavActive] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const selected =
  { title: "Home", to: "/dashboard" }

  const test= [
    { title: "Statistics", to: "statistics"},
    {title: "PatientDiary",to: "patient-diary"},
    { title: "My Notes", to: "my-notes"},
  ];
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <Grid>
      <Toolbar style={{ backgroundColor: `${COLORS.darkCard}` }}>
        <StyledText variant="textTitle" style={{cursor:'pointer'}} onClick={() => navigate("/")}>
          AMI Dashboard
        </StyledText>
      </Toolbar>
      <Divider />
      <Grid container gap={1} sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={12} sx={{ display: "flex", paddingTop: 1, paddingLeft: "10px" }}>
          <Image src={"https://picsum.photos/200"}/>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "left", paddingLeft: "10px", paddingBottom: "5px" }}>
          <StyledText variant="textTitle">John Dou</StyledText>
          <StyledText component={"p"}>john.dou@gmail.com</StyledText>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: "#fff" }} />
        <ListItemButton onClick={() => setIsActive(false)}>
            <StyledNavLink to={selected.to}>{selected.title}</StyledNavLink>
        </ListItemButton>
      <List
        // component="span"
        // width="100%"
        // cursor="pointer"
        // onMouseOver={() => setIsNavActive(true)}
        // onMouseOut={() => setIsNavActive(false)}
        onClick={() => {
            setIsNavActive(!isNavActive);
                setIsActive(!isActive);
        }}
      >
        <ListItem sx={{ paddingBottom: 0, margin: 0 }}>
          <ListItemText
            primary={"Patients"}
            sx={{color: isActive ? "#f5b869" : "#fff", cursor: "pointer", padding: 0, margin: 0}}
          />
        </ListItem>
      </List>
      <Collapse
        in={isNavActive}
        sx={{ backgroundColor: `${COLORS.darkCard}`, paddingLeft: 3 }}
      >
        <List>
          {test.map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => setIsActive(false)}>
                  {/* <ListItemIcon>
                {index % 2 === 0 ? <LogoutSharpIcon /> : <HomeSharpIcon />}
              </ListItemIcon> */}
                  {/* <ListItemText
                    primary={item.title}
                    onClick={() => {
                      navigate(item.to);

                    }}
                    sx={{color:item.isSelected ? 'red' : 'blue'}}
                  /> */}
                  <StyledNavLink to={item.to}>{item.title}</StyledNavLink>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      {/* "Tickets", "Home", "Logout" */}
      <List>
        {[
          { title: "Tickets", to: "tickets" },
          { title: "Logout", to: "/" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => setIsActive(false)}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <LogoutSharpIcon /> : <HomeSharpIcon />}
              </ListItemIcon> */}
              {/* <ListItemText
                primary={item.title}
                onClick={() => navigate(item.to)}
              /> */}
              <StyledNavLink to={item.to}>{item.title}</StyledNavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
  // Remove this const when copying and pasting into your project.
  //   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* <Header /> */}
      <Box sx={{ display: "flex", backgroundColor: `${COLORS.darkBackground}` }}>
        <CssBaseline />
        <Header
          isClosing={isClosing}
          setMobileOpen={setMobileOpen}
          mobileOpen={mobileOpen}
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            //   container={container}
            PaperProps={{
              sx: {
                backgroundColor: `${COLORS.darkCard}`,
                color: "#fff",
              },
            }}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: `${COLORS.darkCard}`,
                boxShadow:'3px 10px 5px rgba(0,0,0,0.3)',
                color: "#fff",
              },
            }}
            style={{ backgroundColor: "#101920" }}
            variant="permanent"
            sx={{
              backgroundColor: "#101920",
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
