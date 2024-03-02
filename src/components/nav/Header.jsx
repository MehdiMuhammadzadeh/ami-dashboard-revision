import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
const drawerWidth = 250;

const Header = () => {

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <AppBar
    style={{ backgroundColor: "#182631" }}
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        AMI Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Header