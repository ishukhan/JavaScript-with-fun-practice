console.log("chai aur code");

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello ishu");
});

app.listen(port, () => {
  console.log(`Congratualtion you app is running on port ${port}`);
});
