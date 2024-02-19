import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import StyledBox from "../components/boxContainer/StyledBox";

const Home = () => {
  return (
    <Grid
      container
      display={"flex"}
      sx={{
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
      }}
      height={"100vh"}
    >
      <Grid item>
        <StyledBox>
          sssdfsdfsdfdsfdsfdsf
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default Home;
