// import { Grid } from "@mui/material";
import React from "react";
import Container from "../common/Container";
import { StyledText } from "../text/Text.styles";
import { Grid } from "@mui/material";
import SubContainer from "../common/SubContainer";
import Ticket from "./Ticket";
// import { StyledText } from "../text/Text.styles";

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
