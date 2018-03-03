const mongoose = require('mongoose');

const { Schema } = mongoose;

const musicSchema = new Schema({
  title: String,
  description: String,
  artist: String,
  album: String,
});

module.exports = mongoose.model('music', musicSchema);
