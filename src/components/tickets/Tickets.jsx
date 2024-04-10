// import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
// import { StyledText } from "../text/Text.styles";
import { Grid } from "@mui/material";
// import SubContainer from "../common/SubContainer";
import Ticket from "./Ticket";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../../auth/Firebase";
// import { StyledText } from "../text/Text.styles";

const Tickets = () => {
  const [pending, setPending] = useState([]);
  const [answered, setAnswered] = useState([]);

  const ticketsCollectionRef = collection(db, "Tickets");
  const doctor = JSON.parse(localStorage.getItem("doctor"));

  let answeredTickets = [];
  let pendingTickets = [];
  const getTickets = (username) => {
    answeredTickets=[];
    pendingTickets=[];
    getDocs(query(ticketsCollectionRef, orderBy("updated_at", "desc")))
      .then((data) => {
        data.docs.map((doc, index) => {
          if (doc.data().receiverUsername === doctor.username) {
            if (doc.data().status === "pending") {
              pendingTickets.push({docId:doc.id, ...doc.data()});
            } else {
              answeredTickets.push(doc.data());
            }
          }
        });
        setPending(pendingTickets);
        console.log("Pending Dataaaaaaaaaa",pendingTickets);
        setAnswered(answeredTickets);
      })
      // .then(() => {
      //   console.log("User Records", userRecords);
      //   localStorage.setItem('records', JSON.stringify(userRecords));
      //   navigate('/patient-diary')
      // })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() => {

      getTickets();
    }, []);



  const handelUpdateAnswer = async (id, answer) => {
    console.log("ID", id, answer);
 
      try {
        await updateDoc(doc(db, "Tickets", id), {
          answer: answer,
          status:"answered"
        });
        getTickets();
      } catch (error) {
        console.log(error);
      }
  };




  return (
    <Container>
      {pending.length === 0 && answered.length === 0 ? (
        <>There is Nothing to display</>
      ) : (
        <>
          <Grid item xs={12}>
            {pending.map((note, index) => {
              return <Ticket  key={index} updater={handelUpdateAnswer} note={note} />;
            })}
          </Grid>
          <Grid item xs={12}>
            {answered.map((note, index) => {
              return <Ticket key={index} note={note} />;
            })}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Tickets;
