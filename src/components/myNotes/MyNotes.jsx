import React from "react";
import { Grid } from "@mui/material";
import Note from "./Note";
import Container from "../common/Container";


const MyNotes = () => {
  const notes = [1, 2, 3, 4, 5];
  return (
    <Container>
      {notes.map((note, index) => {
        return <Note key={index} />;
      })}
    </Container>
  );
};

export default MyNotes;

