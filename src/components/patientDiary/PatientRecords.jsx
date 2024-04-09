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
import Icon from '@mui/material/Icon';
import './PatientsRecord.css';
const PatientRecords = ({
  dayName,
  description,
  feeling,
  feelingDescription,
  feelingReason,
  userRecords,
  propTest,
  date,
  photos
}) => {

  const [recordDetail, setRecordDetail] = useState({});


  useEffect(()=>{
    propTest(recordDetail);
  },[recordDetail])
  const recordShowDetailHandler=(dayName)=>{
    const detail = userRecords.find((item)=>{
     return item.dayName === dayName
    })
    localStorage.setItem('record-description-detail', JSON.stringify(detail));
    setRecordDetail(detail);
    console.log('Detaiiiiiiil=>', detail)
 
  }

  return (
    <Grid item container component={"div"} className="patients-records">
      <Grid item component={"div"} xs={12} marginBlock={1}>
        <Grid
          item
          component={"div"}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ marginRight: 2 }}>
            <StyledText style={{ fontSize: "0.7rem" }}>{new Date(date.seconds * 1000).toDateString()}</StyledText>
          </Box>
        </Grid>
      </Grid>
      <SubContainer
        boxShadow={"2px 4px 4px rgba(0,0,0,0.5)"}
        onclick={() => recordShowDetailHandler(dayName)}
      >
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
          </Grid>
          <Grid item component={"div"}>
            <SnoozeSharpIcon style={{ color: "#49e600" }} />
          </Grid>
          <Grid item component={"div"}>
            <LocalPizzaSharpIcon style={{ color: "#f03e11" }} />
            {/* <Icon>add_circle</Icon> */}
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
          {
            photos.map((item, index) =>{
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
              )
            })
          }
      </SubContainer>
    </Grid>
  );
};

export default PatientRecords;
