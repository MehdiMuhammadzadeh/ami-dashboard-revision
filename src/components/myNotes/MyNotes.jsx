import React, { useState } from "react";
import { Grid } from "@mui/material";
import Note from "./Note";
import Container from "../common/Container";
import { StyledText } from "../text/Text.styles";
import { StyledTextarea } from "../textarea/Textarea.styles";
import { StyledButton } from "../button/Button.styles";

const MyNotes = () => {
  const notes = [1, 2, 3, 4, 5];
  const [isOpen, setIsopen] = useState(false);

  return (
    <Container sx={{ position: "relative" }}>
      {isOpen ? (
        // here is where the modal code goes

        <Grid
          component={"div"}
          item
          container
          sx={{
            position: "fixed",
            width: { xs: "95%", lg: "60%" },
            backgroundColor: "#faddb7",
            top: { xs: "100px", lg: "150px" },
            left: { xs: "10px", lg: "400px" },
            borderRadius: "10px",
            padding: "1rem",
            zIndex: 1500,
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <Grid
            item
            container
            component={"div"}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // backgroundColor: "red",
              marginBottom: "1rem",
            }}
          >
            <Grid item component={"div"}>
              <StyledText
                variant="textTitle"
                style={{ color: "#000", fontSize: "1.5rem" }}
              >
                Add Note
              </StyledText>
            </Grid>
            <Grid item component={"div"}>
              <StyledText
                variant="textTitle"
                onClick={() => setIsopen(!isOpen)}
                style={{ color: "#ff0000", cursor: "pointer" }}
              >
                close
              </StyledText>
            </Grid>
          </Grid>
          <Grid item container component={"div"}>
            <Grid item xs={12}>
              <StyledTextarea
                placeholder="Note ..."
                style={{ backgroundColor: "#63619e" }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextarea
                placeholder="Medicine ..."
                style={{ backgroundColor: "#63619e" }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextarea
                placeholder="Homework ..."
                style={{ backgroundColor: "#63619e" }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton
                onClick={() => {
                  console.log("Note Created!");
                  setIsopen(false)
                }}
                variant="register"
                buttons="buttons"
              >
                send
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        // here is where modal code ends

        ""
      )}
      <Grid
        item
        component={"div"}
        width={"50px"}
        height={"50px"}
        sx={{
          backgroundColor: "#f5b869",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: 10,
          right: 25,
          boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
        onClick={() => setIsopen(!isOpen)}
      >
        <StyledText
          style={{ fontSize: "1.5rem", color: "#000", cursor: "pointer" }}
        >
          +
        </StyledText>
      </Grid>
      {notes.map((note, index) => {
        return <Note key={index} />;
      })}
    </Container>
  );
};

export default MyNotes;
