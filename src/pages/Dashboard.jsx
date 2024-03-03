import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
const Dashboard = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    // 13,
    // ,
    // 14,
    // 15,
    // 16,
    // 17,
    // 18,
    // 19,
    // 20,
  ];

  return (
    <Grid container sx={{ height: "", backgroundColor: "#353455" }}>
      <Grid container spacing={1} flex={1} height="100%">
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
                      <Box
                        component="img"
                        sx={{
                          height: 75,
                          width: 75,
                          maxHeight: { xs: 75, md: 167 },
                          maxWidth: { xs: 75, md: 250 },
                          borderRadius: "50%",
                          boxShadow: "1px 2px 3px rgba(19, 19, 19, 0.5)",
                        }}
                        alt="user avatar"
                        src="https://lh3.googleusercontent.com/a/ACg8ocLQrFGxSD3dqAXlVef8xr70Tb3dIcXE8iCJuhe0l-rR6Q=s317-c-no"
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", md: "1rem" },
                          fontWeight: { md: "bold" },
                          color: "#fff",
                        }}
                        component={"h1"}
                      >
                        Mehdi Mohammadzadeh
                      </Typography>
                      <Grid
                        item
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box component={"div"} style={{ color: "#bbbbbb" }}>
                          Last Entry:
                        </Box>
                        <Box component={"div"} style={{ color: "#f5b869" }}>
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
                  <Grid item xs={7} sm={8} md={8.5} sx={{ paddingBlock: "0.8rem" }}>
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
