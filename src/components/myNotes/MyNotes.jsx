import React from "react";
import { Grid } from "@mui/material";
import Note from "./Note";

const MyNotes = () => {
  const notes = [1, 2, 3, 4, 5];
  return (
    <Grid
      component={"div"}
      container 
      gap={2}
      sx={{ padding: "10px" }}
    >
      {notes.map((note, index) => {
        return <Note key={index} />;
      })}
    </Grid>
  );
};

export default MyNotes;
