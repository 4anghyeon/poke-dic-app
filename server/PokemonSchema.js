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
    required: true, // null 여부
    unique: true, // 유니크 여부
  },
  type1: {
    type: String,
    required: true,
    unique: false, // 유니크 여부
  },
  type2: {
    type: String,
    required: false,
    unique: false, // 유니크 여부
  },
});

module.exports = mongoose.model("pokemon", pokemonSchema);
