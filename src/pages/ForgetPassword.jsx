import React from 'react'
import Wrapper from '../components/wrapper/Wrapper'
import RegisterContainer from '../components/registerContainer/RegisterContainer'
import { Grid, Typography } from '@mui/material'
import { StyledButton } from '../components/button/Button.styles'
import { StyledInput } from '../components/input/Input.styles'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <Wrapper alignContent={"center"} justifyContent={"center"}>
    <RegisterContainer sx={{ width: {xs:320, sm:350, md: 380 }, height: {xs:260,sm:280, md: 300 } }}>
      <Grid item sx={{ marginTop: { xs: 2, md: 3 } }}>
        <Typography variant="h5" component={"h1"} style={{ color: "#fff" }}>
          Forget Password
        </Typography>
      </Grid>
      <Grid
        item
        container
        alignContent={"center"}
        spacing={2}
        sx={{ marginTop: { xs: 2, md: 3 }, textAlign: "center" }}
      >
        <Grid item xs={12}>
          <StyledInput placeholder="Email" type="email"></StyledInput>
        </Grid>
      </Grid>
      <Grid item xs={11} sx={{ marginTop: { xs: 2, md: 3 } }}>
        <StyledButton style={{ borderRadius: 3 }}>Update Password</StyledButton>
      </Grid>
      <Grid
        item
        container
        sx={{marginTop: { xs: 2, sm: 3, md: 4 } }}
        spacing={1}
        justifyContent={'space-around'}
      >
        <Grid item sx={{fontSize:{xs:'0.8rem',sm:'1rem'}}}>
          <Link to={'/login'} style={{ textDecoration:'none', color:'#1d6ee9'}}>Back to Login!</Link>
        </Grid>
      </Grid> 
    </RegisterContainer>
  </Wrapper>
  )
}

export default ForgetPassword