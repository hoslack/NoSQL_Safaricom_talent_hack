const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const app = express();
mongoose.connect('mongodb://hoslack:amondi99@ds263137.mlab.com:63137/hh_bnb_dev'); //This is mongodb url hosted by mlab

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
  app.listen(port, () => {
    console.log(`App listening on http://${host}:${port}`);
  });
});

const view_music = require('./crud/view_music');
const create_music = require('./crud/create_music');
const search_music = require('./crud/search_music');
const update_music = require('./crud/update_music');
const delete_music = require('./crud/delete_music');

app.get('/view', view_music);
app.get('/create', create_music);
app.get('/search', search_music);
app.get('/update', update_music);
app.get('/delete', delete_music);
