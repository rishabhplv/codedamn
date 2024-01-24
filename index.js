const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000; // codedamn default port
const apiController = require("./apiRoute");

app.get("/", (req, res) => {
  res.send("Hello from server");
});

// create an api here which should be on path ("/api") and forward it to

app.get("/api", apiController);

// Start the server
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
