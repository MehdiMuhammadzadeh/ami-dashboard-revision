import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import NewspaperSharpIcon from "@mui/icons-material/NewspaperSharp";
import { StyledText } from "../components/text/Text.styles";
import Image from "../components/avatar/Image";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { db } from "../auth/Firebase";
import SimpleDateTime  from 'react-simple-timestamp-to-date';  

const Dashboard = () => {


  const [users, setUsers] = useState([]);
  const [myPatients, setMyPatients] = useState([]);


  const usersCollectionRef = collection(db, "Users");

  const getMyPatients = async()=>{
    const data = await getDocs(usersCollectionRef)
      // const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //   const cities = [];
      //   querySnapshot.forEach((doc) => {
      //       cities.push(doc.data().name);
      //   });
      //   console.log("Current cities in CA: ", cities.join(", "));
      // });
  }
//   onSnapshot(colRef, (snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         setTestData((prev) => [...prev, doc.data()])
//         // console.log("onsnapshot", doc.data());
//     })
// })

  useEffect(() => {
    let doctor = JSON.parse(localStorage.getItem("doctor"));
    console.log(doctor)
    // let patients = doctor.patientsUsernames;
    // const x = patients.filter((item)=>{
    //   console.log(item === 'ali@gmail.com')
    // })
    // console.log(doctor)
    // let myPatients = [];
    getDocs(usersCollectionRef).then((data) => {
      data.docs.map((doc) => {
        if (patients.includes(doc.data().username)) {
          myPatients.push(doc.data());
        }
      });
    }).then(()=>{

      console.log('Myyyyyyyyyy Patients',myPatients);
      myPatients.forEach((item)=>{
        console.log(item.created_at.seconds)
      })
      setMyPatients(myPatients);
    })
  }, []);

  return (
    <Grid container sx={{ height: "", backgroundColor: "#353455" }}>
      <Grid container spacing={4} flex={1} height="100%">
        {myPatients.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={3}>
              <Box
                bgcolor="#353455"
                width="100%"
                height="250px"
                borderRadius={2}
                sx={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.5)" }}
              >
                <Grid item container sx={{ padding: 2 }}>
                  <Grid
                    item
                    container
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid item sx={{ marginRight: 1 }}>
                      <Image src={"https://picsum.photos/200"} />
                    </Grid>
                    <Grid item>
                      <StyledText variant="textTitle">{item.email}</StyledText>
                      <Grid
                        item
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* <Box component={"div"} style={{ color: "#bbbbbb" }}>
                          Last Entry:
                        </Box> */}
                        <StyledText>Last Entry:</StyledText>
                        <Box component={"div"} style={{ color: "#fff" }}>
                          22/02/2024
                          {/* <SimpleDateTime dateFormat="DMY" dateSeparator="/"  timeSeparator=":">{item}</SimpleDateTime> */}

                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#acacac",
                      width: "100%",
                      margin: "auto",
                    }}
                  />
                  <Grid
                    item
                    xs={7}
                    sm={8}
                    md={9}
                    sx={{ paddingBlock: "0.8rem" }}
                  >
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5px",
                      }}
                    >
                      <Box component={"div"} style={{ color: "#aaaaaa" }}>
                        Last Session:
                      </Box>
                      <Box component={"div"} style={{ color: "#ffffff" }}>
                        10/02/2024
                      </Box>
                    </Grid>

                    <Grid
                      item
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box component={"div"} style={{ color: "#aaaaaa" }}>
                        Next Session:
                      </Box>
                      <Box component={"div"} style={{ color: "#ffffff" }}>
                        10/03/2024
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#acacac",
                      width: "100%",
                      margin: "auto",
                    }}
                  />
                  <Grid
                    item
                    container
                    component={"div"}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 3,
                    }}
                  >
                    <Grid item component={"div"}>
                      <DeleteIcon
                        sx={{
                          color: "crimson",
                          fontSize: "1.5rem",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#ff002f",
                            transition: "all 1s ease",
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item component={"div"}>
                      <NewspaperSharpIcon
                        sx={{
                          color: "#28bbff",
                          fontSize: "1.5rem",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#0069f3",
                            transition: "all 1s ease",
                            transform: "scale(1.1)",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
