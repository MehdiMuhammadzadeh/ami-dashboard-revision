import React from "react";
import SubContainer from "../common/SubContainer";
import { Divider, Grid } from "@mui/material";
import { StyledText } from "../text/Text.styles";
import Image from "../avatar/Image";
import { StyledTextarea } from "../textarea/Textarea.styles";
import SendSharpIcon from "@mui/icons-material/SendSharp";
const Ticket = () => {
  return (
    <Grid item xs={12} container>
      <Grid item xs={12} sx={{ marginBottom: 1 }}>
        <StyledText>02/10/2023</StyledText>
      </Grid>
      <SubContainer xs={12}>
        <Grid
          item
          container
          component={"div"}
          xs={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item sx={{ paddingRight: 2 }}>
            <Image
              src={
                "https://picsum.photos/200"
              }
            />
          </Grid>
          <Grid item>
            <StyledText variant="textTitle">John Dou</StyledText>
          </Grid>
          <Divider
            style={{
              backgroundColor: "#acacac",
              width: "100%",
              margin: "auto",
            }}
          />
        </Grid>
        <Grid item container sx={{ marginTop: 1 }}>
          <Grid item>
            <StyledText variant="textTitle">Question:</StyledText>
          </Grid>
          <Grid item xs={12} sx={{ paddingLeft: 2 }}>
            <StyledText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores illo minima sed, vitae alias ad impedit necessitatibus
              officia nemo aperiam, laboriosam laborum vel atque corporis
              tenetur magnam pariatur qui exercitationem deserunt sequi ullam
              repudiandae. Maxime laboriosam dolor commodi dolores ratione vero
              iure quae magni quasi necessitatibus harum saepe, ipsam
              consequuntur, reprehenderit ullam sequi ab fuga porro numquam.
              Iure quos quod odit deleniti impedit quasi ducimus expedita hic
              exercitationem facere itaque fugiat dolore, laudantium nobis culpa
              totam iste magnam, nulla temporibus dolorum eius quisquam
              voluptatem! Dolores, non delectus! Temporibus similique, libero
              animi unde cupiditate, quae, at quidem voluptatibus quas veritatis
              voluptas!
            </StyledText>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: 3 }}>
          <Grid item xs={12} sx={{ marginBottom: 1 }}>
            <StyledText variant="textTitle">Answer: </StyledText>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <StyledTextarea placeholder="Type some answers" />
            <SendSharpIcon
              onClick={() => {
                console.log("hi");
              }}
              sx={{
                position: "absolute",
                top: 60,
                right: 20,
                color: "#f5b869",
                cursor: "pointer",
                "&:hover": {
                  color: "#f19720",
                  transition: "all 1s ease",
                  transform: 'scale(1.1)'

                }
              }}
            />
          </Grid>
        </Grid>
      </SubContainer>
    </Grid>
  );
};

export default Ticket;
