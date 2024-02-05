const expres = require("express");
const app = expres();

const port = 3000;

app.get("/", (req, res) => {
  res.send("server ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "this is a joke" },
    { id: 2, title: "A joke 2", content: "this is another joke" },
    { id: 3, title: "A joke 3", content: "this is another jokes" },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server at http://127.0.0.1:${port}`);
});
