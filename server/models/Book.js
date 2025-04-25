const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  author: String,
  publishedOn: Date,
  genre: String
});

module.exports = mongoose.model('Book', bookSchema);
