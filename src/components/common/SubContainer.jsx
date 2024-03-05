import { Grid } from "@mui/material";
import React from "react";

const SubContainer = ({ children, xs, gap, spacing }) => {
  return (
    <Grid
      spacing={spacing}
      gap={gap}
      item
      container
      xs={xs}
      sx={{
        backgroundColor: "#1c2d3a",
        color: "#fff",
        borderRadius: 2,
        padding: 2,
        wordBreak: "break-all",
      }}
    >
      {children}
    </Grid>
  );
};

export default SubContainer;
