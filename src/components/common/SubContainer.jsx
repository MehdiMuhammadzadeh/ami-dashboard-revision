import { Grid } from "@mui/material";
import React from "react";
import {COLORS} from '../../styles/colors'
const SubContainer = ({
  children,
  xs,
  sx,
  sm,
  md,
  gap,
  spacing,
  boxShadow,
  onclick,
  style,
  enableHover,
  marginTop
}) => {
  return (
    <Grid
      onClick={onclick}
      boxShadow={boxShadow}
      spacing={spacing}
      gap={gap}
      marginTop={marginTop}
      item
      container
      xs={xs}
      sm={sm}
      md={md}
      sx={{
        backgroundColor: `${COLORS.darkCard}`,
        color: "#fff",
        borderRadius: 2,
        padding: 2,
        wordBreak: "break-all",
        "&:hover": {
          backgroundColor: enableHover ? `${COLORS.darkCard}` : "#1d1e2f",
          cursor: enableHover ? "pointer" : "pointer",
          transition: "background-color 0.5s ease-in-out",
        },
      }}
      style={style}
    >
      {children}
    </Grid>
  );
};

export default SubContainer;
