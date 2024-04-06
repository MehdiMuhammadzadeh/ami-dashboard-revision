import React, { useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import { Grid, Typography } from "@mui/material";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import { StyledInput } from "../components/input/Input.styles";
import { StyledButton } from "../components/button/Button.styles";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../components/link/Link.styles";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../auth/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;
  const [values, setValues] = useState({
    email: { value: "", isValid: true },
    password: { value: "", isValid: true },
  });

  /*
  Password must contain one digit from 1 to 9, 
  one lowercase letter, 
  one uppercase letter, one special character, 
  no space, and it must be 8-16 characters long.

  */
  const handleInput = (event) => {
    if (values.email.value === "" || !email_pattern.test(values.email.value)) {
      const newObject = {
        ...values,
        [event.target.name]: { value: event.target.value, isValid: false },
      };
      setValues(newObject);
      setErrorMessage("Email is incorrect:(");
      // return;
    } else {
      const newObject = {
        ...values,
        [event.target.name]: { value: event.target.value, isValid: true },
      };
      setValues(newObject);
      setErrorMessage("");
    }

    if (
      values.password.value === "" ||
      !password_pattern.test(values.password.value)
    ) {
      const newObject = {
        ...values,
        [event.target.name]: { value: event.target.value, isValid: false },
      };
      setErrorMessage("Password is incorrect:(");
      setValues(newObject);
      // return;
    } else {
      const newObject = {
        ...values,
        [event.target.name]: { value: event.target.value, isValid: true },
      };
      setErrorMessage("");
      setValues(newObject);
    }
  };

  const doctorCollectionRef = collection(db, "Doctors");
  const getDoctorList = async () => {
    const data = await getDocs(doctorCollectionRef);

    const filteredDoctorData = data.docs.map((doc) => {
      if (doc.data().email === "doctor@gmail.com") {
        localStorage.setItem("doctor", JSON.stringify(doc.data()));
        // save the doctors data in somewhere like localStorage coz i will be needing them in dashboard
        navigate("/dashboard");
      }
      // ...doc.data(),
      // id: doc.id,
    });
    console.log(filteredDoctorData);
  };
  const handleSubmit = () => {
    console.log('Handle SingIn')
    getDoctorList();
    // if(values.email.value && values.password.value) {
    if("doctor@gmail.com") {
      signInWithEmailAndPassword(
        auth,
        values.email.value,
        values.password.value
      ).then((userCredential)=>{
          const user = userCredential.user;
          console.log("UserCredintional", user.email);
          navigate('/dashboard')
      });
    }else {
      navigate('/signup')
    }

  };

  return (
    <Wrapper alignContent={"center"} justifyContent={"center"}>
      <RegisterContainer
        sx={{
          width: { xs: 320, sm: 350, md: 380 },
          height: { xs: 360, sm: 390, md: 430 },
        }}
      >
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
            <StyledInput
              // onChange={(e) => setEmail(e.target.value)}
              style={
                values.email.isValid
                  ? { border: "1px solid #dddddd" }
                  : { border: "1px solid red" }
              }
              onChange={handleInput}
              placeholder="Email"
              value={values.email.value}
              type="email"
              name="email"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              // onChange={(e) => setPassword(e.target.value)}
              style={
                values.password.isValid
                  ? { border: "1px solid #dddddd" }
                  : { border: "1px solid red" }
              }
              onChange={handleInput}
              placeholder="Password"
              value={values.password.value}
              type="password"
              name="password"
            ></StyledInput>
          </Grid>
        </Grid>
        <Grid
          item
          xs={11}
          sx={{ marginTop: { xs: 3, sm: 4, md: 5 }, textAlign: "center" }}
        >
          <StyledButton
            type="submit"
            onClick={handleSubmit}
            variant="radius"
            buttons="buttons"
          >
            Login
          </StyledButton>
        </Grid>
        <Grid
          item
          container
          sx={{ marginTop: { xs: 2, sm: 3, md: 4 } }}
          spacing={1}
          justifyContent={"space-around"}
        >
          <Grid item sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            <StyledLink to="/signup" variant="linkhover">
              Dont have an account!
            </StyledLink>
          </Grid>
          <Grid item sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            <StyledLink to="/forget-password" variant="linkhover">
              Forget Password!
            </StyledLink>
          </Grid>
        </Grid>
      </RegisterContainer>
    </Wrapper>
  );
};

export default Login;
