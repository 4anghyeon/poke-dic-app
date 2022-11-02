const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;
const Pokemon = require("./PokemonSchema");

mongoose
  .connect(MONGO_URI, {
    dbName: "pokedic", // 실제로 데이터 저장할 db명
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("hello world1112"));

app.post("/search", async (req, res) => {
  const query = req.body.query;
  console.log(query);
  await Pokemon.find()
    .or([
      { name: { $regex: ".*" + query + ".*" } },
      { type1: { $regex: ".*" + query + ".*" } },
      { type2: { $regex: ".*" + query + ".*" } },
    ])
    .exec((err, data) => {
      if (err) {
        res.send({
          success: false,
          message: "error",
        });
      }
      if (data) {
        res.send({
          data: data,
        });
      }
    });
});

app.post("/upsert", async (req, res) => {
  const pokemon = new Pokemon({
    number: req.body.id, // 유저 스키마의 아이디 (_id)
    name: req.body.name, // 댓글 내용
    type1: req.body.type1,
    type2: req.body.type2 || null,
  });
  await Pokemon.find({ name: pokemon.name }).exec((err, data) => {
    if (data.length === 0) {
      console.log(`${pokemon.name} create`);
      Pokemon.create(pokemon);
    }
  });

  res.send({
    message: "test",
  });
});

app.listen(port, () =>
  console.log(`poke dic server listening on port ${port} !`)
);
