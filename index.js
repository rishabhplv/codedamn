const express = require("express");
const app = express();
// codedamn uses this port by default
const port = 1337;

//define a get route and return "Hello from server" at  "/" url path

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
