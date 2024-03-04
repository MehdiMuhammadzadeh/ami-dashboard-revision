import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { StyledText } from "../text/Text.styles";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import SportsRugbySharpIcon from "@mui/icons-material/SportsRugbySharp";
import SnoozeSharpIcon from "@mui/icons-material/SnoozeSharp";
import Image from "../avatar/Image";

const PatientRecordsDescription = () => {
  const questions = [
    "Description:",
    "Feeling Description:",
    "Did anything make you feel bad?",
    "if you had Drugs or Peels or Alcohol? how did it feel?",
  ];

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
        {questions.map((item, index) => {
          return (
            <Grid item container component={"div"} key={index}>
              <StyledText variant="textTitle">{item}</StyledText>
              <Grid item component={"div"} sx={{ paddingLeft: 2 }}>
                <StyledText component={"p"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  libero. Natus ipsam perferendis at architecto, culpa quia
                  aliquid enim aut qui tempore, odit possimus laudantium fugiat
                  iste a tenetur veritatis! Eaque accusamus doloremque quos.
                  Quia excepturi, etdeleniti quam!
                </StyledText>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Divider style={{ width: "100%" }} />
      <Grid
        item
        container
        component={"div"}
    
      >
        <Grid item component={"div"} container sx={{justifyContent:{xs:'center',md:'flex-start', lg:'flex-start'}}}>
          <Grid
            item
            container
            component={"div"}
            xs={9}
            md={4}
            lg={3}
            sx={{ backgroundColor: "#353455", textAlign: "center", padding: 1 ,borderRadius:2, justifyContent:'center'}}
          >
            <Grid
              xs={12}
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  marginRight: 1,
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />

              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  marginRight: 1,
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />
              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  // margin:1
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />
            </Grid>
            <Grid
              xs={12}
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: {
                  xs:"center",
                  md:''
                },
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  marginLeft: 1,
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />
              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  marginLeft: 1,
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />
              <Box
                component="img"
                sx={{
                  height: 75,
                  width: 75,
                  maxHeight: { xs: 75, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  margin: 1,
                }}
                alt="The house from the offer."
                src={
                  "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientRecordsDescription;
