import React from "react";
import Wrapper from "../components/wrapper/Wrapper";
import { Grid, Paper, Typography } from "@mui/material";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import { StyledInput } from "../components/input/Input.styles";
import { StyledButton } from "../components/button/Button.styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper alignContent={"center"} justifyContent={"center"}>
      <RegisterContainer sx={{ width: {xs:320, sm:350, md: 380 }, height: {xs:360,sm:390, md: 430 } }}>
        <Grid item sx={{ marginTop: { xs: 2, sm: 3, md: 5 } }}>
          <Typography variant="h4" component={"h1"} style={{ color: "#fff" }}>
            Login
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignContent={"center"}
          spacing={2}
          sx={{ marginTop: { xs: 3, sm: 4, md: 5 }, textAlign: "center" }}
        >
          <Grid item xs={12}>
            <StyledInput placeholder="Email" type="email"></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput placeholder="Password" type="password"></StyledInput>
          </Grid>
        </Grid>
        <Grid item xs={11} sx={{ marginTop: { xs: 3, sm: 4, md: 5 } }}>
          <StyledButton style={{ borderRadius: 3 }}>Login</StyledButton>
        </Grid>
        <Grid
          item
          container
          sx={{marginTop: { xs: 2, sm: 3, md: 4 } }}
          spacing={1}
          justifyContent={'space-around'}
        >
          <Grid item sx={{fontSize:{xs:'0.8rem',sm:'1rem'}}}>
            <Link style={{ textDecoration:'none', color:'#1d6ee9'}}>Dont have an account!</Link>
          </Grid>
          <Grid item sx={{fontSize:{xs:'0.8rem',sm:'1rem'}}}>
            <Link style={{ textDecoration:'none', color:'#1d6ee9'}}>Forget Password!</Link> 
          </Grid>
        </Grid> 
      </RegisterContainer>
    </Wrapper>
  );
};

export default Login;
