import { Grid } from '@mui/material'
import React from 'react'

const Container = ({children}) => {
  return (
    <Grid
    component={"div"}
    container 
    gap={2}
    sx={{ padding: "10px" }}
  >
    {children}
  </Grid>
  )
}

export default Container