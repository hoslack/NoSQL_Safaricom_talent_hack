const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('artist', artistSchema);
