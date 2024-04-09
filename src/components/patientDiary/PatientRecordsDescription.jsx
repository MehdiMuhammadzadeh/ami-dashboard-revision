import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledText } from "../text/Text.styles";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import Image from "../avatar/Image";
import PatientGalary from "./PatientGalary";
import SubContainer from "../common/SubContainer";

const PatientRecordsDescription = ({ propDesDetail }) => {
  console.log("Props Descriptopn Detail", propDesDetail);
  const [detailRecord, setDetailRecord] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  // const questions = [
  //   "Description:",
  //   "Feeling Description:",
  //   "Did anything make you feel bad?",
  //   "if you had Drugs or Peels or Alcohol? how did it feel?",
  // ];


  console.log('Teeeeeeeeeeest',propDesDetail.description === "");
  return (
    <>
      {propDesDetail?.description == null || undefined ? (
        <>Please Select a Record from the list</>
      ) : (
        <SubContainer boxShadow={"2px 4px 4px rgba(0,0,0,0.5)"}>
          <Grid item container component={"div"} gap={2}>
            <Grid item container component={"div"}>
              <Grid
                item
                container
                xs={12}
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid item sx={{ display: "flex", alignContent: "center" }}>
                  <Grid item component={"div"}>
                    <SentimentDissatisfiedSharpIcon
                      style={{ color: "crimson", fontSize: "1.8rem" }}
                    />
                  </Grid>
                  <StyledText
                    variant="textTitle"
                    style={{ color: "crimson", fontSize: "1.5rem" }}
                  >
                    {detailRecord.drugReason}
                  </StyledText>
                </Grid>
                <Grid item component={"div"}>
                  <SportsRugbySharpIcon style={{ color: "orange" }} />
                  <SnoozeSharpIcon style={{ color: "yellow" }} />
                </Grid>
              </Grid>
              <Grid
                item
                component={"div"}
                xs={6}
                md={2}
                lg={1.5}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <StyledText>02/10/2023</StyledText>
                </Box>
                <Box>
                  <StyledText>10:22:45</StyledText>
                </Box>
              </Grid>
              <Divider style={{ width: "100%", backgroundColor: "#acacac" }} />
            </Grid>

            <Grid item container component={"div"} xs={12} gap={3}>
              {/* {questions.map((item, index) => {
          return ( */}
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">Description:</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.description}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Feeling Description:
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feelingDescription}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Did anything make you feel bad?
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feelingReason}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  if you had Drugs or Peels or Alcohol? how did it feel?
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feelingReason}
                  </StyledText>
                </Grid>
              </Grid>
              {/* );
        })} */}
            </Grid>
            <Divider style={{ width: "100%" }} />
            <PatientGalary photos={propDesDetail.photoIds} />
          </Grid>
        </SubContainer>
      )}
    </>
  );
};

export default PatientRecordsDescription;
