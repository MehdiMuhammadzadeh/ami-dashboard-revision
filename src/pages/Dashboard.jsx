import React from "react";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import { StyledText } from "../components/text/Text.styles";
import Image from "../components/avatar/Image";
const Dashboard = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  return (
    <Grid container sx={{ height: "", backgroundColor: "#353455" }}>
      <Grid container spacing={4} flex={1} height="100%">
        {arr.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <Box bgcolor="#353455" width="100%" height="250px">
                <Grid item container sx={{ backgroundColor: "", padding: 2 }}>
                  <Grid
                    item
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid item sx={{ marginRight: 1 }}>
                      <Image src={'https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no'}/>
                    </Grid>
                    <Grid item>
                      <StyledText variant="textTitle">
                      Mehdi Mohammadzadeh
                      </StyledText>
                      <Grid
                        item
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* <Box component={"div"} style={{ color: "#bbbbbb" }}>
                          Last Entry:
                        </Box> */}
                        <StyledText>Last Entry:</StyledText>
                        <Box component={"div"} style={{ color:"#fff" }}>
                          22/02/2024
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#acacac",
                      width: "100%",
                      margin: "auto",
                    }}
                  />
                  <Grid item xs={7} sm={8} md={9} sx={{ paddingBlock: "0.8rem" }}>
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5px",
                      }}
                    >
                      <Box component={"div"} style={{ color: "#aaaaaa",  }}>
                        Last Session:
                      </Box>
                      <Box component={"div"} style={{ color: "#ffffff" }}>
                        10/02/2024
                      </Box>
                    </Grid>

                    <Grid
                      item
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box component={"div"} style={{ color: "#aaaaaa" }}>
                        Next Session:
                      </Box>
                      <Box component={"div"} style={{ color: "#ffffff" }}>
                        10/03/2024
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#acacac",
                      width: "100%",
                      margin: "auto",
                    }}
                  />
                  <Grid
                    item
                    container
                    component={"div"}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 3,
                    }}
                  >
                    <Grid item component={"div"}>
                      <DeleteIcon style={{ color: "crimson",fontSize:'1.5rem' }} />
                    </Grid>
                    <Grid item component={"div"}>
                      <NewspaperSharpIcon style={{ color: "#28bbff",fontSize:'1.5rem' }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
