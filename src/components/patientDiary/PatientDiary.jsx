import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { Divider, Grid } from "@mui/material";
import SubContainer from "../common/SubContainer";
import { StyledText } from "../text/Text.styles";
import PatientRecords from "./PatientRecords";
import PatientRecordsDescription from "./PatientRecordsDescription";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../auth/Firebase";
import { COLORS } from "../../styles/colors";
const PatientDiary = () => {
  const [records, setRecords] = useState([]);
  const patientRecordsRef = collection(db, "records");
  const userRecords = JSON.parse(localStorage.getItem("records"));
  const [singleRecord, setSingleRecord] = useState({});
  // const getPatientsRecords = async () => {
  //   const recordsData = await getDocs(patientRecordsRef);

  //   const filteredRecordsData = recordsData.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));

  //   setRecords(filteredRecordsData);
  //   console.log("Filterede Recoreds",filteredRecordsData);
  // };
  // getPatientsRecords();

  const propTestHandler = (event) => {
    setSingleRecord(event);
    console.log("Event", event);
  };

  return (
    <Container height={"90vh"}>
      <Grid component={"div"} item container sx={{display: "flex"}} gap={2}>
        <Grid
          item
          container
          component={"div"}
          xs={12}
          md={3}
          height={"83vh !important"}
        >
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

          <Grid
            item
            gap={1}
            height={"83vh !important"}
            sx={{
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
                backgroundColor: "#000",

              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: COLORS.darkBorder,
                borderRadius: "4px",

              },
            }}
          >
            {userRecords.map((record, index) => {
              return (
                <PatientRecords
                  key={index}
                  record={record}
                  userRecords={userRecords}
                  dayName={record.dayName}
                  description={record.description}
                  feeling={record.feeling}
                  feelingDescription={record.feelingDescription}
                  feelingReason={record.feelingReason}
                  propTest={propTestHandler}
                  date={record.date}
                  photos={record.photoIds}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid
          item
          component={"div"}
          xs={12}
          md={7}
          lg={8.8}
          height={"87.5vh"}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
              backgroundColor: "#000",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: COLORS.darkBorder,
              borderRadius: "4px",
            },
          }}
        >
          <PatientRecordsDescription propDesDetail={singleRecord} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDiary;
