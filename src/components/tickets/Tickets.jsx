// import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
// import { StyledText } from "../text/Text.styles";
import { Grid } from "@mui/material";
// import SubContainer from "../common/SubContainer";
import Ticket from "./Ticket";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../auth/Firebase";
// import { StyledText } from "../text/Text.styles";

const Tickets = () => {
  const [pending, setPending] = useState([]);
  const [answered, setAnswered] = useState([]);

  const ticketsCollectionRef = collection(db, "Tickets");
  const doctor = JSON.parse(localStorage.getItem("doctor"));

  // const getTickets = (username) => {
  let answeredTickets = [];
  let pendingTickets = [];
  useEffect(() => {
    getDocs(query(ticketsCollectionRef, orderBy("updated_at", "desc")))
      .then((data) => {
        data.docs.map((doc, index) => {
          if (doc.data().receiverUsername === doctor.username) {
            if (doc.data().status === "pending") {
              pendingTickets.push(doc.data());
            } else {
              answeredTickets.push(doc.data());
            }
          }
        });
        setPending(pendingTickets);
        setAnswered(answeredTickets);
        console.log("A", pendingTickets);
        console.log("P", answeredTickets);
      })
      // .then(() => {
      //   console.log("User Records", userRecords);
      //   localStorage.setItem('records', JSON.stringify(userRecords));
      //   navigate('/patient-diary')
      // })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // };
  // getTickets();

  return (
    <Container>
      {pending.length === 0 && answered.length === 0 ? (
        <>There is Nothing to display</>
      ) : (
        <>
          <Grid xs={12}>
            {pending.map((note, index) => {
              return <Ticket key={index} note={note} />;
            })}
          </Grid>
          <Grid xs={12}>
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
