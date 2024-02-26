import React from "react";
import { StyledInput } from "../components/input/Input.styles";
import { Grid, Typography } from "@mui/material";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import Wrapper from "../components/wrapper/Wrapper";
import { StyledButton } from "../components/button/Button.styles";
import { Link } from "react-router-dom";
import SignupIcons from "../components/icons/SignupIcons";
import { StyledLink } from "../components/link/Link.styles";


const Signup = () => {
  return (
    <Wrapper alignContent={"center"} justifyContent={"center"}>
      <RegisterContainer
        sx={{
          width: { xs: 330, sm: 360, md: 400 },
          height: { xs: 420, sm: 450, md: 500 },
        }}
      >
        <Grid item sx={{ marginTop: { xs: 2, sm: 3, md: 5 } }}>
          <Typography variant="h4" component={"h1"} style={{ color: "#fff" }}>
            Signup
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
          <Grid item xs={12}>
            <StyledInput placeholder="Password" type="password"></StyledInput>
          </Grid>
        </Grid>
        <Grid item xs={11} sx={{ marginTop: { xs: 3, sm: 4, md: 5 } }}>
          <StyledButton variant="radius">Signup</StyledButton>
        </Grid>
        <Grid
          item
          container
          sx={{ marginTop: { xs: 0, sm: 1 } }}
          spacing={1}
          textAlign={"center"}
          // marginBotto  m={10}
        >
            <SignupIcons />
          <Grid item sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} xs={12}>
            <StyledLink to='/login' variant="linkhover">Already have an account!</StyledLink>
          </Grid>
        </Grid>
      </RegisterContainer>
    </Wrapper>
  );
};

export default Signup;
