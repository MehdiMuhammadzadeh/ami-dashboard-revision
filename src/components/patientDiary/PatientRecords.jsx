import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledText } from "../text/Text.styles";
import SubContainer from "../common/SubContainer";
import Image from "../avatar/Image";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import TagFacesSharpIcon from "@mui/icons-material/TagFacesSharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import RollerSkatingSharpIcon from "@mui/icons-material/RollerSkatingSharp";
import turtle from "../../assets/turtle.png";
import Icon from "@mui/material/Icon";
import "./PatientsRecord.css";
const PatientRecords = ({
  dayName,
  description,
  feeling,
  feelingDescription,
  feelingReason,
  userRecords,
  propTest,
  date,
  photos,
}) => {
  const [recordDetail, setRecordDetail] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  // let feelingIcon = findIcon(item.feeling, feelingIcons)
  // let weatherIcon = findIcon(item.weather, weathers)
  // let badHabitIcon = item.drugIds.length > 0 ? findIcon(item.drugIds[0], badHabits) : null
  // let edibleIcon = item.foodIds.length > 0 ? findIcon(item.foodIds[0], edibles) : null
  // let activityIcon = item.activityIds.length > 0 ? findIcon(item.activityIds[0], activities) : null

  useEffect(() => {
    propTest(recordDetail);
  }, [recordDetail]);
  const recordShowDetailHandler = (dayName) => {
    const detail = userRecords.find((item) => {
      return item.dayName === dayName;
    });
    localStorage.setItem("record-description-detail", JSON.stringify(detail));
    setRecordDetail(detail);
    console.log("Detaiiiiiiil=>", detail);
  };



  return (
    <Grid container style={{alignItems:'start'}} className="patients-records">
      <Grid item xs={12} marginBlock={1} sx={{ display: "flex", justifyContent: "center" }}>
            <StyledText style={{ fontSize: "0.7rem" }}>
              {new Date(date.seconds * 1000).toDateString()}
            </StyledText>
      </Grid>
      <SubContainer enableHover={false} boxShadow={"2px 4px 4px rgba(0,0,0,0.5)"} onclick={() => recordShowDetailHandler(dayName)}>
        <Grid
          item
          container
          component={"div"}
          xs={12}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",

          }}
        >
          <Grid item component={"div"}>
            <TagFacesSharpIcon style={{ color: "#98a86a" }} />
            <AcUnitSharpIcon />
            <RollerSkatingSharpIcon style={{ color: "#f5b869" }} />
            {/* <img  src={turtle} style={{ tintColor:'red'}} alt="fireSpot"/> */}
          </Grid>
          <Grid item component={"div"}>
            <SnoozeSharpIcon style={{ color: "#49e600" }} />
          </Grid>
          <Grid item component={"div"}>
            <LocalPizzaSharpIcon style={{ color: "#f03e11" }} />
            {/* <Icon>add_circle</Icon> */}
            {/* {
              feelingIcon ? <Icon name={feelingIcon.icon} color={feelingIcon.color} /> :null
            } */}
            <SportsRugbySharpIcon style={{ color: "#b95c04" }} />
          </Grid>
        </Grid>
        <Divider style={{ width: "100%", backgroundColor: "#acacac" }} />
        <Grid item container component={"div"} xs={12} sx={{ marginBottom: 1 }}>
          <Grid item component={"div"} xs={12}>
            <StyledText variant="textTitle">{dayName}</StyledText>
          </Grid>
          <Grid item component={"div"} xs={12}>
            <StyledText variant="textTitle">{feelingDescription}</StyledText>
          </Grid>
        </Grid>
        <Grid item component={"div"} xs={12} sx={{ marginBottom: 1 }}>
          <StyledText>{description}</StyledText>
        </Grid>
        {photos.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              component={"div"}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Image src={item} />
            </Grid>
          );
        })}
      </SubContainer>
    </Grid>
  );
};

export default PatientRecords;
