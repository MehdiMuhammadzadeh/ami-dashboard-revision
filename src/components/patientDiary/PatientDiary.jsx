import React from "react";
import Container from "../common/Container";
import { Divider, Grid } from "@mui/material";
import SubContainer from "../common/SubContainer";
import { StyledText } from "../text/Text.styles";
import PatientRecords from "./PatientRecords";
import PatientRecordsDescription from "./PatientRecordsDescription";

const PatientDiary = () => {
  const patientRecords = [1, 2, 3, 4, 5];

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
              {patientRecords.map((record, index) => {
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
        <Grid item component={"div"} xs={12} md={8.7}>
          <SubContainer>
            <PatientRecordsDescription />
          </SubContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientDiary;
