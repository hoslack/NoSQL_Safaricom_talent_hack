const Music = require('../Music');
const Artist = require('../Artist');

module.exports = (req, res) => {
  Music.find()
    .then(music => {
      res.send(music);
    })
    .catch(err => {
      res.status(500).send('unable to read from the database');
    });
};
