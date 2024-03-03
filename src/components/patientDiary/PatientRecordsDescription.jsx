import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { StyledText } from "../text/Text.styles";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import Image from "../avatar/Image";

const PatientRecordsDescription = () => {

  const questions = ["Description:","Feeling Description:","Did anything make you feel bad?","if you had Drugs or Peels or Alcohol? how did it feel?"]

  return (
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
              Nightmare
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
          md={1.5}
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
          {
            questions.map((item, index)=>{
              return (
                <Grid item container component={"div"} key={index}>
                <StyledText variant="textTitle">{item}</StyledText>
                <Grid item component={"div"} sx={{ paddingLeft: 2 }}>
                  <StyledText component={"p"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                    libero. Natus ipsam perferendis at architecto, culpa quia aliquid
                    enim aut qui tempore, odit possimus laudantium fugiat iste a
                    tenetur veritatis! Eaque accusamus doloremque quos. Quia
                    excepturi, etdeleniti quam!
                  </StyledText>
                </Grid>
              </Grid>
              )
            })
          }
      </Grid>
      <Divider style={{ width: "100%", backgroundColor: "#acacac" }} />
      <Grid
        item
        container
        component={"div"}
        sx={{ backgroundColor: "#b9b9b9" }}
      >
      <Grid item component={'div'} xs={12} sx={{justifyContent:'center'}}>
        <Grid item container component={'div'} xs={12} gap={1} sx={{padding:1,backgroundColor:'#353455', display:'flex', justifyContent:'center',alignItems:'center'}}>
          <Grid item container component={'div'} gap={1}>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
          </Grid>
          <Grid item container component={'div'}  gap={1}>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
              <Grid item component={'div'}>
              <Image src={ "https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"}/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

       <Grid item component={'div'} xs={5} style={{ width: "100%", backgroundColor: "#d6dfff" }}>asd</Grid>
      </Grid>
    </Grid>
  );
};

export default PatientRecordsDescription;
