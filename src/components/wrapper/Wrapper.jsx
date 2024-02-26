import { Grid } from "@mui/material";
import React from "react";

const Wrapper = ({children,justifyItems,alignItems,justifyContent,alignContent}) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        backgroundColor: "#182631",
      }}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
    >
      {children}
    </Grid>
  );
};

export default Wrapper;
