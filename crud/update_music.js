const Music = require('../Music');

module.exports = (req, res) => {
  const new_song = { title: 'Hero', artist: 'Mariah Carrey', album: 'red' };

  Music.findByIdAndUpdate('5a9a6bb2f005f53debf2463e', new_song, { new: true })
    .then(song => {
      res.send(song);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
