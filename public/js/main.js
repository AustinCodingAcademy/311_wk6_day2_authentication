const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

function signup() {
  console.log("Submit button clicked!")
  const username = document.getElementById('userEntry').value
  const password = document.getElementById('passEntry').value
  axios.post('http://localhost:4001/auth/signup', {
    username: username,
    password: password
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
}

function login() {
  console.log("Submit button clicked!")
  const username = document.getElementById('userSignin').value
  const password = document.getElementById('passSignin').value
  axios.post('http://localhost:4001/auth/login', {
    username: username,
    password: password
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
}