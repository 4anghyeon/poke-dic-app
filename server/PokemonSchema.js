const mongoose = require("mongoose");
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type1: {
    type: String,
    required: true,
    unique: false,
  },
  type2: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model("pokemon", pokemonSchema);
