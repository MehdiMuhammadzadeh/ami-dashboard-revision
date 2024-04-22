// import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { Grid } from "@mui/material";
import Ticket from "./Ticket";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../auth/Firebase";

const Tickets = () => {
  const [pending, setPending] = useState([]);
  const [answered, setAnswered] = useState([]);

  const ticketsCollectionRef = collection(db, "Tickets");
  const doctor = JSON.parse(localStorage.getItem("doctor"));

  let answeredTickets = [];
  let pendingTickets = [];

  const getTickets = (username) => {
    answeredTickets = [];
    pendingTickets = [];
    getDocs(query(ticketsCollectionRef, orderBy("updated_at", "desc")))
      .then((data) => {
        data.docs.map((doc, index) => {
          if (doc.data().receiverUsername === doctor.username) {
            if (doc.data().status === "pending") {
              pendingTickets.push({ docId: doc.id, ...doc.data() });
            } else {
              answeredTickets.push(doc.data());
            }
          }
        });
        setPending(pendingTickets);
        setAnswered(answeredTickets);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
       getTickets();
    console.log('pending', pending)
  }, []);

  const handelUpdateAnswer = async (id, answer) => {
    console.log("Ticket Answered");
    try {
      await updateDoc(doc(db, "Tickets", id), {
        answer: answer,
        status: "answered",
      });
      getTickets();
    } catch (error) {
      console.log(error);
    }

    sendNotificationToPhone();
  };

  // send this when you answer a ticket - pay attention to the username and doctor
  // message is as i wrote it, don't change it
  function sendNotificationToPhone() {

    console.log("Send Notification Called!");
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const doctorData = JSON.parse(localStorage.getItem("doctor"));

    console.log(doctorData.patientsUsernames, "Doooctor Data notif");
    fetch("http://localhost:3000/api/v1/users/notif", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userData.username,
        title: `Ticket Answered`,
        message: `Your ticket has been answered by ${doctorData.username}`,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <Container>
      {pending.length === 0 && answered.length === 0 ? (
        <>There is Nothing to display</>
      ) : (
        <>
          <Grid item xs={12}>
            {pending.map((note, index) => {
              return (
                <Ticket key={index} updater={handelUpdateAnswer} note={note} />
              );
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
