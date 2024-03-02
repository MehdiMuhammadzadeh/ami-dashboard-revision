import { Box, Grid } from '@mui/material'
import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'

const Dashboard = () => {

  const arr = [
    1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,,14,15,16,17,18,19,20
  ];

  return (
    <Grid container sx={{height:'', backgroundColor:'#353455'}}>
    <Grid container spacing={1} overflowY="auto" flex={1} height="100%">
      {arr.map((item) => {
        return (
          <>
            <Grid item xs={12} md={6} lg={3}>
              <Box bgcolor="#353455" width="100%" height="250px">
                
              </Box>
            </Grid>
          </>
        );
      })}
    </Grid>
    </Grid>
  )
}

export default Dashboard