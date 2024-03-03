import { Grid } from '@mui/material'
import React from 'react'

const SubContainer = ({children}) => {
  return (
    <Grid
    item
    container
    xs={12}
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
  )
}

export default SubContainer