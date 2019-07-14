const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gBookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: { type: String, required: true },
});

const GBook = mongoose.model("Book", gBookSchema);

module.exports = GBook;