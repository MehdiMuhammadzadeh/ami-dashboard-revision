import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Note from "./Note";
import Container from "../common/Container";
import { StyledText } from "../text/Text.styles";
import { StyledTextarea } from "../textarea/Textarea.styles";
import { StyledButton } from "../button/Button.styles";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../auth/Firebase";

const MyNotes = () => {
  const [isOpen, setIsopen] = useState(false);
  const [myNotes, setMynotes] = useState([]);

  const [note, setNote] = useState("");
  const [medicine, setMedicine] = useState("");
  const [homework, setHomework] = useState("");

  const notesCollectionRef = collection(db, "Notes");
  const userCollectionRef = collection(db, "users");

  const doctorData = JSON.parse(localStorage.getItem("doctor"));
  const userData = JSON.parse(localStorage.getItem("userdata"));
  console.log("Userrrr Data", userData);
  console.log("Doctor Data", doctorData);

    let notes =[];
  const getNotesList = async () => {
    try {
      // getDocs(query(notesCollectionRef, orderBy("updated_at", "desc")))
      const noteData = await getDocs(notesCollectionRef);
      const filteredNotes = noteData.docs.map((doc) => {
        if (
          doc.data().doctorsUsername === doctorData.username &&
          doc.data().patientUsername === userData.username
        ) {
          notes.push({docId:doc.id, ...doc.data()})
        }
      });
      setMynotes(notes);
      console.log(notes, 'nootes')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotesList();
  }, []);

  console.log(myNotes);

  const handleAddNoteBtn = () => {
    setIsopen(!isOpen);
  };

  const handleSendNote = async (event) => {
    // console.log(doctorData.email);
    // console.log("", doctorData.username);

    event.preventDefault();
    console.log(new Date());
    try {
      await addDoc(notesCollectionRef, {
        created_at: new Date(),
        updated_at:'',
        note: note,
        medicine: medicine,
        homework: homework,
        doctorsUsername:doctorData.username,
        doctorId:doctorData.docId,
        patientId:userData.docId,
        patientUsername:userData.username,
      });
      getNotesList();
    } catch (error) {}

    setNote("");
    setMedicine("");
    setHomework("");

    handleAddNoteBtn();
  };

  return (
    <Container sx={{ position: "relative" }}>
      {isOpen ? (
        <form onSubmit={handleSendNote}>
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
      {isOpen ? (
        <></>
      ) : (
        myNotes.map((item, index) => {
          return (
            <Note
              date={item.created_at}
              note={item.note}
              medicine={item.medicine}
              homework={item.homework}
              key={index}
            />
          );
        })
      )}
    </Container>
  );
};

export default MyNotes;
