import React from "react";
import { Box } from "@mui/material";
const StyledBox = ({ children, backgroundColor, width, height, border }) => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: 300,
        height: 350,
        border: "1px solid #fff",
        borderRadius: 5,
      }}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
