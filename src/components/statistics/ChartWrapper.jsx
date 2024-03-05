import { Grid } from '@mui/material'
import React from 'react'

const ChartWrapper = ({children, gap,spacing}) => {
  return (
   <Grid item gap={gap} spacing={spacing} sx={{backgroundColor:'#353455',margin:1}}>
    {children}
   </Grid>
  )
}

export default ChartWrapper