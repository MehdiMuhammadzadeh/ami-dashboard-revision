import { Grid } from '@mui/material'
import React from 'react'

const Container = ({children,xs,sx}) => {
  return (
    <Grid
    xs={xs}
    component={"div"}
    container 
    gap={2}
   
    sx={{sx, padding: "10px" }}
  >
    {children}
  </Grid>
  )
}

export default Container