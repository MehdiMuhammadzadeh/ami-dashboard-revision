import { Grid } from '@mui/material'
import React from 'react'

const Container = ({children,xs,sx,backgroundColor,height}) => {
  return (
    <Grid
    xs={xs}
    component={"div"}
    container 
    gap={2}
    sx={{sx, padding: "10px" }}
    backgroundColor={backgroundColor}
    height={height}
  >
    {children}
  </Grid>
  )
}

export default Container