import Header from "../nav/Header";
import { Outlet, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Collapse, Grid } from "@mui/material";
import StyledLink from "../link/StyledLink";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { StyledText } from "../text/Text.styles";
import Image from "../avatar/Image";

const drawerWidth = 250;

const Layout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isNavActive, setIsNavActive] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "#182631" }}>
        <StyledText variant="textTitle" onClick={() => navigate("/")}>
          AMI Dashboard
        </StyledText>
      </Toolbar>
      <Divider />
      <Grid
        container
        gap={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", paddingTop: 1, paddingLeft: "10px" }}
        >
          <Image
            src={
              "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "left", paddingLeft: "10px", paddingBottom: "5px" }}
        >
          <StyledText variant="textTitle">Mehdi Mohammadzadeh</StyledText>
          <StyledText component={"p"}>mehdi.mrpr93@gmail.com</StyledText>
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: "#fff" }} />
      <List
        // component="span"
        // width="100%"
        // cursor="pointer"
        // onMouseOver={() => setIsNavActive(true)}
        // onMouseOut={() => setIsNavActive(false)}
        onClick={() => setIsNavActive(!isNavActive)}
      >
        <ListItem>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Patients"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={isNavActive} paddingLeft={5}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={"Statistics"} />
            </ListItemButton>
            {/* <StyledLink>Statistics</StyledLink> */}
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={"Patient Diary "} />
            </ListItemButton>
            {/* <StyledLink>Statistics</StyledLink> */}
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={"My Notes"} />
            </ListItemButton>
            {/* <StyledLink>Statistics</StyledLink> */}
          </ListItem>
        </List>
      </Collapse>
      <List>
        {["Tickets", "Home", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LogoutSharpIcon /> : <HomeSharpIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  //   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* <Header /> */}
      <Box sx={{ display: "flex", backgroundColor: "#203342" }}>
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
                backgroundColor: "#2a4052",
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
                backgroundColor: "#101920",
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
