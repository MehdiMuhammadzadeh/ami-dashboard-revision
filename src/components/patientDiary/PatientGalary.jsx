import { Box, Grid } from "@mui/material";
import React from "react";

const PatientGalary = ({ photos }) => {
  console.log("photos", photos);

  return (
    <Grid item container component={"div"}>
      {photos.map((item) => {
        return (
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
            src={item}
          />
        );
      })}
      <Grid
        item
        component={"div"}
        container
        sx={{
          justifyContent: { xs: "center", md: "flex-start", lg: "flex-start" },
        }}
      >
        <Grid
          item
          container
          component={"div"}
          xs={9}
          md={4}
          lg={3}
          sx={{
            backgroundColor: "#353455",
            textAlign: "center",
            padding: 1,
            borderRadius: 2,
            justifyContent: "center",
          }}
        >
          {photos.map((item) => {
            // <Grid
            //   item
            //   xs={12}
            //   component={"div"}
            //   sx={{
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            //   }}
            // >
            <h1>fsdfsdjlfjsdlf{item}</h1>;
            // <Box
            //   component="img"
            //   sx={{
            //     height: 75,
            //     width: 75,
            //     maxHeight: { xs: 75, md: 167 },
            //     maxWidth: { xs: 350, md: 250 },
            //     marginRight: 1,
            //   }}
            //   alt="The house from the offer."
            //   src={item}
            // />

            // </Grid>;
          })}
          {/* <Grid
            item
            xs={12}
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "",
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
              src={"https://picsum.photos/200"}
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
              src={"https://picsum.photos/200"}
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
              src={"https://picsum.photos/200"}
            />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientGalary;
