const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => res.send("hello world1112"));

app.post("/upsert", (req, res) => {
  console.log(req.body);
});

app.listen(port, () =>
  console.log(`poke dic server listening on port ${port} !`)
);
