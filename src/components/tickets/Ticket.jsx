import React, { useEffect } from "react";
import SubContainer from "../common/SubContainer";
import { Divider, Grid } from "@mui/material";
import { StyledText } from "../text/Text.styles";
import Image from "../avatar/Image";
import { StyledTextarea } from "../textarea/Textarea.styles";
import SendSharpIcon from "@mui/icons-material/SendSharp";
const Ticket = ({ note }) => {
  console.log("Note", note);

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
            <Image src={"https://picsum.photos/200"} />
          </Grid>
          <Grid item>
            <StyledText variant="textTitle">{note.doctorsName}</StyledText>
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
            <StyledText>{note.description}</StyledText>
          </Grid>
        </Grid>
        {note.status === "pending" ? (
          <Grid item xs={12} sx={{ position: "relative" }}>
            <StyledTextarea
              disabled={note.status === "pending" ? false : true}
              placeholder="Type some answers"
            />
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
                  transform: "scale(1.1)",
                },
              }}
            />
          </Grid>
        ) : (
          <></>
        )}
      </SubContainer>
    </Grid>
  );
};

export default Ticket;
