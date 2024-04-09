// import { Grid } from "@mui/material";
import React from "react";
import Container from "../common/Container";
import { StyledText } from "../text/Text.styles";
import { Grid } from "@mui/material";
import SubContainer from "../common/SubContainer";
import Ticket from "./Ticket";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../auth/Firebase";
// import { StyledText } from "../text/Text.styles";

const ticketsCollectionRef = collection(db, "Tickets");
console.log('refff', ticketsCollectionRef)
const doctor = JSON.parse(localStorage.getItem('doctor'));
console.log('doctor', doctor)
let answeredTickets = []
let pendingTickets = []
const getTickets = (username) => {
  getDocs(query(ticketsCollectionRef, orderBy('updated_at','desc')))
    .then((data) => {
      data.docs.map((doc, index) => {
        if (doc.data().receiverUsername === doctor.username) {
          if(doc.data().status === 'pending') {
            pendingTickets.push(doc.data())
          }else {
            answeredTickets.push(doc.data())
          }
        console.log('----------',doc.data())
      }
    });
    console.log("A",answeredTickets,"P",pendingTickets )
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
getTickets()

const Tickets = () => {
  const tickets = [1,2,3,4,5];
  return (
    <Container>
      {tickets.map((note, index) => {
        return <Ticket key={index} />;
      })}
    </Container>
  );
};

export default Tickets;
