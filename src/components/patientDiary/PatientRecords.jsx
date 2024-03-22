import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { StyledText } from "../text/Text.styles";
import SubContainer from "../common/SubContainer";
import Image from "../avatar/Image";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import TagFacesSharpIcon from "@mui/icons-material/TagFacesSharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import RollerSkatingSharpIcon from "@mui/icons-material/RollerSkatingSharp";

const PatientRecords = () => {
  return (
    <Grid item container component={'div'} >
      <Grid item component={"div"} xs={12} marginBlock={1}>
        <Grid
          item
          component={"div"}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ marginRight: 2 }}>
            <StyledText style={{ fontSize: "0.7rem" }}>12/10/2023</StyledText>
          </Box>
          <Box>
            <StyledText style={{ fontSize: "0.7rem" }}>01:18:25</StyledText>
          </Box>
        </Grid>
      </Grid>
      <SubContainer boxShadow={'2px 4px 4px rgba(0,0,0,0.5)'} onclick={()=>console.log('clicked')}>
        <Grid
          item
          container
          component={"div"}
          xs={12}
          sx={{ justifyContent: "space-between", alignItems: "center", cursor:'pointer' }}
        >
          <Grid item component={"div"}>
            <TagFacesSharpIcon style={{color:'#98a86a'}}/>
            <AcUnitSharpIcon />
            <RollerSkatingSharpIcon style={{color:'#f5b869'}}/>
          </Grid>
          <Grid item component={"div"}>
            <SnoozeSharpIcon style={{color:'#49e600'}} />
          </Grid>
          <Grid item component={"div"}>
            <LocalPizzaSharpIcon  style={{color:'#f03e11'}} />
            <SportsRugbySharpIcon  style={{color:'#b95c04'}}/>
          </Grid>
        </Grid>
        <Divider style={{ width: "100%", backgroundColor: "#acacac" }} />
        <Grid item container component={"div"} xs={12} sx={{marginBottom:1}}>
          <Grid item component={"div"} xs={12}>
            <StyledText variant="textTitle">
              This is the Title of the Day
            </StyledText>
          </Grid>
          <Grid item component={"div"} xs={12}>
            <StyledText variant="textTitle">
              This is the name of the mood
            </StyledText>
          </Grid>
        </Grid>
        <Grid item component={"div"} xs={12} sx={{marginBottom:1}}>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatem blanditiis officiis incidunt! Nostrum repellat assumenda
            totam placeat id dolorem.
          </StyledText>
        </Grid>
        <Grid
          item
          component={"div"}
          xs={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src={
              "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"
            }
          />
        </Grid>
      </SubContainer>
    </Grid>
  );
};

export default PatientRecords;
