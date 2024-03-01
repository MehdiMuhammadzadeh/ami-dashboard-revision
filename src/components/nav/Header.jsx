import { Grid, Typography } from "@mui/material";
import React from "react";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import { StyledLink } from "../link/Link.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      container
      sx={{
        backgroundColor: "#3c5f58",
        height: "70px",
        top: "0",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 4,
      }}
      xs={12}
      position={"sticky"}
    >
      <Grid item sx={{ paddingLeft: 4 }}>
        <Typography
          variant="h5"
          component={"h1"}
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home
        </Typography>
      </Grid>
      <Grid item>
        <NotificationsActiveSharpIcon
          sx={{
            fill: "#faac05",
            fontSize: { xs: 17, sm: 18, md: 25 },
            marginTop: 1,
            cursor: "pointer",
            // transform: "scale(1.5)",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
