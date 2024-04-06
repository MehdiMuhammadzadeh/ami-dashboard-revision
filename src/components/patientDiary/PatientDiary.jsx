import React, { useState } from "react";
import Container from "../common/Container";
import { Divider, Grid } from "@mui/material";
import SubContainer from "../common/SubContainer";
import { StyledText } from "../text/Text.styles";
import PatientRecords from "./PatientRecords";
import PatientRecordsDescription from "./PatientRecordsDescription";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/Firebase";

const PatientDiary = () => {
  const patientRecords = [1, 2, 3, 4, 5];
  const [records, setRecords] = useState([])
  const patientRecordsRef = collection(db, "records");
  console.log(patientRecordsRef);
  const getPatientsRecords = async () => {
    const recordsData = await getDocs(patientRecordsRef);
    console.log(recordsData);
    const filteredRecordsData = recordsData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(filteredRecordsData);
    setRecords(filteredRecordsData);
  };
  getPatientsRecords();
  return (
    <Container>
      <Grid component={"div"} item container sx={{ display: "flex" }} gap={2}>
        <Grid item container component={"div"} xs={12} md={3}>
          <Grid
            item
            component={"div"}
            container
            xs={12}
            sx={{ marginBottom: 1 }}
          >
            <Grid
              item
              component={"div"}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 1,
              }}
            >
              <StyledText variant="textTitle">Patient Records</StyledText>
            </Grid>
          </Grid>

          <Grid item container gap={1}>
            {records.map((record, index) => {
              return <PatientRecords key={index} />;
            })}
          </Grid>
        </Grid>
        <Grid item component={"div"}>
          <Divider
            orientation="vertical"
            style={{
              height: "",
              marginBlock: "auto",
              backgroundColor: "#acacac",
            }}
          />
        </Grid>
        <Grid item component={"div"} xs={12} md={7} lg={8.7}>
          <SubContainer boxShadow={"2px 4px 4px rgba(0,0,0,0.5)"}>
            <PatientRecordsDescription />
          </SubContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDiary;
