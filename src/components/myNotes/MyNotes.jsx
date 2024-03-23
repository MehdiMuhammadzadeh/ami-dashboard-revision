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
  const [myNotes, setMynotes] = useState([]);
  const [note, setNote] = useState("");
  const [medicine, setMedicine] = useState("");
  const [homework, setHomework] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.round(1 + Math.random()),
      note: note,
      medicine: medicine,
      homework: homework,
    };
    // setMynotes([...myNotes, newNote]);
    if (
      newNote.note &&
      newNote.medicine &&
      newNote.homework &&
      !myNotes.includes(newNote.note, newNote.medicine, newNote.homework)
    ) {
      myNotes.push(newNote);
      setMynotes([...myNotes]);
    }
    // setNote("");
    // setMedicine("");
    // setHomework("");

    setIsopen(false);
  };

  const handleAddNoteBtn = () => {
    setIsopen(!isOpen);
  };

  return (
    <Container sx={{ position: "relative" }}>
      {isOpen ? (
        <form onSubmit={HandleSubmit}>
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
                  style={{
                    color: "#ff0000",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                    paddingBlock: "0.5rem",
                    paddingInline: "1.2rem",
                    borderRadius: "5px",
                  }}
                >
                  close
                </StyledText>
              </Grid>
            </Grid>
            <Grid item container component={"div"}>
              <Grid item xs={12}>
                <StyledTextarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note ..."
                  style={{
                    backgroundColor: "#63619e",
                    boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextarea
                  value={medicine}
                  onChange={(e) => setMedicine(e.target.value)}
                  placeholder="Medicine ..."
                  style={{
                    backgroundColor: "#63619e",
                    boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextarea
                  value={homework}
                  onChange={(e) => setHomework(e.target.value)}
                  placeholder="Homework ..."
                  style={{
                    backgroundColor: "#63619e",
                    boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton
                  style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
                  variant="register"
                  buttons="buttons"
                  type="submit"
                >
                  send
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </form>
      ) : (
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
        onClick={handleAddNoteBtn}
      >
        <StyledText
          style={{ fontSize: "1.5rem", color: "#000", cursor: "pointer" }}
        >
          +
        </StyledText>
      </Grid>
      {myNotes.map((index) => {
        return (
          <Note
            note={note}
            medicine={medicine}
            homework={homework}
            key={index}
          />
        );
      })}
    </Container>
  );
};

export default MyNotes;
