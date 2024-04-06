import React, { useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import RegisterContainer from "../components/registerContainer/RegisterContainer";
import { Grid, Typography } from "@mui/material";
import { StyledInput } from "../components/input/Input.styles";
import { StyledButton } from "../components/button/Button.styles";
import { StyledLink } from "../components/link/Link.styles";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../auth/Firebase";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  const [values, setValues] = useState({
    description: "",
    email: "",
    f_name: "",
    l_name: "",
    speciality: "",
    username: "",
  });

  const doctorCollectionRef = collection(db, "Doctors");
   const getDoctorList = async () => {
    try {
      const data = await getDocs(doctorCollectionRef);
      console.log(data);
      const filteredDoctorData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredDoctorData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorList();
  }, []);

  const handleInput = (event) => {
    const newObject = { ...values, [event.target.name]: event.target.value };
    setValues(newObject);
  };

  const handleSubmit = async () => {
    try {
        await addDoc(doctorCollectionRef, {
        description: values.description,
        email: values.email,
        firstName: values.f_name,
        lastName: values.l_name,
        speciality: values.speciality,
        username: values.username,
      });
      // This line of code makes it somehow realtime when you add at the same it shows on screen
    //   getDoctorList()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper alignContent={"center"} justifyContent={"center"}>
      <RegisterContainer
        sx={{
          width: { xs: 330, sm: 360, md: 500 },
          height: { xs: 600, sm: 650, md: 700 },
        }}
      >
        <Grid item sx={{ marginTop: { xs: 2, sm: 3, md: 5 } }}>
          <Typography variant="h4" component={"h1"} style={{ color: "#fff" }}>
            Doctor
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
              onChange={handleInput}
              value={values.description}
              placeholder="Description"
              type="text"
              name="description"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              onChange={handleInput}
              value={values.email}
              placeholder="Email"
              type="email"
              name="email"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              onChange={handleInput}
              value={values.f_name}
              placeholder="First Name"
              type="text"
              name="f_name"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              onChange={handleInput}
              value={values.l_name}
              placeholder="Last Name"
              type="text"
              name="l_name"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              onChange={handleInput}
              value={values.speciality}
              placeholder="Speciality"
              type="text"
              name="speciality"
            ></StyledInput>
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              onChange={handleInput}
              value={values.username}
              placeholder="Username"
              type="text"
              name="username"
            ></StyledInput>
          </Grid>
        </Grid>
        <Grid item xs={11} sx={{ marginTop: { xs: 3, sm: 4, md: 5 } }}>
          <StyledButton
            onClick={handleSubmit}
            variant="radius"
            buttons="buttons"
          >
            Register
          </StyledButton>
        </Grid>
        <Grid
          item
          container
          sx={{ marginTop: { xs: 0, sm: 1 } }}
          spacing={1}
          textAlign={"center"}
          marginBottom={10}
        >
          {/* <SignupIcons /> */}
          <Grid item sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} xs={12}>
            <StyledLink to="/" variant="linkhover">
              Go Back Home
            </StyledLink>
          </Grid>
        </Grid>
      </RegisterContainer>
    </Wrapper>
  );
};

export default Doctor;
