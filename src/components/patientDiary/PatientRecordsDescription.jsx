import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledText } from "../text/Text.styles";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import Image from "../avatar/Image";
import PatientGalary from "./PatientGalary";
import SubContainer from "../common/SubContainer";
import { COLORS } from "../../styles/colors";

const PatientRecordsDescription = ({ propDesDetail }) => {
  console.log("Props Descriptopn Detail", propDesDetail);
  const [detailRecord, setDetailRecord] = useState({});
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      {propDesDetail?.description == null || undefined ? (
        <Grid item sx={{ textAlign: "center", marginTop: 20 }}>
          <StyledText
            variant="textTitle"
            style={{
              fontSize: "2rem",
              color: `${COLORS.danger}`,
            }}
          >
            Please Select a Record from the Patient Records List
          </StyledText>
        </Grid>
      ) : (
        <SubContainer enableHover boxShadow={"2px 4px 4px rgba(0,0,0,0.5)"}>
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
                <StyledText variant="textTitle">How Do You Feel?</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feeling}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">How is the Weather?</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.weather}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">Name of the Day:</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.dayName}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">Sleep Time:</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.sleepEnd}:{propDesDetail.sleepStart}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">Describe Your Day:</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.description}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Describe Your Feelings:
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feelingDescription}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Describe the reason of the Feeling:
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.feelingReason}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">Todays Photos:</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {/* {propDesDetail.photoIds} */}
                    import photo here later
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Select Your Activities:
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.activityIds}
                  </StyledText>
                </Grid>
              </Grid>
              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Select You had Today:
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.foodIds}
                  </StyledText>
                </Grid>
              </Grid>

              <Grid item container component={"div"}>
                <StyledText variant="textTitle">
                  Did you have Drugs or Alchohol? how did it Feel?
                </StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }} xs={12}>
                  <StyledText component={"p"}>
                    {propDesDetail.drugIds}
                    {propDesDetail.drugReason}
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
