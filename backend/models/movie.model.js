const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieScheme = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true }
});

const Movie = mongoose.model("Movie", movieScheme);

module.exports = Movie;
