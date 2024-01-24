const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 1337;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Replace 'your_database_url' with your actual MongoDB connection string
const mongoURI = "mongodb://localhost:27017/your_database_name";

// Connect to MongoDB
mongoose.connect(mongoURI);

// Check if the database connection is successful
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to the database");

  // Start the server
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  });
});
