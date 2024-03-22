import React, { useEffect } from "react";
import Container from "../components/common/Container";
import {auth, createUser} from "../auth/Firebase"

const NotFound = () => {

  const submitHandler = ()=>{
    createUser(auth, 'email@gmail.com','123456789')
  }

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8080/?apiinfo=user")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8082/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: "mehdi",
  //       password: "123456789",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // useEffect(() => {
  //   fetch(
  //     "http://localhost:8080/user/finduser?userId=ae401a14-3536-4179-b2f1-294931f38ecf",
  //     {
  //       mode: "no-cors",
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1Njc4OSJ9.qN5Ihir6Wn8LFLg33d3PhqMtDovDE1-UaqTPeIYakVM",
  //         origin: "",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return <>
  <button onClick={submitHandler}>Create User</button>
  </>;
};

export default NotFound;
