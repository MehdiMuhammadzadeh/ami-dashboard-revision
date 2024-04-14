import { Grid } from "@mui/material";
import React from "react";
import {COLORS} from '../../styles/colors'
const SubContainer = ({
  children,
  xs,
  gap,
  spacing,
  boxShadow,
  onclick,
  style,
  enableHover,
}) => {
  return (
    <Grid
      onClick={onclick}
      boxShadow={boxShadow}
      spacing={spacing}
      gap={gap}
      item
      container
      xs={xs}
      sx={{
        backgroundColor: `${COLORS.darkCard}`,
        color: "#fff",
        borderRadius: 2,
        padding: 2,
        wordBreak: "break-all",
        "&:hover": {
          backgroundColor: enableHover ? `${COLORS.darkCard}` : "#1d1e2f",
          cursor: enableHover ? "pointer" : "pointer",
          transition: "background-color 0.3s ease-in-out",
        },
      }}
      style={style}
    >
      {children}
    </Grid>
  );
};

export default SubContainer;
